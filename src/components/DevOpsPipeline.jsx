import React, { useState } from 'react';
import { GitBranch, Github, Workflow, Box, Layers, Cloud, Server, ShieldCheck, Play, ArrowRight, Info, CheckCircle, Clock } from 'lucide-react';

const pipelineStages = [
  {
    id: 1,
    name: "Developer",
    icon: GitBranch,
    status: "Implemented",
    statusColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    shortDesc: "Code written locally with VS Code & Gemini CLI.",
    detail: "Developer pushes clean, modular code commits with structured git logs and pre-commit checks."
  },
  {
    id: 2,
    name: "Git / GitHub",
    icon: Github,
    status: "Implemented",
    statusColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    shortDesc: "Version control & GitHub repo webhook triggers.",
    detail: "Source code hosted on GitHub with branch protection rules, pull requests, and automated webhook triggers."
  },
  {
    id: 3,
    name: "Jenkins CI",
    icon: Workflow,
    status: "In Progress",
    statusColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    shortDesc: "Jenkins automation server pulls & triggers builds.",
    detail: "Jenkins orchestrates automated pipeline execution upon receiving GitHub push notifications."
  },
  {
    id: 4,
    name: "Build Stage",
    icon: Server,
    status: "In Progress",
    statusColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    shortDesc: "Compiles source code & installs npm/composer dependencies.",
    detail: "Runs headless build scripts, asset bundling, and code syntax linting validation."
  },
  {
    id: 5,
    name: "Test Stage",
    icon: ShieldCheck,
    status: "In Progress",
    statusColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    shortDesc: "Executes automated unit & integration test suites.",
    detail: "Ensures no regressions exist before image compilation and artifact creation."
  },
  {
    id: 6,
    name: "Docker Build",
    icon: Box,
    status: "In Progress",
    statusColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    shortDesc: "Packages web app into lightweight Docker container image.",
    detail: "Builds multi-stage Dockerfile images ensuring reproducible runtime environments."
  },
  {
    id: 7,
    name: "Container Registry",
    icon: Layers,
    status: "Planned",
    statusColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    shortDesc: "Pushes tagged image to Docker Hub or AWS ECR.",
    detail: "Container image is version-tagged and pushed securely to centralized cloud registry."
  },
  {
    id: 8,
    name: "Kubernetes (K8s)",
    icon: Layers,
    status: "Planned",
    statusColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    shortDesc: "K8s cluster pod scheduling & rolling updates.",
    detail: "Kubernetes updates active deployments with zero downtime via rolling release strategies."
  },
  {
    id: 9,
    name: "AWS Cloud",
    icon: Cloud,
    status: "Implemented",
    statusColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    shortDesc: "AWS EC2, S3 & Nginx reverse proxy hosting.",
    detail: "Cloud infrastructure provisioning on AWS with EC2 computing instances and S3 static storage."
  },
  {
    id: 10,
    name: "Production",
    icon: ShieldCheck,
    status: "Implemented",
    statusColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    shortDesc: "Live accessible application for end-users.",
    detail: "SSL-secured live production environment monitored for uptime and response performance."
  }
];

export default function DevOpsPipeline() {
  const [activeStage, setActiveStage] = useState(pipelineStages[0]);

  return (
    <section id="devops" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Workflow className="w-3.5 h-3.5" />
            <span>DevOps & Automation Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            CI/CD & DevOps Pipeline Architecture
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Visualizing the automated software delivery pipeline from local code commits to AWS cloud production hosting.
          </p>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto" />
        </div>

        {/* Pipeline Diagram Flow */}
        <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-8 glass-card border border-slate-200 dark:border-slate-800 space-y-6 sm:space-y-8">
          
          {/* Status Legend */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4 text-xs font-medium">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold">
              <Play className="w-4 h-4 text-blue-500 animate-pulse shrink-0" />
              <span>Interactive Pipeline Stages (Tap any stage below)</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-500 border border-emerald-500/30">
                <CheckCircle className="w-3.5 h-3.5" /> Implemented
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-500 border border-amber-500/30">
                <Clock className="w-3.5 h-3.5" /> In Progress
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-500 border border-blue-500/30">
                <Info className="w-3.5 h-3.5" /> Planned
              </span>
            </div>
          </div>

          {/* Interactive Timeline Pipeline Nodes (Responsive Grid) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-2.5 sm:gap-3 py-2">
            {pipelineStages.map((stage) => {
              const StageIcon = stage.icon;
              const isSelected = activeStage.id === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(stage)}
                  className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl flex flex-col items-center justify-between gap-2 text-center transition-all duration-300 border ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-[1.03] sm:scale-105 border-blue-500"
                      : "bg-slate-100/70 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700/60"
                  }`}
                >
                  <div className="text-[10px] font-mono opacity-80 font-bold">
                    0{stage.id}
                  </div>
                  
                  <div className={`p-2 rounded-xl ${isSelected ? 'bg-white/20' : 'bg-slate-200/60 dark:bg-slate-700/50'}`}>
                    <StageIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>

                  <span className="text-[11px] sm:text-xs font-bold leading-tight line-clamp-2">
                    {stage.name}
                  </span>

                  <span className={`text-[9px] px-1.5 py-0.5 rounded border font-semibold ${isSelected ? 'bg-white/20 border-white/40 text-white' : stage.statusColor}`}>
                    {stage.status}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Stage Detail Panel */}
          <div className="p-4 sm:p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-600/30 border border-blue-500/50 flex items-center justify-center text-blue-400 font-bold shrink-0">
                  {activeStage.id}
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                    <span>{activeStage.name} Stage</span>
                  </h4>
                  <p className="text-xs text-slate-400">{activeStage.shortDesc}</p>
                </div>
              </div>

              <span className={`px-3 py-1 rounded-full text-xs font-bold border self-start sm:self-auto ${activeStage.statusColor}`}>
                Status: {activeStage.status}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 pt-2 border-t border-slate-800 leading-relaxed font-sans">
              {activeStage.detail}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
