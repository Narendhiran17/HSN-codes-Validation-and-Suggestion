const SHEET_NAME = "Sheet1";

function doGet() {
  return HtmlService.createHtmlOutputFromFile("index");
}

// get the HSNdata from the sheet
function getHSNData() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const data = sheet.getDataRange().getValues();
  return data.slice(1);
}

// fuction for the validation the HSN codes
function validateHSNCodes(codes) {
  const data = getHSNData();
  const validCodes = data.map(row => row[0].toString().trim());
  let result = {};
  codes.forEach(code => {
    result[code] = validCodes.includes(code.trim());
  });
  return result;
}

// function for the suggest HSN code for the things 
function suggestHSNCodes(query) {
  const data = getHSNData();
  const matches = [];
  const lowerQuery = query.toLowerCase();

  data.forEach(row => {
    if (row[1].toLowerCase().includes(lowerQuery)) {
      matches.push({ code: row[0], description: row[1] });
    }
  });

  return matches.slice(0, 5);
}

