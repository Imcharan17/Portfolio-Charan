import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBus, FaCheckCircle, FaExternalLinkAlt, FaFileInvoiceDollar, FaLeaf, FaMapMarkedAlt, FaRobot } from "react-icons/fa";
import api from "../api";

const projectFallback = [
  { id: 1, title: "E-Bus Management", eyebrow: "Smarter public transport", desc: "A streamlined bus-management website designed to make transport information and operations easier to access and understand.", tags: ["HTML", "CSS", "JavaScript"], highlights: ["Clear transport information", "Responsive, easy-to-use interface"], accent: "from-amber-300 via-orange-400 to-rose-500", liveUrl: "https://imcharan17.github.io/E-Bus-managment/" },
  { id: 2, title: "CropCare AI", eyebrow: "Smart agriculture platform", desc: "A crop-management application that helps farmers keep field records organised, monitor crop health, and make better decisions from one simple dashboard.", tags: ["Spring Boot", "Java", "MySQL", "JDBC", "REST API"], highlights: ["Centralised crop and field records", "Secure database-driven workflows"], accent: "from-emerald-400 via-lime-300 to-cyan-400", liveUrl: "https://crop-care-frontend-568o.onrender.com/" },
  { id: 3, title: "Travel Planner", eyebrow: "Plan every journey with clarity", desc: "A responsive trip-planning website that lets users explore destinations, organise itineraries, and view travel details in a clean, easy-to-use experience.", tags: ["HTML", "CSS", "JavaScript", "JSON"], highlights: ["Interactive destination discovery", "Structured itinerary and travel data"], accent: "from-sky-400 via-cyan-300 to-indigo-500", liveUrl: "https://imcharan17.github.io/Travel_Planer/" },
  { id: 4, title: "Invoice Generator", eyebrow: "Professional invoices in moments", desc: "A fast, polished invoice tool that helps users create itemised invoices, calculate totals automatically, and present billing details professionally.", tags: ["React.js", "HTML", "CSS", "JavaScript"], highlights: ["Automatic totals and line items", "Clear, client-ready invoice layout"], accent: "from-violet-500 via-fuchsia-400 to-rose-400", liveUrl: "https://invoice-generator-react-lime.vercel.app/" },
  { id: 5, title: "AI Chatbot", eyebrow: "Conversational assistance", desc: "An interactive AI chatbot experience that gives users a simple, engaging way to ask questions and receive helpful responses.", tags: ["HTML", "CSS", "JavaScript", "AI"], highlights: ["Natural conversational interface", "Fast, accessible user experience"], accent: "from-fuchsia-500 via-violet-500 to-cyan-400", liveUrl: "https://imcharan17.github.io/ai-chatbot/" },
];

const projectIcons = [FaBus, FaLeaf, FaMapMarkedAlt, FaFileInvoiceDollar, FaRobot];

export default function Projects() {
  const [projects, setProjects] = useState(projectFallback);

  useEffect(() => {
    api.get("/api/projects").then(({ data }) => {
      if (Array.isArray(data) && data.length) setProjects(data);
    }).catch(() => {});
  }, []);

  return (
    <motion.section className="py-12 px-5 sm:px-8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-cyan-300 text-sm font-semibold tracking-[0.25em] uppercase mb-3">Selected work</p>
          <h2 className="text-4xl sm:text-5xl font-bold">Projects built to solve <span className="text-cyan-400">real needs</span></h2>
          <p className="max-w-2xl mx-auto mt-5 text-slate-300 leading-relaxed">Each project combines thoughtful design with practical technology, making the value easy to understand at a glance.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = projectIcons[index] || FaCheckCircle;
            const accent = project.accent || "from-cyan-400 to-violet-500";
            return (
              <motion.article key={project.id} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0c1535]/90 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.28)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300/40 hover:shadow-[0_20px_50px_rgba(34,211,238,0.16)]" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.12 }}>
                <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${accent} opacity-15 blur-2xl transition-opacity duration-500 group-hover:opacity-30`} />
                <div className="relative flex items-start justify-between gap-4">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-xl text-slate-950 shadow-lg`}><Icon /></div>
                  {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live demo`} className="rounded-full border border-cyan-300/30 p-3 text-cyan-200 transition hover:bg-cyan-300 hover:text-slate-950"><FaExternalLinkAlt /></a> : <span className="rounded-full border border-white/10 px-3 py-2 text-xs text-slate-400">Demo link soon</span>}
                </div>
                <div className="relative mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">{project.eyebrow}</p>
                  <h3 className="mt-2 text-2xl font-bold text-white">{project.title}</h3>
                  <p className="mt-3 min-h-[96px] text-sm leading-6 text-slate-300">{project.desc}</p>
                </div>
                <ul className="relative mt-5 space-y-2 border-y border-white/10 py-4 text-sm text-slate-200">
                  {(project.highlights || []).map((highlight) => <li key={highlight} className="flex gap-2"><FaCheckCircle className="mt-0.5 shrink-0 text-cyan-300" /><span>{highlight}</span></li>)}
                </ul>
                <div className="relative mt-5 flex flex-wrap gap-2">{(project.tags || []).map((tag) => <span key={tag} className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-medium text-cyan-100">{tag}</span>)}</div>
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="relative mt-6 inline-flex items-center gap-2 font-semibold text-cyan-300 transition hover:text-white">View live project <FaExternalLinkAlt className="text-sm" /></a>}
              </motion.article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
