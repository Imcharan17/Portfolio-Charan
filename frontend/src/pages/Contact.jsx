import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null); const [loading, setLoading] = useState(false);
  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({ ok: false, msg: "Email service is not configured yet." });
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,
          subject: form.subject || "Portfolio message",
          message: form.message,
        },
        { publicKey }
      );
      setStatus({ ok: true, msg: "Thanks! Your message has been sent." });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus({ ok: false, msg: "Unable to send the message. Please try again." });
    } finally {
      setLoading(false);
    }
  }
  const inputClass = "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70 focus:bg-cyan-300/[0.05]";
  return <motion.section className="w-full max-w-5xl mx-auto px-6 py-12" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}><div className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#0b1532]/80 shadow-2xl backdrop-blur-sm md:grid-cols-[.85fr_1.15fr]"><aside className="bg-gradient-to-br from-cyan-300/15 via-transparent to-violet-500/20 p-8 sm:p-10"><p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Start a conversation</p><h2 className="mt-4 text-4xl font-bold leading-tight">Have a project in mind?</h2><p className="mt-5 leading-7 text-slate-300">I&apos;m always open to discussing opportunities, collaborations, and ideas worth building.</p><div className="mt-10 text-sm"><a href="tel:6281482851" className="flex items-center gap-3 text-slate-200 transition hover:text-cyan-300"><FaPhoneAlt className="text-cyan-300" />+91 62814 82851</a></div></aside><div className="p-8 sm:p-10"><h3 className="text-2xl font-bold">Let&apos;s work together</h3><form onSubmit={submit} className="mt-6 space-y-4"><div className="grid gap-4 sm:grid-cols-2"><input required className={inputClass} placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /><input required type="email" className={inputClass} placeholder="Your email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div><input className={inputClass} placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} /><textarea required rows="5" className={inputClass} placeholder="Tell me about your project" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /><button disabled={loading} className="inline-flex items-center gap-3 rounded-xl bg-cyan-300 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60">{loading ? "Sending…" : "Send message"}<FaArrowRight /></button>{status && <p className={`text-sm ${status.ok ? "text-emerald-300" : "text-rose-300"}`}>{status.msg}</p>}</form></div></div></motion.section>;
}
