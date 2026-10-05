import React from 'react';
import { ShieldCheck, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenPrivacyPolicy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacyPolicy }) => {
  return (
    <footer className="w-full bg-[#F8FAFC] text-[#64748B] border-t border-[#E2E8F0] text-xs font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/brand/ascent-mark.png" alt="" className="h-10 w-auto" />
              <img src="/brand/ascent-wordmark.png" alt="Ascent Advisors LLP" className="h-7 w-auto" />
            </div>

            <p className="text-xs text-[#64748B] leading-relaxed max-w-sm">
              ASCENT ADVISORS LLP is a premier professional advisory and compliance firm providing integrated taxation, corporate law, statutory audit assurance, and CFO advisory solutions.
            </p>

            <div className="text-[11px] font-mono text-[#64748B] pt-2 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
              <span>Registered Limited Liability Partnership // India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-xs font-mono font-semibold text-[#0F172A] tracking-wider uppercase mb-4">
              Practices
            </div>
            <ul className="space-y-2.5 text-xs text-[#64748B]">
              <li><a href="#services" className="hover:text-[#2563EB] transition-colors">Business Registration</a></li>
              <li><a href="#services" className="hover:text-[#2563EB] transition-colors">GST & Indirect Tax</a></li>
              <li><a href="#services" className="hover:text-[#2563EB] transition-colors">Audit & Assurance</a></li>
              <li><a href="#services" className="hover:text-[#2563EB] transition-colors">ROC & MCA Compliance</a></li>
              <li><a href="#services" className="hover:text-[#2563EB] transition-colors">Accounting & Books</a></li>
              <li><a href="#services" className="hover:text-[#2563EB] transition-colors">Tax & Business Advisory</a></li>
            </ul>
          </div>

          {/* Practice Desks */}
          <div>
            <div className="text-xs font-mono font-semibold text-[#0F172A] tracking-wider uppercase mb-4">
              Ecosystem
            </div>
            <ul className="space-y-2.5 text-xs text-[#64748B]">
              <li><a href="#advisory" className="hover:text-[#2563EB] transition-colors">Strategic Progression</a></li>
              <li><a href="#trust" className="hover:text-[#2563EB] transition-colors">Institutional Trust</a></li>
              <li><a href="#insights" className="hover:text-[#2563EB] transition-colors">Regulatory Dispatches</a></li>
              <li><a href="#contact" className="hover:text-[#2563EB] transition-colors">Consultation Desk</a></li>
              <li><a href="https://app.aca-ca.com/tools/gst-health-checkup" className="hover:text-[#2563EB] transition-colors">GST Health Checkup</a></li>
              <li><a href="https://app.aca-ca.com/tools" className="hover:text-[#2563EB] transition-colors">All tools</a></li>
              <li><a href="https://app.aca-ca.com/tools/supplier-check" className="hover:text-[#2563EB] transition-colors">Supplier Check</a></li>
              <li><a href="https://app.aca-ca.com/msme-verifier" className="hover:text-[#2563EB] transition-colors">MSME Verifier</a></li>
              <li><a href="https://app.aca-ca.com/login" className="hover:text-[#2563EB] transition-colors">Staff / Client login</a></li>
              <li><a href="#hero" className="hover:text-[#2563EB] transition-colors">Regulatory Overview</a></li>
            </ul>
          </div>

          {/* Regional Offices */}
          <div>
            <div className="text-xs font-mono font-semibold text-[#0F172A] tracking-wider uppercase mb-4">
              Offices
            </div>
            <div className="space-y-3 text-xs text-[#64748B]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[#0F172A] font-medium text-[11px]">Thane, Maharashtra</div>
                  <div className="text-[10px] text-[#64748B] leading-relaxed">Office No. 701, Tropical New Era Business Park,<br />Opp. ESIS Hospital, Wagle, Thane 400604</div>
                </div>
              </div>
              <a href="mailto:info@aca-ca.com" className="block hover:text-[#2563EB] transition-colors">info@aca-ca.com</a>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimer & Copyright */}
        <div className="pt-8 border-t border-[#E2E8F0] text-[11px] text-[#64748B]/70 space-y-4">
          <p className="leading-relaxed">
            <strong className="text-[#0F172A]">Regulatory Notice:</strong> The information contained on this website is for general informational and educational purposes only. Transmission of this information is not intended to create, and receipt does not constitute, a formal chartered accountant-client or legal advisory relationship. Professional advice tailored to your specific corporate structure and statutory facts should always be obtained prior to taking compliance action.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <div>
              © {new Date().getFullYear()} ASCENT ADVISORS LLP. All rights reserved. Building a Higher Tomorrow.
            </div>
            <div className="flex items-center gap-6 font-mono text-[10px]">
              <button onClick={onOpenPrivacyPolicy} className="hover:text-[#2563EB] cursor-pointer transition-colors uppercase">PRIVACY POLICY</button>
              <span className="hover:text-[#2563EB] cursor-pointer transition-colors">TERMS OF ENGAGEMENT</span>
              <span className="hover:text-[#2563EB] cursor-pointer transition-colors">STATUTORY DISCLOSURES</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
