import React from "react";
import Background from "./components/Background";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

const navigation = ["home", "about", "projects", "experience", "contact"];

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white selection:bg-cyan-300 selection:text-slate-950">
      <Background />
      <header className="fixed inset-x-0 top-0 z-30 px-4 pt-4 sm:px-6">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-[#08112b]/75 px-4 py-3 shadow-[0_10px_35px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:px-6">
          <a href="#home" className="font-bold tracking-tight text-white transition hover:text-cyan-300">CS<span className="text-cyan-300">.</span></a>
          <div className="flex flex-wrap justify-end gap-x-3 gap-y-1 text-xs font-medium text-slate-300 sm:gap-x-6 sm:text-sm">
            {navigation.map((item) => <a key={item} href={`#${item}`} className="transition hover:text-cyan-300">{item.charAt(0).toUpperCase() + item.slice(1)}</a>)}
          </div>
        </nav>
      </header>
      <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
        <section id="home" className="snap-start min-h-screen"><Home /></section>
        <section id="about" className="snap-start min-h-screen flex items-center pt-28 pb-12"><About /></section>
        <section id="projects" className="snap-start min-h-screen flex items-center pt-28 pb-12"><Projects /></section>
        <section id="experience" className="snap-start min-h-screen flex items-center pt-28 pb-12"><Experience /></section>
        <section id="contact" className="snap-start min-h-screen flex items-center pt-28 pb-12"><Contact /></section>
      </main>
    </div>
  );
}
