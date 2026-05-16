"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-heading", {
        opacity: 0,
        x: -50,
        filter: "blur(10px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      gsap.from(".about-content-item", {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      gsap.fromTo(".bento-item", 
        {
          opacity: 0,
          scale: 0.8,
          y: 40,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
<section
  ref={sectionRef}
  id="about"
  className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-[80px] sm:py-[110px] lg:py-[140px]"
>
  <div className="max-w-7xl mx-auto">
    
    {/* Heading */}
    <div className="about-heading text-center space-y-3 sm:space-y-4 mb-14 sm:mb-20">
      <span className="text-green-500 font-bold tracking-[0.35em] sm:tracking-[0.4em] uppercase text-[10px] sm:text-xs">
        The Architect
      </span>

      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-on-background">
        About Me
      </h2>
    </div>

    {/* Main Grid */}
    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
      
      {/* Left Content */}
      <div className="lg:col-span-6 space-y-8 sm:space-y-10 text-center lg:text-left">
        
        <div className="space-y-5 sm:space-y-6">
          
          <div className="about-content-item">
            <p className="text-base sm:text-lg lg:text-xl font-medium text-on-background leading-relaxed">
              I'm Ashikur Rahman, a Full-Stack Developer based in Bangladesh
              with a passion for high-performance digital experiences.
            </p>
          </div>

          <div className="about-content-item">
            <p className="text-sm sm:text-base lg:text-lg text-on-surface-variant leading-relaxed">
              I specialize in Frontend and Backend development, bridging the
              gap between complex logic and intuitive interfaces. Whether it's
              building scalable architectures or crafting pixel-perfect
              interactive frontends, I focus on delivering code that is as
              clean as it is impactful.
            </p>
          </div>
        </div>
      </div>

      {/* Right Bento Grid */}
      <div className="lg:col-span-6 relative flex flex-col justify-center">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          
          {/* Box 1 */}
          <div className="bento-item sm:col-span-2 glass-card p-6 sm:p-8 rounded-[28px] sm:rounded-[32px] border border-white/5 hover:border-green-500/30 shadow-xl transition-all duration-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group overflow-hidden relative min-h-[180px]">
            
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10">
              <h4 className="text-2xl sm:text-3xl font-black text-on-background mb-2">
                Problem Solver
              </h4>

              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Turning complex ideas into elegant, scalable solutions.
              </p>
            </div>

            <span className="material-symbols-outlined text-5xl sm:text-7xl text-on-surface-variant/10 group-hover:text-green-500/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 relative z-10 self-end sm:self-auto">
              extension
            </span>
          </div>

          {/* Box 2 */}
          <div className="bento-item glass-card p-6 rounded-[28px] sm:rounded-[32px] border border-white/5 hover:border-blue-500/30 shadow-xl transition-all duration-500 flex flex-col justify-center items-center text-center group min-h-[170px] sm:min-h-[190px] relative overflow-hidden">
            
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
              <span className="material-symbols-outlined text-3xl text-blue-400">
                code
              </span>
            </div>

            <h4 className="text-lg sm:text-xl font-bold text-on-background">
              Clean Code
            </h4>

            <p className="text-[10px] sm:text-xs text-on-surface-variant mt-2 tracking-widest uppercase font-bold">
              Architecture
            </p>
          </div>

          {/* Box 3 */}
          <div className="bento-item glass-card p-6 rounded-[28px] sm:rounded-[32px] border border-white/5 hover:border-yellow-600/30 shadow-xl transition-all duration-500 flex flex-col justify-center items-center text-center group min-h-[170px] sm:min-h-[190px] relative overflow-hidden">
            
            <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FFD700]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
              <span className="material-symbols-outlined text-3xl text-[#FFD700]">
                rocket_launch
              </span>
            </div>

            <h4 className="text-lg sm:text-xl font-bold text-on-background">
              Lightning Fast
            </h4>

            <p className="text-[10px] sm:text-xs text-on-surface-variant mt-2 tracking-widest uppercase font-bold">
              Performance
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
);
};

export default About;
