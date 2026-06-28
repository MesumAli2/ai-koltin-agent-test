import androidx.compose.runtime.*
import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.coroutines.*
import org.jetbrains.compose.web.dom.*
import org.jetbrains.compose.web.renderComposable
import kotlin.js.JSON
import kotlin.js.Promise

private const val API_ENDPOINT = "https://localhost:3000/api/generate"

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

private data class SuggestionItem(val emoji: String, val label: String, val prompt: String)

private val SUGGESTIONS = listOf(
    SuggestionItem("💰", "Monthly budget tracker", "Build a monthly budget tracker with categories, amounts, and a total."),
    SuggestionItem("📈", "Sales pipeline", "Create a sales pipeline with deal name, stage, value, and close date."),
    SuggestionItem("✅", "Habit tracker", "Make a weekly habit tracker with checkboxes for each day."),
)

// ---- Entry point -----------------------------------------------------------

private fun newSessionId(): String {
    val crypto = window.asDynamic().crypto
    return if (crypto != null && js("typeof crypto.randomUUID === 'function'") as Boolean)
        crypto.randomUUID().unsafeCast<String>()
    else "sess-${js("Date.now()")}-${js("Math.random().toString(16).slice(2)")}"
}

fun main() {
    // Wait for Office.js to initialise, then render regardless of host so the
    // UI is visible in a plain browser too. Excel-specific calls (applyActions)
    // are already guarded by try/catch and will show an error bubble if invoked
    // outside a real Excel session.
    Office.onReady { renderComposable(rootElementId = "root") { App() } }
}

// ---- Root composable -------------------------------------------------------

@Composable
fun App() {
    var sessionId by remember { mutableStateOf(newSessionId()) }
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
        busy = true
        input = ""
        addMsg(prompt, MsgKind.User)
        val thinkingId = addMsg("", MsgKind.Thinking)

        scope.launch {
            try {
                val bodyObj = js("{}")
                bodyObj.sessionId = sessionId
                bodyObj.prompt = prompt
                val fetchOpts = js("{}")
                fetchOpts.method = "POST"
                fetchOpts.headers = js("({'Content-Type':'application/json'})")
                fetchOpts.body = JSON.stringify(bodyObj)

                val response = window.asDynamic()
                    .fetch(API_ENDPOINT, fetchOpts)
                    .unsafeCast<Promise<dynamic>>().await()

                if (response.ok != true) {
                    val err = response.json().unsafeCast<Promise<dynamic>>().await()
                    throw Exception((err.error as? String)?.takeIf { it.isNotEmpty() }
                        ?: "Request failed (${response.status}).")
                }

                val data = response.json().unsafeCast<Promise<dynamic>>().await()
                val arr = data.actions
                val actions: List<dynamic> = if (js("Array.isArray(arr)") as Boolean)
                    (0 until (arr.length as Int)).map { i -> arr[i] }
                else emptyList()
                val explanation = (data.explanation as? String)?.takeIf { it.isNotEmpty() } ?: "Done."

                if (actions.isNotEmpty()) applyActions(actions)
                removeMsg(thinkingId)
                addMsg(explanation, MsgKind.Assistant, actions.size)
            } catch (e: Throwable) {
                removeMsg(thinkingId)
                addMsg(e.message ?: "Something went wrong.", MsgKind.Error)
            } finally {
                busy = false
            }
        }
    }

    Div({ classes("app") }) {
        Banner(onNewChat = { sessionId = newSessionId(); messages = emptyList() })
        Thread(messages, busy, onSuggestion = { s -> input = s.prompt; sendTurn() })
        Composer(input, busy,
            onInputChange = { input = it },
            onSend = { sendTurn() }
        )
    }
}

// ---- Components ------------------------------------------------------------

@Composable
private fun Banner(onNewChat: () -> Unit) {
    Header({ classes("banner") }) {
        Div({ classes("banner-icon") }) {
            Div({ classes("banner-icon-box") }) { Text("M") }
        }
        Div({ classes("banner-text") }) {
            H1 { Text("M-AI") }
            P { Text("Build a sheet, then keep refining it.") }
        }
        Button({
            classes("new-chat-btn")
            onClick { onNewChat() }
        }) { Text("New") }
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
