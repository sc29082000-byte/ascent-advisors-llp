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
      <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-white/40 pt-16 sm:pt-10">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-[#00D6FF] shadow-[0_0_8px_#00D6FF]" />
          <span className="text-white/70">ASCENT ADVISORY SYSTEM // V4.2</span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span>PROGRESS: {(progress * 100).toFixed(0)}%</span>
          <span>PILLARS: GST / MCA / DIRECT TAX</span>
          <span className="text-emerald-400">STATUS: VERIFIED</span>
        </div>
      </div>

      {/* Dynamic Chapter Overlays (Positioned to complement 3D model focal points) */}
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07090C]/80 border border-white/[0.12] text-xs font-mono text-[#00D6FF] mb-6 backdrop-blur-xl shadow-lg">
                <Sparkles className="w-3.5 h-3.5" />
                <span>COMPLIANCE | ADVISORY | GROWTH</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white uppercase leading-[1.05] drop-shadow-2xl">
                Compliance. <br />
                <span className="text-gradient-cyan">Clarity.</span> Growth.
              </h1>

              <p className="mt-5 text-sm sm:text-base lg:text-lg text-white/75 max-w-lg font-normal leading-relaxed">
                Strategic compliance and advisory solutions that help businesses stay compliant, make informed decisions, and move forward with confidence.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={onScrollToServices}
                  className="px-6 py-3 rounded-full bg-white text-black font-semibold text-xs sm:text-sm hover:bg-white/90 transition-all duration-300 shadow-xl active:scale-95 flex items-center gap-2"
                >
                  <span>Explore Our Services</span>
                  <ChevronDown className="w-4 h-4 text-black/70" />
                </button>

                <button
                  onClick={onOpenAdvisor}
                  className="px-6 py-3 rounded-full bg-[#07090C]/85 border border-[#00D6FF]/40 text-white font-medium text-xs sm:text-sm hover:bg-white/[0.08] transition-all duration-300 shadow-glow-blue flex items-center gap-2 active:scale-95 backdrop-blur-md"
                >
                  <span>Talk to an Advisor</span>
                  <ArrowUpRight className="w-4 h-4 text-[#00D6FF]" />
                </button>
              </div>

              <div className="mt-8 flex items-center gap-2 text-[11px] font-mono text-white/40 tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D6FF] animate-pulse" />
                <span>SCROLL TO DISASSEMBLE REGULATORY LAYERS</span>
              </div>
            </motion.div>
          )}

          {/* CHAPTER 02: 18 - 38% (Positioned on the LEFT while 3D shards float across the center/right) */}
          {activeChapter === 1 && (
            <motion.div
              key="chapter-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ transform: `translateY(${(intraProgress - 0.5) * -15}px)` }}
              className="pointer-events-auto max-w-xl ml-2 sm:ml-6 lg:ml-10 bg-[#07090C]/85 backdrop-blur-2xl border border-white/[0.1] p-8 rounded-2xl shadow-2xl"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-[#00D6FF] mb-3">
                <Cpu className="w-4 h-4" />
                <span>CHAPTER 02 // REGULATORY COMPLEXITY</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Business is complex. <br />
                <span className="text-gradient-cyan">Compliance shouldn't be.</span>
              </h2>

              <p className="mt-4 text-xs sm:text-sm text-white/75 leading-relaxed">
                From registrations and taxation to audits and regulatory filings, we bring your critical compliance requirements together through one connected advisory approach.
              </p>

              {/* Technical Badges */}
              <div className="mt-6 grid grid-cols-3 gap-2.5 pt-4 border-t border-white/[0.06]">
                {[
                  { label: 'PRECISION', desc: 'Zero defect statutory files' },
                  { label: 'SYSTEMS', desc: 'Connected data loop' },
                  { label: 'STRUCTURE', desc: 'Corporate governance' },
                ].map((badge) => (
                  <div key={badge.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                    <div className="text-[10px] font-mono font-semibold text-[#00D6FF]">{badge.label}</div>
                    <div className="text-[9px] text-white/50 mt-0.5 leading-tight">{badge.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* CHAPTER 03: 38 - 62% (TOP title + BOTTOM telemetry strip, keeping center 3D pedestals 100% visible) */}
          {activeChapter === 2 && (
            <motion.div
              key="chapter-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto w-full flex flex-col justify-between min-h-[60vh]"
            >
              {/* Top Header - Sits neatly above the 3 pedestals */}
              <div className="text-center max-w-2xl mx-auto bg-[#07090C]/75 backdrop-blur-xl border border-white/[0.08] px-6 py-4 rounded-2xl shadow-xl">
                <div className="inline-flex items-center gap-2 text-[11px] font-mono text-[#00D6FF] mb-1">
                  <Layers className="w-3.5 h-3.5" />
                  <span>CHAPTER 03 // THE THREE PILLARS</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  Everything your business needs <span className="text-gradient-cyan">to stay compliant.</span>
                </h2>
              </div>

              {/* Bottom HUD Aligned with the 3 Pedestals (GST on left, MCA in center, Income Tax on right) */}
              <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mt-auto pt-6">
                {/* GST Pillar Label */}
                <div className="bg-[#07090C]/85 backdrop-blur-xl border border-emerald-500/30 p-3.5 rounded-xl hover:border-emerald-400/60 transition-all shadow-lg">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold">
                      INDIRECT TAX
                    </span>
                    <span className="text-white/40">PILLAR 01</span>
                  </div>
                  <div className="text-sm font-bold text-white mt-1.5">GST & Indirect Tax</div>
                  <div className="text-[11px] text-white/50 mt-0.5">GSTR-1, GSTR-3B, E-Invoicing & ITC</div>
                </div>

                {/* MCA Pillar Label */}
                <div className="bg-[#07090C]/85 backdrop-blur-xl border border-blue-500/30 p-3.5 rounded-xl hover:border-blue-400/60 transition-all shadow-lg">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-semibold">
                      CORPORATE
                    </span>
                    <span className="text-white/40">PILLAR 02</span>
                  </div>
                  <div className="text-sm font-bold text-white mt-1.5">ROC & Corporate Compliance</div>
                  <div className="text-[11px] text-white/50 mt-0.5">AOC-4, MGT-7, DIR-3 KYC & Governance</div>
                </div>

                {/* Income Tax Pillar Label */}
                <div className="bg-[#07090C]/85 backdrop-blur-xl border border-cyan-500/30 p-3.5 rounded-xl hover:border-cyan-400/60 transition-all shadow-lg">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 font-semibold">
                      DIRECT TAX
                    </span>
                    <span className="text-white/40">PILLAR 03</span>
                  </div>
                  <div className="text-sm font-bold text-white mt-1.5">Direct Tax & Tax Advisory</div>
                  <div className="text-[11px] text-white/50 mt-0.5">ITR-6, Form 15CB, TDS/TCS & Modeling</div>
                </div>
              </div>
            </motion.div>
          )}

          {/* CHAPTER 04: 62 - 82% (Positioned on the LEFT while luminous light trails converge on the right) */}
          {activeChapter === 3 && (
            <motion.div
              key="chapter-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ transform: `translateY(${(intraProgress - 0.5) * -15}px)` }}
              className="pointer-events-auto max-w-xl ml-2 sm:ml-6 lg:ml-10 bg-[#07090C]/85 backdrop-blur-2xl border border-white/[0.1] p-8 rounded-2xl shadow-2xl"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-[#00D6FF] mb-3">
                <TrendingUp className="w-4 h-4" />
                <span>CHAPTER 04 // CONVERGENCE</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Beyond <br />
                <span className="text-gradient-cyan">compliance.</span>
              </h2>

              <p className="mt-4 text-xs sm:text-sm text-white/75 leading-relaxed">
                We don't stop at filing and reporting. We help businesses understand their numbers, manage risk, plan efficiently, and make better decisions.
              </p>

              {/* Connected Advisory Concepts */}
              <div className="mt-6 flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-center flex-1">
                  <div className="text-[10px] font-mono text-white/40">01</div>
                  <div className="text-xs font-bold text-white mt-0.5">COMPLIANCE</div>
                </div>
                <div className="text-[#00D6FF] font-mono text-xs px-1">→</div>
                <div className="text-center flex-1">
                  <div className="text-[10px] font-mono text-white/40">02</div>
                  <div className="text-xs font-bold text-[#00D6FF] mt-0.5">ADVISORY</div>
                </div>
                <div className="text-[#00D6FF] font-mono text-xs px-1">→</div>
                <div className="text-center flex-1">
                  <div className="text-[10px] font-mono text-white/40">03</div>
                  <div className="text-xs font-bold text-emerald-400 mt-0.5">GROWTH</div>
                </div>
              </div>

              {/* Supporting Services Pills */}
              <div className="mt-4 flex flex-wrap gap-1.5 text-[10px] font-mono text-white/60">
                {[
                  'Tax Planning',
                  'Financial Reporting',
                  'Audit & Assurance',
                  'Business Structuring',
                  'Regulatory Advisory',
                  'SME Advisory'
                ].map((s) => (
                  <span key={s} className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* CHAPTER 05: 82 - 100% (Positioned on the LEFT, giving the glowing 3D logo center-stage) */}
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0050FF]/20 border border-[#00D6FF]/40 text-xs font-mono text-[#00D6FF] mb-6 backdrop-blur-xl shadow-lg">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>CHAPTER 05 // THE ASCENT</span>
              </div>

              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white uppercase leading-[1.05] drop-shadow-2xl">
                Build a <br />
                <span className="text-gradient-cyan">Higher Tomorrow.</span>
              </h2>

              <p className="mt-5 text-sm sm:text-base lg:text-lg text-white/75 max-w-lg font-normal leading-relaxed">
                Trusted compliance and advisory for businesses ready to move forward.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenAdvisor}
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#0050FF] to-[#00D6FF] text-white font-bold text-xs sm:text-sm shadow-glow-blue hover:shadow-[0_0_35px_rgba(0,214,255,0.5)] transition-all duration-300 active:scale-95 flex items-center gap-2"
                >
                  <span>Talk to an Advisor</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onScrollToServices}
                  className="px-7 py-3.5 rounded-full bg-[#07090C]/80 border border-white/[0.15] text-white font-semibold text-xs sm:text-sm hover:bg-white/[0.12] transition-all duration-300 active:scale-95 backdrop-blur-md"
                >
                  Explore Our Services
                </button>
              </div>

              {/* Brand signature lockup */}
              <div className="mt-10 pt-6 border-t border-white/[0.08] flex flex-col items-start">
                <div className="text-base font-bold tracking-[0.25em] text-white uppercase">
                  ASCENT ADVISORS LLP
                </div>
                <div className="text-[11px] tracking-[0.28em] text-[#00D6FF] uppercase font-mono mt-1">
                  COMPLIANCE | ADVISORY | GROWTH
                </div>
                <div className="text-[11px] text-white/40 italic mt-1">
                  "Building a Higher Tomorrow."
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Timeline Indicator */}
      <div className="flex items-center justify-between border-t border-white/[0.08] pt-4 text-xs font-mono text-white/40">
        <div className="flex items-center gap-2 text-[10px] sm:text-xs">
          <span className={activeChapter === 0 ? 'text-[#00D6FF] font-bold' : ''}>01 IDENTITY</span>
          <span className="text-white/20">/</span>
          <span className={activeChapter === 1 ? 'text-[#00D6FF] font-bold' : ''}>02 COMPLEXITY</span>
          <span className="text-white/20">/</span>
          <span className={activeChapter === 2 ? 'text-[#00D6FF] font-bold' : ''}>03 ECOSYSTEM</span>
          <span className="text-white/20">/</span>
          <span className={activeChapter === 3 ? 'text-[#00D6FF] font-bold' : ''}>04 ADVISORY</span>
          <span className="text-white/20">/</span>
          <span className={activeChapter === 4 ? 'text-[#00D6FF] font-bold' : ''}>05 ASCENT</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] sm:text-xs">
          <span>CHAPTER 0{activeChapter + 1} / 05</span>
        </div>
      </div>
    </div>
  );
};
