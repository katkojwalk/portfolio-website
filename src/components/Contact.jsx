import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin, Briefcase, CheckCircle2, MessageSquare, User, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', text: 'Please fill in all required fields.' });
      return;
    }

    // Simulate form submission
    setStatus({ type: 'success', text: 'Thank you! Your message has been sent successfully.' });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const socialLinks = [
    { name: 'Phone', handle: '+91 7386078298', icon: Phone, href: 'tel:7386078298', color: 'hover:text-emerald-500' },
    { name: 'Email', handle: 'katkojwalk.7@gmail.com', icon: Mail, href: 'mailto:katkojwalk.7@gmail.com', color: 'hover:text-red-500' },
    { name: 'GitHub', handle: 'github.com/katkojwalk', icon: Github, href: 'https://github.com/katkojwalk', color: 'hover:text-purple-500' },
    { name: 'LinkedIn', handle: '[ADD LINKEDIN URL]', icon: Linkedin, href: '[ADD LINKEDIN URL]', color: 'hover:text-blue-500' },
    { name: 'Freelancer', handle: '[ADD FREELANCER PROFILE URL]', icon: Briefcase, href: '[ADD FREELANCER PROFILE URL]', color: 'hover:text-cyan-500' }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Contact Katkojwal Krishna
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Have a project in mind, a freelance opportunity, or a job inquiry? Reach out directly via phone at +91 7386078298 or email katkojwalk.7@gmail.com.
          </p>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Social & Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Connect Across Platforms
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Feel free to call/WhatsApp at <strong className="text-emerald-600 dark:text-emerald-400">+91 7386078298</strong>, send an email to <strong className="text-blue-600 dark:text-blue-400">katkojwalk.7@gmail.com</strong>, or connect on GitHub.
              </p>
            </div>

            <div className="space-y-3">
              {socialLinks.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">
                          {item.name}
                        </div>
                        <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
                          {item.handle}
                        </div>
                      </div>
                    </div>

                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      Connect
                    </a>
                  </div>
                );
              })}
            </div>

            <div className="p-5 rounded-2xl bg-blue-600/10 dark:bg-blue-950/40 border border-blue-500/30 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1">
              <span className="font-bold text-blue-600 dark:text-blue-400 block">⚡ Direct Phone & Email Contact</span>
              <p>Inquiries regarding Full-Stack Web Development, React Apps, Cloud AWS, or DevOps consulting are responded to promptly via <strong>+91 7386078298</strong> or <strong>katkojwalk.7@gmail.com</strong>.</p>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass-card p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6 shadow-xl">
              
              <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Fill in your project details or questions below.
                </p>
              </div>

              {status && (
                <div
                  className={`p-4 rounded-xl text-xs sm:text-sm font-medium ${
                    status.type === 'success'
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                      : 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/30'
                  }`}
                >
                  {status.text}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-semibold text-slate-900 dark:text-slate-200 text-xs">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-semibold text-slate-900 dark:text-slate-200 text-xs">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-900 dark:text-slate-200 text-xs">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-900 dark:text-slate-200 text-xs">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your website project, cloud deployment request, or message details..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
