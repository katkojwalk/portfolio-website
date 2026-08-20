import React from 'react';
import { Search, HelpCircle, Brain, Sparkles, Code2, Gauge, Layers, ShieldCheck } from 'lucide-react';

export default function SeoOptimization() {
  const pillars = [
    {
      id: "seo",
      title: "SEO",
      subtitle: "Search Engine Optimization",
      icon: Search,
      badge: "Traditional Search",
      color: "from-blue-500 to-cyan-500",
      description: "Optimizing website code structure, search engine crawlabilty, on-page content alignment, and Core Web Vitals performance.",
      keyFocus: [
        "Technical SEO & Clean Crawl Architecture",
        "On-Page Heading & Meta Tag Optimization",
        "Core Web Vitals & Page Load Speed",
        "Structured Schema Markup (Schema.org)",
        "Mobile-First Accessibility & Search Indexation"
      ]
    },
    {
      id: "aeo",
      title: "AEO",
      subtitle: "Answer Engine Optimization",
      icon: HelpCircle,
      badge: "AI Answer Engines",
      color: "from-indigo-500 to-purple-500",
      description: "Structuring content specifically for answer engines and AI conversational assistants (Perplexity, ChatGPT, Gemini, Claude).",
      keyFocus: [
        "Direct Q&A Content Formatting",
        "JSON-LD Schema & Semantic Microdata",
        "Fact-based Entity Relationship Mapping",
        "Conversational Query Intent Alignment",
        "High-Authority Citation Ready Snippets"
      ]
    },
    {
      id: "geo",
      title: "GEO",
      subtitle: "Generative Engine Optimization",
      icon: Brain,
      badge: "Generative Search & Overviews",
      color: "from-emerald-500 to-teal-500",
      description: "Optimizing website usefulness and authoritative context for generative AI search summaries and AI Overviews.",
      keyFocus: [
        "Generative Search Synopsis Optimization",
        "Structured Knowledge Graph Integration",
        "Comprehensive Topic Coverage & Depth",
        "Clear Information Hierarchy & Bullet Points",
        "Contextual Relevance for LLM Retrieval (RAG)"
      ]
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Search & AI Visibility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            SEO • AEO • GEO Optimization
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Pioneering digital visibility across traditional Google search engines, AI answer engines, and generative AI overviews.
          </p>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto" />
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="rounded-3xl glass-card p-6 sm:p-8 space-y-6 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden"
              >
                {/* Top Accent Gradient Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${pillar.color}`} />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {pillar.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                      {pillar.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="pt-2 space-y-2 border-t border-slate-200/60 dark:border-slate-800/60">
                    <span className="text-xs font-bold text-slate-900 dark:text-white block">Key Focus Areas:</span>
                    <ul className="space-y-1.5">
                      {pillar.keyFocus.map((focus, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                          <span>{focus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 text-center text-[11px] font-mono text-slate-400 dark:text-slate-500 border-t border-slate-200/50 dark:border-slate-800/50">
                  Modern Search Architecture Ready
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
