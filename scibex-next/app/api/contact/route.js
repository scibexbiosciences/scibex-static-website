// app/api/contact/route.js
// Server-side handler for contact form submissions.
//
// Default behaviour: validates input and logs the submission to the server
// console, returning { delivered: false } so the client falls back to the
// visitor's mail client.
//
// To deliver email automatically, install a mail library (e.g. `nodemailer`)
// and replace the marked block below with a real send call, then set the
// SMTP_* variables in .env.local. Once a send succeeds, return
// { delivered: true }.

import { NextResponse } from "next/server";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "business@scibexbiosciences.com";

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { fullName, company, email, phone, country, inquiryType, message } = body || {};

  // Validation
  if (!fullName || !email || !inquiryType || !message) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const submission = {
    receivedAt: new Date().toISOString(),
    to: TO_EMAIL,
    fullName,
    company: company || "—",
    email,
    phone: phone || "—",
    country: country || "—",
    inquiryType,
    message,
  };

  // ============================================================
  // EMAIL DELIVERY INTEGRATION POINT
  // ------------------------------------------------------------
  // Example using nodemailer (run: npm install nodemailer):
  //
  //   import nodemailer from "nodemailer";
  //   const transporter = nodemailer.createTransport({
  //     host: process.env.SMTP_HOST,
  //     port: Number(process.env.SMTP_PORT || 587),
  //     auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  //   });
  //   await transporter.sendMail({
  //     from: process.env.SMTP_USER,
  //     to: TO_EMAIL,
  //     replyTo: email,
  //     subject: `[${inquiryType}] Website inquiry from ${fullName}`,
  //     text: JSON.stringify(submission, null, 2),
  //   });
  //   return NextResponse.json({ delivered: true });
  // ============================================================

  const transportConfigured = Boolean(process.env.SMTP_HOST);

  if (!transportConfigured) {
    // No mail transport — log and signal the client to use mailto fallback.
    console.log("[SCIBEX contact submission]", submission);
    return NextResponse.json({ delivered: false, received: true });
  }

  // If SMTP is configured but the integration above is not wired in yet,
  // still acknowledge receipt without claiming delivery.
  console.log("[SCIBEX contact submission — transport present]", submission);
  return NextResponse.json({ delivered: false, received: true });
}

export function GET() {
  return NextResponse.json(
    { ok: true, message: "SCIBEX contact endpoint. Use POST to submit an inquiry." },
    { status: 200 }
  );
}
