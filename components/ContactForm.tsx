"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      className="form plausible-event-name=Contact+Submit"
      method="POST"
      action={site.formEndpoint}
      onSubmit={onSubmit}
    >
      <input type="hidden" name="_subject" value="Contact request from personal website" />
      {/* Honeypot: real visitors never see or fill this. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />

      <label>
        <span>Your email</span>
        <input type="email" name="_replyto" placeholder="you@example.com" autoComplete="email" required />
      </label>
      <label>
        <span>Your message</span>
        <textarea name="message" rows={6} placeholder="Say hello…" required />
      </label>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        <p className={`form-status ${status}`} role="status" aria-live="polite">
          {status === "sent" && "Thanks! Your message is on its way."}
          {status === "error" && "Something went wrong. Please try again, or reach out on LinkedIn."}
        </p>
      </div>
    </form>
  );
}
