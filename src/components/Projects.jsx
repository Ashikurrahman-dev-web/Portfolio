"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TiltCard from "./TiltCard";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS_PER_PAGE = 4;

const Projects = () => {
  const sectionRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);

  const allProjects = [
    {
      title: "AgriTech",
description: "A modern AI-powered Smart Agriculture Platform designed to help farmers make better decisions through crop disease detection, soil analysis, weather information, crop planning, market prices, and real-time communication with agricultural experts.",
tags: [ "Next.js", "Better Auth", "Node.js", "Express.js", "PostgreSql", "Socket.io"],
      image: "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      liveLink: "https://agriculture-delta-ochre.vercel.app",
      repoLink: "https://github.com/Ashikurrahman-dev-web/Agriculture"
    },
    {
      title: "Blood Bridge",
description: "A full-stack Blood Donation Management System that connects blood donors with recipients, making the blood donation process faster, easier, and more organized.",
tags: [ "Next.js", "Better Auth", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "stripe"],
image: "https://images.openai.com/static-rsc-4/rQPoDvoAugbXrJTxk_g6n-EemyENRqWHB0yLAZ2yWO5KEEqnft8GsbgvZDBdAQW9R3AxNLked7n_2lRD6FeNStX0JHcvPodPVnuCB3NJqWeZJbb0ydtPW4-DEVIojVeuX_7H-N7d4nl9benTsPhZA1vjhqkjANzMpZoAWpcIWH1zu8DRTIfzOMLiYDlGRHKa?purpose=inline",
      liveLink: "https://blood-bridge-sage.vercel.app",
      repoLink: "https://github.com/Ashikurrahman-dev-web/Blood-Bridge"
    },
  ];

  const totalPages = Math.ceil(allProjects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const displayedProjects = allProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-title", {
        opacity: 0,
        y: 40,
        filter: "blur(10px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
  ref={sectionRef}
  id="projects"
  className="px-4 sm:px-6 lg:px-8 py-[80px] sm:py-[110px] lg:py-[140px]"
>
  <div className="max-w-7xl mx-auto">
    
    {/* Heading */}
    <div className="text-center mb-14 sm:mb-20 projects-title">
      <span className="text-green-500 font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[10px] sm:text-xs">
        Selected Works
      </span>

      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-on-background mt-3">
        Projects I've Built
      </h2>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 projects-grid">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="contents"
        >
          {displayedProjects.map((project, index) => (
            <div key={project.title} className="project-card-wrap">
              
              <TiltCard className="h-full">
                <div className="relative h-[380px] sm:h-[430px] lg:h-[460px] rounded-[28px] sm:rounded-[32px] overflow-hidden group cursor-default shadow-2xl border border-outline-variant/10 bg-surface-container-low">
                  
                  {/* Number Badge */}
                  <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center">
                    <span className="text-[9px] sm:text-[10px] font-black text-white/70">
                      {String(
                        index + 1 + (currentPage - 1) * PROJECTS_PER_PAGE
                      ).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      unoptimized={typeof project.image === "string"}
                      className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-110"
                    />
                  </div>

                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 z-10 transition-opacity duration-700 group-hover:opacity-85" />

                  <div className="absolute inset-0 bg-black/10 z-[5]" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8 lg:p-10 z-20">
                    
                    <div className="translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tIndex) => (
                          <span
                            key={tIndex}
                            className="px-2.5 py-1 bg-white/10 backdrop-blur-md rounded-lg text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-white border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3 drop-shadow-xl">
                        {project.title}
                      </h4>

                      {/* Description */}
                      <p className="text-white/80 text-sm leading-relaxed mb-6 sm:mb-8 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Buttons */}
                      <div className="flex flex-wrap gap-3 opacity-100 sm:opacity-0 sm:translate-y-4 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-all duration-700 delay-100">
                        
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-green-500 via-cyan-500 text-white px-4 sm:px-5 py-2.5 rounded-xl font-bold text-[10px] sm:text-[11px] uppercase tracking-wider hover:scale-105 transition-transform flex items-center gap-2"
                        >
                          Live Demo
                          <span className="material-symbols-outlined text-sm">
                            arrow_outward
                          </span>
                        </a>

                        <a
                          href={project.repoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/10 backdrop-blur-xl border border-white/10 text-white px-4 sm:px-5 py-2.5 rounded-xl font-bold text-[10px] sm:text-[11px] uppercase tracking-wider hover:bg-white/20 transition-all flex items-center gap-2"
                        >
                          GitHub
                          <span className="material-symbols-outlined text-sm">
                            code
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  </div>
</section>
  );
};

export default Projects;