import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import DevOpsPipeline from './components/DevOpsPipeline';
import CmrProjects from './components/CmrProjects';
import SeoOptimization from './components/SeoOptimization';
import Services from './components/Services';
import Timeline from './components/Timeline';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContactWidget from './components/FloatingContactWidget';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('krishna_theme');
    return saved ? saved === 'dark' : true; // Default dark theme
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('krishna_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('krishna_theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b0f19] text-slate-900 dark:text-slate-100 selection:bg-blue-500 selection:text-white relative">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <DevOpsPipeline />
        <CmrProjects />
        <SeoOptimization />
        <Services />
        <Timeline />
        <Resume />
        <Contact />
      </main>

      <Footer />

      {/* Floating Phone & WhatsApp Quick Connect Widget */}
      <FloatingContactWidget />
    </div>
  );
}
