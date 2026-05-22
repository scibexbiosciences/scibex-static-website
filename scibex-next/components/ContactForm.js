"use client";

import { useState } from "react";
import { inquiryTypes, company } from "@/lib/site-data";

const initial = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  inquiryType: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle"); // idle | sending | success | fallback | error

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const buildMailto = () => {
    const subject = encodeURIComponent(
      `[${form.inquiryType || "General Inquiry"}] — Website Inquiry from ${form.fullName || "Visitor"}`
    );
    const body = encodeURIComponent(
      `Full Name: ${form.fullName}\nCompany: ${form.company}\nEmail: ${form.email}\n` +
        `Phone: ${form.phone}\nCountry: ${form.country}\nInquiry Type: ${form.inquiryType}\n\n` +
        `Message:\n${form.message}\n\n— Sent via scibexbiosciences.com`
    );
    return `mailto:${company.email}?subject=${subject}&body=${body}`;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.delivered) {
        setStatus("success");
        setForm(initial);
      } else {
        // API reachable but no mail transport configured — fall back to mail client.
        window.location.href = buildMailto();
        setStatus("fallback");
      }
    } catch {
      window.location.href = buildMailto();
      setStatus("fallback");
    }
  };

  const field =
    "w-full px-3.5 py-2.5 border border-navy/10 rounded-md font-sans text-sm text-ink bg-[#fcfcfd] " +
    "focus:outline-none focus:border-medical focus:ring-[3px] focus:ring-medical/10 transition";

  return (
    <div className="bg-white border border-navy/10 rounded-xl p-7 sm:p-9 shadow-md">
      <form onSubmit={onSubmit} noValidate>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-navy mb-1.5 tracking-wide">
              Full Name <span className="text-red-700">*</span>
            </label>
            <input name="fullName" value={form.fullName} onChange={update} required
              placeholder="Your name" className={field} />
          </div>
          <div>
            <label className="block text-xs font-semibold text-navy mb-1.5 tracking-wide">
              Company Name
            </label>
            <input name="company" value={form.company} onChange={update}
              placeholder="Your organisation" className={field} />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-xs font-semibold text-navy mb-1.5 tracking-wide">
              Email <span className="text-red-700">*</span>
            </label>
            <input type="email" name="email" value={form.email} onChange={update} required
              placeholder="you@company.com" className={field} />
          </div>
          <div>
            <label className="block text-xs font-semibold text-navy mb-1.5 tracking-wide">
              Phone
            </label>
            <input type="tel" name="phone" value={form.phone} onChange={update}
              placeholder="+__ _______" className={field} />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-xs font-semibold text-navy mb-1.5 tracking-wide">
              Country
            </label>
            <input name="country" value={form.country} onChange={update}
              placeholder="Country" className={field} />
          </div>
          <div>
            <label className="block text-xs font-semibold text-navy mb-1.5 tracking-wide">
              Inquiry Type <span className="text-red-700">*</span>
            </label>
            <select name="inquiryType" value={form.inquiryType} onChange={update} required
              className={field}>
              <option value="">Select an option</option>
              {inquiryTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-xs font-semibold text-navy mb-1.5 tracking-wide">
            Message <span className="text-red-700">*</span>
          </label>
          <textarea name="message" value={form.message} onChange={update} required
            placeholder="Tell us how we can help..."
            className={`${field} min-h-[110px] resize-y`} />
        </div>

        <button type="submit" disabled={status === "sending"}
          className="btn btn-navy w-full justify-center mt-5 disabled:opacity-60">
          {status === "sending" ? "Sending…" : "Send Inquiry to SCIBEX"}
        </button>

        {status === "success" && (
          <p className="mt-3.5 px-4 py-3 rounded-md text-sm bg-emerald/10 border border-emerald/30 text-emerald">
            Thank you — your inquiry has been received. Our team will be in touch shortly.
          </p>
        )}
        {status === "fallback" && (
          <p className="mt-3.5 px-4 py-3 rounded-md text-sm bg-gold/10 border border-gold/40 text-[#8a6d20]">
            Your email client is opening with your inquiry ready to send to our team.
          </p>
        )}
        {status === "error" && (
          <p className="mt-3.5 px-4 py-3 rounded-md text-sm bg-red-50 border border-red-200 text-red-700">
            Something went wrong. Please email us directly at {company.email}.
          </p>
        )}

        <p className="text-xs text-slate mt-3">
          Your inquiry is directed to {company.email}. Submissions are handled by a server-side
          API route; if no mail transport is configured, your mail client opens as a fallback.
        </p>
      </form>
    </div>
  );
}
