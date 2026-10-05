import React, { useEffect, useState } from 'react';
import { SERVICES_DATA, CLIENT_SEGMENTS } from '../../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Clock, Mail, MessageCircle } from 'lucide-react';

const TEAM = { whatsapp: '919076010642', email: 'info@aca-ca.com' };
const ENTITY_TYPES = ['Private Limited Company', 'Limited Liability Partnership (LLP)', 'Partnership Firm', 'Proprietorship', 'Public Limited Company', 'Foreign Subsidiary / Liaison Office', 'Startup / Founder'];
const titleCase = (t: string) => t.toLowerCase().replace(/(^|[\s&/(-])\S/g, c => c.toUpperCase()).replace(/\b(Gst|Roc|Mca)\b/g, w => w.toUpperCase());
const SERVICE_OPTIONS = SERVICES_DATA.map(s => titleCase(s.title));
const SEGMENT_OPTIONS = CLIENT_SEGMENTS.map(s => s.name);
const TURNOVER_OPTIONS = ['Under ₹1 Crore', '₹1 Crore - ₹5 Crore', '₹5 Crore - ₹25 Crore', '₹25 Crore - ₹100 Crore', 'Above ₹100 Crore'];

interface AdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialSegment?: string;
}

export const AdvisorModal: React.FC<AdvisorModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialSegment,
}) => {
  const blank = () => ({
    entityType: ENTITY_TYPES[0],
    serviceNeed: SERVICE_OPTIONS.find(o => o.toLowerCase() === (initialService || '').toLowerCase()) || SERVICE_OPTIONS[0],
    segment: SEGMENT_OPTIONS.find(o => o === initialSegment) || SEGMENT_OPTIONS[0],
    name: '',
    email: '',
    phone: '',
    turnover: TURNOVER_OPTIONS[0],
    notes: '',
  });
  const [formData, setFormData] = useState(blank);
  const [submitted, setSubmitted] = useState(false);

  // fresh form, with the clicked service / segment, every time it opens
  useEffect(() => {
    if (isOpen) { setFormData(blank()); setSubmitted(false); }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, initialService, initialSegment]);

  // No backend on this static site: the enquiry goes to the team on WhatsApp (email as a fallback).
  const message = () => [
    'New consultation request (www.aca-ca.com)',
    `Name: ${formData.name}`,
    `Phone: ${formData.phone}`,
    `Email: ${formData.email}`,
    `Entity: ${formData.entityType}`,
    `Segment: ${formData.segment}`,
    `Service: ${formData.serviceNeed}`,
    `Turnover: ${formData.turnover}`,
    formData.notes ? `Notes: ${formData.notes}` : '',
  ].filter(Boolean).join('\n');
  const whatsappUrl = () => `https://wa.me/${TEAM.whatsapp}?text=${encodeURIComponent(message())}`;
  const mailUrl = () => `mailto:${TEAM.email}?subject=${encodeURIComponent(`Consultation request – ${formData.serviceNeed}`)}&body=${encodeURIComponent(message())}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(whatsappUrl(), '_blank', 'noopener');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#F8FAFC]/85 backdrop-blur-sm"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-white border border-[#E2E8F0] rounded-xl shadow-2xl p-6 sm:p-10 z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-lg bg-white hover:bg-[#F1F5F9] text-[#64748B] hover:text-[#0F172A] border border-[#E2E8F0] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {!submitted ? (
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#2563EB] mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>DIRECT PRACTICE ACCESS // SENIOR ADVISORY DESK</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                  Schedule an Executive Consultation
                </h2>
                <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                  Connect with experienced Chartered Accountants and corporate advisors to review your statutory standing.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  {/* Entity Type Selector */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#64748B] mb-1.5 uppercase">
                        Entity Structure
                      </label>
                      <select
                        value={formData.entityType}
                        onChange={(e) => setFormData({ ...formData, entityType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E2E8F0] text-xs sm:text-sm text-[#0F172A] focus:outline-none focus:border-[#2563EB] transition-colors"
                      >
                        {ENTITY_TYPES.map(o => <option key={o} value={o} className="bg-white">{o}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#64748B] mb-1.5 uppercase">
                        Client Segment
                      </label>
                      <select
                        value={formData.segment}
                        onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E2E8F0] text-xs sm:text-sm text-[#0F172A] focus:outline-none focus:border-[#2563EB] transition-colors"
                      >
                        {SEGMENT_OPTIONS.map(o => <option key={o} value={o} className="bg-white">{o}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Primary Service Need */}
                  <div>
                    <label className="block text-xs font-mono text-[#64748B] mb-1.5 uppercase">
                      Primary Advisory Mandate
                    </label>
                    <select
                      value={formData.serviceNeed}
                      onChange={(e) => setFormData({ ...formData, serviceNeed: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E2E8F0] text-xs sm:text-sm text-[#0F172A] focus:outline-none focus:border-[#2563EB] transition-colors"
                    >
                      {SERVICE_OPTIONS.map(o => <option key={o} value={o} className="bg-white">{o}</option>)}
                    </select>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#64748B] mb-1.5 uppercase">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikramaditya Shah"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-lg bg-white border border-[#E2E8F0] text-xs sm:text-sm text-[#0F172A] placeholder:text-[#64748B]/40 focus:outline-none focus:border-[#2563EB] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[#64748B] mb-1.5 uppercase">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="vikram@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-lg bg-white border border-[#E2E8F0] text-xs sm:text-sm text-[#0F172A] placeholder:text-[#64748B]/40 focus:outline-none focus:border-[#2563EB] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#64748B] mb-1.5 uppercase">
                        Phone / Direct Line *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-lg bg-white border border-[#E2E8F0] text-xs sm:text-sm text-[#0F172A] placeholder:text-[#64748B]/40 focus:outline-none focus:border-[#2563EB] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[#64748B] mb-1.5 uppercase">
                        Turnover Bracket
                      </label>
                      <select
                        value={formData.turnover}
                        onChange={(e) => setFormData({ ...formData, turnover: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E2E8F0] text-xs sm:text-sm text-[#0F172A] focus:outline-none focus:border-[#2563EB] transition-colors"
                      >
                        {TURNOVER_OPTIONS.map(o => <option key={o} value={o} className="bg-white">{o}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#64748B] mb-1.5 uppercase">
                      Specific Scope or Deadlines
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Upcoming MCA annual filing deadline or pending GST input credit reconciliation..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg bg-white border border-[#E2E8F0] text-xs sm:text-sm text-[#0F172A] placeholder:text-[#64748B]/40 focus:outline-none focus:border-[#2563EB] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-lg bg-[#1769FF] hover:bg-[#2563EB] hover:text-white text-white font-semibold text-xs sm:text-sm shadow-[0_0_20px_rgba(23,105,255,0.3)] transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
                    >
                      <span>Initiate Advisory Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-4 text-[10px] font-mono text-[#64748B] pt-2">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-[#2563EB]" /> NDA Protected
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#059669]" /> Response within 4 hours
                    </span>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-lg bg-[#18C8A0]/20 border border-[#18C8A0]/40 flex items-center justify-center mx-auto mb-5 text-[#059669]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <div className="text-xs font-mono text-[#059669] uppercase tracking-wider mb-1">
                  ONE LAST STEP
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                  Thank you, {formData.name || 'there'}.
                </h3>

                <p className="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto mt-2 leading-relaxed">
                  Your request for <span className="text-[#2563EB]">{formData.serviceNeed}</span> is ready in WhatsApp — just tap <b>Send</b> there and our team will get back to you.
                </p>

                <div className="mt-5 flex flex-wrap justify-center gap-2.5">
                  <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-semibold"><MessageCircle className="w-4 h-4" /> Open WhatsApp again</a>
                  <a href={mailUrl()} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-[#F1F5F9] border border-[#E2E8F0] text-[#0F172A] text-xs font-semibold"><Mail className="w-4 h-4" /> Send by email instead</a>
                </div>

                <div className="mt-6">
                  <button
                    onClick={handleReset}
                    className="px-5 py-2 rounded-lg bg-white hover:bg-[#F1F5F9] border border-[#E2E8F0] text-[#0F172A] text-xs font-medium transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
