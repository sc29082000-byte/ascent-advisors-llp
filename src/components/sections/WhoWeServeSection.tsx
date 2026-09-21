import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CLIENT_SEGMENTS } from '../../data/mockData';
import { Users, CheckCircle2, ArrowRight, Shield, Layers } from 'lucide-react';

interface WhoWeServeSectionProps {
  onOpenAdvisorWithSegment?: (segmentName: string) => void;
}

export const WhoWeServeSection: React.FC<WhoWeServeSectionProps> = ({ onOpenAdvisorWithSegment }) => {
  const [selectedSegmentId, setSelectedSegmentId] = useState(CLIENT_SEGMENTS[0].id);
  const currentSegment = CLIENT_SEGMENTS.find((s) => s.id === selectedSegmentId) || CLIENT_SEGMENTS[0];

  return (
    <section className="relative w-full py-32 bg-[#050505] text-white border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#00D6FF] mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>CLIENT PROFILES</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Advisory that <br />
            <span className="text-gradient-cyan">grows with you.</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-white/60 leading-relaxed max-w-xl mx-auto">
            From Day-1 incorporation to pre-IPO audits, our practice adapts to your corporate velocity.
          </p>
        </div>

        {/* Segment Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto mb-12">
          {CLIENT_SEGMENTS.map((segment) => {
            const isSelected = segment.id === selectedSegmentId;
            return (
              <button
                key={segment.id}
                onClick={() => setSelectedSegmentId(segment.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 border ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#0050FF] to-[#0040D0] text-white border-[#00D6FF]/50 shadow-glow-blue'
                    : 'bg-[#0A0D12] text-white/60 border-white/[0.06] hover:border-white/[0.2] hover:text-white'
                }`}
              >
                {segment.name}
              </button>
            );
          })}
        </div>

        {/* Segment Details Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSegment.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto bg-[#0A0D12]/90 border border-white/[0.08] rounded-2xl p-8 sm:p-12 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.08] mb-8 gap-4">
              <div>
                <span className="text-xs font-mono text-[#00D6FF] uppercase tracking-wider block">
                  STRATEGIC FOCUS
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {currentSegment.name}
                </h3>
              </div>
              <div className="px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-white/70 font-mono">
                {currentSegment.focus}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Challenges */}
              <div>
                <div className="text-xs font-mono text-white/40 uppercase mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400/80" />
                  <span>Regulatory Vulnerabilities</span>
                </div>
                <div className="space-y-3">
                  {currentSegment.challenges.map((c, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs sm:text-sm text-white/70">
                      {c}
                    </div>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div>
                <div className="text-xs font-mono text-white/40 uppercase mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Ascent Advisory Blueprint</span>
                </div>
                <div className="space-y-3">
                  {currentSegment.solutions.map((s, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-[#0050FF]/10 border border-[#0050FF]/25 text-xs sm:text-sm text-white/90 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#00D6FF] shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Compliance Stack Strip */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-white/40">RECOMMENDED STACK:</span>
                <div className="flex flex-wrap gap-1.5">
                  {currentSegment.complianceStack.map((item) => (
                    <span key={item} className="px-2 py-0.5 rounded bg-white/[0.04] text-[11px] font-mono text-[#00D6FF]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  if (onOpenAdvisorWithSegment) {
                    onOpenAdvisorWithSegment(currentSegment.name);
                  }
                }}
                className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-[#00D6FF] transition-colors"
              >
                <span>Request Segment Retainer</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00D6FF]" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
