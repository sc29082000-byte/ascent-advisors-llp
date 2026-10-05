import React from 'react';
import { motion } from 'framer-motion';
import { TRUST_PILLARS, TRUST_METRICS } from '../../data/mockData';
import { ShieldCheck, Target, Clock, Network, Compass } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const pillarIcons = [
    <Target className="w-5 h-5 text-[#2563EB]" />,
    <Clock className="w-5 h-5 text-[#059669]" />,
    <Network className="w-5 h-5 text-[#1769FF]" />,
    <Compass className="w-5 h-5 text-[#2563EB]" />
  ];

  return (
    <section id="trust" className="relative w-full py-32 bg-white text-[#0F172A] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#E2E8F0] text-xs font-mono text-[#2563EB] mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>INSTITUTIONAL TRUST & GOVERNANCE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
              Built for enterprises <br />
              <span className="text-gradient-cyan">that prioritize precision.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-[#64748B] max-w-md font-normal leading-relaxed">
            Statutory rigor engineered with corporate agility. We provide compliance and advisory infrastructure that eliminates friction at scale.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {TRUST_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-7 rounded-xl bg-white border border-[#E2E8F0] hover:border-[rgba(0,212,255,0.35)] transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05),0_4px_6px_-2px_rgba(0,0,0,0.02)] hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-9 h-9 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center">
                    {pillarIcons[idx]}
                  </div>
                  <span className="font-mono text-xs text-[#64748B]">{pillar.number}</span>
                </div>

                <h3 className="text-base font-bold text-[#0F172A] tracking-tight uppercase">
                  {pillar.title}
                </h3>

                <p className="text-xs text-[#2563EB] font-medium mt-1">
                  {pillar.subtitle}
                </p>

                <p className="text-xs text-[#64748B] leading-relaxed mt-3">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E2E8F0] text-[10px] font-mono text-[#64748B]/60 tracking-wider">
                ASCENT STANDARD // 0{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quantifiable Trust Metrics Banner */}
        <div className="p-8 sm:p-12 rounded-xl bg-white border border-[#E2E8F0] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05),0_4px_6px_-2px_rgba(0,0,0,0.02)] relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1769FF]/8 blur-[120px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {TRUST_METRICS.map((metric, idx) => (
              <div key={idx} className="border-l border-[#E2E8F0] pl-6">
                <div className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight font-mono break-words">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold text-[#2563EB] mt-2">
                  {metric.label}
                </div>
                <div className="text-[11px] text-[#64748B] mt-1 leading-normal">
                  {metric.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
