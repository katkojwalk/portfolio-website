import React from 'react';
import { User, Code, Server, Globe, Cloud, GitBranch, Search, Sparkles, BookOpen, Award, Building2 } from 'lucide-react';

export default function About() {
  const highlights = [
    { title: "Web & Frontend Dev", desc: "Crafting modern, responsive web interfaces with HTML, CSS, JavaScript, and React.", icon: Code },
    { title: "PHP & WordPress", desc: "Building dynamic backend applications, custom themes, and WordPress CMS solutions.", icon: Server },
    { title: "AWS & Cloud Tech", desc: "Setting up EC2 instances, S3 object storage, Nginx hosting, and Linux administration.", icon: Cloud },
    { title: "DevOps & CI/CD", desc: "Exploring containerization with Docker, Jenkins automation pipelines, and Git workflows.", icon: GitBranch },
    { title: "Graphic & UI Design", desc: "Designing website graphics, digital creatives, and clean user interface assets.", icon: Globe },
    { title: "SEO, AEO & GEO", desc: "Optimizing web content for traditional search engines, answer engines, and generative AI search.", icon: Search },
  ];

  return (
    <section id="about" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/40 border-y border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>About Katkojwal Krishna</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Versatile Developer & Digital Solutions Practitioner
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main About Text */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
            <p className="font-medium text-slate-900 dark:text-slate-100 text-xl leading-snug">
              Katkojwal Krishna holds a <strong>Master of Science (M.Sc.)</strong> and is a multi-skilled technology practitioner with hands-on experience spanning web development, backend engineering, database management, cloud deployment, and digital optimization strategies.
            </p>

            <p>
              I specialize in bridging the gap between clean frontend code (React.js), dynamic backends (PHP, Node.js), modern databases (MongoDB, PostgreSQL, MySQL, Firebase, Supabase), and cloud infrastructure on AWS. My workflow integrates version control (Git & GitHub), Linux administration, Nginx web routing, and continuous integration concepts (Jenkins & Docker).
            </p>

            <p>
              Beyond core software engineering, I am passionate about modern search visibility strategies—including <strong>Search Engine Optimization (SEO)</strong>, <strong>Answer Engine Optimization (AEO)</strong> for AI engines, and <strong>Generative Engine Optimization (GEO)</strong> for generative search overviews—as well as digital graphics and <strong>CMR-related digital projects</strong>.
            </p>

            {/* Education & Focus Cards */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl glass-card space-y-2 border-l-4 border-blue-500">
                <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white text-sm">
                  <BookOpen className="w-4 h-4 text-blue-500" />
                  <span>Educational Qualification</span>
                </div>
                <div className="text-xs text-slate-800 dark:text-slate-200 font-semibold bg-slate-100 dark:bg-slate-800 p-2 rounded">
                  Master of Science (M.Sc. / Master in Sciences)
                </div>
              </div>

              <div className="p-4 rounded-xl glass-card space-y-2 border-l-4 border-indigo-500">
                <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white text-sm">
                  <Award className="w-4 h-4 text-indigo-500" />
                  <span>Core Focus Areas</span>
                </div>
                <div className="text-xs text-slate-700 dark:text-slate-300 font-medium bg-slate-100 dark:bg-slate-800 p-2 rounded">
                  Full-Stack Development, Cloud AWS, Databases & DevOps
                </div>
              </div>
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl glass-card hover:translate-x-1 transition-all duration-300 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-snug">
                      {item.desc}
                    </p>
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
