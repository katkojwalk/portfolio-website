import React, { useState } from 'react';
import { Phone, MessageCircle, X, ChevronUp, Send } from 'lucide-react';

export default function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "7386078298";
  const formattedPhone = "+91 7386078298";
  
  const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent("Hi Katkojwal Krishna, I saw your portfolio website and would like to discuss a project / job opportunity.")}`;
  const callUrl = `tel:+91${phoneNumber}`;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3 font-sans">
      
      {/* Expanded Quick Contact Menu */}
      {isOpen && (
        <div className="flex flex-col gap-2.5 bg-white/95 dark:bg-slate-900/95 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl backdrop-blur-md animate-fadeIn scale-100 min-w-[210px] text-xs">
          <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider px-2 pt-1 border-b border-slate-200 dark:border-slate-800 pb-2 flex items-center justify-between">
            <span>Quick Connect</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          </div>

          {/* WhatsApp Direct Action Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold shadow-md shadow-emerald-500/20 transition-all hover:scale-[1.02]"
          >
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
              <MessageCircle className="w-4 h-4 fill-white text-emerald-500" />
            </div>
            <div>
              <div className="font-bold text-xs">WhatsApp Chat</div>
              <div className="text-[10px] opacity-90 font-mono">+91 7386078298</div>
            </div>
          </a>

          {/* Phone Call Direct Action Button */}
          <a
            href={callUrl}
            className="flex items-center gap-3 p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02]"
          >
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4 fill-white text-blue-600" />
            </div>
            <div>
              <div className="font-bold text-xs">Direct Phone Call</div>
              <div className="text-[10px] opacity-90 font-mono">+91 7386078298</div>
            </div>
          </a>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative p-3.5 sm:p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group ${
          isOpen
            ? "bg-slate-800 text-white border border-slate-700 hover:bg-slate-700"
            : "bg-emerald-500 hover:bg-emerald-400 text-white shadow-emerald-500/30 scale-100 hover:scale-105"
        }`}
        aria-label="Contact Katkojwal Krishna via Phone or WhatsApp"
      >
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white dark:border-slate-900 animate-bounce" />
        )}

        {isOpen ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        ) : (
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm px-1">
            <MessageCircle className="w-5 h-5 fill-white text-emerald-500" />
            <span className="hidden sm:inline">Contact Krishna</span>
          </div>
        )}
      </button>

    </div>
  );
}
