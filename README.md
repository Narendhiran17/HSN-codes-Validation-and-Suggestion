# HSN-codes-Validation-and-Suggestion

This is a Google Sheets-based web app built with **Google Apps Script (ADK)** that allows users to:

✅ Validate HSN (Harmonized System of Nomenclature) codes  
✅ Suggest HSN codes based on product descriptions

It integrates directly with a Google Sheet that holds the HSN master data.

---

## 📦 Features

- 🔍 **HSN Code Validation**: Enter one or more codes to check if they exist in the dataset.
- 💡 **HSN Code Suggestions**: Input a product description to find matching HSN codes.
- ⚡ **Live integration**: Works directly with your Google Sheet—no external database needed.

---

## 🛠 Technologies

- Google Apps Script (`Code.gs`)
- HTML & JavaScript (frontend UI via `index.html`)
- Google Sheets for HSN data

---

## 📁 File Structure

```
.
├── Code.gs           # Backend logic for validation and suggestion
├── index.html        # Frontend interface served as a web app
├── README.md         # You're here!
```

---

## 📄 Google Sheet Format

Your spreadsheet must have the following structure:

| HSNCode | Description                        |
|---------|------------------------------------|
| 0101    | Live horses, asses, mules, hinnies |
| 0102    | Live bovine animals                |

> Make sure your sheet is named `"Sheet1"` or change `SHEET_NAME` in `Code.gs`.

---

## 🚀 How to Use

### Option 1: Run as a Web App

1. Open the Google Sheet
2. Go to **Extensions > Apps Script**
3. Paste the `Code.gs` and `index.html` files
4. Click **Deploy > Manage Deployments**
5. Deploy as a **Web App**
   - Execute as: `Me`
   - Access: `Anyone`
6. Share the web app URL

### Option 2: Embed as Sidebar (optional)

You can also show the UI inside the sheet using:

```javascript
function showSidebar() {
  const html = HtmlService.createHtmlOutputFromFile("index")
              .setTitle("HSN Validator");
  SpreadsheetApp.getUi().showSidebar(html);
}
```

Then run `showSidebar()` from the script editor.

---

## 🤖 Sample Functions

- `validateHSNCodes(["0101", "9999"])`  
  → Returns `{ "0101": true, "9999": false }`

- `suggestHSNCodes("live horses")`  
  → Returns a list of HSN codes with matching descriptions

---

## 🧰 Development Setup

```bash
npm install -g @google/clasp
clasp login
clasp clone <script-id>
# or manually copy files from Apps Script and push to GitHub
```

---

## 📜 License

MIT License © 2025
