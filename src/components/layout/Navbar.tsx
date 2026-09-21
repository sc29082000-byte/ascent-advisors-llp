import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenAdvisor: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdvisor }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Expertise', href: '#advisory' },
    { name: 'About', href: '#trust' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#07090C]/80 backdrop-blur-md border-b border-white/[0.08] py-3 shadow-2xl'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Left */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#0050FF]/20 to-[#00D6FF]/10 border border-[#00D6FF]/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <svg
              className="w-4 h-4 text-[#00D6FF]"
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
            <span className="text-sm font-bold tracking-[0.2em] text-white uppercase font-sans">
              ASCENT
            </span>
            <span className="text-[9px] tracking-[0.28em] text-[#00D6FF]/80 uppercase font-mono mt-0.5">
              ADVISORS LLP
            </span>
          </div>
        </a>

        {/* Center Nav Items */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-wide">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white/60 hover:text-white transition-colors duration-200 relative group py-1"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00D6FF] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-white/50">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Advisory Active</span>
          </div>
          
          <button
            onClick={onOpenAdvisor}
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide bg-gradient-to-r from-[#0050FF] to-[#0040D0] hover:from-[#1A64FF] hover:to-[#0050FF] text-white border border-[#00D6FF]/30 shadow-glow-blue transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,214,255,0.4)] active:scale-95"
          >
            <span>Talk to an Advisor</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#00D6FF]" />
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={onOpenAdvisor}
            className="px-3 py-1.5 rounded-full text-[11px] font-medium bg-[#0050FF] text-white border border-[#00D6FF]/30"
          >
            Advisor
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white/70 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07090C]/95 backdrop-blur-xl border-b border-white/[0.08] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-white/80 hover:text-[#00D6FF] py-2 border-b border-white/[0.04]"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdvisor();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0050FF] to-[#00D6FF] text-white font-medium text-sm flex items-center justify-center gap-2 shadow-glow-blue"
            >
              <span>Talk to an Advisor</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
