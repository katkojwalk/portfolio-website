import React, { useState } from 'react';
import { skillsCategories } from '../data/skillsData';
import { 
  Code2, Globe, Cloud, GitBranch, Bot, Palette, Search, 
  FileCode, Braces, Atom, Server, Layout, Sliders, Plug, 
  Zap, Cpu, HardDrive, Database, Terminal, Github, Workflow, 
  Box, Layers, RefreshCw, Sparkles, Code, Image, Figma, 
  Settings, FileText, HelpCircle, Brain, Gauge, TrendingUp, Flame
} from 'lucide-react';

const iconMap = {
  Code2, Globe, Cloud, GitBranch, Bot, Palette, Search, 
  FileCode, Braces, Atom, Server, Layout, Sliders, Plug, 
  Zap, Cpu, HardDrive, Database, Terminal, Github, Workflow, 
  Box, Layers, RefreshCw, Sparkles, Code, Image, Figma, 
  Settings, FileText, HelpCircle, Brain, Gauge, TrendingUp, Flame
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Technical Stack
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Categorized technical stack spanning React Apps, Databases (MongoDB, PostgreSQL, SQL, Firebase, Supabase), Cloud AWS & DevOps.
          </p>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto" />
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeCategory === "all"
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            All Skills ({skillsCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </button>
          {skillsCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsCategories
            .filter((cat) => activeCategory === "all" || activeCategory === cat.id)
            .map((cat) => {
              const CategoryIcon = iconMap[cat.icon] || Code2;
              return (
                <div
                  key={cat.id}
                  className="rounded-2xl glass-card p-6 space-y-5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Category Title */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                        <CategoryIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          {cat.category}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">
                          {cat.description}
                        </p>
                      </div>
                    </div>

                    {/* Skill Items List */}
                    <div className="space-y-2.5 pt-2">
                      {cat.skills.map((skill, idx) => {
                        const SkillIcon = iconMap[skill.icon] || Code;
                        return (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-2.5 rounded-xl bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50"
                          >
                            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                              <SkillIcon className="w-4 h-4 text-blue-500" />
                              <span>{skill.name}</span>
                            </div>
                            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-800/50">
                              {skill.level}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-2 text-[11px] text-slate-400 dark:text-slate-500 font-mono text-right">
                    {cat.skills.length} skills listed
                  </div>
                </div>
              );
            })}
        </div>

      </div>
    </section>
  );
}
