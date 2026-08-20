import React, { useState } from 'react';
import { cmrProjects } from '../data/cmrProjectsData';
import { Building2, ChevronDown, ChevronUp, ExternalLink, GitBranch, Layers, CheckCircle2 } from 'lucide-react';

export default function CmrProjects() {
  const [expandedId, setExpandedId] = useState(cmrProjects[0]?.id || null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="cmr" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/40 border-t border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Academic & Institutional Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            CMR Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Dedicated portfolio repository for project initiatives, academic portals, and institutional web modules at CMR.
          </p>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto" />
        </div>

        {/* Expandable Project List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {cmrProjects.map((project) => {
            const isExpanded = expandedId === project.id;
            return (
              <div
                key={project.id}
                className="rounded-2xl glass-card border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300"
              >
                {/* Header Toggle */}
                <button
                  onClick={() => toggleExpand(project.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          {project.name}
                        </h3>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400">
                          {project.status}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                        {project.objective}
                      </p>
                    </div>
                  </div>

                  <div className="p-2 rounded-xl bg-slate-200/60 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Expanded Details Panel */}
                {isExpanded && (
                  <div className="px-5 pb-6 sm:px-6 space-y-4 border-t border-slate-200/60 dark:border-slate-800/60 pt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 animate-fadeIn">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Left Specs */}
                      <div className="space-y-3 p-4 rounded-xl bg-slate-100/60 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60">
                        <div>
                          <span className="font-bold text-slate-900 dark:text-white block text-xs uppercase tracking-wider">Role & Responsibility</span>
                          <p className="mt-0.5">{project.role}</p>
                        </div>
                        <div>
                          <span className="font-bold text-slate-900 dark:text-white block text-xs uppercase tracking-wider">Technologies Used</span>
                          <div className="flex flex-wrap gap-1.5 mt-1">
                            {project.technologies.map((t, i) => (
                              <span key={i} className="px-2 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-[11px]">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Architecture & Pipeline */}
                      <div className="space-y-3 p-4 rounded-xl bg-slate-100/60 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60">
                        <div>
                          <span className="font-bold text-slate-900 dark:text-white block text-xs uppercase tracking-wider">System Architecture</span>
                          <p className="mt-0.5 font-mono text-xs text-blue-600 dark:text-blue-400">{project.architecture}</p>
                        </div>
                        <div>
                          <span className="font-bold text-slate-900 dark:text-white block text-xs uppercase tracking-wider">Deployment Pipeline</span>
                          <p className="mt-0.5 font-mono text-xs">{project.pipeline}</p>
                        </div>
                      </div>
                    </div>

                    {/* Results & Live Link */}
                    <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-200/50 dark:border-blue-800/50 flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider block">Key Impact & Outcomes</span>
                        <p className="text-slate-700 dark:text-slate-300 mt-0.5">{project.results}</p>
                      </div>

                      <div className="text-right font-mono text-xs">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold flex items-center gap-1.5 shadow-md shadow-blue-500/20 transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Visit Live CRM Site</span>
                        </a>
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
