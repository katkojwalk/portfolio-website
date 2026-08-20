import React from 'react';
import { timelineSteps } from '../data/timelineData';
import { Code2, Server, Cloud, Terminal, GitBranch, Box, RefreshCw, Search, Sparkles, Milestone } from 'lucide-react';

const iconMap = {
  Code2, Server, Cloud, Terminal, GitBranch, Box, RefreshCw, Search, Sparkles
};

export default function Timeline() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Milestone className="w-3.5 h-3.5" />
            <span>Growth & Skill Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Learning Journey & Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Tracing the technical progression from frontend web fundamentals to cloud architecture, DevOps automation, and modern search optimization.
          </p>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto" />
        </div>

        {/* Timeline Line & Nodes */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-emerald-500 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-8 sm:space-y-12">
            {timelineSteps.map((step, idx) => {
              const StepIcon = iconMap[step.icon] || Code2;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.step}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Central Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-lg shadow-blue-500/30 z-10 hidden sm:flex">
                    {step.step}
                  </div>

                  {/* Card Content */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)]">
                    <div className="p-6 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 space-y-3 hover:-translate-y-1 transition-all duration-300">
                      
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                            <StepIcon className="w-4 h-4" />
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                            {step.title}
                          </h3>
                        </div>

                        <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                          {step.badge}
                        </span>
                      </div>

                      <div className="text-xs font-mono text-slate-400">
                        Period: {step.period}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {step.description}
                      </p>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
