import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ADVISORY_STAGES } from '../../data/mockData';
import { 
  TrendingUp, 
  CheckCircle, 
  Layers, 
  BarChart3, 
  Sparkles, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

export const AdvisorySection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStage = ADVISORY_STAGES[activeStepIndex];

  return (
    <section id="advisory" className="relative w-full py-32 bg-[#050505] text-white overflow-hidden">
      {/* Background geometric grid and glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-[#0050FF]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#00D6FF] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE STRATEGIC CONVERSION</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            From compliance <br />
            <span className="text-gradient-cyan">to strategy.</span>
          </h2>

          <p className="mt-6 text-sm sm:text-base text-white/70 leading-relaxed max-w-2xl mx-auto">
            Your numbers and compliance data should do more than satisfy a requirement. They should help you understand where your business stands and where it can go next.
          </p>
        </div>

        {/* 4-Stage Interactive Pipeline Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-12">
          {ADVISORY_STAGES.map((stage, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-xl text-left transition-all duration-300 relative border ${
                  isActive
                    ? 'bg-[#0E131A] border-[#00D6FF]/50 shadow-[0_0_25px_rgba(0,214,255,0.15)]'
                    : 'bg-[#07090C]/60 border-white/[0.06] hover:border-white/[0.15] hover:bg-white/[0.02]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0050FF]/10 to-[#00D6FF]/10 pointer-events-none"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}

                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs ${isActive ? 'text-[#00D6FF]' : 'text-white/40'}`}>
                    STAGE {stage.step}
                  </span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-[#00D6FF] animate-ping" />}
                </div>

                <div className={`text-base font-bold tracking-tight ${isActive ? 'text-white' : 'text-white/70'}`}>
                  {stage.title}
                </div>

                <div className="text-[11px] text-white/50 mt-1 line-clamp-1">
                  {stage.shortDesc}
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Deep-Dive Canvas Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.step}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto bg-[#0A0D12]/90 border border-white/[0.1] rounded-2xl p-8 sm:p-12 shadow-2xl backdrop-blur-xl relative overflow-hidden"
          >
            {/* Ambient accent inside card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D6FF]/5 blur-[100px] pointer-events-none rounded-full" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left Column (Content) */}
              <div className="md:col-span-7">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00D6FF] mb-2">
                  <span>STAGE {activeStage.step} // TRANSFORMATION ARCHITECTURE</span>
                </div>

                <h3 className="text-3xl font-extrabold text-white tracking-tight">
                  {activeStage.title}
                </h3>
                <p className="text-sm font-medium text-white/80 mt-1">
                  {activeStage.shortDesc}
                </p>

                <p className="text-sm text-white/60 mt-4 leading-relaxed">
                  {activeStage.fullDesc}
                </p>

                {/* Capabilities list */}
                <div className="mt-6 space-y-2.5">
                  {activeStage.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00D6FF]" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column (Metric & Visual System) */}
              <div className="md:col-span-5 flex flex-col justify-center">
                <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] relative">
                  <div className="text-[11px] font-mono tracking-wider text-white/40 uppercase mb-1">
                    {activeStage.metricLabel}
                  </div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-gradient-cyan tracking-tight font-mono">
                    {activeStage.metricValue}
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/[0.06] text-xs text-white/50 leading-relaxed">
                    Continuous statutory data monitoring prevents compliance lapses and generates real-time management intelligence.
                  </div>

                  {/* Flow status mini meter */}
                  <div className="mt-4 flex items-center gap-1.5">
                    {[0, 1, 2, 3].map((stepIdx) => (
                      <div
                        key={stepIdx}
                        className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                          stepIdx <= activeStepIndex ? 'bg-[#00D6FF]' : 'bg-white/10'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Next step button */}
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => setActiveStepIndex((prev) => (prev + 1) % 4)}
                    className="text-xs font-mono text-white/60 hover:text-[#00D6FF] flex items-center gap-2 transition-colors"
                  >
                    <span>NEXT TRANSFORMATION STEP</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
