import React from 'react';
import { ArrowRight, Download, Mail, Terminal, Sparkles, Cloud, Code, GitBranch, ShieldCheck, Database, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-4 sm:right-10 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium animate-pulse-slow">
              <Sparkles className="w-4 h-4 text-blue-500 shrink-0" />
              <span>Available for Full-Stack, Cloud & Freelance Projects</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Hi, I'm <br className="hidden sm:block" />
              <span className="gradient-text">Katkojwal Krishna</span>
            </h1>

            <p className="text-base sm:text-xl font-semibold text-blue-600 dark:text-blue-400 leading-snug">
              React Developer • Full-Stack PHP • Database Specialist (MongoDB, PostgreSQL, Firebase, Supabase) • AWS & DevOps Enthusiast
            </p>

            <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              "Building modern React applications, scalable databases (MongoDB, PostgreSQL, SQL, Firebase, Supabase), cloud infrastructure, and optimized web experiences."
            </p>

            {/* Action Buttons (Mobile-first responsive layout) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02]"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 font-semibold text-sm border border-slate-200 dark:border-slate-700 transition-all hover:scale-[1.02]"
              >
                <Mail className="w-4 h-4 text-blue-500" />
                <span>Contact Me</span>
              </a>

              <a
                href="#resume"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-semibold text-sm border border-slate-300 dark:border-slate-700/80 transition-all"
              >
                <Download className="w-4 h-4 text-indigo-500" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Quick Tech Badges */}
            <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="text-slate-700 dark:text-slate-300 font-semibold mr-1 w-full sm:w-auto">Core Stack:</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">React.js & JS</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">MongoDB / Postgres / SQL</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">Firebase & Supabase</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">AWS & DevOps</span>
            </div>
          </div>

          {/* Right Hero Visual: Interactive Animated Developer Terminal */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Floating Tech Badges around Terminal */}
            <div className="absolute -top-4 -left-3 sm:-top-6 sm:-left-6 z-20 flex items-center gap-2 px-3 py-1.5 sm:py-2 rounded-xl bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700 text-[11px] sm:text-xs font-semibold text-slate-800 dark:text-slate-200 animate-float">
              <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" />
              <span>MongoDB & Postgres</span>
            </div>

            <div className="absolute -bottom-4 -right-3 sm:-bottom-6 sm:-right-6 z-20 flex items-center gap-2 px-3 py-1.5 sm:py-2 rounded-xl bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700 text-[11px] sm:text-xs font-semibold text-slate-800 dark:text-slate-200 animate-float" style={{ animationDelay: '2s' }}>
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" />
              <span>Supabase & Firebase</span>
            </div>

            {/* Code Window Container */}
            <div className="rounded-2xl overflow-hidden glass-panel border border-slate-700/50 shadow-2xl bg-slate-950 text-slate-200 font-mono text-xs sm:text-sm">
              {/* Window Header */}
              <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-[11px] sm:text-xs text-slate-400 font-sans font-medium">krishna-fullstack ~ bash</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>v2.0</span>
                </div>
              </div>

              {/* Window Code Content */}
              <div className="p-4 sm:p-5 space-y-3 leading-relaxed text-[11px] sm:text-xs overflow-x-auto">
                <div className="text-slate-400">
                  <span className="text-emerald-400">krishna@fullstack</span>:<span className="text-blue-400">~</span>$ cat tech_stack.json
                </div>
                <div className="pl-2 sm:pl-3 border-l-2 border-blue-500/40 text-slate-300 space-y-1">
                  <div><span className="text-blue-400">"name"</span>: <span className="text-emerald-300">"Katkojwal Krishna"</span>,</div>
                  <div><span className="text-blue-400">"degree"</span>: <span className="text-emerald-300">"M.Sc. & B.Sc. Electronics"</span>,</div>
                  <div><span className="text-blue-400">"university"</span>: <span className="text-emerald-300">"Osmania University"</span>,</div>
                  <div><span className="text-blue-400">"frontend"</span>: <span className="text-emerald-300">"React.js, HTML5, CSS3, JS"</span>,</div>
                  <div><span className="text-blue-400">"databases"</span>: [</div>
                  <div className="pl-3 sm:pl-4 text-amber-300">"MongoDB", "PostgreSQL", "MySQL/SQL",</div>
                  <div className="pl-3 sm:pl-4 text-amber-300">"Firebase", "Supabase"</div>
                  <div>],</div>
                  <div><span className="text-blue-400">"backend_cloud"</span>: <span className="text-emerald-300">"PHP, AWS EC2/S3, Linux, Nginx, Docker, Jenkins"</span></div>
                </div>

                <div className="pt-2 text-slate-400 flex items-center gap-2">
                  <span className="text-emerald-400">krishna@fullstack</span>:<span className="text-blue-400">~</span>$ ./check_status.sh
                </div>
                <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 inline shrink-0" />
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
