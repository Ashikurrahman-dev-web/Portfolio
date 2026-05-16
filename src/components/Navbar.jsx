"use client";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Magnetic from "./Magnetic";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const { scrollY } = useScroll();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["home", "achievements", "about", "services", "backend", "process", "skills", "projects", "codeshowcase", "assignments", "timeline", "faq", "contact"];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        if (section === "home") {
          if (scrollPosition < 500) setActiveSection("home");
          continue;
        }
        const el = document.getElementById(section);
        if (el && scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.offsetHeight) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home", id: "home" },
    { name: "TechStack", href: "/#techstack", id: "techstack" },
    { name: "About", href: "/#about", id: "about" },
    { name: "Projects", href: "/#projects", id: "projects" },
    { name: "Services", href: "/#services", id: "services" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ];

  const handleLinkClick = (e, href) => {
    const isHomePage = window.location.pathname === "/";
    if (isHomePage && (href.startsWith("#") || href.startsWith("/#"))) {
      e.preventDefault();
      const targetId = href.replace("/#", "").replace("#", "");
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      else if (href === "/#home") window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
  variants={{
    visible: { y: 0, opacity: 1 },
    hidden: { y: -20, opacity: 0 },
  }}
  animate={hidden ? "hidden" : "visible"}
  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
  className="fixed top-0 left-0 w-full z-[100] px-3 sm:px-4 md:px-6 py-3 flex justify-center pointer-events-none"
>
  <div
    className={`glass-card flex justify-between items-center w-full max-w-7xl h-16 px-4 sm:px-5 md:px-6 rounded-2xl pointer-events-auto transition-all duration-500 ${
      scrolled
        ? "shadow-2xl shadow-primary/5 border-primary/10 bg-surface-container-highest/90"
        : "shadow-xl shadow-black/5 border-transparent bg-surface-container-low/70"
    }`}
  >
    {/* Logo */}
    <Magnetic strength={0.3}>
      <Link
        href="/#home"
        onClick={(e) => handleLinkClick(e, "/#home")}
        className="flex items-center gap-2 sm:gap-3 group shrink-0"
      >
        <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-primary/20 bg-black border border-outline-variant/20 dark:border-white/10">
          <Image
            src="/logo.png"
            alt="Ashik Logo"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <span className="block text-base sm:text-lg md:text-2xl font-black tracking-tight text-on-background transition-colors">
          A<span className="text-[#FFD700] -ml-[0.35em]">R</span>
        </span>
      </Link>
    </Magnetic>

    {/* Desktop Nav */}
    <div className="hidden md:flex items-center gap-6 lg:gap-10 font-heading text-[13px] font-bold tracking-wider">
      {navLinks.map((link) => (
        <Magnetic key={link.id} strength={0.2}>
          <Link
            href={link.href}
            onClick={(e) => handleLinkClick(e, link.href)}
            className="relative group py-2 text-on-surface-variant hover:text-on-background transition-colors"
          >
            <span className={activeSection === link.id ? "text-green-500" : ""}>
              {link.name}
            </span>

            <motion.div
className="absolute -bottom-1 left-0 h-[2px] bg-green-500 w-full origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: activeSection === link.id ? 1 : 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />
          </Link>
        </Magnetic>
      ))}
    </div>

    {/* Right Side */}
    <div className="flex items-center gap-3 sm:gap-5">
      {/* Theme Toggle */}
      <div className="theme-toggle-wrapper w-12 sm:w-14 h-8 flex items-center justify-center">
        {mounted ? (
          <label className="theme-toggle" title="Toggle theme">
            <input
              type="checkbox"
              checked={theme === "light"}
              onChange={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
            />

            <div className="toggle-track">
              <div className="toggle-thumb">
                {theme === "dark" ? "🌙" : "☀️"}
              </div>
            </div>
          </label>
        ) : (
          <div className="w-10 h-5 bg-surface-container-high rounded-full animate-pulse" />
        )}
      </div>
<Magnetic strength={0.3}>
      <Link
        href="/hire"
className="hidden sm:flex bg-gradient-to-r from-green-500 via-cyan-500 text-white px-4 md:px-6 py-2.5 rounded-2xl font-bold text-xs hover:opacity-90 transition-opacity shadow-lg items-center justify-center cursor-pointer whitespace-nowrap"
      >
        Hire Me
      </Link></Magnetic>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-on-background p-2 flex items-center justify-center"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="material-symbols-outlined">
          {isMenuOpen ? "close" : "menu"}
        </span>
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  <AnimatePresence>
    {isMenuOpen && (
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-24 left-3 right-3 sm:left-4 sm:right-4 glass-card rounded-2xl p-6 md:hidden z-[-1] flex flex-col gap-2 pointer-events-auto"
      >
        {navLinks.map((link, i) => (
          <motion.div
            key={link.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Link
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`block py-3 text-base sm:text-lg font-bold border-b border-outline-variant/10 last:border-0 ${
                activeSection === link.id
                  ? "text-green-500"
                  : "text-on-background"
              }`}
            >
              {link.name}
            </Link>
            
          </motion.div>
        ))}
        <Link
  href="/hire"
  className="flex text-[11px] sm:text-xs bg-gradient-to-r from-green-500 via-cyan-500 text-white px-3 sm:px-4 md:px-6 py-2.5 rounded-2xl font-bold hover:opacity-90 transition-opacity shadow-lg items-center justify-center cursor-pointer whitespace-nowrap"
>
  Hire Me
</Link>
      </motion.div>
    )}
  </AnimatePresence>
</motion.nav>
  )};
export default Navbar;
