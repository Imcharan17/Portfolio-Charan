import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

export default function Experience() {
  return (
    <motion.section
      className="py-20 px-6 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* HEADING */}
      <h2 className="text-5xl font-extrabold text-center mb-4 tracking-wide">
        Work{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
          Experience
        </span>
      </h2>

      <p className="text-center text-slate-400 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
        My journey as a developer — building, learning, and contributing to meaningful projects with modern technologies.
      </p>

      {/* TIMELINE */}
      <div className="relative border-l-2 border-cyan-700/40 ml-6">

        {/* ================= EXPERIENCE 1 ================= */}
        <div className="relative mb-14">
          {/* Glowing Dot */}
          <div className="absolute -left-3 top-1 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(0,255,255,0.7)]"></div>

          {/* Card */}
          <div className="ml-8 p-8 bg-[#0b1025] rounded-xl border border-[#1b2550] shadow-xl">
            <div className="flex justify-between items-start">

              {/* Title + Company */}
              <div>
                <h3 className="text-2xl font-semibold">SQL Intern</h3>
                <p className="text-cyan-400 font-semibold">
                  Codtech IT Solutions Pvt. Ltd.
                </p>
              </div>

              {/* Dates */}
              <div className="flex items-center gap-2 text-slate-400">
                <FaCalendarAlt /> June 2024 – August 2024
              </div>
            </div>

            {/* Bullet Points */}
            <ul className="mt-4 text-slate-300 space-y-2 text-[15px]">
              <li>Developed and optimized complex SQL queries for data analysis and reporting</li>
              <li>Collaborated with cross-functional teams to design database schemas</li>
              <li>Implemented stored procedures and triggers to automate business processes</li>
              <li>Conducted database performance tuning and optimization</li>
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {["SQL", "Database Design", "Query Optimization", "Data Analysis"].map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-[#0f1a3a] text-cyan-300 border border-cyan-700/40 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ================= EXPERIENCE 2 ================= */}
        <div className="relative mb-14">
          {/* Glowing Dot */}
          <div className="absolute -left-3 top-1 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(0,255,255,0.7)]"></div>

          {/* Card */}
          <div className="ml-8 p-8 bg-[#0b1025] rounded-xl border border-[#1b2550] shadow-xl">
            <div className="flex justify-between items-start">

              {/* Title + Company */}
              <div>
                <h3 className="text-2xl font-semibold">Full Stack Developer</h3>
                <p className="text-cyan-400 font-semibold">Unified Mentor Pvt. Ltd.</p>
              </div>

              {/* Dates */}
              <div className="flex items-center gap-2 text-slate-400">
                <FaCalendarAlt /> Jan 2024 – May 2024
              </div>
            </div>

            {/* Bullet Points */}
            <ul className="mt-4 text-slate-300 space-y-2 text-[15px]">
              <li>Built responsive web applications using React and Node.js</li>
              <li>Implemented RESTful APIs and integrated third-party services</li>
              <li>Managed deployment and CI/CD pipelines using Docker and Jenkins</li>
              <li>Collaborated with clients to gather requirements and deliver solutions</li>
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {["React", "Node.js", "Docker", "Jenkins", "MongoDB"].map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-[#0f1a3a] text-cyan-300 border border-cyan-700/40 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

    </motion.section>
  );
}
