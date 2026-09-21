import React from 'react';
import { motion } from 'framer-motion';
import { TRUST_PILLARS, TRUST_METRICS } from '../../data/mockData';
import { ShieldCheck, Target, Clock, Network, Compass } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const pillarIcons = [
    <Target className="w-5 h-5 text-[#00D6FF]" />,
    <Clock className="w-5 h-5 text-emerald-400" />,
    <Network className="w-5 h-5 text-blue-400" />,
    <Compass className="w-5 h-5 text-purple-400" />
  ];

  return (
    <section id="trust" className="relative w-full py-32 bg-[#07090C] text-white border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#00D6FF] mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>INSTITUTIONAL TRUST & GOVERNANCE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Built for businesses <br />
              <span className="text-gradient-cyan">that think ahead.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-white/60 max-w-md font-normal leading-relaxed">
            Statutory rigor engineered with corporate agility. We provide advisory infrastructure that eliminates friction at scale.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {TRUST_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-8 rounded-2xl bg-[#0A0D12]/70 border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                    {pillarIcons[idx]}
                  </div>
                  <span className="font-mono text-xs text-white/40">{pillar.number}</span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight uppercase">
                  {pillar.title}
                </h3>

                <p className="text-xs text-[#00D6FF] font-medium mt-1">
                  {pillar.subtitle}
                </p>

                <p className="text-xs text-white/50 leading-relaxed mt-4">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] text-[10px] font-mono text-white/30 tracking-wider">
                ASCENT STANDARD // 0{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quantifiable Trust Metrics Banner */}
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-[#0A0D12] to-[#0E131A] border border-white/[0.08] relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0050FF]/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {TRUST_METRICS.map((metric, idx) => (
              <div key={idx} className="border-l border-white/[0.1] pl-6">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-mono">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold text-white/80 mt-2">
                  {metric.label}
                </div>
                <div className="text-[11px] text-white/40 mt-1 leading-normal">
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
