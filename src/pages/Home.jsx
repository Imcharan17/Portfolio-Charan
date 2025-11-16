import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

export default function Home() {
  return (
    <section className="h-full flex flex-col items-center justify-center text-center px-6">

      {/* Center C Avatar at TOP */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center"
      >
        {/* Neon avatar circle */}
        <div className="rounded-full w-32 h-32 bg-gradient-to-br from-cyan-400 to-violet-500 
                        shadow-[0_0_40px_rgba(0,255,255,0.6)]
                        flex items-center justify-center 
                        text-4xl font-bold text-black mb-6">
          C
        </div>

        {/* MAIN HEADING */}
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4">
          Hi, I'm{" "}
          <span className="text-cyan-300 opacity-85 drop-shadow-[0_0_6px_rgba(0,255,255,0.4)]">
            Charan Sai Dubaguntla
          </span>
        </h1>

        {/* ROLE */}
        <p className="text-xl text-cyan-400 font-semibold mb-3">
          Software Engineer
        </p>

        {/* QUOTE */}
        <p className="text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed text-lg italic">
          “Crafting solutions that blend logic, creativity, and precision.”
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 justify-center mb-8">
          <a
            href="#projects"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl 
                       bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-semibold 
                       shadow-lg transform transition hover:scale-[1.05]"
          >
            View Projects <FaArrowRight />
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-2xl border border-white/10 text-slate-100 
                       hover:border-cyan-400 hover:text-cyan-300 transition hover:scale-[1.04]"
          >
            Contact
          </a>
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex gap-6 mt-4 text-xl">

          {/* GitHub */}
          <a
            href="https://github.com/Imcharan17"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-cyan-400 transition transform hover:scale-110"
          >
            <FaGithub size={30} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/dubaguntla-charan-sai-900253263/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-cyan-400 transition transform hover:scale-110"
          >
            <FaLinkedin size={30} />
          </a>

          {/* Phone */}
          <a
            href="tel:6281482851"
            className="text-slate-300 hover:text-cyan-400 transition transform hover:scale-110"
          >
            <FaPhone size={30} />
          </a>

        </div>

      </motion.div>

    </section>
  );
}
