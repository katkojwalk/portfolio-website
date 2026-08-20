import React from 'react';
import { services } from '../data/servicesData';
import { Layout, Server, Globe, Palette, Cloud, GitBranch, Search, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';

const iconMap = {
  Layout, Server, Globe, Palette, Cloud, GitBranch, Search, Sparkles
};

export default function Services() {
  return (
    <section id="services" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/40 border-t border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Layout className="w-3.5 h-3.5" />
            <span>Professional Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Services & Offerings
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            End-to-end digital services spanning website creation, PHP backends, cloud hosting, DevOps automation, and search visibility.
          </p>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Layout;
            return (
              <div
                key={service.id}
                className="rounded-2xl glass-card p-6 space-y-4 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2 space-y-1.5 border-t border-slate-200/60 dark:border-slate-800/60">
                    {service.deliverables.map((del, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Inquire Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
