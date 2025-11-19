import React, { useState } from "react";
import api from "../api";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await api.post("/contact", form);   // 🔥 FIXED
      if (res.data?.success) setStatus({ ok: true, msg: "Message sent!" });
      else setStatus({ ok: false, msg: res.data?.error || "Failed to send" });
    } catch (err) {
      setStatus({ ok: false, msg: "Server error" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.section
      className="py-16 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-4xl font-bold mb-6">
        Get In <span className="text-cyan-400">Touch</span>
      </h2>

      <form onSubmit={submit} className="space-y-4">

        <input
          required
          className="w-full p-3 rounded-2xl bg-[#07142a] border border-white/10"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          required
          className="w-full p-3 rounded-2xl bg-[#07142a] border border-white/10"
          placeholder="Your email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="w-full p-3 rounded-2xl bg-[#07142a] border border-white/10"
          placeholder="Subject"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
        />

        <textarea
          required
          className="w-full p-3 rounded-2xl bg-[#07142a] border border-white/10"
          rows="6"
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <div className="flex items-center gap-4">
          <button
            disabled={loading}
            className="px-6 py-3 bg-cyan-400 text-black rounded-2xl"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <div className={`text-sm ${status.ok ? "text-green-400" : "text-red-400"}`}>
              {status.msg}
            </div>
          )}
        </div>
        
      </form>
    </motion.section>
  );
}
