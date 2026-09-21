import React from 'react';
import { ArrowUpRight, Sparkles, ChevronDown } from 'lucide-react';

interface CtaSectionProps {
  onOpenAdvisor: () => void;
  onScrollToServices: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenAdvisor, onScrollToServices }) => {
  return (
    <section id="contact" className="relative w-full py-32 sm:py-40 bg-[#050505] text-white overflow-hidden border-t border-white/[0.06]">
      {/* Background ambient luxury blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#0050FF]/20 to-[#00D6FF]/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#00D6FF] mb-8 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>INSTITUTIONAL PARTNERSHIP</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05] uppercase">
          Ready to <br />
          <span className="text-gradient-cyan">move forward?</span>
        </h2>

        <p className="mt-6 text-base sm:text-xl text-white/70 max-w-xl mx-auto font-normal leading-relaxed">
          Let's build a stronger, more compliant and better-informed business.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenAdvisor}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#0050FF] to-[#00D6FF] text-white font-bold text-sm shadow-glow-blue hover:shadow-[0_0_35px_rgba(0,214,255,0.5)] transition-all duration-300 active:scale-95 flex items-center gap-2"
          >
            <span>Talk to an Advisor</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={onScrollToServices}
            className="px-8 py-4 rounded-full bg-white/[0.06] border border-white/[0.12] text-white font-semibold text-sm hover:bg-white/[0.1] transition-all duration-300 active:scale-95"
          >
            Explore Services
          </button>
        </div>

        {/* Final Monolithic Brand Lockup */}
        <div className="mt-24 pt-16 border-t border-white/[0.08] flex flex-col items-center">
          {/* Logo Mark */}
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0050FF]/25 to-[#00D6FF]/15 border border-[#00D6FF]/40 flex items-center justify-center mb-6 shadow-glow-blue">
            <svg
              className="w-6 h-6 text-[#00D6FF]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 22 22 2 22" />
            </svg>
          </div>

          <div className="text-2xl sm:text-3xl font-bold tracking-[0.28em] text-white uppercase">
            ASCENT ADVISORS LLP
          </div>

          <div className="text-xs sm:text-sm tracking-[0.32em] text-[#00D6FF] uppercase font-mono mt-2">
            COMPLIANCE | ADVISORY | GROWTH
          </div>

          <div className="text-sm text-white/50 italic mt-3 font-light">
            "Building a Higher Tomorrow."
          </div>
        </div>
      </div>
    </section>
  );
};
