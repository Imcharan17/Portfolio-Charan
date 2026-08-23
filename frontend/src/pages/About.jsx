import React from "react";
import { motion } from "framer-motion";

// Icons
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaPython, FaDatabase, FaCloud, FaGitAlt 
} from "react-icons/fa";

import { DiJava } from "react-icons/di";
import { SiC, SiCplusplus, SiTailwindcss } from "react-icons/si";

export default function About() {

  const skills = [
    { name: "Java", icon: <DiJava className="text-red-400" /> },
    { name: "C", icon: <SiC className="text-blue-300" /> },
    { name: "C++", icon: <SiCplusplus className="text-indigo-300" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-400" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" /> },
    { name: "Python", icon: <FaPython className="text-green-300" /> },
    { name: "SQL", icon: <FaDatabase className="text-purple-400" /> },
    { name: "DevOps", icon: <FaCloud className="text-blue-300" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-400" /> },
  ];

  return (
    <section className="mx-auto grid w-full max-w-6xl items-start gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

      {/* LEFT SIDE - FRAME → HEADER → CARD */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center lg:items-start"
      >

        {/* 🔥 Neon Frame with C */}
        <div className="mb-6">
          <div className="
            relative grid h-40 w-40 place-items-center rounded-3xl p-[3px] sm:h-48 sm:w-48
            bg-gradient-to-br from-cyan-400 to-violet-500
            shadow-[0_0_30px_rgba(0,255,255,0.6)]
            animate-pulseSlow
          ">
            <div className="
              h-full w-full rounded-[1.35rem] overflow-hidden
              bg-[#07142a]/70 backdrop-blur-xl
              flex items-center justify-center
            ">
              <span className="text-6xl font-extrabold text-cyan-400 drop-shadow-[0_0_20px_rgba(0,255,255,1)] sm:text-7xl">
                C
              </span>
            </div>
          </div>
        </div>

        {/* 🔥 HEADER BELOW FRAME */}
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Education</h2>

        {/* 🔷 Education Card */}
        <div className="w-full rounded-3xl border border-white/10 bg-[#07142a]/90 p-6 text-center shadow-xl sm:p-7 lg:text-left">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Academic journey</p>
          <h3 className="mb-2 text-xl font-semibold sm:text-2xl">Bachelor of Technology</h3>
          <p className="text-base text-slate-200 sm:text-lg">Sri Venkateshwara Engineering College</p>
          <p className="mt-1 text-slate-400">Computer Science Engineering</p>
          <p className="mt-4 text-sm font-medium text-cyan-100">2022 — 2026</p>
        </div>

      </motion.div>

      {/* RIGHT SIDE - SKILLS GRID */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">What I work with</p>
        <h2 className="mb-7 flex items-center gap-3 text-3xl font-bold sm:text-4xl">
          Skills <span className="text-cyan-400">*</span>
        </h2>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="
                group relative flex min-h-[132px] flex-col justify-between overflow-hidden rounded-2xl border border-[#1c2b55] bg-[#0b1733] p-5 shadow-lg cursor-pointer sm:min-h-[145px] sm:p-6
                transition-all duration-500 
                hover:scale-[1.08] 
                hover:shadow-[0_0_30px_rgba(0,255,255,0.4)]
                hover:border-cyan-400
                hover:-translate-y-1
              "
            >
              <div className="
                absolute inset-0 opacity-0 
                group-hover:opacity-30 
                bg-gradient-to-br from-cyan-400 to-violet-500 
                blur-xl transition-all duration-500
              "></div>

              <div className="
                mb-4 text-4xl sm:text-5xl
                group-hover:scale-125 group-hover:rotate-3
                transition-all duration-500
              ">
                {skill.icon}
              </div>

              <p className="relative text-sm font-semibold tracking-wide text-slate-200
                           group-hover:text-cyan-300 transition-all duration-300">
                {skill.name}
              </p>

            </motion.div>
          ))}
        </div>

      </motion.div>

    </section>
  );
}
