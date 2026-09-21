import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ADVISORY_STAGES } from '../../data/mockData';
import { 
  Sparkles, 
  ArrowRight
} from 'lucide-react';

export const AdvisorySection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStage = ADVISORY_STAGES[activeStepIndex];

  return (
    <section id="advisory" className="relative w-full py-32 bg-[#030817] text-[#F5F8FF] border-t border-[rgba(70,150,220,0.18)] overflow-hidden">
      {/* Background geometric grid and subtle glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-[#1769FF]/8 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#071225] border border-[rgba(70,150,220,0.18)] text-xs font-mono text-[#00D4FF] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE STRATEGIC CONVERSION</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F5F8FF] leading-tight">
            From compliance <br />
            <span className="text-gradient-cyan">to strategy.</span>
          </h2>

          <p className="mt-6 text-sm sm:text-base text-[#91A4BD] leading-relaxed max-w-2xl mx-auto">
            Your statutory filings and regulatory data should do more than fulfill compliance mandates. They should deliver structural visibility and executive decision-making clarity.
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
                className={`p-4 rounded-lg text-left transition-all duration-300 relative border ${
                  isActive
                    ? 'bg-[#0A1629] border-[#00D4FF]/60 shadow-[0_0_20px_rgba(23,105,255,0.25)]'
                    : 'bg-[#071225] border-[rgba(70,150,220,0.15)] hover:border-[rgba(70,150,220,0.3)] hover:bg-[#0A1629]/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-semibold ${isActive ? 'text-[#00D4FF]' : 'text-[#91A4BD]'}`}>
                    STAGE {stage.step}
                  </span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-[#00D4FF]" />}
                </div>

                <div className={`text-sm font-bold tracking-tight ${isActive ? 'text-[#F5F8FF]' : 'text-[#91A4BD]'}`}>
                  {stage.title}
                </div>

                <div className="text-[11px] text-[#91A4BD]/80 mt-1 line-clamp-1">
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
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto bg-[#0A1629] border border-[rgba(70,150,220,0.22)] rounded-xl p-8 sm:p-12 shadow-corporate-card relative overflow-hidden"
          >
            {/* Ambient accent inside card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1769FF]/5 blur-[100px] pointer-events-none rounded-full" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left Column */}
              <div className="md:col-span-7">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00D4FF] mb-2">
                  <span>STAGE {activeStage.step} // TRANSFORMATION ARCHITECTURE</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F8FF] tracking-tight">
                  {activeStage.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[#00D4FF] mt-1">
                  "{activeStage.shortDesc}"
                </p>

                <p className="text-xs sm:text-sm text-[#91A4BD] mt-4 leading-relaxed">
                  {activeStage.fullDesc}
                </p>

                {/* Capabilities list */}
                <div className="mt-6 space-y-2.5">
                  {activeStage.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-[#F5F8FF]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column */}
              <div className="md:col-span-5 flex flex-col justify-center">
                <div className="p-6 rounded-lg bg-[#071225] border border-[rgba(70,150,220,0.18)] relative">
                  <div className="text-[11px] font-mono tracking-wider text-[#91A4BD] uppercase mb-1">
                    {activeStage.metricLabel}
                  </div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-[#00D4FF] tracking-tight font-mono">
                    {activeStage.metricValue}
                  </div>
                  <div className="mt-4 pt-4 border-t border-[rgba(70,150,220,0.14)] text-xs text-[#91A4BD] leading-relaxed">
                    Continuous statutory governance ensures regulatory immunity while generating forward-looking intelligence.
                  </div>

                  {/* Flow status mini meter */}
                  <div className="mt-4 flex items-center gap-1.5">
                    {[0, 1, 2, 3].map((stepIdx) => (
                      <div
                        key={stepIdx}
                        className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                          stepIdx <= activeStepIndex ? 'bg-[#00D4FF]' : 'bg-[#0E1B33]'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Next step button */}
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => setActiveStepIndex((prev) => (prev + 1) % 4)}
                    className="text-xs font-mono text-[#91A4BD] hover:text-[#00D4FF] flex items-center gap-2 transition-colors"
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
