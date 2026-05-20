"use client";
import React from 'react';
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";
const Contact = () => {
  const contactMethods = [
    {
      icon: "✉️",
      title: "EMAIL",
      value: "ashikurrahman88722@gmail.com",
      link: "https://accounts.google.com/b/0/AddMailService",
      color: "bg-red-500/10"
    },
    {
      icon: "💬",
      title: "WHATSAPP",
      value: "+8801989815238",
      link: "https://wa.me/8801989815238",
      color: "bg-green-500/10"
    },
    {
      icon: "in",
      title: "LINKEDIN",
      value: "Ashikur Rahman",
      link: "https://www.linkedin.com/in/ashikur-rahman-6559a93b3",
      color: "bg-blue-500/10",
      isTextIcon: true
    }
  ];
  return (
   <section
  id="contact"
  className="px-4 sm:px-6 lg:px-8 py-[80px] sm:py-[110px] lg:py-[130px]"
>
  <div className="max-w-7xl mx-auto">
    
    {/* Heading */}
    <div className="text-center mb-14 sm:mb-20">
      <span className="text-green-500 font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[10px] sm:text-xs">
        Contact Me
      </span>

      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-on-background mt-3">
        Get in Touch
      </h2>
    </div>

    {/* Content */}
    <div className="flex flex-wrap gap-6 justify-center">
      
      {contactMethods.map((method, i) => (
        <Magnetic key={i} strength={0.1}>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
className="glass-card group flex flex-col items-center text-center rounded-[28px] sm:rounded-[32px] border border-green-500/5 hover:border-green-500/30 shadow-xl hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)] p-6 sm:p-8 hover:bg-surface-container-high/60 transition-all duration-500 h-full"
          >
            
            {/* Icon */}
            <div
              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${method.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}
            >
              {method.isTextIcon ? (
                <span className="font-black text-xl text-green-500">
                  {method.icon}
                </span>
              ) : (
                <span className="text-xl sm:text-2xl">
                  {method.icon}
                </span>
              )}
            </div>

            {/* Title */}
            <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.18em] sm:tracking-[0.2em] text-on-background mb-2">
              {method.title}
            </p>

            {/* Value */}
            <p className="text-sm sm:text-base text-on-surface-variant mb-6 break-all leading-relaxed">
              {method.value}
            </p>

            {/* Link */}
            <a
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-green-500 text-[11px] sm:text-xs font-bold uppercase tracking-widest hover:underline flex items-center gap-2 group-hover:gap-3 transition-all"
            >
              Write me

              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </a>
          </motion.div>
        </Magnetic>
      ))}
    </div>
  </div>
</section>

  );
};

export default Contact;