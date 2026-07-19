// Minimal Airtable REST client — just enough to create a record from a webhook.
// Docs: https://airtable.com/developers/web/api/create-records

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || "Bookings";

export function isAirtableConfigured() {
  return Boolean(AIRTABLE_API_KEY && AIRTABLE_BASE_ID);
}

export async function createAirtableRecord(
  fields: Record<string, unknown>,
  tableName: string = AIRTABLE_TABLE_NAME
) {
  if (!isAirtableConfigured()) {
    throw new Error(
      "Airtable is not configured — set AIRTABLE_API_KEY and AIRTABLE_BASE_ID."
    );
  }

  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(
    tableName
  )}`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fields, typecast: true }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Airtable create record failed (${res.status}): ${body}`);
  }

  return res.json();
}
