"""ADK agent that turns a natural-language request into Excel cell writes.

This is the "brain" of the add-in — the Google ADK / Gemini replacement for the
old Groq-powered Express backend. It uses a structured ``output_schema`` so the
model is forced to return exactly the shape the Excel task pane expects:

    { "explanation": "...", "actions": [ { "cell": "A1", "value": "..." } ] }
"""

from pydantic import BaseModel, Field
from google.adk.agents.llm_agent import Agent


class CellAction(BaseModel):
    """A single write into the worksheet grid."""

    cell: str = Field(
        description="A valid A1-style Excel cell reference, e.g. 'A1', 'B2', 'C10'."
    )
    value: str = Field(
        description=(
            "Literal text/number as a string, OR an Excel formula that begins "
            "with '=' (e.g. '=SUM(B2:B10)'). An empty string clears the cell."
        )
    )


class SheetResponse(BaseModel):
    """The full structured reply for one conversation turn."""

    explanation: str = Field(
        description="A short, friendly summary of what you did this turn."
    )
    actions: list[CellAction] = Field(
        default_factory=list,
        description="The cells to add or overwrite this turn. May be empty.",
    )


INSTRUCTION = """\
You are an Excel spreadsheet assistant. You work with the user across multiple
turns: they describe a sheet, you build it, and then they may ask follow-up
questions to refine, extend, or fix what you already produced.

You respond with a structured object containing two fields:
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
"""

root_agent = Agent(
    model='gemini-2.0-flash-lite',
    name='root_agent',
    description=(
        'An Excel spreadsheet assistant that turns natural-language requests '
        'into A1-style cell writes and formulas.'
    ),
    instruction=INSTRUCTION,
    output_schema=SheetResponse,
)
