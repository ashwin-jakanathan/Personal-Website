import { NextRequest, NextResponse } from "next/server";

function isValidEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    if (!isValidEmail(String(email))) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // TODO: integrate email provider (Resend / SES) or persist to a DB
    // For now, we just log to server (verifiable via logs in Vercel)
    console.log("CONTACT_SUBMISSION", { name, email, message });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
