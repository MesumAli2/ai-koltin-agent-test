import androidx.compose.runtime.*
import kotlinx.browser.document
import kotlinx.browser.localStorage
import kotlinx.browser.window
import kotlinx.coroutines.*
import org.jetbrains.compose.web.attributes.*
import org.jetbrains.compose.web.dom.*
import org.jetbrains.compose.web.renderComposable
import kotlin.js.JSON
import kotlin.js.Promise

// The agent runs entirely in the browser: the task pane calls Gemini directly
// with the user's own API key, so there is no backend to host. The key is kept
// only in this browser (localStorage) and sent straight to Google.
private const val GEMINI_MODEL = "gemini-3.1-flash-lite"
private const val KEY_STORAGE = "googleApiKey"

private val INSTRUCTION = """
You are an Excel spreadsheet assistant. You work with the user across multiple
turns: they describe a sheet, you build it, and then they may ask follow-up
questions to refine, extend, or fix what you already produced.

You respond with a structured JSON object containing two fields:
- "explanation": a short, friendly summary of what you did this turn.
- "actions": a list of cell writes, each with a "cell" and a "value".

Rules:
- "cell" must be a valid A1-style Excel cell reference (e.g. "A1", "B2", "C10").
- "value" is either literal text/number as a string, or an Excel formula that
  begins with "=" (e.g. "=SUM(B2:B10)").
- Build complete, sensible sheets: include headers, sample data rows, and
  totals/formulas where appropriate.
- Use relative references inside formulas that match where you place them.
- FOLLOW-UPS: You can see the full conversation history, including the cells you
  already wrote. When the user asks for a change, return ONLY the cells that need
  to be added or overwritten to satisfy the new request — do not re-emit
  unchanged cells. To clear a cell, set its "value" to an empty string "".
- If the user only asks a question and no cells need to change, return an empty
  "actions" list and put the answer in "explanation".
- Always validate your own output: make sure formulas reference the right ranges
  and account for edge cases (empty cells, division by zero, mixed data types).
- IMPORTANT: Always respond with ONLY a valid JSON object — no markdown, no extra
  text, just the JSON:
  { "explanation": "...", "actions": [ { "cell": "A1", "value": "..." } ] }
""".trimIndent()

external val Office: dynamic
external val Excel: dynamic

// ---- Data model ------------------------------------------------------------

enum class MsgKind { User, Assistant, Error, Thinking }

data class ChatMessage(
    val id: Int,
    val text: String,
    val kind: MsgKind,
    val cellCount: Int = 0,
)

// One turn of Gemini conversation history: role is "user" or "model".
private data class Turn(val role: String, val text: String)

private data class SuggestionItem(val emoji: String, val label: String, val prompt: String)

private val SUGGESTIONS = listOf(
    SuggestionItem("💰", "Monthly budget tracker", "Build a monthly budget tracker with categories, amounts, and a total."),
    SuggestionItem("📈", "Sales pipeline", "Create a sales pipeline with deal name, stage, value, and close date."),
    SuggestionItem("✅", "Habit tracker", "Make a weekly habit tracker with checkboxes for each day."),
)

// ---- Entry point -----------------------------------------------------------

fun main() {
    // Wait for Office.js to initialise, then render regardless of host so the
    // UI is visible in a plain browser too. Excel-specific calls (applyActions)
    // are already guarded by try/catch and will show an error bubble if invoked
    // outside a real Excel session.
    Office.onReady { renderComposable(rootElementId = "root") { App() } }
}

// ---- Gemini call -----------------------------------------------------------

private fun geminiPart(text: String): dynamic {
    val part = js("{}")
    part.text = text
    val parts = js("[]")
    parts.push(part)
    return parts
}

private fun geminiTurn(role: String, text: String): dynamic {
    val turn = js("{}")
    turn.role = role
    turn.parts = geminiPart(text)
    return turn
}

// Strip a ```json ... ``` code fence if the model adds one despite instructions.
private fun stripFences(raw: String): String {
    var t = raw.trim()
    if (t.startsWith("```")) {
        val nl = t.indexOf('\n')
        if (nl >= 0) t = t.substring(nl + 1)
        if (t.endsWith("```")) t = t.substring(0, t.length - 3)
    }
    return t.trim()
}

/** Calls Gemini with the system prompt + history + new prompt. Returns the raw model text. */
private suspend fun callGemini(apiKey: String, history: List<Turn>, prompt: String): String {
    val contents = js("[]")
    history.forEach { contents.push(geminiTurn(it.role, it.text)) }
    contents.push(geminiTurn("user", prompt))

    val body = js("{}")
    body.systemInstruction = js("{}")
    body.systemInstruction.parts = geminiPart(INSTRUCTION)
    body.contents = contents
    body.generationConfig = js("{}")
    body.generationConfig.responseMimeType = "application/json"

    val opts = js("{}")
    opts.method = "POST"
    opts.headers = js("({'Content-Type':'application/json'})")
    opts.body = JSON.stringify(body)

    val enc = window.asDynamic().encodeURIComponent(apiKey) as String
    val url = "https://generativelanguage.googleapis.com/v1beta/models/$GEMINI_MODEL:generateContent?key=$enc"

    val response = window.asDynamic().fetch(url, opts).unsafeCast<Promise<dynamic>>().await()

    if (response.ok != true) {
        val err = response.json().unsafeCast<Promise<dynamic>>().await()
        val msg = err.error?.message as? String
        throw Exception(
            msg?.takeIf { it.isNotEmpty() }
                ?: "Request failed (${response.status}). Check your API key."
        )
    }

    val data = response.json().unsafeCast<Promise<dynamic>>().await()
    val candidates = data.candidates
    if (!(js("Array.isArray(candidates)") as Boolean) || (candidates.length as Int) == 0)
        throw Exception("Gemini returned no response.")
    return (candidates[0].content.parts[0].text as? String) ?: ""
}

// ---- Root composable -------------------------------------------------------

@Composable
fun App() {
    var apiKey    by remember { mutableStateOf(localStorage.getItem(KEY_STORAGE) ?: "") }
    var editingKey by remember { mutableStateOf(apiKey.isEmpty()) }
    var history   by remember { mutableStateOf(listOf<Turn>()) }
    var messages  by remember { mutableStateOf(listOf<ChatMessage>()) }
    var input     by remember { mutableStateOf("") }
    var busy      by remember { mutableStateOf(false) }
    var nextId    by remember { mutableStateOf(0) }
    val scope = rememberCoroutineScope()

    fun addMsg(text: String, kind: MsgKind, cellCount: Int = 0): Int {
        val id = nextId++
        messages = messages + ChatMessage(id, text, kind, cellCount)
        return id
    }
    fun removeMsg(id: Int) { messages = messages.filter { it.id != id } }

    LaunchedEffect(messages.size) {
        document.getElementById("thread")?.let { it.scrollTop = it.scrollHeight.toDouble() }
    }

    fun sendTurn() {
        val prompt = input.trim()
        if (prompt.isEmpty() || busy) return
        if (apiKey.isEmpty()) { editingKey = true; return }
        busy = true
        input = ""
        addMsg(prompt, MsgKind.User)
        val thinkingId = addMsg("", MsgKind.Thinking)

        scope.launch {
            try {
                val rawText = callGemini(apiKey, history, prompt)
                val parsed = JSON.parse<dynamic>(stripFences(rawText))

                val arr = parsed.actions
                val actions: List<dynamic> = if (js("Array.isArray(arr)") as Boolean)
                    (0 until (arr.length as Int)).map { i -> arr[i] }
                else emptyList()
                val explanation = (parsed.explanation as? String)?.takeIf { it.isNotEmpty() } ?: "Done."

                if (actions.isNotEmpty()) applyActions(actions)
                removeMsg(thinkingId)
                addMsg(explanation, MsgKind.Assistant, actions.size)
                // Record the turn (raw model text) so follow-ups see prior cells.
                history = history + Turn("user", prompt) + Turn("model", rawText)
            } catch (e: Throwable) {
                removeMsg(thinkingId)
                addMsg(e.message ?: "Something went wrong.", MsgKind.Error)
            } finally {
                busy = false
            }
        }
    }

    Div({ classes("app") }) {
        Banner(
            hasKey = apiKey.isNotEmpty(),
            onNewChat = { messages = emptyList(); history = emptyList() },
            onEditKey = { editingKey = true },
        )
        if (editingKey) {
            ApiKeyPanel(
                initial = apiKey,
                canCancel = apiKey.isNotEmpty(),
                onSave = { k ->
                    apiKey = k
                    localStorage.setItem(KEY_STORAGE, k)
                    editingKey = false
                },
                onCancel = { editingKey = false },
            )
        } else {
            Thread(messages, busy, onSuggestion = { s -> input = s.prompt; sendTurn() })
            Composer(input, busy,
                onInputChange = { input = it },
                onSend = { sendTurn() }
            )
        }
    }
}

// ---- Components ------------------------------------------------------------

@Composable
private fun Banner(hasKey: Boolean, onNewChat: () -> Unit, onEditKey: () -> Unit) {
    Header({ classes("banner") }) {
        Div({ classes("banner-text") }) {
            H1 { Text("M 🤖") }
            P { Text("Build a sheet, then keep refining it.") }
        }
        Button({
            classes("new-chat-btn")
            onClick { onEditKey() }
        }) { Text(if (hasKey) "Key" else "Add key") }
        Button({
            classes("new-chat-btn")
            onClick { onNewChat() }
        }) { Text("New") }
    }
}

@Composable
private fun ApiKeyPanel(
    initial: String,
    canCancel: Boolean,
    onSave: (String) -> Unit,
    onCancel: () -> Unit,
) {
    var draft by remember { mutableStateOf(initial) }
    Div({ classes("thread", "mesum-scroll") }) {
        Div({ classes("empty-state") }) {
            Div({ classes("empty-title") }) { Text("Add your Google API key") }
            Div({ classes("empty-sub") }) {
                Text("Your key is stored only in this browser and used to call Gemini directly. ")
                A(href = "https://aistudio.google.com/apikey", attrs = { target(ATarget.Blank) }) {
                    Text("Get a free key")
                }
            }
            Input(InputType.Password) {
                classes("key-input")
                value(draft)
                onInput { draft = it.value }
                attr("placeholder", "Paste your API key (AIza…)")
            }
            Div({ classes("composer-row") }) {
                if (canCancel) {
                    Button({ classes("suggestion"); onClick { onCancel() } }) { Text("Cancel") }
                }
                Button({
                    classes("send-btn")
                    if (draft.trim().isEmpty()) attr("disabled", "disabled")
                    onClick { onSave(draft.trim()) }
                }) { Text("Save key") }
            }
        }
    }
}

@Composable
private fun Thread(
    messages: List<ChatMessage>,
    busy: Boolean,
    onSuggestion: (SuggestionItem) -> Unit,
) {
    Div({ classes("thread", "mesum-scroll"); id("thread") }) {
        if (messages.isEmpty()) {
            EmptyState(busy, onSuggestion)
        } else {
            messages.forEach { MessageBubble(it) }
        }
    }
}

@Composable
private fun MessageBubble(msg: ChatMessage) {
    when (msg.kind) {
        MsgKind.User -> Div({ classes("msg", "user") }) { Text(msg.text) }
        MsgKind.Assistant -> Div({ classes("msg", "assistant") }) {
            Text(msg.text)
            if (msg.cellCount > 0) {
                Div({ classes("meta") }) {
                    Text("Wrote ${msg.cellCount} cell${if (msg.cellCount == 1) "" else "s"} to the sheet.")
                }
            }
        }
        MsgKind.Error -> Div({ classes("msg", "error") }) { Text(msg.text) }
        MsgKind.Thinking -> Div({ classes("thinking-dots") }) {
            Span {}; Span {}; Span {}
        }
    }
}

@Composable
private fun EmptyState(busy: Boolean, onSuggestion: (SuggestionItem) -> Unit) {
    Div({ classes("empty-state"); id("empty-state") }) {
        Div({ classes("empty-title") }) { Text("Describe the sheet you want.") }
        Div({ classes("empty-sub") }) {
            Text("Then ask follow-ups like \"add a totals row\" or \"make column B a percentage\" — I'll remember the context.")
        }
        Div({ classes("suggestions") }) {
            SUGGESTIONS.forEach { s ->
                Button({
                    classes("suggestion")
                    if (busy) attr("disabled", "disabled")
                    onClick { onSuggestion(s) }
                }) {
                    Span({ classes("sug-icon") }) { Text(s.emoji) }
                    Span({ classes("sug-label") }) { Text(s.label) }
                }
            }
        }
    }
}

@Composable
private fun Composer(
    input: String,
    busy: Boolean,
    onInputChange: (String) -> Unit,
    onSend: () -> Unit,
) {
    Div({ classes("composer") }) {
        Div({ classes("composer-box") }) {
            TextArea(
                value = input,
                attrs = {
                    id("prompt")
                    attr("rows", "2")
                    attr("placeholder", "e.g. Build a monthly budget tracker with categories, amounts, and a total.")
                    onInput { evt -> onInputChange(evt.value) }
                    onKeyDown { evt ->
                        if (evt.key == "Enter" && !evt.shiftKey) {
                            evt.preventDefault()
                            onSend()
                        }
                    }
                }
            )
            Div({ classes("composer-row") }) {
                Span({ classes("hint") }) { Text("Enter to send · Shift+Enter for newline") }
                Button({
                    classes("send-btn")
                    id("send")
                    if (busy) attr("disabled", "disabled")
                    onClick { onSend() }
                }) { Text("Send") }
            }
        }
    }
}

// ---- Excel interop ---------------------------------------------------------

private suspend fun applyActions(actions: List<dynamic>) {
    Excel.run { context: dynamic ->
        val sheet = context.workbook.worksheets.getActiveWorksheet()
        actions.forEach { action ->
            val cell = action.cell as? String ?: return@forEach
            val range = sheet.getRange(cell)
            val value = action.value
            if (value is String && value.trim().startsWith("="))
                range.formulas = arrayOf(arrayOf(value))
            else
                range.values = arrayOf(arrayOf(value))
        }
        sheet.getUsedRange().format.autofitColumns()
        context.sync()
    }.unsafeCast<Promise<Unit>>().await()
}
