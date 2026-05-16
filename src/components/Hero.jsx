"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "./Magnetic";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  const [roleIndex, setRoleIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  const roles = [
    "Full Stack Developer",
    "Problem Solver",
    "MERN Stack Developer",
  ];

  const [sequenceIndex, setSequenceIndex] = useState(0);

  const sequence = ["Hey,", "this is", "Ashikur Rahman"];

  // Parallax
  const bgY = useTransform(scrollY, [0, 800], [0, 200]);
  const textY = useTransform(scrollY, [0, 800], [0, -100]);
  const imageY = useTransform(scrollY, [0, 800], [0, -150]);

  // Brand text movement
  const brandX = useTransform(scrollY, [0, 1000], [0, -200]);

  useEffect(() => {
    gsap.from(".hero-badge", {
      opacity: 0,
      scale: 0.8,
      y: -20,
      duration: 1.5,
      ease: "expo.out",
      delay: 0.2,
    });

    const seqInterval = setInterval(() => {
      setSequenceIndex((prev) => (prev + 1) % sequence.length);
    }, 2500);

    let timeout;

    const roleInterval = setInterval(() => {
      setIsGlitching(true);

      timeout = setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsGlitching(false);
      }, 300);
    }, 3200);

    return () => {
      clearInterval(seqInterval);
      clearInterval(roleInterval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section
  id="home"
  ref={containerRef}
  className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-[110px] sm:pt-[130px] lg:pt-[150px] pb-[70px] sm:pb-[100px] min-h-screen"
>
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-14 lg:gap-24">
    
    {/* SEO */}
    <h1 className="sr-only">
      Ashikur Rahman — Full-Stack Developer & Mern Stack Developer from
      Bangladesh
    </h1>

    {/* Background */}
    <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
      
      <div className="absolute -top-[10%] -left-[10%] w-[300px] sm:w-[500px] lg:w-[600px] h-[300px] sm:h-[500px] lg:h-[600px] bg-green-500/5 rounded-full blur-[90px] sm:blur-[140px]" />

      <div className="absolute top-[20%] -right-[10%] w-[260px] sm:w-[400px] lg:w-[500px] h-[260px] sm:h-[400px] lg:h-[500px] bg-green-500/5 rounded-full blur-[90px] sm:blur-[140px]" />

      {/* Brand Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full whitespace-nowrap pointer-events-none opacity-[0.03] select-none overflow-hidden">
        <motion.span
          style={{ x: brandX }}
          className="block text-[32vw] sm:text-[24vw] lg:text-[18vw] font-black uppercase tracking-tighter"
        >
          ASHIKUR — ASHIKUR — ASHIKUR
        </motion.span>
      </div>
    </motion.div>

    {/* Left Side */}
    <motion.div
      style={{ y: textY }}
      className="space-y-8 sm:space-y-10 max-w-2xl"
    >
      {/* Badge */}
      <div className="hero-badge inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-sm backdrop-blur-xl">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

        <span className="text-[10px] sm:text-xs font-bold text-green-500 uppercase tracking-widest">
          Available for new projects
        </span>
      </div>

      <div className="space-y-5 sm:space-y-6">
        
        {/* Main Text */}
        <div className="min-h-[90px] sm:min-h-[120px] md:min-h-[160px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={sequenceIndex}
              initial={{
                opacity: 0,
                y: 40,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: -40,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[2.3rem] sm:text-[3.5rem] md:text-[5rem] leading-[1] tracking-tight font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500"
            >
              {sequence[sequenceIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Subtitle */}
        <div className="flex flex-col gap-3 sm:gap-4">
          
          <span className="block text-xs sm:text-lg md:text-xl opacity-90 font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-zinc-500 leading-relaxed">
            Full-Stack Developer & MERN Stack Developer from Bangladesh
          </span>

          {/* Role Rotator */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-xl sm:text-2xl md:text-3xl font-bold text-zinc-500">
            
            <span className="shrink-0">I&apos;m a</span>

            <div
              className="relative h-10 sm:h-12 overflow-hidden"
              style={{
                minWidth: "clamp(160px, 45vw, 380px)",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{
                    y: 40,
                    opacity: 0,
                    filter: "blur(8px)",
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    filter: isGlitching
                      ? "blur(4px)"
                      : "blur(0px)",
                    x: isGlitching
                      ? [0, -4, 4, -2, 2, 0]
                      : 0,
                  }}
                  exit={{
                    y: -40,
                    opacity: 0,
                    filter: "blur(8px)",
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500"
                  style={{
                    textShadow:
                      "0 0 20px rgba(74,222,128,0.5)",
                  }}
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>

              {/* Underline */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2,
                }}
                className="absolute bottom-0 left-0 h-[3px] w-full origin-left rounded-full bg-gradient-to-r from-green-500 via-cyan-500 to-transparent"
              />
            </div>
          </div>

          {/* Dots */}
          <div className="flex gap-2 pt-1">
            {roles.map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  width: i === roleIndex ? 24 : 6,
                  opacity: i === roleIndex ? 1 : 0.3,
                }}
                transition={{ duration: 0.4 }}
                className={`h-1.5 rounded-full cursor-pointer ${
                  i === roleIndex
                    ? "bg-green-500"
                    : "bg-zinc-500"
                }`}
                onClick={() => setRoleIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          className="max-w-lg text-base sm:text-lg text-zinc-500 leading-relaxed"
        >
          I build high-performance, scalable web applications with a focus on
          modern architectures and seamless user experiences.
        </motion.p>
      </div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 1,
        }}
        className="flex flex-col sm:flex-row gap-4 sm:gap-5 pt-2 sm:pt-4"
      >
        {/* Button 1 */}
        <Magnetic strength={0.2}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
            className="w-full sm:w-auto bg-gradient-to-r from-green-500 via-cyan-500 text-white px-7 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold shadow-2xl text-sm sm:text-base"
          >
            Start a Project
          </motion.button>
        </Magnetic>

        {/* Button 2 */}
        <Magnetic strength={0.2}>
          <Link href="/resume">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto border border-green-500/30 text-green-500 px-7 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold hover:bg-green-500/10 transition-all duration-500 text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">
                visibility
              </span>

              View Resume
            </motion.div>
          </Link>
        </Magnetic>

        {/* Button 3 */}
        <Magnetic strength={0.2}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
            className="w-full sm:w-auto border border-green-500/30 bg-green-500/5 text-green-500 backdrop-blur-xl px-7 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-sm sm:text-base"
          >
            View Projects
          </motion.button>
        </Magnetic>
      </motion.div>
    </motion.div>

    {/* Right Side */}
    <motion.div
      style={{ y: imageY }}
      initial={{
        opacity: 0,
        scale: 0.9,
        filter: "blur(20px)",
      }}
      animate={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.5,
      }}
      className="relative flex flex-col items-center lg:justify-self-end"
    >
      <div className="relative group">
        
        {/* Glow */}
        <div className="absolute inset-0 bg-green-500/20 blur-[60px] sm:blur-[80px] rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

        {/* Image */}
        <div className="relative w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px] rounded-full p-1.5 border border-white/10 bg-black/20 overflow-hidden shadow-2xl">
          
          <div className="relative w-full h-full rounded-full overflow-hidden bg-black/40">
            <Image
              src="/C.png"
              fill
              alt="Ashikur Rahman - Full-Stack Developer"
              priority
              className="object-cover grayscale opacity-90 dark:opacity-80 hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-700 ease-out"
            />

            {/* Vignette */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, transparent 20%, var(--background) 80%)",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Username */}
      <div className="mt-6 sm:mt-8 text-center">
        <p className="text-xs sm:text-sm font-medium text-green-500 uppercase tracking-[0.2em] opacity-80">
          ashikur-rahman
        </p>
      </div>
    </motion.div>
  </div>
</section>
  );
};

export default Hero;