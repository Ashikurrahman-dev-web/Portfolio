"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";

export default function HireMePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-[1200px] mx-auto px-6 mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-green-500 font-bold tracking-[0.3em] uppercase text-xs">
              Available for New Projects
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-on-background mt-6 mb-8 leading-[1.1]">
              Let's Build Something <br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500">
                Extraordinary Together
              </span>
            </h1>
            <p className="text-on-surface-variant/90 max-w-2xl mx-auto text-lg leading-relaxed">
              I help startups and businesses transform their ideas into high-performance digital products. 
              Whether you need a full-scale web application or a pixel-perfect landing page, I've got you covered.
            </p>
            
            <div className="flex justify-center gap-6 mt-12">
              <Magnetic strength={0.2}>
                <a 
                  href="#contact"
                  className="bg-gradient-to-r from-green-500 via-cyan-500 text-white px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest shadow-xl shadow-green-500/20 hover:opacity-90 transition-all active:scale-95"
                >
                  Start a Project
                </a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <a 
                  href="https://wa.me/8801989815238"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card text-green-500 border border-green-500/30 bg-green-500/5  px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-surface-container-high transition-all active:scale-95"
                >
                  <span className="text-xl ">💬</span>
                  WhatsApp Me
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </section>

        

        {/* Specialized Benefits Section */}
        <section className="max-w-[1200px] mx-auto px-6 py-20">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fast Response",
                desc: "I usually reply within 2-4 hours during business days.",
                icon: "timer"
              },
              {
                title: "Weekly Updates",
                desc: "You'll get a detailed progress report and demo every week.",
                icon: "update"
              },
              {
                title: "Post-Launch Support",
                desc: "30 days of free maintenance after project completion.",
                icon: "support_agent"
              }
            ].map((item, i) => (
              <Magnetic key={i} strength={0.2}>
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-2xl border-green-500/5 group hover:border-green-500/20 shadow-xl transition-all"
              >
                <span className="material-symbols-outlined text-green-500 text-3xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <h3 className="text-xl font-bold text-on-background mb-2">{item.title}</h3>
                <p className="text-on-surface-variant/90 text-sm leading-relaxed">{item.desc}</p>
              </motion.div></Magnetic>
            ))}
          </div>
        </section>
        <div id="contact">
          <Contact />
        </div>
        </div>
        <Footer />
    </main>
  );
}
