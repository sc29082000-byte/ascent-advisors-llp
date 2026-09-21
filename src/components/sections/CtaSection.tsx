import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface CtaSectionProps {
  onOpenAdvisor: () => void;
  onScrollToServices: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenAdvisor, onScrollToServices }) => {
  return (
    <section id="contact" className="relative w-full py-32 sm:py-40 bg-[#030817] text-[#F5F8FF] overflow-hidden border-t border-[rgba(70,150,220,0.18)]">
      {/* Background ambient royal blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#1769FF]/8 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#071225] border border-[rgba(70,150,220,0.18)] text-xs font-mono text-[#00D4FF] mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          <span>INSTITUTIONAL PARTNERSHIP</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#F5F8FF] leading-[1.05] uppercase">
          Ready to <br />
          <span className="text-gradient-cyan">move forward?</span>
        </h2>

        <p className="mt-6 text-base sm:text-lg text-[#91A4BD] max-w-xl mx-auto font-normal leading-relaxed">
          Let's build a stronger, defensible, and better-informed corporate enterprise.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenAdvisor}
            className="px-6 py-3 rounded-lg bg-[#1769FF] hover:bg-[#00D4FF] hover:text-[#030817] text-[#F5F8FF] font-semibold text-xs sm:text-sm shadow-[0_0_20px_rgba(23,105,255,0.3)] transition-all duration-300 active:scale-95 flex items-center gap-2 border border-[#00D4FF]/30"
          >
            <span>Talk to an Advisor</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={onScrollToServices}
            className="px-6 py-3 rounded-lg bg-[#071225]/85 hover:bg-[#0A1629] border border-[rgba(70,150,220,0.28)] text-[#F5F8FF] font-medium text-xs sm:text-sm transition-all duration-300 active:scale-95"
          >
            Explore Services
          </button>
        </div>

        {/* Final Monolithic Brand Lockup */}
        <div className="mt-24 pt-16 border-t border-[rgba(70,150,220,0.18)] flex flex-col items-center">
          {/* Logo Mark */}
          <div className="w-12 h-12 rounded-lg bg-[#0A1629] border border-[rgba(70,150,220,0.28)] flex items-center justify-center mb-6 shadow-corporate-card">
            <svg
              className="w-6 h-6 text-[#00D4FF]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 22 22 2 22" />
            </svg>
          </div>

          <div className="text-xl sm:text-2xl font-bold tracking-[0.22em] text-[#F5F8FF] uppercase">
            ASCENT ADVISORS LLP
          </div>

          <div className="text-xs sm:text-sm tracking-[0.28em] text-[#00D4FF] uppercase font-mono mt-2">
            COMPLIANCE | ADVISORY | GROWTH
          </div>

          <div className="text-xs text-[#91A4BD] italic mt-3 font-light">
            "Building a Higher Tomorrow."
          </div>
        </div>
      </div>
    </section>
  );
};
