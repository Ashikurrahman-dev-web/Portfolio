"use client";

import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

const TechStack = () => {
  const techs = [
    {
      name: "JavaScript",
      icon: "javascript",
      color: "text-yellow-400",
      bg: "bg-yellow-400/10 group-hover:bg-yellow-400/20",
      skills: ["ES6+ Modern Syntax", "DOM Manipulation / API Handling"]
    },
    {
      name: "TypeScript",
      icon: "code_blocks",
      color: "text-blue-500",
      bg: "bg-blue-500/10 group-hover:bg-blue-500/20",
      skills: ["Type Safety System", "Scalable Code Structure"]
    },
    {
      name: "React & Next.js",
      icon: "deployed_code",
      color: "text-cyan-400",
      bg: "bg-cyan-400/10 group-hover:bg-cyan-400/20",
      skills: ["Component-Based Architecture", "State Management (Hooks)"]
    },
    {
      name: "Node.js & Express",
      icon: "terminal",
      color: "text-green-500",
      bg: "bg-green-500/10 group-hover:bg-green-500/20",
      skills: ["Backend API Development", "RESTful API Design"]
    },
    {
      name: "MongoDB & SQL",
      icon: "database",
      color: "text-orange-400",
      bg: "bg-orange-400/10 group-hover:bg-orange-400/20",
      skills: ["NoSQL Database Design", "Data Modeling & Querying"]
    },
    {
      name: "Deployment & DevOps",
      icon: "cloud_upload",
      color: "text-purple-400",
      bg: "bg-purple-400/10 group-hover:bg-purple-400/20",
      skills: ["Vercel / Netlify Hosting", "Git Workflow & CI/CD"]
    }
  ];

  return (
    <section
  id="skills"
  className="px-4 sm:px-6 lg:px-8 py-[80px] sm:py-[110px] lg:py-[130px]"
>
  <div className="max-w-7xl mx-auto">
    
    {/* Heading */}
    <div className="mb-14 sm:mb-16 text-center">
      <span className="text-green-500 font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[10px] sm:text-xs">
        Technical Expertise
      </span>

      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-on-background mt-3">
        My Tech Stack
      </h2>

      <p className="text-on-surface-variant/60 mx-auto mt-4 max-w-lg text-sm sm:text-base leading-relaxed px-2">
        Tools and technologies I use to build modern, scalable applications.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
      {techs.map((tech, i) => (
        <Magnetic key={i} strength={0.1}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="glass-card relative overflow-hidden rounded-[28px] sm:rounded-[32px] border border-white/5 p-6 sm:p-8 shadow-xl transition-all duration-500 hover:border-green-500/20 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)] cursor-default h-full"
          >
            {/* Glow */}
            <div className="absolute top-0 right-0 w-28 sm:w-32 h-28 sm:h-32 bg-green-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-1/2 translate-x-1/2" />

            {/* Top */}
            <div className="flex items-start justify-between mb-6">
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${tech.bg}`}
              >
                <span
                  className={`material-symbols-outlined ${tech.color} text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-500`}
                >
                  {tech.icon}
                </span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-bold text-on-background mb-4 font-heading">
              {tech.name}
            </h3>

            {/* Skills */}
            <ul className="space-y-2.5">
              {tech.skills.map((skill, si) => (
                <li
                  key={si}
                  className="flex items-center gap-3 text-sm sm:text-[15px] text-on-surface-variant/70"
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full shrink-0 ${tech.color} opacity-60`}
                  />

                  <span className="leading-relaxed">{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </Magnetic>
      ))}
    </div>
  </div>
</section>
  );
};

export default TechStack;
