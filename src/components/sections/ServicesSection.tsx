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
    <section id="services" className="relative w-full py-32 bg-[#F8FAFC] text-[#0F172A] border-t border-[#E2E8F0] overflow-hidden">
      {/* Background subtle radial blue glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#1769FF]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#E2E8F0] text-xs font-mono text-[#2563EB] mb-4">
              <span>CORE STATUTORY CAPABILITIES</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] max-w-2xl leading-[1.1]">
              Expertise engineered <br />
              <span className="text-gradient-cyan">for corporate certainty.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-[#64748B] max-w-md font-normal leading-relaxed">
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
              className="group relative bg-white border border-[#E2E8F0] hover:border-[#2563EB]/40 rounded-xl p-7 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05),0_4px_6px_-2px_rgba(0,0,0,0.02)] hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
            >
              {/* Top Card Info */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-mono text-[#2563EB] tracking-wider font-semibold">
                    {service.number}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-[#64748B] uppercase px-2 py-0.5 rounded bg-white border border-[#E2E8F0]">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold tracking-tight text-[#0F172A] group-hover:text-[#2563EB] transition-colors duration-200">
                  {service.title}
                </h3>

                <p className="text-xs text-[#2563EB]/80 italic mt-1 font-medium">
                  "{service.tagline}"
                </p>

                <p className="mt-4 text-xs text-[#64748B] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom Card Action */}
              <div className="mt-8 pt-5 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-medium">
                <span className="text-[#64748B] group-hover:text-[#0F172A] transition-colors">
                  Inspect Statutory Scope
                </span>
                <div className="w-7 h-7 rounded-lg bg-white group-hover:bg-[#1769FF] border border-[#E2E8F0] group-hover:border-[#2563EB]/50 flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#0F172A] transition-colors" />
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
              className="absolute inset-0 bg-[#F8FAFC]/85 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl bg-white border border-[#E2E8F0] rounded-xl shadow-2xl p-6 sm:p-8 md:p-10 overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-lg bg-white hover:bg-[#F1F5F9] text-[#64748B] hover:text-[#0F172A] border border-[#E2E8F0] transition-colors"
                aria-label="Close details"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 text-xs font-mono text-[#2563EB] mb-2">
                <span>SERVICE {selectedService.number}</span>
                <span className="text-[#64748B]/40">•</span>
                <span className="uppercase">{selectedService.category} PRACTICE</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                {selectedService.title}
              </h3>
              <p className="text-sm text-[#2563EB] mt-1 font-medium">
                "{selectedService.tagline}"
              </p>

              <p className="text-sm text-[#64748B] mt-4 leading-relaxed">
                {selectedService.description}
              </p>

              {/* Statutory Forms Covered */}
              <div className="mt-6 p-4 rounded-lg bg-white border border-[#E2E8F0]">
                <div className="text-[11px] font-mono tracking-wider text-[#64748B] uppercase mb-2 flex items-center gap-2">
                  <FileSpreadsheet className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Statutory Forms & Regulatory Schedules Handled</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedService.statutoryForms.map((form) => (
                    <span
                      key={form}
                      className="px-2.5 py-1 rounded bg-white border border-[#E2E8F0] text-[11px] font-mono text-[#2563EB]"
                    >
                      {form}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Deliverables */}
              <div className="mt-6">
                <div className="text-xs font-mono tracking-wider text-[#64748B] uppercase mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#059669]" />
                  <span>Key Statutory Deliverables</span>
                </div>
                <div className="space-y-2.5">
                  {selectedService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#0F172A]">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cadence and Target Audience */}
              <div className="mt-6 pt-6 border-t border-[#E2E8F0] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[#64748B] block font-mono text-[11px]">FILING CADENCE</span>
                  <span className="text-[#0F172A] font-medium mt-0.5 block">{selectedService.frequency}</span>
                </div>
                <div>
                  <span className="text-[#64748B] block font-mono text-[11px]">TARGET PROFILE</span>
                  <span className="text-[#0F172A] font-medium mt-0.5 block">{selectedService.targetClients}</span>
                </div>
              </div>

              {/* Modal CTA */}
              <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex items-center justify-between">
                <span className="text-xs font-mono text-[#64748B]">ASCENT ADVISORS LLP // PRACTICE DESK</span>
                <button
                  onClick={() => {
                    const serviceTitle = selectedService.title;
                    setSelectedService(null);
                    if (onOpenAdvisorWithService) {
                      onOpenAdvisorWithService(serviceTitle);
                    }
                  }}
                  className="px-5 py-2.5 rounded-lg bg-[#1769FF] hover:bg-[#2563EB] hover:text-white text-white font-semibold text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(23,105,255,0.3)] transition-all"
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
