"use client";

import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

const CTA = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-[80px] sm:py-[110px] lg:py-[130px]">
  <div className="max-w-7xl mx-auto">
    
    <div className="glass-card relative overflow-hidden rounded-[32px] sm:rounded-[40px] lg:rounded-[48px] border border-primary/20 px-5 sm:px-8 lg:px-16 py-[70px] sm:py-[90px] lg:py-[110px] text-center">
      
      {/* Ambient Glows */}
      <div className="absolute -bottom-24 -right-24 w-[260px] sm:w-[400px] lg:w-[500px] h-[260px] sm:h-[400px] lg:h-[500px] bg-cyan-900/20 rounded-full blur-[90px] sm:blur-[120px]" />

      <div className="absolute -top-24 -left-24 w-[260px] sm:w-[400px] lg:w-[500px] h-[260px] sm:h-[400px] lg:h-[500px] bg-green-900/20 rounded-full blur-[90px] sm:blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-8 sm:space-y-10 lg:space-y-12">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl lg:text-7xl font-black leading-tight text-green-500"
        >
          Your vision,
          <br className="hidden sm:block" />
          my expertise
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto text-sm sm:text-lg lg:text-2xl text-on-surface-variant leading-relaxed opacity-80 px-2"
        >
          Let's collaborate to build something that pushes the boundaries of
          what's possible on the web.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center pt-2 sm:pt-4"
        >
          <Magnetic strength={0.3}>
            <a
              href="/hire"
              className="bg-gradient-to-r from-green-500 via-cyan-500 text-white px-6 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-2xl font-bold shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all text-base sm:text-xl lg:text-2xl flex items-center gap-3 sm:gap-4 group hover:scale-105"
            >
              Hire Me Now

              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-xl sm:text-2xl">
                rocket_launch
              </span>
            </a>
          </Magnetic>
        </motion.div>
      </div>
    </div>
  </div>
</section>
  );
};

export default CTA;
