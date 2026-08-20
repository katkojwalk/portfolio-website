import React from 'react';
import { Code2, Heart, ArrowUp, Github, Linkedin, Mail, ExternalLink, Globe } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                Katkojwal Krishna<span className="text-blue-500">.</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Master of Science (Osmania University) • Full-Stack Engineer • React, Java, Node.js, Express, Django, Flask, PHP, Databases, AWS & DevOps Practitioner.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-blue-400">
              <Globe className="w-4 h-4 text-blue-500" />
              <a href="https://portfolio-websitekk.netlify.app" target="_blank" rel="noopener noreferrer" className="hover:underline">
                portfolio-websitekk.netlify.app
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About & Education</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition-colors">Skills & Tech Stack</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Featured Projects</a></li>
              <li><a href="#devops" className="hover:text-blue-400 transition-colors">DevOps Pipeline</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services Offered</a></li>
              <li><a href="#resume" className="hover:text-blue-400 transition-colors">Online Resume</a></li>
            </ul>
          </div>

          {/* Live Apps */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Live Netlify Deployments</h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="https://portfolio-websitekk.netlify.app" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 flex items-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5 text-blue-500" /> Main Portfolio
                </a>
              </li>
              <li>
                <a href="https://www.quadrahometuitions.in" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 flex items-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-500" /> Quadra Home Tuitions
                </a>
              </li>
              <li>
                <a href="https://clever-beignet-0d057e.netlify.app" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 flex items-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5 text-amber-500" /> 3D Calculator App
                </a>
              </li>
              <li>
                <a href="https://teal-swan-468600.netlify.app" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 flex items-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5 text-purple-500" /> React & Supabase App
                </a>
              </li>
              <li>
                <a href="https://dashing-douhua-34e853.netlify.app" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 flex items-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-500" /> Multi-Database Sync Suite
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Katkojwal Krishna. Built with React 19 & Tailwind CSS.</p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 flex items-center gap-1.5 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
