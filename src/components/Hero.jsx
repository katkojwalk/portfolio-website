import React from 'react';
import { ArrowRight, Download, Mail, Terminal, Sparkles, Cloud, Code, GitBranch, ShieldCheck, Database, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium animate-pulse-slow">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span>Available for Full-Stack, Cloud & Freelance Opportunities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Hi, I'm <br className="hidden sm:block" />
              <span className="gradient-text">Katkojwal Krishna</span>
            </h1>

            <p className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 leading-snug">
              React Developer • Full-Stack PHP • Database Engineer (MongoDB, PostgreSQL, Firebase, Supabase) • AWS & DevOps Enthusiast
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              "Building modern React applications, scalable databases (MongoDB, PostgreSQL, SQL, Firebase, Supabase), cloud infrastructure, and optimized web experiences."
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02]"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 font-semibold border border-slate-200 dark:border-slate-700 transition-all hover:scale-[1.02]"
              >
                <Mail className="w-4 h-4 text-blue-500" />
                <span>Contact Me</span>
              </a>

              <a
                href="#resume"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-medium border border-slate-300 dark:border-slate-700/80 transition-all"
              >
                <Download className="w-4 h-4 text-indigo-500" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Quick Tech Badges */}
            <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="text-slate-700 dark:text-slate-300 font-semibold mr-1">Core Stack:</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">React.js & JS</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">MongoDB / Postgres / SQL</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">Firebase & Supabase</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">AWS & DevOps</span>
            </div>
          </div>

          {/* Right Hero Visual: Interactive Animated Developer Terminal */}
          <div className="lg:col-span-5 relative">
            {/* Floating Tech Badges around Terminal */}
            <div className="absolute -top-6 -left-6 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 animate-float">
              <Database className="w-4 h-4 text-emerald-500" />
              <span>MongoDB & Postgres</span>
            </div>

            <div className="absolute -bottom-6 -right-6 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 animate-float" style={{ animationDelay: '2s' }}>
              <Zap className="w-4 h-4 text-amber-500" />
              <span>Supabase & Firebase</span>
            </div>

            {/* Code Window Container */}
            <div className="rounded-2xl overflow-hidden glass-panel border border-slate-700/50 shadow-2xl bg-slate-950 text-slate-200 font-mono text-sm">
              {/* Window Header */}
              <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs text-slate-400 font-sans font-medium">krishna-fullstack ~ bash</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>v2.0</span>
                </div>
              </div>

              {/* Window Code Content */}
              <div className="p-5 space-y-3 leading-relaxed text-xs sm:text-sm overflow-x-auto">
                <div className="text-slate-400">
                  <span className="text-emerald-400">krishna@fullstack</span>:<span className="text-blue-400">~</span>$ cat tech_stack.json
                </div>
                <div className="pl-3 border-l-2 border-blue-500/40 text-slate-300 space-y-1">
                  <div><span className="text-blue-400">"name"</span>: <span className="text-emerald-300">"Katkojwal Krishna"</span>,</div>
                  <div><span className="text-blue-400">"frontend"</span>: <span className="text-emerald-300">"React.js, HTML5, CSS3, JS"</span>,</div>
                  <div><span className="text-blue-400">"databases"</span>: [</div>
                  <div className="pl-4 text-amber-300">"MongoDB", "PostgreSQL", "MySQL/SQL",</div>
                  <div className="pl-4 text-amber-300">"Firebase", "Supabase"</div>
                  <div>],</div>
                  <div><span className="text-blue-400">"backend_cloud"</span>: <span className="text-emerald-300">"PHP, AWS EC2/S3, Linux, Nginx, Docker, Jenkins"</span></div>
                </div>

                <div className="pt-2 text-slate-400 flex items-center gap-2">
                  <span className="text-emerald-400">krishna@fullstack</span>:<span className="text-blue-400">~</span>$ ./check_db_connectivity.sh
                </div>
                <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 inline" />
                  <span>MongoDB, PostgreSQL, Firebase & Supabase: Connected!</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
