import React from 'react';
import { Code2, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-extrabold text-white">
                Katkojwal Krishna<span className="text-blue-500">.</span>
              </span>
              <p className="text-xs text-slate-400 mt-0.5">
                Web Developer • PHP • WordPress • AWS & DevOps Enthusiast
              </p>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#devops" className="hover:text-blue-400 transition-colors">DevOps</a>
            <a href="#cmr" className="hover:text-blue-400 transition-colors">CMR</a>
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#resume" className="hover:text-blue-400 transition-colors">Resume</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>

          {/* Back to Top */}
          <div>
            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="pt-8 mt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} Katkojwal Krishna. All rights reserved.
          </div>
          <div className="font-mono text-[11px]">
            Built with React, Tailwind CSS & Vite
          </div>
        </div>

      </div>
    </footer>
  );
}
