import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

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
  const [formData, setFormData] = useState({
    entityType: 'Private Limited Company',
    serviceNeed: initialService || 'GST & Income Tax Advisory',
    segment: initialSegment || 'SMEs & Mid-Market',
    name: '',
    email: '',
    phone: '',
    turnover: '₹15Cr - ₹125Cr',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
            className="absolute inset-0 bg-[#030817]/85 backdrop-blur-sm"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-[#0A1629] border border-[rgba(70,150,220,0.25)] rounded-xl shadow-2xl p-6 sm:p-10 z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-lg bg-[#071225] hover:bg-[#0E1B33] text-[#91A4BD] hover:text-[#F5F8FF] border border-[rgba(70,150,220,0.18)] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {!submitted ? (
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#00D4FF] mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>DIRECT PRACTICE ACCESS // SENIOR ADVISORY DESK</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F8FF] tracking-tight">
                  Schedule an Executive Consultation
                </h2>
                <p className="text-xs sm:text-sm text-[#91A4BD] mt-1">
                  Connect with experienced Chartered Accountants and corporate advisors to review your statutory standing.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  {/* Entity Type Selector */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#91A4BD] mb-1.5 uppercase">
                        Entity Structure
                      </label>
                      <select
                        value={formData.entityType}
                        onChange={(e) => setFormData({ ...formData, entityType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#071225] border border-[rgba(70,150,220,0.22)] text-xs sm:text-sm text-[#F5F8FF] focus:outline-none focus:border-[#00D4FF] transition-colors"
                      >
                        <option value="Private Limited Company" className="bg-[#0A1629]">Private Limited Company</option>
                        <option value="Limited Liability Partnership (LLP)" className="bg-[#0A1629]">Limited Liability Partnership (LLP)</option>
                        <option value="Public Limited Company" className="bg-[#0A1629]">Public Limited Company</option>
                        <option value="Foreign Subsidiary / Liaison Office" className="bg-[#0A1629]">Foreign Subsidiary / Liaison Office</option>
                        <option value="High-Growth Startup / Founder" className="bg-[#0A1629]">High-Growth Startup / Founder</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#91A4BD] mb-1.5 uppercase">
                        Client Segment
                      </label>
                      <select
                        value={formData.segment}
                        onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#071225] border border-[rgba(70,150,220,0.22)] text-xs sm:text-sm text-[#F5F8FF] focus:outline-none focus:border-[#00D4FF] transition-colors"
                      >
                        <option value="Startups & Founders" className="bg-[#0A1629]">Startups & Founders</option>
                        <option value="Growing Businesses" className="bg-[#0A1629]">Growing Businesses</option>
                        <option value="Mid-Market Enterprises" className="bg-[#0A1629]">Mid-Market Enterprises</option>
                        <option value="Established Companies" className="bg-[#0A1629]">Established Companies</option>
                      </select>
                    </div>
                  </div>

                  {/* Primary Service Need */}
                  <div>
                    <label className="block text-xs font-mono text-[#91A4BD] mb-1.5 uppercase">
                      Primary Advisory Mandate
                    </label>
                    <select
                      value={formData.serviceNeed}
                      onChange={(e) => setFormData({ ...formData, serviceNeed: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#071225] border border-[rgba(70,150,220,0.22)] text-xs sm:text-sm text-[#F5F8FF] focus:outline-none focus:border-[#00D4FF] transition-colors"
                    >
                      <option value="GST & Indirect Tax Compliance" className="bg-[#0A1629]">GST & Indirect Tax Compliance</option>
                      <option value="MCA / ROC Secretarial Compliance" className="bg-[#0A1629]">MCA / ROC Secretarial Compliance</option>
                      <option value="Corporate Direct Tax & International Tax" className="bg-[#0A1629]">Corporate Direct Tax & International Tax</option>
                      <option value="Statutory & Tax Audit (Section 139 / 44AB)" className="bg-[#0A1629]">Statutory & Tax Audit (Section 139 / 44AB)</option>
                      <option value="Business Incorporation & Setup" className="bg-[#0A1629]">Business Incorporation & Setup</option>
                      <option value="Integrated Virtual CFO & Strategic Retainer" className="bg-[#0A1629]">Integrated Virtual CFO & Strategic Retainer</option>
                    </select>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#91A4BD] mb-1.5 uppercase">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikramaditya Shah"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-lg bg-[#071225] border border-[rgba(70,150,220,0.22)] text-xs sm:text-sm text-[#F5F8FF] placeholder:text-[#91A4BD]/40 focus:outline-none focus:border-[#00D4FF] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[#91A4BD] mb-1.5 uppercase">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="vikram@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-lg bg-[#071225] border border-[rgba(70,150,220,0.22)] text-xs sm:text-sm text-[#F5F8FF] placeholder:text-[#91A4BD]/40 focus:outline-none focus:border-[#00D4FF] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#91A4BD] mb-1.5 uppercase">
                        Phone / Direct Line *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-lg bg-[#071225] border border-[rgba(70,150,220,0.22)] text-xs sm:text-sm text-[#F5F8FF] placeholder:text-[#91A4BD]/40 focus:outline-none focus:border-[#00D4FF] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[#91A4BD] mb-1.5 uppercase">
                        Turnover Bracket
                      </label>
                      <select
                        value={formData.turnover}
                        onChange={(e) => setFormData({ ...formData, turnover: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#071225] border border-[rgba(70,150,220,0.22)] text-xs sm:text-sm text-[#F5F8FF] focus:outline-none focus:border-[#00D4FF] transition-colors"
                      >
                        <option value="Under ₹1 Crore" className="bg-[#0A1629]">Under ₹1 Crore</option>
                        <option value="₹1 Crore - ₹5 Crore" className="bg-[#0A1629]">₹1 Crore - ₹5 Crore</option>
                        <option value="₹5 Crore - ₹25 Crore" className="bg-[#0A1629]">₹5 Crore - ₹25 Crore</option>
                        <option value="₹25 Crore - ₹100 Crore" className="bg-[#0A1629]">₹25 Crore - ₹100 Crore</option>
                        <option value="Above ₹100 Crore" className="bg-[#0A1629]">Above ₹100 Crore</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#91A4BD] mb-1.5 uppercase">
                      Specific Scope or Deadlines
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Upcoming MCA annual filing deadline or pending GST input credit reconciliation..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg bg-[#071225] border border-[rgba(70,150,220,0.22)] text-xs sm:text-sm text-[#F5F8FF] placeholder:text-[#91A4BD]/40 focus:outline-none focus:border-[#00D4FF] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-lg bg-[#1769FF] hover:bg-[#00D4FF] hover:text-[#030817] text-[#F5F8FF] font-semibold text-xs sm:text-sm shadow-[0_0_20px_rgba(23,105,255,0.3)] transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
                    >
                      <span>Initiate Advisory Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-4 text-[10px] font-mono text-[#91A4BD] pt-2">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-[#00D4FF]" /> NDA Protected
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#18C8A0]" /> Response within 4 hours
                    </span>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-lg bg-[#18C8A0]/20 border border-[#18C8A0]/40 flex items-center justify-center mx-auto mb-5 text-[#18C8A0]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <div className="text-xs font-mono text-[#18C8A0] uppercase tracking-wider mb-1">
                  CONSULTATION REQUEST LOGGED
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#F5F8FF] tracking-tight">
                  Thank you, {formData.name || 'Partner'}.
                </h3>

                <p className="text-xs sm:text-sm text-[#91A4BD] max-w-md mx-auto mt-2 leading-relaxed">
                  Your advisory mandate for <span className="text-[#00D4FF]">{formData.serviceNeed}</span> has been routed to our senior regulatory practice desk.
                </p>

                <div className="mt-5 p-3.5 rounded-lg bg-[#071225] border border-[rgba(70,150,220,0.18)] max-w-xs mx-auto text-xs font-mono text-[#91A4BD] space-y-1">
                  <div>REF: ASC-ADV-8942</div>
                  <div className="text-[#18C8A0]">STATUS: SCHEDULED</div>
                </div>

                <div className="mt-6">
                  <button
                    onClick={handleReset}
                    className="px-5 py-2 rounded-lg bg-[#071225] hover:bg-[#0E1B33] border border-[rgba(70,150,220,0.22)] text-[#F5F8FF] text-xs font-medium transition-colors"
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
