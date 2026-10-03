import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CLIENT_SEGMENTS } from '../../data/mockData';
import { Users, CheckCircle2, ArrowRight } from 'lucide-react';

interface WhoWeServeSectionProps {
  onOpenAdvisorWithSegment?: (segmentName: string) => void;
}

export const WhoWeServeSection: React.FC<WhoWeServeSectionProps> = ({ onOpenAdvisorWithSegment }) => {
  const [selectedSegmentId, setSelectedSegmentId] = useState(CLIENT_SEGMENTS[0].id);
  const currentSegment = CLIENT_SEGMENTS.find((s) => s.id === selectedSegmentId) || CLIENT_SEGMENTS[0];

  return (
    <section className="relative w-full py-32 bg-[#F8FAFC] text-[#0F172A] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#E2E8F0] text-xs font-mono text-[#2563EB] mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>CLIENT PROFILES</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
            Advisory that <br />
            <span className="text-gradient-cyan">scales with velocity.</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#64748B] leading-relaxed max-w-xl mx-auto">
            From Day-1 incorporation and early funding to mid-market expansion and pre-IPO audits, our practice adapts to your corporate trajectory.
          </p>
        </div>

        {/* Segment Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto mb-12">
          {CLIENT_SEGMENTS.map((segment) => {
            const isSelected = segment.id === selectedSegmentId;
            return (
              <button
                key={segment.id}
                onClick={() => setSelectedSegmentId(segment.id)}
                className={`px-4 py-2 rounded-lg text-xs font-medium tracking-tight transition-all duration-200 border ${
                  isSelected
                    ? 'bg-[#1769FF] text-white border-[#2563EB]/40 shadow-[0_0_15px_rgba(23,105,255,0.25)]'
                    : 'bg-white text-[#64748B] border-[#E2E8F0] hover:border-[#E2E8F0] hover:text-[#0F172A]'
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
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto bg-white border border-[#E2E8F0] rounded-xl p-8 sm:p-12 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05),0_4px_6px_-2px_rgba(0,0,0,0.02)]"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E2E8F0] mb-8 gap-4">
              <div>
                <span className="text-xs font-mono text-[#2563EB] uppercase tracking-wider block">
                  STRATEGIC FOCUS
                </span>
                <h3 className="text-2xl font-bold text-[#0F172A] mt-1">
                  {currentSegment.name}
                </h3>
              </div>
              <div className="px-3.5 py-1.5 rounded-md bg-white border border-[#E2E8F0] text-xs text-[#64748B] font-mono">
                {currentSegment.focus}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Challenges */}
              <div>
                <div className="text-xs font-mono text-[#64748B] uppercase mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>Regulatory Vulnerabilities</span>
                </div>
                <div className="space-y-3">
                  {currentSegment.challenges.map((c, i) => (
                    <div key={i} className="p-3.5 rounded-lg bg-white border border-[#E2E8F0] text-xs sm:text-sm text-[#64748B]">
                      {c}
                    </div>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div>
                <div className="text-xs font-mono text-[#64748B] uppercase mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#18C8A0]" />
                  <span>Ascent Advisory Blueprint</span>
                </div>
                <div className="space-y-3">
                  {currentSegment.solutions.map((s, i) => (
                    <div key={i} className="p-3.5 rounded-lg bg-white border border-[#E2E8F0] text-xs sm:text-sm text-[#0F172A] flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Compliance Stack Strip */}
            <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#64748B]">RECOMMENDED STACK:</span>
                <div className="flex flex-wrap gap-1.5">
                  {currentSegment.complianceStack.map((item) => (
                    <span key={item} className="px-2.5 py-0.5 rounded-md bg-white border border-[#E2E8F0] text-[11px] font-mono text-[#2563EB]">
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
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#0F172A] hover:text-[#2563EB] transition-colors"
              >
                <span>Request Segment Retainer</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#2563EB]" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
