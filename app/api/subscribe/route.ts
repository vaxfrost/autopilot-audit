import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  const apiKey = process.env.KIT_API_KEY;
  const formId = process.env.KIT_FORM_ID;

  if (!apiKey || !formId) {
    console.error("KIT_API_KEY or KIT_FORM_ID not set");
    return NextResponse.json({ error: "Server misconfiguration." }, { status: 500 });
  }

  const res = await fetch(
    `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: apiKey, email }),
    }
  );

  if (!res.ok) {
    const body = await res.text();
    console.error("Kit API error:", body);
    return NextResponse.json({ error: "Could not subscribe. Try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
