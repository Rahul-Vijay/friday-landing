// Friday waitlist collector.
//
// Setup (once):
//   1. Create a Google Sheet (sheets.new), name it e.g. "Friday waitlist".
//   2. Extensions -> Apps Script, replace the default code with this file, save.
//   3. Deploy -> New deployment -> type "Web app"
//        Execute as: Me
//        Who has access: Anyone
//      Deploy, authorize with your Google account, and copy the Web app URL
//      (looks like https://script.google.com/macros/s/AKfyc.../exec).
//   4. Paste that URL into `waitlistEndpoint` in src/content.ts.
//
// The landing page POSTs { email, country, timezone, locale } to this
// endpoint. Each signup is appended to the "Signups" tab as
// [timestamp, email, country, timezone, locale]; duplicates are skipped.
// Country is detected in the visitor's browser (Apps Script never sees the
// requester's IP); timezone and locale are backups when that lookup fails.

const SHEET_NAME = "Signups";
const HEADER = ["Timestamp", "Email", "Country", "Timezone", "Locale"];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(5000);
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(HEADER);
    }
    // migrate a header written by the older email-only version of this script
    if (sheet.getLastColumn() < HEADER.length) {
      sheet.getRange(1, 1, 1, HEADER.length).setValues([HEADER]);
    }

    let data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents) || {};
      } catch (err) {
        data = e.parameter || {};
      }
    }

    const clean = (v, max) => String(v || "").trim().slice(0, max);
    const email = clean(data.email, 254).toLowerCase();
    const country = clean(data.country, 8).toUpperCase();
    const timezone = clean(data.timezone, 64);
    const locale = clean(data.locale, 32);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return ContentService.createTextOutput(
        JSON.stringify({ ok: false, error: "invalid email" })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    const lastRow = sheet.getLastRow();
    const existing =
      lastRow > 1
        ? sheet.getRange(2, 2, lastRow - 1, 1).getValues().flat()
        : [];
    if (existing.indexOf(email) === -1) {
      sheet.appendRow([new Date(), email, country, timezone, locale]);
    }

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
