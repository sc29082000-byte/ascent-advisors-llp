import React from 'react';
import { ShieldCheck, MapPin, Mail, Phone, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#050505] text-white/60 border-t border-white/[0.08] text-xs font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-md bg-[#0050FF]/20 border border-[#00D6FF]/30 flex items-center justify-center">
                <svg
                  className="w-3.5 h-3.5 text-[#00D6FF]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 22 22 2 22" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-bold tracking-[0.2em] text-white uppercase">
                  ASCENT
                </span>
                <span className="text-[8px] tracking-[0.25em] text-[#00D6FF] uppercase font-mono mt-0.5">
                  ADVISORS LLP
                </span>
              </div>
            </div>

            <p className="text-xs text-white/50 leading-relaxed max-w-sm">
              ASCENT ADVISORS LLP is a premier professional advisory and compliance firm providing integrated taxation, secretarial, audit assurance, and corporate growth solutions.
            </p>

            <div className="text-[11px] font-mono text-white/40 pt-2 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Registered Limited Liability Partnership // India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-xs font-mono font-semibold text-white tracking-wider uppercase mb-4">
              Practices
            </div>
            <ul className="space-y-2.5 text-xs text-white/50">
              <li><a href="#services" className="hover:text-white transition-colors">Business Registration</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">GST & Indirect Tax</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Audit & Assurance</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">ROC & MCA Compliance</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Accounting & Books</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Tax & Business Advisory</a></li>
            </ul>
          </div>

          {/* Practice Desks */}
          <div>
            <div className="text-xs font-mono font-semibold text-white tracking-wider uppercase mb-4">
              Ecosystem
            </div>
            <ul className="space-y-2.5 text-xs text-white/50">
              <li><a href="#advisory" className="hover:text-white transition-colors">Strategic Progression</a></li>
              <li><a href="#trust" className="hover:text-white transition-colors">Institutional Trust</a></li>
              <li><a href="#insights" className="hover:text-white transition-colors">Regulatory Dispatches</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Consultation Desk</a></li>
              <li><a href="#hero" className="hover:text-white transition-colors">3D Regulatory Hero</a></li>
            </ul>
          </div>

          {/* Regional Offices */}
          <div>
            <div className="text-xs font-mono font-semibold text-white tracking-wider uppercase mb-4">
              Offices
            </div>
            <div className="space-y-3 text-xs text-white/50">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#00D6FF] shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium text-[11px]">Mumbai</div>
                  <div className="text-[10px] text-white/40">Bandra Kurla Complex (BKC)</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#00D6FF] shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium text-[11px]">Bengaluru</div>
                  <div className="text-[10px] text-white/40">Indiranagar / MG Road</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#00D6FF] shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium text-[11px]">Delhi NCR</div>
                  <div className="text-[10px] text-white/40">Cyber City / Connaught Place</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimer & Copyright */}
        <div className="pt-8 border-t border-white/[0.06] text-[11px] text-white/40 space-y-4">
          <p className="leading-relaxed">
            <strong className="text-white/60">Regulatory Notice:</strong> The information contained on this website is for general informational and educational purposes only. Transmission of this information is not intended to create, and receipt does not constitute, a formal chartered accountant-client or legal advisory relationship. Professional advice tailored to your specific corporate structure and statutory facts should always be obtained prior to taking compliance action.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <div>
              © {new Date().getFullYear()} ASCENT ADVISORS LLP. All rights reserved. Building a Higher Tomorrow.
            </div>
            <div className="flex items-center gap-6 font-mono text-[10px]">
              <span className="hover:text-white cursor-pointer transition-colors">PRIVACY POLICY</span>
              <span className="hover:text-white cursor-pointer transition-colors">TERMS OF ENGAGEMENT</span>
              <span className="hover:text-white cursor-pointer transition-colors">STATUTORY DISCLOSURES</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
