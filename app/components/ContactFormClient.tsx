"use client";

import React, { useId, useMemo, useState } from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

type Lang = "en" | "uk";

type Labels = {
  name: string;
  email: string;
  message: string;
  submit: string;
  success: string;
  error: string;
};

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactFormClient({ lang, labels }: { lang: Lang; labels: Labels }) {
  const nameId = useId();
  const emailId = useId();
  const msgId = useId();
  const honeyId = useId();

  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "", company: "" });

  const emailOk = useMemo(() => {
    const v = form.email.trim();
    if (!v) return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }, [form.email]);

  const canSubmit =
    status !== "submitting" &&
    form.name.trim().length >= 2 &&
    emailOk &&
    form.message.trim().length >= 10;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    // honeypot (bots)
    if (form.company.trim()) return;

    if (!canSubmit) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "", company: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      {status === "success" && (
        <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800">
          <CheckCircle2 className="mt-0.5 h-5 w-5" aria-hidden="true" />
          <div className="text-sm">{labels.success}</div>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">
          <AlertCircle className="mt-0.5 h-5 w-5" aria-hidden="true" />
          <div className="text-sm">{labels.error}</div>
        </div>
      )}

      {/* honeypot */}
      <div className="hidden">
        <label htmlFor={honeyId}>Company</label>
        <input
          id={honeyId}
          name="company"
          value={form.company}
          onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor={nameId} className="block text-sm font-bold text-slate-700 mb-2">
          {labels.name}
        </label>
        <input
          id={nameId}
          name="name"
          type="text"
          autoComplete="name"
          className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none"
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
          required
        />
      </div>

      <div>
        <label htmlFor={emailId} className="block text-sm font-bold text-slate-700 mb-2">
          {labels.email}
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none"
          value={form.email}
          onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
          required
          aria-invalid={form.email.length > 0 && !emailOk}
        />
        {form.email.length > 0 && !emailOk && (
          <p className="mt-2 text-xs text-red-600">
            {lang === "en" ? "Please enter a valid email." : "Вкажіть коректний email."}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={msgId} className="block text-sm font-bold text-slate-700 mb-2">
          {labels.message}
        </label>
        <textarea
          id={msgId}
          name="message"
          rows={4}
          className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none resize-none"
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          required
        />
        <p className="mt-2 text-xs text-slate-500">
          {lang === "en"
            ? "Tip: include context, target timeline, and whether you use Cloud or Data Center."
            : "Порада: додай контекст, бажані строки та чи це Cloud чи Data Center."}
        </p>
      </div>

      <button
        type="submit"
        disabled={!canSubmit}
        className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition shadow-lg disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
      >
        {status === "submitting" && <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />}
        {labels.submit}
      </button>
    </form>
  );
}
