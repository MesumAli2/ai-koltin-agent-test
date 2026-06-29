# Installing M-AI (Excel Add-in)

A 30-second, one-time setup. You'll need the `manifest.prod.xml` file (sent to you) and
your own free Google API key.

## 1. Install the add-in (Excel on the web — easiest)

1. Open Excel in your browser: <https://excel.office.com> and open any workbook.
2. Go to the **Insert** tab → **Add-ins** (or **Office Add-ins**).
3. Click **Upload My Add-in** (top-right of the dialog).
4. Click **Browse**, select the `manifest.prod.xml` file you were sent, then **Upload**.
5. On the **Home** tab you'll now see a **"Generate Sheet"** button. Click it to open the task pane.

> **Excel desktop (Windows/Mac)** also works but needs a shared-folder catalog — the web
> steps above are far simpler, so start there.

## 2. Add your Google API key (one time)

The add-in uses *your* Google API key so usage is billed to you, not shared.

1. Get a free key at <https://aistudio.google.com/apikey> → **Create API key**.
2. In the task pane, paste the key into the **API key** field and save.
3. That's it — type a request (e.g. *"Make a 12-month budget with totals"*) and it fills the sheet.

Your key is stored only in your browser and is never shared with anyone else.

## Troubleshooting

- **Add-in won't load / blank pane** — make sure you're online; the add-in loads from a hosted URL.
- **"Upload My Add-in" missing** — you're likely on old desktop Excel; use Excel on the web.
- **Requests fail** — re-check your API key, and that the Generative Language API is enabled
  for it in Google AI Studio.
