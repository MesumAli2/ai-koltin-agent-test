#!/usr/bin/env bash
#
# One-command launcher for the Excel AI add-in backend (Google ADK + Gemini).
#
# Serves the Office.js task pane and the agent API at https://localhost:3000.
# Open the add-in in Excel only AFTER this is running, or the task pane shows
# up blank (Excel can't reach the SourceLocation URL).
#
#   ./start.sh
#
set -euo pipefail

cd "$(dirname "$0")"

PORT="${PORT:-3000}"
PYTHON="${PYTHON:-python3}"

# A stale process on the port is the usual cause of a blank/refused task pane.
if lsof -nP -iTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1; then
  echo "[start] Something is already listening on port $PORT:"
  lsof -nP -iTCP:"$PORT" -sTCP:LISTEN
  echo "[start] Stop it first (or set PORT=xxxx) — not starting a second server."
  exit 1
fi

echo "[start] Compiling Kotlin → public/taskpane.js ..."
./gradlew jsBrowserProductionWebpack

echo "[start] Launching backend on https://localhost:$PORT  (Ctrl+C to stop)"
exec "$PYTHON" server.py
