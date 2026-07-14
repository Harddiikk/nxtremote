import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";
import { createAirtableRecord, isAirtableConfigured } from "@/lib/airtable";

// Receives cal.id (Cal.com-compatible) booking webhooks and logs new bookings
// into Airtable. Register this URL — https://<domain>/api/cal-webhook — under
// cal.id → Settings → Developer → Webhooks, subscribed to at least
// BOOKING_CREATED, with the same secret as CAL_WEBHOOK_SECRET below.

type CalWebhookPayload = {
  triggerEvent: string;
  createdAt: string;
  payload: {
    uid: string;
    bookingId?: number;
    type: string;
    title: string;
    startTime: string;
    endTime: string;
    location?: string;
    status?: string;
    organizer?: { name?: string; email?: string };
    attendees?: Array<{ name?: string; email?: string; timeZone?: string }>;
    responses?: Record<string, { label?: string; value?: unknown }>;
  };
};

function isValidSignature(rawBody: string, signatureHeader: string | null, secret: string) {
  if (!signatureHeader) return false;
  const expected = crypto.createHmac("sha256", secret).update(rawBody).digest("hex");
  const expectedBuf = Buffer.from(expected);
  const actualBuf = Buffer.from(signatureHeader);
  if (expectedBuf.length !== actualBuf.length) return false;
  return crypto.timingSafeEqual(expectedBuf, actualBuf);
}

function extractResponseValue(
  responses: CalWebhookPayload["payload"]["responses"],
  ...keys: string[]
) {
  if (!responses) return "";
  for (const [key, entry] of Object.entries(responses)) {
    if (keys.some((k) => key.toLowerCase() === k.toLowerCase())) {
      return String(entry?.value ?? "");
    }
  }
  return "";
}

export async function POST(req: NextRequest) {
  const rawBody = await req.text();

  const secret = process.env.CAL_WEBHOOK_SECRET;
  if (secret) {
    const signature = req.headers.get("x-cal-signature-256");
    if (!isValidSignature(rawBody, signature, secret)) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }
  }

  let event: CalWebhookPayload;
  try {
    event = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Always 200 on events we don't act on, so cal.id doesn't retry/disable the webhook.
  if (event.triggerEvent !== "BOOKING_CREATED") {
    return NextResponse.json({ received: true, skipped: event.triggerEvent });
  }

  const booking = event.payload;
  const attendee = booking.attendees?.[0];

  if (!isAirtableConfigured()) {
    console.error("cal-webhook: BOOKING_CREATED received but Airtable env vars are missing");
    return NextResponse.json(
      { error: "Airtable not configured on the server yet" },
      { status: 500 }
    );
  }

  try {
    await createAirtableRecord({
      Name: attendee?.name || booking.organizer?.name || "Unknown",
      Email: attendee?.email || "",
      Phone: extractResponseValue(booking.responses, "phone", "phone number"),
      Company: extractResponseValue(booking.responses, "company", "company name"),
      "Event Type": booking.title || booking.type,
      "Booking Time": booking.startTime,
      Location: booking.location || "",
      Notes: extractResponseValue(booking.responses, "notes", "message", "additional notes"),
      Status: "New",
      Source: "cal.id",
      "Cal Booking UID": booking.uid,
    });
  } catch (error) {
    console.error("cal-webhook: failed to write to Airtable", error);
    return NextResponse.json({ error: "Failed to record booking" }, { status: 502 });
  }

  return NextResponse.json({ received: true });
}
