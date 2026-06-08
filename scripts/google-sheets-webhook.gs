/**
 * Job To Close — Google Sheets webhook
 *
 * Setup:
 * 1. Create a Google Sheet (e.g. "Job To Close Leads").
 * 2. Extensions → Apps Script → paste this file → Save.
 * 3. Deploy → New deployment → Web app.
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the Web app URL (ends with /exec).
 * 5. Add to .env.local:
 *    GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/.../exec
 */

function doPost(e) {
  try {
    var sheet =
      SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Leads") ||
      SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    var data = JSON.parse(e.postData.contents);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Submitted At",
        "Name",
        "Business",
        "Website",
        "Email",
        "Phone",
        "Industry",
        "Lead Volume",
        "Current Tool",
        "Source",
      ]);
    }

    sheet.appendRow([
      data.submittedAt || new Date().toISOString(),
      data.name || "",
      data.business || "",
      data.website || "",
      data.email || "",
      data.phone || "",
      data.industry || "",
      data.leadVolume || "",
      data.currentTool || "",
      data.source || "website",
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ success: true }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: String(err) }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
