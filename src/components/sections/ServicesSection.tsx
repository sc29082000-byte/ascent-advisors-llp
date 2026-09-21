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
    <section id="services" className="relative w-full py-32 bg-[#030817] text-[#F5F8FF] border-t border-[rgba(70,150,220,0.18)]">
      {/* Background subtle radial blue glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#1769FF]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#071225] border border-[rgba(70,150,220,0.18)] text-xs font-mono text-[#00D4FF] mb-4">
              <span>CORE STATUTORY CAPABILITIES</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#F5F8FF] max-w-2xl leading-[1.1]">
              Expertise engineered <br />
              <span className="text-gradient-cyan">for corporate certainty.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-[#91A4BD] max-w-md font-normal leading-relaxed">
            Structured advisory architecture replacing fragmented tax consultation with unified, institutional-grade compliance management.
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
              className="group relative bg-[#0A1629] border border-[rgba(70,150,220,0.18)] hover:border-[#00D4FF]/40 rounded-xl p-7 transition-all duration-300 hover:shadow-corporate-card hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
            >
              {/* Top Card Info */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-mono text-[#00D4FF] tracking-wider font-semibold">
                    {service.number}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-[#91A4BD] uppercase px-2 py-0.5 rounded bg-[#071225] border border-[rgba(70,150,220,0.15)]">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold tracking-tight text-[#F5F8FF] group-hover:text-[#00D4FF] transition-colors duration-200">
                  {service.title}
                </h3>

                <p className="text-xs text-[#00D4FF]/80 italic mt-1 font-medium">
                  "{service.tagline}"
                </p>

                <p className="mt-4 text-xs text-[#91A4BD] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom Card Action */}
              <div className="mt-8 pt-5 border-t border-[rgba(70,150,220,0.14)] flex items-center justify-between text-xs font-medium">
                <span className="text-[#91A4BD] group-hover:text-[#F5F8FF] transition-colors">
                  Inspect Statutory Scope
                </span>
                <div className="w-7 h-7 rounded-lg bg-[#071225] group-hover:bg-[#1769FF] border border-[rgba(70,150,220,0.22)] group-hover:border-[#00D4FF]/50 flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#91A4BD] group-hover:text-[#F5F8FF] transition-colors" />
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
              className="absolute inset-0 bg-[#030817]/85 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl bg-[#0A1629] border border-[rgba(70,150,220,0.25)] rounded-xl shadow-2xl p-6 sm:p-8 md:p-10 overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-lg bg-[#071225] hover:bg-[#0E1B33] text-[#91A4BD] hover:text-[#F5F8FF] border border-[rgba(70,150,220,0.18)] transition-colors"
                aria-label="Close details"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 text-xs font-mono text-[#00D4FF] mb-2">
                <span>SERVICE {selectedService.number}</span>
                <span className="text-[#91A4BD]/40">•</span>
                <span className="uppercase">{selectedService.category} PRACTICE</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F8FF] tracking-tight">
                {selectedService.title}
              </h3>
              <p className="text-sm text-[#00D4FF] mt-1 font-medium">
                "{selectedService.tagline}"
              </p>

              <p className="text-sm text-[#91A4BD] mt-4 leading-relaxed">
                {selectedService.description}
              </p>

              {/* Statutory Forms Covered */}
              <div className="mt-6 p-4 rounded-lg bg-[#071225] border border-[rgba(70,150,220,0.18)]">
                <div className="text-[11px] font-mono tracking-wider text-[#91A4BD] uppercase mb-2 flex items-center gap-2">
                  <FileSpreadsheet className="w-3.5 h-3.5 text-[#00D4FF]" />
                  <span>Statutory Forms & Regulatory Schedules Handled</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedService.statutoryForms.map((form) => (
                    <span
                      key={form}
                      className="px-2.5 py-1 rounded bg-[#0A1629] border border-[rgba(70,150,220,0.22)] text-[11px] font-mono text-[#00D4FF]"
                    >
                      {form}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Deliverables */}
              <div className="mt-6">
                <div className="text-xs font-mono tracking-wider text-[#91A4BD] uppercase mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#18C8A0]" />
                  <span>Key Statutory Deliverables</span>
                </div>
                <div className="space-y-2.5">
                  {selectedService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#F5F8FF]">
                      <CheckCircle2 className="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cadence and Target Audience */}
              <div className="mt-6 pt-6 border-t border-[rgba(70,150,220,0.18)] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[#91A4BD] block font-mono text-[11px]">FILING CADENCE</span>
                  <span className="text-[#F5F8FF] font-medium mt-0.5 block">{selectedService.frequency}</span>
                </div>
                <div>
                  <span className="text-[#91A4BD] block font-mono text-[11px]">TARGET PROFILE</span>
                  <span className="text-[#F5F8FF] font-medium mt-0.5 block">{selectedService.targetClients}</span>
                </div>
              </div>

              {/* Modal CTA */}
              <div className="mt-8 pt-6 border-t border-[rgba(70,150,220,0.18)] flex items-center justify-between">
                <span className="text-xs font-mono text-[#91A4BD]">ASCENT ADVISORS LLP // PRACTICE DESK</span>
                <button
                  onClick={() => {
                    const serviceTitle = selectedService.title;
                    setSelectedService(null);
                    if (onOpenAdvisorWithService) {
                      onOpenAdvisorWithService(serviceTitle);
                    }
                  }}
                  className="px-5 py-2.5 rounded-lg bg-[#1769FF] hover:bg-[#00D4FF] hover:text-[#030817] text-[#F5F8FF] font-semibold text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(23,105,255,0.3)] transition-all"
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
