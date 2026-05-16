import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Hire from "@/components/Hire";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="mt-16">
        <Hero />
        <TechStack />
        <About />
        <Projects />
        <Services />
        <Contact />
        <Hire/>
        </div>
        <Footer />
      
    </main>
  );
};
   