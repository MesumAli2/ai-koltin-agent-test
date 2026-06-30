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
private const val HISTORY_STORAGE = "chatHistory"
private const val MESSAGES_STORAGE = "chatMessages"

private val INSTRUCTION = """
You are an Excel spreadsheet assistant running inside Excel via Office.js. You
work with the user across multiple turns: they describe a sheet, you build it
live in the active worksheet, and then they refine, extend, or fix it.

You respond with ONLY a JSON object: { "explanation": "...", "actions": [ ... ] }.
- "explanation": a short, friendly summary of what you did this turn.
- "actions": an ordered list. Each action has a "type":

1. "cell" (the default when "type" is omitted) — write a single cell.
   { "type": "cell", "cell": "B2", "value": "1200", "numberFormat": "#,##0" }
   - "cell": a valid A1 reference (e.g. "A1", "B2", "C10").
   - "value": literal text/number as a string, OR a live formula beginning with
     "=" (e.g. "=SUM(B2:B13)", "=AVERAGE(B2:B13)", "=B2/${'$'}B${'$'}14"). Prefer
     live formulas over hard-coded results so the sheet recalculates itself.
   - "numberFormat" (optional): an Excel number-format code for that cell.
   - To clear a cell, set "value" to an empty string "".

2. "format" — style a range (headers, zebra striping, number formats).
   { "type": "format", "range": "A1:D1", "fill": "#2C4A5E",
     "fontColor": "#FFFFFF", "bold": true }
   { "type": "format", "range": "B2:B13", "numberFormat": "#,##0" }
   - "range": an A1 range. "fill" / "fontColor": hex colors. "bold": boolean.
   - "numberFormat": applies to every cell in the range.

3. "chart" — embed a native, reactive chart bound to live cells. It redraws
   automatically whenever the underlying data changes.
   { "type": "chart", "chartType": "column", "dataRange": "A1:B13",
     "title": "Revenue by Month", "position": { "from": "F2", "to": "M20" } }
   - "chartType": "column" (default), "bar", "line", or "pie".
   - "dataRange": the range to plot, including the header row/column.
   - "title" and "position" are optional.

DESIGN DEFAULTS — every layout you build must read like a clean executive report:
- THEME "Steel Blue": fill the header row #2C4A5E with bold #FFFFFF text. Add
  zebra striping by filling alternating data rows #F4F7F9 (leave the rest white).
- NUMBER FORMATS: currency and counts use "#,##0"; percentages use "0.0%".
  Always attach number formats to numeric columns.
- FORMULAS: use =SUM, =AVERAGE, etc. for totals and rollups — never paste a
  computed constant where a formula belongs.
- CHARTS / TRACKERS: when the user asks for a chart, dashboard, or tracker, add
  a "chart" action plotting the key series.
- Column widths are auto-fitted for you after every turn — you needn't set them.

Rules:
- Build complete, sensible sheets: headers, sample data rows, totals/formulas.
- Use relative references inside formulas that match where you place them.
- FOLLOW-UPS: you can see the full conversation history, including the cells and
  formats you already produced. Return ONLY the actions needed for the new
  request — do not re-emit unchanged cells.
- If the user only asks a question and nothing needs to change, return an empty
  "actions" list and put the answer in "explanation".
- Always validate your output: correct ranges, and handle edge cases (empty
  cells, division by zero, mixed data types).
- IMPORTANT: respond with ONLY the JSON object — no markdown, no extra text.
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

// ---- Session persistence ---------------------------------------------------
// The task pane's iframe can reload at any moment (re-activating the add-in,
// Excel regaining focus, navigation). Compose state is wiped on reload, which is
// why the chat "goes blank" and the model loses context. We mirror the
// conversation to localStorage and restore it on load so the current chat — and
// the cells/charts it produced — survive reloads. "New" clears it.

private fun saveHistory(history: List<Turn>) {
    val arr = js("[]")
    history.forEach { t ->
        val o = js("{}")
        o.role = t.role
        o.text = t.text
        arr.push(o)
    }
    localStorage.setItem(HISTORY_STORAGE, JSON.stringify(arr))
}

private fun loadHistory(): List<Turn> {
    val raw = localStorage.getItem(HISTORY_STORAGE) ?: return emptyList()
    return try {
        val arr = JSON.parse<dynamic>(raw)
        if (js("Array.isArray(arr)") as Boolean)
            (0 until (arr.length as Int)).map { i -> Turn(arr[i].role as String, arr[i].text as String) }
        else emptyList()
    } catch (e: Throwable) {
        emptyList()
    }
}

// Transient "Thinking" bubbles are never persisted — they only exist mid-flight.
private fun saveMessages(messages: List<ChatMessage>) {
    val arr = js("[]")
    messages.filter { it.kind != MsgKind.Thinking }.forEach { m ->
        val o = js("{}")
        o.id = m.id
        o.text = m.text
        o.kind = m.kind.name
        o.cellCount = m.cellCount
        arr.push(o)
    }
    localStorage.setItem(MESSAGES_STORAGE, JSON.stringify(arr))
}

private fun loadMessages(): List<ChatMessage> {
    val raw = localStorage.getItem(MESSAGES_STORAGE) ?: return emptyList()
    return try {
        val arr = JSON.parse<dynamic>(raw)
        if (js("Array.isArray(arr)") as Boolean)
            (0 until (arr.length as Int)).map { i ->
                val o = arr[i]
                ChatMessage(
                    id = (o.id as Number).toInt(),
                    text = o.text as String,
                    kind = MsgKind.valueOf(o.kind as String),
                    cellCount = (o.cellCount as? Number)?.toInt() ?: 0,
                )
            }
        else emptyList()
    } catch (e: Throwable) {
        emptyList()
    }
}

private fun clearSession() {
    localStorage.removeItem(HISTORY_STORAGE)
    localStorage.removeItem(MESSAGES_STORAGE)
}

// ---- Root composable -------------------------------------------------------

@Composable
fun App() {
    var apiKey    by remember { mutableStateOf(localStorage.getItem(KEY_STORAGE) ?: "") }
    var editingKey by remember { mutableStateOf(apiKey.isEmpty()) }
    var history   by remember { mutableStateOf(loadHistory()) }
    var messages  by remember { mutableStateOf(loadMessages()) }
    var input     by remember { mutableStateOf("") }
    var busy      by remember { mutableStateOf(false) }
    var nextId    by remember { mutableStateOf((messages.maxOfOrNull { it.id } ?: -1) + 1) }
    val scope = rememberCoroutineScope()

    // Mirror the conversation to localStorage whenever it changes.
    LaunchedEffect(history)  { saveHistory(history) }
    LaunchedEffect(messages) { saveMessages(messages) }

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

                // Commit and PERSIST the assistant reply BEFORE writing to Excel.
                // Adding a chart can force the task-pane iframe to reload, aborting
                // this coroutine mid-flight; if we wrote the reply after applyActions
                // it would be lost, leaving the bubble missing after the reload.
                val updatedMessages = messages.filter { it.id != thinkingId } +
                    ChatMessage(nextId++, explanation, MsgKind.Assistant, actions.size)
                val updatedHistory = history + Turn("user", prompt) + Turn("model", rawText)
                messages = updatedMessages
                history = updatedHistory
                saveMessages(updatedMessages)
                saveHistory(updatedHistory)

                if (actions.isNotEmpty()) applyActions(actions)
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
            onNewChat = { messages = emptyList(); history = emptyList(); clearSession() },
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
                    Text("Applied ${msg.cellCount} update${if (msg.cellCount == 1) "" else "s"} to the sheet.")
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

/** Maps a model "chartType" string to an Office.js chart type (defaults to columns). */
private fun chartType(name: String?): dynamic = when (name?.lowercase()) {
    "bar"  -> Excel.ChartType.barClustered
    "line" -> Excel.ChartType.line
    "pie"  -> Excel.ChartType.pie
    else   -> Excel.ChartType.columnClustered
}

/** "A" -> 1, "B" -> 2, ... "AA" -> 27. */
private fun colToNum(letters: String): Int {
    var n = 0
    for (c in letters) n = n * 26 + (c.uppercaseChar() - 'A' + 1)
    return n
}

/**
 * Derives a range's (rows, cols) purely from its A1 address — no round-trip to
 * Excel needed — so we can build a correctly sized numberFormat matrix in one
 * batch. "B2:B13" -> (12, 1); a bare "B2" -> (1, 1).
 */
private fun rangeDims(a1: String): Pair<Int, Int> {
    val clean = a1.substringAfterLast('!').replace("$", "").trim()
    fun rc(ref: String): Pair<Int, Int> {
        val col = ref.takeWhile { it.isLetter() }
        val row = ref.dropWhile { it.isLetter() }
        return (row.toIntOrNull() ?: 1) to colToNum(col.ifEmpty { "A" })
    }
    val parts = clean.split(":")
    if (parts.size < 2) return 1 to 1
    val (r1, c1) = rc(parts[0])
    val (r2, c2) = rc(parts[1])
    return (kotlin.math.abs(r2 - r1) + 1) to (kotlin.math.abs(c2 - c1) + 1)
}

/** A rows×cols matrix every entry of which is [fmt], for Range.numberFormat. */
private fun formatMatrix(rows: Int, cols: Int, fmt: String): Array<Array<String>> =
    Array(rows) { Array(cols) { fmt } }

private fun applyCell(sheet: dynamic, action: dynamic) {
    val cell = action.cell as? String ?: return
    val range = sheet.getRange(cell)
    val value = action.value
    if (value is String && value.trim().startsWith("="))
        range.formulas = arrayOf(arrayOf(value))
    else
        range.values = arrayOf(arrayOf(value))
    (action.numberFormat as? String)?.let { range.numberFormat = arrayOf(arrayOf(it)) }
}

private fun applyFormat(sheet: dynamic, action: dynamic) {
    val addr = action.range as? String ?: return
    val range = sheet.getRange(addr)
    (action.fill as? String)?.let { range.format.fill.color = it }
    (action.fontColor as? String)?.let { range.format.font.color = it }
    (action.bold as? Boolean)?.let { range.format.font.bold = it }
    (action.numberFormat as? String)?.let { fmt ->
        val (rows, cols) = rangeDims(addr)
        range.numberFormat = formatMatrix(rows, cols, fmt)
    }
}

private fun applyChart(sheet: dynamic, action: dynamic) {
    val dataAddr = action.dataRange as? String ?: return
    val chart = sheet.charts.add(
        chartType(action.chartType as? String),
        sheet.getRange(dataAddr),
        Excel.ChartSeriesBy.auto,
    )
    (action.title as? String)?.let { chart.title.text = it }
    val pos = action.position
    if (pos != null) {
        val from = pos.from as? String
        val to = pos.to as? String
        if (from != null && to != null) chart.setPosition(from, to)
    }
}

private suspend fun applyActions(actions: List<dynamic>) {
    Excel.run { context: dynamic ->
        val sheet = context.workbook.worksheets.getActiveWorksheet()
        actions.forEach { action ->
            when ((action.type as? String) ?: "cell") {
                "format" -> applyFormat(sheet, action)
                "chart"  -> applyChart(sheet, action)
                else     -> applyCell(sheet, action)
            }
        }
        sheet.getUsedRange().format.autofitColumns()
        context.sync()
    }.unsafeCast<Promise<Unit>>().await()
}
