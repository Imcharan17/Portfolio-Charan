import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

export default function Home() {
  return (
    <section className="relative mx-auto flex min-h-screen max-w-6xl items-center px-6 pt-24 sm:px-10">
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.35fr_.65fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300"><span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,1)]" />Available for opportunities</p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-tight sm:text-7xl">Hi, I&apos;m <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-400 bg-clip-text text-transparent">Charan Sai.</span></h1>
          <p className="mt-6 text-xl font-medium text-slate-200 sm:text-2xl">Software Engineer building useful, delightful digital experiences.</p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">I turn ideas into responsive web experiences and reliable applications with modern frontend and backend technologies.</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#projects" className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-300 to-sky-400 px-6 py-3.5 font-bold text-slate-950 shadow-[0_12px_30px_rgba(34,211,238,0.2)] transition hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(34,211,238,0.34)]">Explore my work <FaArrowRight /></a>
            <a href="#contact" className="rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-cyan-300/10">Let&apos;s connect</a>
          </div>
          <div className="mt-10 flex items-center gap-3">
            {[{ href: "https://github.com/Imcharan17", icon: FaGithub, label: "GitHub" }, { href: "https://www.linkedin.com/in/dubaguntla-charan-sai-900253263/", icon: FaLinkedin, label: "LinkedIn" }, { href: "tel:6281482851", icon: FaPhoneAlt, label: "Call" }].map(({ href, icon: Icon, label }) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={label} className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:text-cyan-200"><Icon /></a>)}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15, duration: 0.65 }} className="hidden lg:block">
          <div className="relative mx-auto grid aspect-square max-w-sm place-items-center rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-7 shadow-2xl backdrop-blur-sm">
            <div className="absolute inset-7 rounded-[2rem] border border-cyan-300/20" />
            <div className="relative grid h-44 w-44 place-items-center rounded-full bg-gradient-to-br from-cyan-300 via-sky-400 to-violet-500 text-7xl font-black text-slate-950 shadow-[0_0_70px_rgba(34,211,238,0.35)]">C</div>
            <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/10 bg-[#08112b]/80 p-4 text-center"><p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Crafting with intent</p><p className="mt-1 text-sm text-slate-300">Code · Design · Impact</p></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
