import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    
      <footer className="px-4 sm:px-6 lg:px-8 py-10 sm:py-14 border-t border-outline-variant/10">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 sm:gap-10">
    
    {/* Left Side */}
    <div className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
      
      {/* Logo */}
      <div
       
        className="flex items-center gap-3 group"
      >
        <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-500 bg-black border border-outline-variant/20 dark:border-white/10">
          
          <Image
            src="/logo.png"
            alt="Ashikur Rahman"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <span className="text-xl sm:text-2xl font-black tracking-tight text-on-background transition-colors">
          A
          <span className="text-[#FFD700] -ml-[0.35em]">
            R
          </span>
        </span>
      </div>

      {/* Copyright */}
      <p className="max-w-xl text-[10px] sm:text-[11px] font-heading font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] leading-relaxed text-on-surface-variant/80 px-2 sm:px-0">
        © 2026 Ashikur Rahman. Full-Stack Developer from Bangladesh.
      </p>
    </div>

    {/* Right Side */}
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 font-heading text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">
      
      {/* GitHub */}
      <a
        href="https://github.com/Ashikurrahman-dev-web/Ashikur-Rahman-Developer"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-outline-variant/20 text-on-surface-variant/70 hover:text-green-500 hover:border-green-500/50 hover:bg-green-500/5 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-green-500/20"
      >
        GitHub
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/share/1BSH2Ezp2n"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-outline-variant/20 text-on-surface-variant/70 hover:text-green-500 hover:border-green-500/50 hover:bg-green-500/5 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-green-500/20"
      >
        Facebook
      </a>
    </div>
  </div>
</footer>
  );
};

export default Footer;