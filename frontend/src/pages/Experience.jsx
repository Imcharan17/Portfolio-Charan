import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaCheckCircle, FaUserTie } from "react-icons/fa";

export default function Experience() {
  const highlights = [
    "Developed an E-Bus Management System that makes route, schedule, and bus information easy to access.",
    "Built responsive user interfaces and interactive map-based features using HTML, CSS, JavaScript, Firebase, and Google Maps APIs.",
    "Collaborated through the full development cycle—planning features, integrating data, testing flows, and refining the user experience."
  ];
  return (
    <motion.section className="w-full max-w-5xl mx-auto px-6 py-12" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}>
      <div className="text-center"><p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Leadership & collaboration</p><h2 className="mt-3 text-4xl font-bold sm:text-5xl">Professional <span className="text-cyan-300">experience</span></h2><p className="mx-auto mt-4 max-w-2xl text-slate-400">Building successful software is about clear ownership, steady collaboration, and delivering features that matter.</p></div>
      <div className="relative mx-auto mt-12 max-w-3xl border-l border-cyan-300/30 pl-8 sm:pl-12">
        <span className="absolute -left-3 top-8 grid h-6 w-6 place-items-center rounded-full border-4 border-[#071027] bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.65)]" />
        <article className="rounded-3xl border border-white/10 bg-[#0b1532]/80 p-6 shadow-xl backdrop-blur-sm sm:p-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row"><div><div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-cyan-300/10 text-cyan-300"><FaUserTie /></div><h3 className="text-2xl font-bold">Full Stack Developer Intern</h3><p className="mt-1 font-medium text-cyan-300">Unified Mentor</p></div><p className="flex h-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"><FaCalendarAlt className="text-cyan-300" />2024</p></div>
          <ul className="mt-7 space-y-3 text-slate-300">{highlights.map((item) => <li key={item} className="flex gap-3"><FaCheckCircle className="mt-1 shrink-0 text-cyan-300" />{item}</li>)}</ul>
          <div className="mt-7 flex flex-wrap gap-2">{["Full Stack Development", "JavaScript", "Firebase", "Google Maps API", "Responsive Design"].map((tag) => <span key={tag} className="rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1.5 text-sm text-cyan-100">{tag}</span>)}</div>
        </article>
      </div>
    </motion.section>
  );
}
