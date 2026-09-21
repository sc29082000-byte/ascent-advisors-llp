import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES_DATA } from '../../data/mockData';
import { ServiceDetail } from '../../types';
import { ArrowUpRight, CheckCircle2, FileSpreadsheet, Layers, ShieldCheck, X } from 'lucide-react';

interface ServicesSectionProps {
  onOpenAdvisorWithService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenAdvisorWithService }) => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  return (
    <section id="services" className="relative w-full py-32 bg-[#07090C] text-white border-t border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0050FF]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#00D6FF] mb-4">
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white max-w-2xl leading-[1.1]">
              Expertise built <br />
              <span className="text-gradient-cyan">around your business.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-white/60 max-w-md font-normal leading-relaxed">
            Engineered compliance frameworks designed to replace piecemeal advisory with structured, scalable regulatory governance.
          </p>
        </div>

        {/* 6 Luxury Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => setSelectedService(service)}
              className="group relative bg-[#0A0D12]/80 backdrop-blur-xl border border-white/[0.08] hover:border-[#00D6FF]/40 rounded-2xl p-8 transition-all duration-400 hover:shadow-[0_12px_40px_-10px_rgba(0,80,255,0.2)] hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
            >
              {/* Top Card Info */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-sm font-mono text-[#00D6FF] tracking-wider font-semibold">
                    {service.number}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06]">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-[#00D6FF] transition-colors duration-200">
                  {service.title}
                </h3>

                <p className="text-xs text-white/70 italic mt-1 font-medium">
                  "{service.tagline}"
                </p>

                <p className="mt-4 text-xs text-white/50 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom Card Action */}
              <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-medium">
                <span className="text-white/60 group-hover:text-white transition-colors">
                  Inspect Statutory Scope
                </span>
                <div className="w-8 h-8 rounded-full bg-white/[0.04] group-hover:bg-[#0050FF]/30 border border-white/[0.08] group-hover:border-[#00D6FF]/50 flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 text-white/60 group-hover:text-[#00D6FF] transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Deep-Dive Scope Drawer / Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl bg-[#0A0D12] border border-white/[0.12] rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white/60 hover:text-white transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 text-xs font-mono text-[#00D6FF] mb-2">
                <span>SERVICE {selectedService.number}</span>
                <span className="text-white/20">•</span>
                <span className="uppercase">{selectedService.category} PRACTICE</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {selectedService.title}
              </h3>
              <p className="text-sm text-[#00D6FF] mt-1 font-medium">
                "{selectedService.tagline}"
              </p>

              <p className="text-sm text-white/70 mt-4 leading-relaxed">
                {selectedService.description}
              </p>

              {/* Statutory Forms Covered */}
              <div className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-[11px] font-mono tracking-wider text-white/40 uppercase mb-2 flex items-center gap-2">
                  <FileSpreadsheet className="w-3.5 h-3.5 text-[#00D6FF]" />
                  <span>Statutory Forms & Regulatory Schedules Handled</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedService.statutoryForms.map((form) => (
                    <span
                      key={form}
                      className="px-2.5 py-1 rounded bg-[#0050FF]/15 border border-[#0050FF]/30 text-[11px] font-mono text-[#00D6FF]"
                    >
                      {form}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Deliverables */}
              <div className="mt-6">
                <div className="text-xs font-mono tracking-wider text-white/50 uppercase mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Key Statutory Deliverables</span>
                </div>
                <div className="space-y-2.5">
                  {selectedService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-[#00D6FF] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cadence and Target Audience */}
              <div className="mt-6 pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-white/40 block font-mono text-[11px]">FILING CADENCE</span>
                  <span className="text-white/80 font-medium mt-0.5 block">{selectedService.frequency}</span>
                </div>
                <div>
                  <span className="text-white/40 block font-mono text-[11px]">TARGET PROFILE</span>
                  <span className="text-white/80 font-medium mt-0.5 block">{selectedService.targetClients}</span>
                </div>
              </div>

              {/* Modal CTA */}
              <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-xs font-mono text-white/40">ASCENT ADVISORS LLP // PRACTICE DESK</span>
                <button
                  onClick={() => {
                    const serviceTitle = selectedService.title;
                    setSelectedService(null);
                    if (onOpenAdvisorWithService) {
                      onOpenAdvisorWithService(serviceTitle);
                    }
                  }}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0050FF] to-[#00D6FF] text-white font-semibold text-xs flex items-center gap-2 shadow-glow-blue hover:shadow-glow-cyan transition-all"
                >
                  <span>Engage Practice Team</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
