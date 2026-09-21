import React from 'react';
import { motion } from 'framer-motion';
import { TRUST_PILLARS, TRUST_METRICS } from '../../data/mockData';
import { ShieldCheck, Target, Clock, Network, Compass } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const pillarIcons = [
    <Target className="w-5 h-5 text-[#00D4FF]" />,
    <Clock className="w-5 h-5 text-[#18C8A0]" />,
    <Network className="w-5 h-5 text-[#1769FF]" />,
    <Compass className="w-5 h-5 text-[#00D4FF]" />
  ];

  return (
    <section id="trust" className="relative w-full py-32 bg-[#071225] text-[#F5F8FF] border-t border-[rgba(70,150,220,0.18)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0A1629] border border-[rgba(70,150,220,0.18)] text-xs font-mono text-[#00D4FF] mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>INSTITUTIONAL TRUST & GOVERNANCE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#F5F8FF] leading-tight">
              Built for enterprises <br />
              <span className="text-gradient-cyan">that prioritize precision.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-[#91A4BD] max-w-md font-normal leading-relaxed">
            Statutory rigor engineered with corporate agility. We provide compliance and advisory infrastructure that eliminates friction at scale.
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
              className="p-7 rounded-xl bg-[#0A1629] border border-[rgba(70,150,220,0.18)] hover:border-[rgba(0,212,255,0.35)] transition-all duration-300 hover:shadow-corporate-card hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-9 h-9 rounded-lg bg-[#071225] border border-[rgba(70,150,220,0.22)] flex items-center justify-center">
                    {pillarIcons[idx]}
                  </div>
                  <span className="font-mono text-xs text-[#91A4BD]">{pillar.number}</span>
                </div>

                <h3 className="text-base font-bold text-[#F5F8FF] tracking-tight uppercase">
                  {pillar.title}
                </h3>

                <p className="text-xs text-[#00D4FF] font-medium mt-1">
                  {pillar.subtitle}
                </p>

                <p className="text-xs text-[#91A4BD] leading-relaxed mt-3">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[rgba(70,150,220,0.14)] text-[10px] font-mono text-[#91A4BD]/60 tracking-wider">
                ASCENT STANDARD // 0{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quantifiable Trust Metrics Banner */}
        <div className="p-8 sm:p-12 rounded-xl bg-[#0A1629] border border-[rgba(70,150,220,0.22)] shadow-corporate-card relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1769FF]/8 blur-[120px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {TRUST_METRICS.map((metric, idx) => (
              <div key={idx} className="border-l border-[rgba(70,150,220,0.2)] pl-6">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F8FF] tracking-tight font-mono">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold text-[#00D4FF] mt-2">
                  {metric.label}
                </div>
                <div className="text-[11px] text-[#91A4BD] mt-1 leading-normal">
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
