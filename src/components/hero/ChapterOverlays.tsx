import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  TrendingUp, 
  ChevronDown,
  Sparkles
} from 'lucide-react';

interface ChapterOverlaysProps {
  progress: number;
  onOpenAdvisor: () => void;
  onScrollToServices: () => void;
}

export const ChapterOverlays: React.FC<ChapterOverlaysProps> = ({
  progress,
  onOpenAdvisor,
  onScrollToServices,
}) => {
  // Determine active chapter (0 to 4)
  let activeChapter = 0;
  if (progress < 0.18) activeChapter = 0;
  else if (progress < 0.38) activeChapter = 1;
  else if (progress < 0.62) activeChapter = 2;
  else if (progress < 0.82) activeChapter = 3;
  else activeChapter = 4;

  // Calculate normalized progress within the active chapter for micro-parallax
  const chapterBounds = [
    { start: 0, end: 0.18 },
    { start: 0.18, end: 0.38 },
    { start: 0.38, end: 0.62 },
    { start: 0.62, end: 0.82 },
    { start: 0.82, end: 1.0 },
  ];
  const currentBound = chapterBounds[activeChapter];
  const intraProgress = Math.max(
    0,
    Math.min(1, (progress - currentBound.start) / (currentBound.end - currentBound.start))
  );

  return (
    <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-6 sm:p-10 lg:p-14">
      {/* Top HUD Telemetry Bar */}
      <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-[#91A4BD]/70 pt-16 sm:pt-10">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-[#00D4FF] shadow-[0_0_8px_#00D4FF]" />
          <span className="text-[#F5F8FF] font-semibold">ASCENT ADVISORS LLP // PRACTICE DESK</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-[#91A4BD]">
          <span>TELEMETRY: {(progress * 100).toFixed(0)}%</span>
          <span>PILLARS: GST / MCA / DIRECT TAX</span>
          <span className="text-[#18C8A0] font-medium">STATUS: VERIFIED</span>
        </div>
      </div>

      {/* Dynamic Chapter Overlays */}
      <div className="my-auto w-full">
        <AnimatePresence mode="wait">
          {/* CHAPTER 01: 0 - 18% (Positioned on the LEFT to give the 3D logo full breathing room on the right) */}
          {activeChapter === 0 && (
            <motion.div
              key="chapter-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ transform: `translateY(${(intraProgress - 0.5) * -15}px)` }}
              className="text-left flex flex-col items-start pointer-events-auto max-w-xl lg:max-w-2xl ml-2 sm:ml-6 lg:ml-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#071225] border border-[rgba(70,150,220,0.25)] text-xs font-mono text-[#00D4FF] mb-5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>COMPLIANCE | ADVISORY | GROWTH</span>
              </div>

              <div className="text-xs font-mono tracking-[0.2em] text-[#91A4BD] uppercase mb-2">
                ASCENT ADVISORS LLP
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F5F8FF] uppercase leading-[1.05]">
                Compliance. <br />
                <span className="text-gradient-cyan">Clarity.</span> Growth.
              </h1>

              <p className="mt-5 text-sm sm:text-base lg:text-lg text-[#91A4BD] max-w-lg font-normal leading-relaxed">
                Strategic compliance and advisory solutions helping businesses navigate statutory frameworks, mitigate regulatory friction, and move forward with confidence.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={onScrollToServices}
                  className="px-5 py-2.5 rounded-lg bg-[#1769FF] hover:bg-[#00D4FF] hover:text-[#030817] text-[#F5F8FF] font-semibold text-xs sm:text-sm shadow-[0_0_20px_rgba(23,105,255,0.3)] transition-all duration-300 active:scale-95 flex items-center gap-2 border border-[#00D4FF]/30"
                >
                  <span>Explore Statutory Scope</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenAdvisor}
                  className="px-5 py-2.5 rounded-lg bg-[#071225]/85 hover:bg-[#0A1629] border border-[rgba(70,150,220,0.28)] text-[#F5F8FF] font-medium text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 active:scale-95"
                >
                  <span>Talk to an Advisor</span>
                  <ArrowUpRight className="w-4 h-4 text-[#00D4FF]" />
                </button>
              </div>

              <div className="mt-8 flex items-center gap-2 text-[11px] font-mono text-[#91A4BD]/70 tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
                <span>SCROLL TO EXPLORE REGULATORY GOVERNANCE</span>
              </div>
            </motion.div>
          )}

          {/* CHAPTER 02: 18 - 38% */}
          {activeChapter === 1 && (
            <motion.div
              key="chapter-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ transform: `translateY(${(intraProgress - 0.5) * -15}px)` }}
              className="pointer-events-auto max-w-xl ml-2 sm:ml-6 lg:ml-10 bg-[#0A1629] border border-[rgba(70,150,220,0.18)] p-8 rounded-xl shadow-corporate-card"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-[#00D4FF] mb-3">
                <Cpu className="w-4 h-4" />
                <span>CHAPTER 02 // REGULATORY ARCHITECTURE</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#F5F8FF] leading-tight">
                Business is complex. <br />
                <span className="text-gradient-cyan">Compliance shouldn't be.</span>
              </h2>

              <p className="mt-4 text-xs sm:text-sm text-[#91A4BD] leading-relaxed">
                From registrations and taxation to audits and regulatory filings, we bring your critical statutory requirements together through one integrated advisory architecture.
              </p>

              {/* Technical Badges */}
              <div className="mt-6 grid grid-cols-3 gap-2.5 pt-4 border-t border-[rgba(70,150,220,0.18)]">
                {[
                  { label: 'PRECISION', desc: 'Zero-defect statutory files' },
                  { label: 'SYSTEMS', desc: 'Continuous compliance loop' },
                  { label: 'STRUCTURE', desc: 'Boardroom governance' },
                ].map((badge) => (
                  <div key={badge.label} className="p-2.5 rounded-lg bg-[#071225] border border-[rgba(70,150,220,0.15)]">
                    <div className="text-[10px] font-mono font-semibold text-[#00D4FF]">{badge.label}</div>
                    <div className="text-[9px] text-[#91A4BD] mt-0.5 leading-tight">{badge.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* CHAPTER 03: 38 - 62% */}
          {activeChapter === 2 && (
            <motion.div
              key="chapter-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto w-full flex flex-col justify-between min-h-[60vh]"
            >
              {/* Top Header */}
              <div className="text-center max-w-2xl mx-auto bg-[#071225]/90 border border-[rgba(70,150,220,0.18)] px-6 py-4 rounded-xl shadow-lg">
                <div className="inline-flex items-center gap-2 text-[11px] font-mono text-[#00D4FF] mb-1">
                  <Layers className="w-3.5 h-3.5" />
                  <span>CHAPTER 03 // THE STATUTORY PILLARS</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#F5F8FF]">
                  Everything your enterprise needs <span className="text-gradient-cyan">to stay compliant.</span>
                </h2>
              </div>

              {/* Bottom HUD Aligned with the 3 Pedestals */}
              <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mt-auto pt-6">
                {/* GST Pillar Label */}
                <div className="bg-[#0A1629] border border-[rgba(70,150,220,0.22)] hover:border-[#18C8A0]/60 p-4 rounded-xl transition-all shadow-corporate-card">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="px-2 py-0.5 rounded bg-[#18C8A0]/15 text-[#18C8A0] font-semibold">
                      INDIRECT TAX
                    </span>
                    <span className="text-[#91A4BD]">PILLAR 01</span>
                  </div>
                  <div className="text-sm font-bold text-[#F5F8FF] mt-1.5">GST & Indirect Tax</div>
                  <div className="text-[11px] text-[#91A4BD] mt-0.5">GSTR-1, GSTR-3B, E-Invoicing & 2B ITC</div>
                </div>

                {/* MCA Pillar Label */}
                <div className="bg-[#0A1629] border border-[rgba(70,150,220,0.22)] hover:border-[#1769FF]/60 p-4 rounded-xl transition-all shadow-corporate-card">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="px-2 py-0.5 rounded bg-[#1769FF]/15 text-[#1769FF] font-semibold">
                      CORPORATE
                    </span>
                    <span className="text-[#91A4BD]">PILLAR 02</span>
                  </div>
                  <div className="text-sm font-bold text-[#F5F8FF] mt-1.5">ROC & Corporate Law</div>
                  <div className="text-[11px] text-[#91A4BD] mt-0.5">AOC-4, MGT-7, DIR-3 KYC & Secretarial</div>
                </div>

                {/* Income Tax Pillar Label */}
                <div className="bg-[#0A1629] border border-[rgba(70,150,220,0.22)] hover:border-[#00D4FF]/60 p-4 rounded-xl transition-all shadow-corporate-card">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="px-2 py-0.5 rounded bg-[#00D4FF]/15 text-[#00D4FF] font-semibold">
                      DIRECT TAX
                    </span>
                    <span className="text-[#91A4BD]">PILLAR 03</span>
                  </div>
                  <div className="text-sm font-bold text-[#F5F8FF] mt-1.5">Direct Tax & Advisory</div>
                  <div className="text-[11px] text-[#91A4BD] mt-0.5">ITR-6, Form 15CB, TDS/TCS & Modeling</div>
                </div>
              </div>
            </motion.div>
          )}

          {/* CHAPTER 04: 62 - 82% */}
          {activeChapter === 3 && (
            <motion.div
              key="chapter-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ transform: `translateY(${(intraProgress - 0.5) * -15}px)` }}
              className="pointer-events-auto max-w-xl ml-2 sm:ml-6 lg:ml-10 bg-[#0A1629] border border-[rgba(70,150,220,0.18)] p-8 rounded-xl shadow-corporate-card"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-[#00D4FF] mb-3">
                <TrendingUp className="w-4 h-4" />
                <span>CHAPTER 04 // CONVERGENCE</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#F5F8FF] leading-tight">
                Beyond <br />
                <span className="text-gradient-cyan">compliance.</span>
              </h2>

              <p className="mt-4 text-xs sm:text-sm text-[#91A4BD] leading-relaxed">
                We don't stop at filing and reporting. We help leadership understand their financials, mitigate operational exposure, and structure growth.
              </p>

              {/* Connected Advisory Concepts */}
              <div className="mt-6 flex items-center justify-between p-3.5 rounded-lg bg-[#071225] border border-[rgba(70,150,220,0.18)]">
                <div className="text-center flex-1">
                  <div className="text-[10px] font-mono text-[#91A4BD]">01</div>
                  <div className="text-xs font-bold text-[#F5F8FF] mt-0.5">COMPLIANCE</div>
                </div>
                <div className="text-[#00D4FF] font-mono text-xs px-1">→</div>
                <div className="text-center flex-1">
                  <div className="text-[10px] font-mono text-[#91A4BD]">02</div>
                  <div className="text-xs font-bold text-[#00D4FF] mt-0.5">ADVISORY</div>
                </div>
                <div className="text-[#00D4FF] font-mono text-xs px-1">→</div>
                <div className="text-center flex-1">
                  <div className="text-[10px] font-mono text-[#91A4BD]">03</div>
                  <div className="text-xs font-bold text-[#18C8A0] mt-0.5">GROWTH</div>
                </div>
              </div>

              {/* Supporting Services Badges */}
              <div className="mt-4 flex flex-wrap gap-1.5 text-[10px] font-mono text-[#91A4BD]">
                {[
                  'Tax Planning',
                  'Financial Reporting',
                  'Audit & Assurance',
                  'Business Structuring',
                  'Regulatory Advisory',
                  'Virtual CFO'
                ].map((s) => (
                  <span key={s} className="px-2.5 py-1 rounded-md bg-[#071225] border border-[rgba(70,150,220,0.15)]">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* CHAPTER 05: 82 - 100% */}
          {activeChapter === 4 && (
            <motion.div
              key="chapter-5"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ transform: `translateY(${(intraProgress - 0.5) * -15}px)` }}
              className="text-left flex flex-col items-start pointer-events-auto max-w-xl lg:max-w-2xl ml-2 sm:ml-6 lg:ml-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#071225] border border-[rgba(70,150,220,0.25)] text-xs font-mono text-[#00D4FF] mb-5 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>CHAPTER 05 // INSTITUTIONAL PARTNERSHIP</span>
              </div>

              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F5F8FF] uppercase leading-[1.05]">
                Build a <br />
                <span className="text-gradient-cyan">Higher Tomorrow.</span>
              </h2>

              <p className="mt-5 text-sm sm:text-base lg:text-lg text-[#91A4BD] max-w-lg font-normal leading-relaxed">
                Trusted compliance and advisory architecture for businesses ready to move forward.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
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
                  <span>Review All Practices</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Telemetry Footer */}
      <div className="flex items-center justify-between text-[11px] font-mono text-[#91A4BD]/60 pb-4">
        <span>FRAMEWORK: INDIAN CA & CS PRACTICE STANDARDS</span>
        <span>CONFIDENTIAL & REGULATED</span>
      </div>
    </div>
  );
};
