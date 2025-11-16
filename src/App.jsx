import React from "react";
import Background from "./components/Background";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="relative text-white">
      <Background />

      {/* NAVBAR (restored) */}
      <header className="fixed top-0 left-0 w-full z-20 p-6">
        <nav className="max-w-6xl mx-auto flex justify-end items-center">
          

          <div className="flex gap-6 font-medium text-lg">
            {["home", "about", "projects", "experience", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="
                  relative 
                  hover:text-cyan-400 
                  transition-all 
                  duration-300
                  after:absolute 
                  after:left-0 
                  after:-bottom-1 
                  after:w-0 
                  after:h-[2px] 
                  after:bg-cyan-400 
                  after:transition-all 
                  after:duration-300
                  hover:after:w-full
                "
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* FULLPAGE SCROLL */}
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">

        <section id="home" className="snap-start min-h-screen pt-32 mb-12">
          <Home />
        </section>

        <section id="about" className="snap-start min-h-screen pt-32 mb-12">
          <About />
        </section>

        <section id="projects" className="snap-start min-h-screen pt-32 mb-12">
          <Projects />
        </section>

        <section id="experience" className="snap-start min-h-screen pt-32 mb-12">
          <Experience />
        </section>

        <section id="contact" className="snap-start min-h-screen pt-32 mb-12">
          <Contact />
        </section>

      </div>
    </div>
  );
}
