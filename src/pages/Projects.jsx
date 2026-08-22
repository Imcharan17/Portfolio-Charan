import React, { useEffect, useState } from "react"; 
import api from "../api";
import { motion } from "framer-motion";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // NEW PROJECT LIST WITH SHORT CODES
  const sample = [
    {
      id: 1,
      short: "AI",
      title: "AI Support Ticket System",
      desc: "Smart AI-powered support automation platform built with Spring Boot + NLP.",
      tags: ["Spring Boot", "NLP", "AI", "REST API", "MySQL"],
    },
    {
      id: 2,
      short: "BUS",
      title: "E-Bus Management System",
      desc: "Real-time bus tracking and ticketing platform with GPS integration.",
      tags: ["HTML", "JavaScript", "Firebase", "GPS API"],
    },
    {
      id: 3,
      short: "SIGN",
      title: "Sign Language Translator",
      desc: "AI-driven hand gesture translator using OpenCV + MediaPipe.",
      tags: ["Python", "OpenCV", "MediaPipe", "AI"],
    },
    {
      id: 4,
      short: "API",
      title: "API Gateway Management System",
      desc: "Gateway with routing, rate-limiting, monitoring and authentication.",
      tags: ["Spring Boot", "Docker", "NGINX", "Microservices"],
    },
  ];

  useEffect(() => {
    api
      .get("/projects")   // 🔥 FIXED
      .then((r) => {
        setProjects(r.data);
        setLoading(false);
      })
      .catch(() => {
        setProjects(sample);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <p className="text-center text-cyan-400">Loading Projects...</p>;

  return (
    <motion.section
      className="py-20 px-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Featured <span className="text-cyan-400">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            className="
              p-8 rounded-2xl bg-[#0c1535] border border-white/5 
              shadow-[0_0_20px_rgba(0,0,0,0.4)]
              hover:shadow-[0_0_35px_rgba(0,255,255,0.25)] 
              hover:border-cyan-400/40
              transition-all duration-500
              backdrop-blur-xl
            "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            {/* Thumbnail with short code */}
            <div className="
              h-44 rounded-xl bg-gradient-to-br from-cyan-400/80 to-violet-600/80 
              flex items-center justify-center text-4xl font-extrabold text-black mb-6
              shadow-[0_0_25px_rgba(0,255,255,0.45)]
            ">
              {p.short}
            </div>

            <h3 className="text-2xl font-semibold mb-3 text-cyan-300">
              {p.title}
            </h3>

            <p className="text-slate-300 leading-relaxed mb-4">
              {p.desc}
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-sm bg-[#14204b] text-cyan-300 border border-cyan-400/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
