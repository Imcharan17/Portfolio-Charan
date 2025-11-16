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
    <section className="py-16 px-6 grid md:grid-cols-2 gap-12 items-start">

      {/* LEFT SIDE - FRAME → HEADER → CARD */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >

        {/* 🔥 Neon Frame with C */}
        <div className="mb-6">
          <div className="
            relative w-56 h-56 rounded-2xl p-[3px]
            bg-gradient-to-br from-cyan-400 to-violet-500
            shadow-[0_0_30px_rgba(0,255,255,0.6)]
            animate-pulseSlow
          ">
            <div className="
              w-full h-full rounded-2xl overflow-hidden
              bg-[#07142a]/70 backdrop-blur-xl
              flex items-center justify-center
            ">
              <span className="text-7xl font-extrabold text-cyan-400 drop-shadow-[0_0_20px_rgba(0,255,255,1)]">
                C
              </span>
            </div>
          </div>
        </div>

        {/* 🔥 HEADER BELOW FRAME */}
        <h2 className="text-4xl font-bold mb-4">Education</h2>

        {/* 🔷 Education Card */}
        <div className="p-6 rounded-2xl bg-[#07142a] border border-white/10 shadow-xl text-center w-full">
          <h3 className="text-2xl font-semibold mb-1">Bachelor of Technology</h3>
          <p className="text-slate-300 text-lg">Sri Venkateshwara Engineering College</p>
          <p className="text-slate-400 text-md">Computer Science Engineering</p>
          <p className="text-slate-400 mt-2 text-sm">2022 - 2026</p>
        </div>

      </motion.div>

      {/* RIGHT SIDE - SKILLS GRID */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
          Skills <span className="text-cyan-400">*</span>
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="
                group p-6 rounded-2xl bg-[#0b1733] border border-[#1c2b55]
                shadow-lg relative overflow-hidden cursor-pointer
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
                text-5xl mb-3 
                group-hover:scale-125 group-hover:rotate-3
                transition-all duration-500
              ">
                {skill.icon}
              </div>

              <p className="text-slate-200 text-sm tracking-wide font-medium 
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
