import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Clock, Building2 } from 'lucide-react';

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
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    entityType: 'Private Limited Company',
    serviceNeed: initialService || 'GST & Income Tax Advisory',
    segment: initialSegment || 'SMEs & Mid-Market',
    name: '',
    email: '',
    phone: '',
    turnover: '₹5Cr - ₹25Cr',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-[#0A0D12] border border-white/[0.12] rounded-2xl shadow-2xl p-6 sm:p-8 z-10 my-8"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white/60 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#00D6FF] mb-2">
                  <Building2 className="w-4 h-4" />
                  <span>ASCENT ADVISORY DESK // DIRECT CONSULTATION</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Talk to an Advisor
                </h3>
                <p className="text-xs sm:text-sm text-white/60 mt-1 leading-relaxed">
                  Engage directly with a senior compliance partner. We analyze your corporate structure and statutory posture with absolute confidentiality.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {/* Entity Type Selection */}
                  <div>
                    <label className="block text-xs font-mono text-white/70 mb-1.5 uppercase">
                      Entity Structure
                    </label>
                    <select
                      value={formData.entityType}
                      onChange={(e) => setFormData({ ...formData, entityType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-sm text-white focus:outline-none focus:border-[#00D6FF] transition-colors"
                    >
                      <option value="Private Limited Company" className="bg-[#0A0D12]">Private Limited Company</option>
                      <option value="Limited Liability Partnership (LLP)" className="bg-[#0A0D12]">Limited Liability Partnership (LLP)</option>
                      <option value="Public Limited / Listed Entity" className="bg-[#0A0D12]">Public Limited / Listed Entity</option>
                      <option value="Sole Proprietor / Partnership" className="bg-[#0A0D12]">Sole Proprietor / Partnership</option>
                      <option value="Foreign Subsidiary / Branch Office" className="bg-[#0A0D12]">Foreign Subsidiary / Branch Office</option>
                      <option value="Pre-incorporation / New Venture" className="bg-[#0A0D12]">Pre-incorporation / New Venture</option>
                    </select>
                  </div>

                  {/* Primary Advisory Area */}
                  <div>
                    <label className="block text-xs font-mono text-white/70 mb-1.5 uppercase">
                      Primary Advisory Requirement
                    </label>
                    <select
                      value={formData.serviceNeed}
                      onChange={(e) => setFormData({ ...formData, serviceNeed: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-sm text-white focus:outline-none focus:border-[#00D6FF] transition-colors"
                    >
                      <option value="GST & Indirect Tax Compliance" className="bg-[#0A0D12]">GST & Indirect Tax Compliance</option>
                      <option value="ROC & MCA Secretarial Compliance" className="bg-[#0A0D12]">ROC & MCA Secretarial Compliance</option>
                      <option value="Direct Tax & Advance Tax Advisory" className="bg-[#0A0D12]">Direct Tax & Advance Tax Advisory</option>
                      <option value="Statutory & Tax Audit (Section 139 / 44AB)" className="bg-[#0A0D12]">Statutory & Tax Audit (Section 139 / 44AB)</option>
                      <option value="Business Incorporation & Setup" className="bg-[#0A0D12]">Business Incorporation & Setup</option>
                      <option value="Integrated Virtual CFO & Strategic Retainer" className="bg-[#0A0D12]">Integrated Virtual CFO & Strategic Retainer</option>
                    </select>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-white/70 mb-1.5 uppercase">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikramaditya Shah"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#00D6FF] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-white/70 mb-1.5 uppercase">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="vikram@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#00D6FF] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-white/70 mb-1.5 uppercase">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#00D6FF] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-white/70 mb-1.5 uppercase">
                        Annual Turnover Bracket
                      </label>
                      <select
                        value={formData.turnover}
                        onChange={(e) => setFormData({ ...formData, turnover: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-sm text-white focus:outline-none focus:border-[#00D6FF] transition-colors"
                      >
                        <option value="Under ₹1 Crore" className="bg-[#0A0D12]">Under ₹1 Crore</option>
                        <option value="₹1 Crore - ₹5 Crore" className="bg-[#0A0D12]">₹1 Crore - ₹5 Crore</option>
                        <option value="₹5 Crore - ₹25 Crore" className="bg-[#0A0D12]">₹5 Crore - ₹25 Crore</option>
                        <option value="₹25 Crore - ₹100 Crore" className="bg-[#0A0D12]">₹25 Crore - ₹100 Crore</option>
                        <option value="Above ₹100 Crore" className="bg-[#0A0D12]">Above ₹100 Crore</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-white/70 mb-1.5 uppercase">
                      Specific Notes or Deadlines
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Upcoming MCA annual filing deadline or pending GST input credit reconciliation..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.1] text-xs sm:text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#00D6FF] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#0050FF] to-[#00D6FF] text-white font-bold text-sm shadow-glow-blue hover:shadow-[0_0_30px_rgba(0,214,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
                    >
                      <span>Initiate Advisory Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-4 text-[10px] font-mono text-white/40 pt-2">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-[#00D6FF]" /> NDA Protected
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-emerald-400" /> Response within 4 hours
                    </span>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mx-auto mb-6 text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-1">
                  CONSULTATION REQUEST CONFIRMED
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Thank you, {formData.name || 'Partner'}.
                </h3>

                <p className="text-sm text-white/70 max-w-md mx-auto mt-3 leading-relaxed">
                  Your advisory request for <span className="text-[#00D6FF]">{formData.serviceNeed}</span> has been dispatched to our senior regulatory practice desk.
                </p>

                <div className="mt-6 p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] max-w-sm mx-auto text-xs font-mono text-white/60 space-y-1">
                  <div>REFERENCE: ASC-ADV-8942</div>
                  <div>LEAD PARTNER ASSIGNED</div>
                  <div className="text-emerald-400">STATUS: SCHEDULED</div>
                </div>

                <div className="mt-8">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white text-xs font-medium transition-colors"
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
