import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaBus,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaFileInvoiceDollar,
  FaIdBadge,
  FaLeaf,
  FaMapMarkedAlt,
  FaRobot,
  FaServer,
  FaCamera
} from "react-icons/fa";
import api from "../api";

const projectFallback = [
  {
    id: 1,
    title: "CropCare AI",
    eyebrow: "AI-powered agriculture platform",
    desc: "A full-stack crop disease detection and farmer support platform that combines AI, secure APIs, crop management, and a modern dashboard to help farmers make better decisions.",
    tags: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "React.js",
      "JavaScript",
      "MySQL",
      "JDBC",
      "Hibernate",
      "JPA",
      "REST API",
      "HTML",
      "CSS",
      "JWT"
    ],
    highlights: [
      "AI-powered crop disease detection",
      "Secure authentication and role-based access",
      "Crop management and farmer support",
      "Dashboard analytics and support tickets"
    ],
    accent: "from-emerald-400 via-lime-300 to-cyan-400",
    liveUrl: "https://crop-care-frontend-568o.onrender.com/",
    image:
      "https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=1200&q=80"
  },

  {
    id: 2,
    title: "Visitor Pass Management System",
    eyebrow: "Secure, streamlined visitor access",
    desc: "A responsive visitor management platform with role-based dashboards for administrators, receptionists, and employees. It supports the complete visitor workflow from registration and approval to check-in, check-out, and activity tracking.",
    tags: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "Axios"
    ],
    highlights: [
      "Role-based dashboards and protected navigation",
      "Visitor registration, approval, check-in, and check-out",
      "Search, filtering, form validation, and activity tracking",
      "Business rules for visit dates, duplicate requests, and access control",
      "Dashboard statistics for pending and active visits"
    ],
    accent: "from-cyan-300 via-blue-400 to-indigo-500",
    liveUrl: "https://gatehouse-frontend.onrender.com/",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605df5b?auto=format&fit=crop&w=1200&q=80"
  },

  {
    id: 3,
    title: "E-Bus Management",
    eyebrow: "Smarter public transport",
    desc: "A real-time bus management website designed to make transport information, bus tracking, and operations easier to access and understand.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
      "Firestore",
      "Google Maps API"
    ],
    highlights: [
      "Real-time bus tracking",
      "Interactive map-based transport information",
      "Firebase authentication",
      "Responsive user interface"
    ],
    accent: "from-amber-300 via-orange-400 to-rose-500",
    liveUrl: "https://imcharan17.github.io/E-Bus-managment/",
    image:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80"
  },

  {
    id: 4,
    title: "Travel Planner",
    eyebrow: "Plan every journey with clarity",
    desc: "A responsive travel-planning website that allows users to explore destinations, organize trips, and view travel information through a clean and interactive interface.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "JSON"
    ],
    highlights: [
      "Interactive destination discovery",
      "JSON-based travel data",
      "Trip and itinerary information",
      "Responsive travel interface"
    ],
    accent: "from-sky-400 via-cyan-300 to-indigo-500",
    liveUrl: "https://imcharan17.github.io/Travel_Planer/",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80"
  },

  {
    id: 5,
    title: "Invoice Generator",
    eyebrow: "Professional invoices in moments",
    desc: "A React-based invoice generator that allows users to create professional invoices, manage itemized billing, and calculate totals dynamically.",
    tags: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    highlights: [
      "Dynamic invoice generation",
      "Automatic total calculations",
      "Item and quantity management",
      "Responsive invoice interface"
    ],
    accent: "from-violet-500 via-fuchsia-400 to-rose-400",
    liveUrl: "https://invoice-generator-react-lime.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80"
  },

  {
    id: 6,
    title: "API Gateway",
    eyebrow: "Centralized backend gateway",
    desc: "A backend API gateway designed to provide a centralized entry point for services, handling request routing and communication between clients and backend services.",
    tags: [
      "Java",
      "Spring Boot",
      "Spring Cloud",
      "REST API",
      "Microservices",
      "Maven"
    ],
    highlights: [
      "Centralized API entry point",
      "Microservice request routing",
      "REST API communication",
      "Scalable backend architecture"
    ],
    accent: "from-blue-400 via-indigo-500 to-violet-500",
    liveUrl: "",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
  },

  {
    id: 7,
    title: "Sign Language Detection",
    eyebrow: "Real-time computer vision",
    desc: "A computer-vision based sign language detection project designed to recognize hand signs in real time and convert detected signs into meaningful output.",
    tags: [
      "Python",
      "TensorFlow",
      "OpenCV",
      "MediaPipe",
      "Machine Learning",
      "Text-to-Speech"
    ],
    highlights: [
      "Real-time hand sign detection",
      "Computer vision processing",
      "Machine learning based recognition",
      "Text-to-speech output"
    ],
    accent: "from-fuchsia-500 via-violet-500 to-cyan-400",
    liveUrl: "",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=80"
  }
];

const projectIcons = [
  FaLeaf,
  FaIdBadge,
  FaBus,
  FaMapMarkedAlt,
  FaFileInvoiceDollar,
  FaServer,
  FaCamera
];

export default function Projects() {
  const [projects, setProjects] = useState(projectFallback);

  useEffect(() => {
    api
      .get("/api/projects")
      .then(({ data }) => {
        if (Array.isArray(data) && data.length) {
          setProjects(data);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <motion.section
      className="w-full px-5 py-8 sm:px-8 sm:py-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="mx-auto max-w-7xl xl:max-w-[1500px]">

        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-cyan-300 text-sm font-semibold tracking-[0.25em] uppercase mb-3">
            Selected work
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold">
            Projects built to solve{" "}
            <span className="text-cyan-400">real needs</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-slate-300 leading-relaxed">
            Each project combines thoughtful design with practical technology,
            making the value easy to understand at a glance.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:gap-10">

          {projects.map((project, index) => {
            const Icon = projectIcons[index] || FaCheckCircle;

            const accent =
              project.accent || "from-cyan-400 to-violet-500";

            return (
              <motion.article
                key={project.id}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0c1535]/90 shadow-[0_18px_45px_rgba(0,0,0,0.28)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300/40 hover:shadow-[0_20px_50px_rgba(34,211,238,0.16)]"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.12
                }}
              >

                {/* Background Glow */}
                <div
                  className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${accent} opacity-15 blur-2xl transition-opacity duration-500 group-hover:opacity-30`}
                />

                {/* Project Image */}
                <div className="relative h-44 w-full overflow-hidden sm:h-48">

                  <img
                    src={
                      project.image ||
                      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
                    }
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1535] via-[#0c1535]/30 to-transparent" />

                  {/* Project Icon */}
                  <div
                    className={`absolute bottom-4 left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-xl text-slate-950 shadow-lg`}
                  >
                    <Icon />
                  </div>

                </div>

                {/* Card Content */}
                <div className="relative flex flex-1 flex-col p-5 sm:p-6">

                  {/* Top Row */}
                  <div className="flex items-start justify-between gap-4">

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                        {project.eyebrow}
                      </p>

                      <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                        {project.title}
                      </h3>
                    </div>

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.title} live demo`}
                        className="shrink-0 rounded-full border border-cyan-300/30 p-3 text-cyan-200 transition hover:bg-cyan-300 hover:text-slate-950"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    ) : (
                      <span className="shrink-0 rounded-full border border-white/10 px-3 py-2 text-xs text-slate-400">
                        Demo link soon
                      </span>
                    )}

                  </div>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {project.desc}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-5 space-y-2 border-y border-white/10 py-4 text-sm text-slate-200">

                    {(project.highlights || []).map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-2"
                      >
                        <FaCheckCircle className="mt-0.5 shrink-0 text-cyan-300" />

                        <span>{highlight}</span>
                      </li>
                    ))}

                  </ul>

                  {/* Tech Stack */}
                  <div className="relative mt-5 flex flex-wrap gap-2">

                    {(project.tags || []).map((tag) => (
                      <span
                        key={tag}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-2.5 py-1 text-xs font-medium text-cyan-100"
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                  {/* Live Project Link */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="relative mt-6 inline-flex items-center gap-2 font-semibold text-cyan-300 transition hover:text-white"
                    >
                      View live project

                      <FaExternalLinkAlt className="text-sm" />
                    </a>
                  )}

                </div>

              </motion.article>
            );
          })}

        </div>
      </div>
    </motion.section>
  );
}
