import React, { useState } from 'react';
import { projects, projectCategories } from '../data/projectsData';
import CalculatorModal from './CalculatorModal';
import { Folder, ExternalLink, Github, Code, Sparkles, Layers, Cloud, Terminal, CheckCircle2, Play } from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const [isCalcOpen, setIsCalcOpen] = useState(false);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => 
        p.category === selectedCategory || 
        (p.secondaryCategories && p.secondaryCategories.includes(selectedCategory))
      );

  return (
    <section id="projects" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/40 border-t border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Folder className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Projects & Work Showcase
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Explore web solutions, WordPress platforms, AWS cloud experiments, DevOps pipelines, and interactive applications.
          </p>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl glass-card overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 group"
            >
              {/* Card Image Header */}
              <div className="relative h-48 overflow-hidden bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-blue-600/90 text-white backdrop-blur-md shadow">
                    {project.category}
                  </span>
                  {project.isInteractiveDemo && (
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-500/90 text-white backdrop-blur-md shadow flex items-center gap-1">
                      <Play className="w-3 h-3" /> Interactive Demo
                    </span>
                  )}
                </div>

                <div className="absolute bottom-3 right-3 text-xs font-medium text-slate-300 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-700/50 backdrop-blur-md">
                  {project.status}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Stack Badges */}
                <div className="space-y-3 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between gap-2">
                    {project.isInteractiveDemo ? (
                      <button
                        onClick={() => setIsCalcOpen(true)}
                        className="flex-1 py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/20 transition-all"
                      >
                        <Play className="w-3.5 h-3.5" />
                        <span>Launch 3D Calculator</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => setActiveProjectModal(project)}
                        className="flex-1 py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                      >
                        <span>View Details</span>
                      </button>
                    )}

                    <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-xs font-mono">
                      <span className="truncate max-w-[120px] bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded border border-slate-200 dark:border-slate-700">
                        {project.githubUrl}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Detailed Project Modal */}
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-2xl rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
              
              <div className="flex items-start justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    {activeProjectModal.category}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                    {activeProjectModal.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                <p>{activeProjectModal.fullDescription}</p>

                {activeProjectModal.features && (
                  <div className="space-y-2 pt-2">
                    <h4 className="font-bold text-slate-900 dark:text-white">Key Features:</h4>
                    <ul className="space-y-1.5">
                      {activeProjectModal.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeProjectModal.architecture && (
                  <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 font-mono text-xs space-y-1">
                    <span className="text-slate-400 font-sans font-semibold">Architecture Model:</span>
                    <p className="text-blue-600 dark:text-blue-400 font-bold">{activeProjectModal.architecture}</p>
                  </div>
                )}

                <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono">
                  <div className="flex-1 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <div className="text-slate-400 font-sans font-semibold mb-1">GitHub Repo</div>
                    <div className="text-slate-700 dark:text-slate-300">{activeProjectModal.githubUrl}</div>
                  </div>

                  <div className="flex-1 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <div className="text-slate-400 font-sans font-semibold mb-1">Live URL</div>
                    <div className="text-slate-700 dark:text-slate-300">{activeProjectModal.liveUrl}</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs shadow-md"
                >
                  Close Modal
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Embedded Interactive 3D Calculator Modal */}
        <CalculatorModal isOpen={isCalcOpen} onClose={() => setIsCalcOpen(false)} />

      </div>
    </section>
  );
}
