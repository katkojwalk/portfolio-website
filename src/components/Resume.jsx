import React, { useState } from 'react';
import { FileText, Download, Eye, X, CheckCircle2, User, Mail, Globe, Code, Cloud } from 'lucide-react';

export default function Resume() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleDownload = () => {
    alert("Resume download requested! Placeholder file: [ADD RESUME FILE URL]");
  };

  return (
    <section id="resume" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/40 border-t border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Resume
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Review Katkojwal Krishna's technical skillset summary, academic background, and project capabilities.
          </p>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto" />
        </div>

        {/* Action Banner Card */}
        <div className="max-w-3xl mx-auto rounded-3xl p-8 glass-card border border-slate-200 dark:border-slate-800 text-center space-y-6 shadow-xl">
          <div className="w-16 h-16 rounded-2xl bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto">
            <FileText className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Katkojwal Krishna, M.Sc. — Tech Resume
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              Master of Science • React Developer • Full-Stack PHP • Database Specialist (MongoDB, PostgreSQL, SQL, Firebase, Supabase) • AWS & DevOps
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setIsPreviewOpen(true)}
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all"
            >
              <Eye className="w-4 h-4" />
              <span>View Resume Online</span>
            </button>

            <button
              onClick={handleDownload}
              className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 font-semibold text-sm flex items-center gap-2 border border-slate-200 dark:border-slate-700 transition-all"
            >
              <Download className="w-4 h-4 text-blue-500" />
              <span>Download PDF Resume</span>
            </button>
          </div>

          <div className="pt-4 text-xs font-mono text-slate-400 border-t border-slate-200/60 dark:border-slate-800/60">
            Resume Placeholder: [ADD RESUME FILE URL]
          </div>
        </div>

        {/* View Resume Modal Preview */}
        {isPreviewOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-3xl rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
              
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-500" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Resume Preview — Katkojwal Krishna, M.Sc.
                  </h3>
                </div>
                <button
                  onClick={() => setIsPreviewOpen(false)}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Resume Document Style View */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-sans space-y-6 text-slate-800 dark:text-slate-200 text-xs sm:text-sm leading-relaxed">
                {/* Header */}
                <div className="border-b border-slate-200 dark:border-slate-800 pb-4 flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Katkojwal Krishna</h2>
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                      Master of Science (M.Sc.) | React Developer | Full-Stack PHP | Databases (MongoDB, PostgreSQL, SQL, Firebase, Supabase)
                    </p>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-mono space-y-0.5 text-right">
                    <div>Email: [ADD EMAIL]</div>
                    <div>Location: [ADD LOCATION]</div>
                    <div>GitHub: [ADD GITHUB URL]</div>
                  </div>
                </div>

                {/* Executive Summary */}
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400">Professional Summary</h4>
                  <p>
                    Master of Science graduate and multi-skilled technology practitioner experienced in crafting responsive React frontend applications, backend engineering, cloud deployment, and database administration. Skilled across MongoDB, PostgreSQL, SQL, Firebase, Supabase, PHP, WordPress, AWS EC2/S3, and automated DevOps CI/CD pipelines.
                  </p>
                </div>

                {/* Academic Qualification */}
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400">Education & Academic Qualification</h4>
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex justify-between items-center">
                    <div>
                      <strong className="text-slate-900 dark:text-white text-sm">Master of Science (M.Sc.)</strong>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">[ADD INSTITUTION / UNIVERSITY NAME]</div>
                    </div>
                    <span className="text-xs font-mono text-slate-400">[ADD YEAR]</span>
                  </div>
                </div>

                {/* Core Technical Stack */}
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400">Technical Skills</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div><strong className="text-slate-900 dark:text-white">Frontend & React:</strong> React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS</div>
                    <div><strong className="text-slate-900 dark:text-white">Databases & BaaS:</strong> MongoDB, PostgreSQL, MySQL / SQL, Firebase, Supabase</div>
                    <div><strong className="text-slate-900 dark:text-white">Backend & CMS:</strong> PHP, WordPress Custom Themes & Plugins, REST APIs</div>
                    <div><strong className="text-slate-900 dark:text-white">Cloud & Infrastructure:</strong> AWS EC2, AWS S3, AWS RDS, Linux (Ubuntu), Nginx</div>
                    <div><strong className="text-slate-900 dark:text-white">DevOps & Automation:</strong> Git, GitHub, Jenkins, Docker, Kubernetes, CI/CD</div>
                    <div><strong className="text-slate-900 dark:text-white">Search & AI Visibility:</strong> Technical SEO, AEO, GEO, Gemini CLI, Copilot</div>
                  </div>
                </div>

                {/* Projects Highlights */}
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400">Key Projects</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">React & Supabase Full-Stack Application</div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">Single Page Application built with React.js and Supabase (PostgreSQL), featuring real-time subscriptions and authentication.</p>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">Multi-Database Cloud Sync Suite</div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">Database architecture project exploring MongoDB document pipelines, Firebase Firestore live listeners, and SQL schema design.</p>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">Quadra Home Tuitions</div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">Professional home tutoring web platform built with PHP, MySQL, WordPress, and search engine optimization.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={handleDownload}
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold text-xs flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Document</span>
                </button>
                <button
                  onClick={() => setIsPreviewOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs"
                >
                  Close Preview
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
