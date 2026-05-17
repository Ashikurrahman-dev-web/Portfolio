"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
const ResumePage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const data = {
    name: "Ashikur Rahman",
    title: "Full-Stack Developer",
    contact: {
      phone: "+8801989815238",
      email: "ashikurrahman88722@gmail.com",
      linkedin: "www.linkedin.com/in/ashikur-rahman-6559a93b3",
        location: "Dhaka, Bangladesh",
    },
    summary: "Aspiring Full-Stack Developer with a deep focus on building high-performance, scalable web applications. Expert in the MERN stack and Next.js, with a passion for clean architecture and seamless user experiences. Built 5+ real-world projects and constantly seeking to push the boundaries of modern web technologies.",
    skills: {
      frontend: ["React.js", "Next.js", "Tailwind CSS", "GSAP", "Framer Motion", "Redux"],
      backend: ["Node.js", "Express.js",  "MongoDB"],
      tools: ["Docker", "Git/GitHub", "Figma", "VS Code"],
    },
    experience: [
      {
        role: "Full Stack Developer Journey",
        company: "Self-Taught · Freelance Projects",
        period: "2026",
        description: "Built 5+ real-world projects including ecommerce platforms, social media apps, and developer tools. Specialized in MERN stack development, focusing on performance optimization and scalable architectures.",
        tags: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind"],
      },
      
    ],
    education: [
      {
        degree: "Daora Hadis",
        institution: "Jameul Uloom Madrasa",
        board: "Befaqul Madarisil Arabia Bangladesh",
        period: "2018",
        result: "First Class with Distinction",
      },
      
    ]
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-surface-container-lowest text-on-background p-4 sm:p-8 md:p-12 font-body-md">
      <div className="mx-auto bg-surface-container-low shadow-2xl rounded-3xl overflow-hidden border border-outline-variant/10 print:shadow-none print:border-none print:rounded-none print:bg-white print:text-black">
        
        {/* Header */}
        <header className="bg-green-500 p-8 sm:p-12 text-white flex flex-col md:flex-row justify-between items-center gap-8 print:bg-white print:text-black print:border-b print:border-gray-200">
          <div className="text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-black tracking-tighter"
            >
              {data.name}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl sm:text-2xl font-bold opacity-90 mt-2"
            >
              {data.title}
            </motion.p>
          </div>
          
          <div className="flex flex-col gap-2 text-sm sm:text-base opacity-100 font-medium">
            <h1 className="text-2xl font-bold mt-2">Contact me</h1>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">phone</span>
              {data.contact.phone}
            </span>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">mail</span>
              {data.contact.email}
            </span>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm"><CiLinkedin /></span>
              {data.contact.linkedin}
            </span>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">location_on</span>
              {data.contact.location}
            </span>
               </div>
        </header>

        <div className="p-8 sm:p-12 space-y-10">
          <section>
  <div className="relative pl-6 border-l-2 border-green-500/20 print:border-gray-200">
    
    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 print:bg-black" />

    <h2 className="text-2xl font-black uppercase tracking-widest text-green-500 mb-4 border-b border-green-500/20 pb-2 print:text-black">
      Personal Information
    </h2>

    <p className="text-on-surface-variant leading-relaxed text-lg print:text-black">
     Date of Birth: 19th October 1996 
    </p>
  </div>
</section>
          <section>
  <div className="relative pl-6 border-l-2 border-green-500/20 print:border-gray-200">
    
    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 print:bg-black" />

    <h2 className="text-2xl font-black uppercase tracking-widest text-green-500 mb-4 border-b border-green-500/20 pb-2 print:text-black">
      Profile
    </h2>

    <p className="text-on-surface-variant leading-relaxed text-lg print:text-black">
      {data.summary}
    </p>

  </div>
</section>
<section>
  <h2 className="text-2xl font-black uppercase tracking-widest text-green-500 mb-6 border-b border-green-500/20 pb-2 print:text-black">
    Technical Expertise
  </h2>

  <div className="space-y-8">
    
    {/* Frontend */}
    <div className="relative pl-6 border-l-2 border-green-500/20 print:border-gray-200">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 print:bg-black" />

      <h3 className="font-bold mb-3 text-cyan-500 uppercase tracking-wider text-sm print:text-black">
        Frontend
      </h3>

      <div className="flex flex-wrap gap-2">
        {data.skills.frontend.map((s) => (
          <span
            key={s}
            className="px-3 py-1 bg-green-500/5 border border-green-500/10 rounded-lg text-xs font-bold print:border-gray-200"
          >
            {s}
          </span>
        ))}
      </div>
    </div>

    {/* Backend */}
    <div className="relative pl-6 border-l-2 border-green-500/20 print:border-gray-200">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 print:bg-black" />

      <h3 className="font-bold mb-3 text-cyan-500 uppercase tracking-wider text-sm print:text-black">
        Backend
      </h3>

      <div className="flex flex-wrap gap-2">
        {data.skills.backend.map((s) => (
          <span
            key={s}
            className="px-3 py-1 bg-green-500/5 border border-green-500/10 rounded-lg text-xs font-bold print:border-gray-200"
          >
            {s}
          </span>
        ))}
      </div>
    </div>

    {/* Tools */}
    <div className="relative pl-6 border-l-2 border-green-500/20 print:border-gray-200">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 print:bg-black" />

      <h3 className="font-bold mb-3 text-cyan-500 uppercase tracking-wider text-sm print:text-black">
        Tools
      </h3>

      <div className="flex flex-wrap gap-2">
        {data.skills.tools.map((s) => (
          <span
            key={s}
            className="px-3 py-1 bg-surface-container-highest border border-outline-variant/10 rounded-lg text-xs font-bold print:border-gray-200"
          >
            {s}
          </span>
        ))}
      </div>
    </div>

  </div>
</section>
          
    <section>
<h2 className="text-2xl font-black uppercase tracking-widest text-green-500 mb-6 border-b border-green-500/20 pb-2 print:text-black">
              Experience & Projects
            </h2>
            <div className="space-y-8">
              {data.experience.map((exp, i) => (
<div key={i} className="relative pl-6 border-l-2 border-green-500/20 print:border-gray-200">
<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 print:bg-black" />
      <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-2">
      <h3 className="text-xl font-bold text-on-background print:text-black">{exp.role}</h3>
<span className="text-sm font-bold text-green-500 opacity-80 print:text-black">{exp.period}</span>
                  </div>
<p className="text-sm font-black text-cyan-500 mb-3 print:text-black">{exp.company}</p>
<p className="text-on-surface-variant text-base leading-relaxed mb-4 print:text-black">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(t => (
<span key={t} className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
<section>
  <div className="relative pl-6 border-l-2 border-green-500/20 print:border-gray-200">
    
    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 print:bg-black" />

    <h2 className="text-2xl font-black uppercase tracking-widest text-green-500 mb-4 border-b border-green-500/20 pb-2 print:text-black">
      Languages
    </h2>

    <p className="text-on-surface-variant leading-relaxed text-lg print:text-black">
      Bengali: Native  
    </p>
    <p className="text-on-surface-variant leading-relaxed text-lg print:text-black">
      English: Fluent  
    </p>
    <p className="text-on-surface-variant leading-relaxed text-lg print:text-black">
      Arabic: Fluent  
    </p>
  </div>
</section>
          {/* Education */}
          <section>
  <h2 className="text-2xl font-black uppercase tracking-widest text-green-500 mb-6 border-b border-green-500/20 pb-2 print:text-black">
    Education
  </h2>

  <div className="grid sm:grid-cols-2 gap-8">
    {data.education.map((edu, i) => (
      <div
        key={i}
        className="relative pl-6 border-l-2 border-green-500/20 print:border-gray-200"
      >
        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 print:bg-black" />

        <div className="space-y-1">
          <h3 className="text-lg font-bold text-on-background print:text-black">
            {edu.degree}
          </h3>

          <p className="text-sm font-bold text-cyan-500 print:text-black">
            {edu.institution}
          </p>

          <p className="text-xs text-on-surface-variant font-medium print:text-black">
            {edu.board} • {edu.period}
          </p>

          <p className="text-sm font-black text-green-500 mt-2 print:text-black">
            {edu.result}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>
        </div>

    
        <div className="p-8 bg-surface-container-highest border-t border-outline-variant/10 flex flex-col sm:flex-row justify-between items-center gap-6 print:hidden">
          <Link href="/" className="flex items-center gap-2 text-green-500 font-bold hover:gap-4 transition-all">
            <span className="material-symbols-outlined">arrow_back</span>
            Back to Portfolio
          </Link>
          <button 
            onClick={handlePrint}
            className="bg-gradient-to-r from-green-500 via-cyan-500 text-white px-8 py-3 rounded-xl font-bold shadow-xl shadow-green-500/20 hover:scale-105 transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined">print<span>download</span></span>
            Print/Download
          </button>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-on-surface-variant/40 print:hidden">
        Designed & Built by Ashikur Rahman with Next.js & Tailwind CSS
      </div>

      <style jsx global>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
          }
          .print\:hidden {
            display: none !important;
          }
          header {
            padding-top: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ResumePage;