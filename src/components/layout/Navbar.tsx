import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenAdvisor: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdvisor }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Tools', href: '#tools' },
    { name: 'Expertise', href: '#advisory' },
    { name: 'Governance', href: '#trust' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-[#E2E8F0] py-3 shadow-sm'
          : 'bg-white/95 backdrop-blur-xl border-b border-[#E2E8F0]/70 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Left */}
        <a href="#hero" className="flex items-center gap-3 group">
          <img src="/brand/ascent-mark.png" alt="" className="h-9 w-auto group-hover:scale-105 transition-transform" />
          <img src="/brand/ascent-wordmark.png" alt="Ascent Advisors LLP" className="h-6 w-auto" />
        </a>

        {/* Center Nav Items */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium tracking-tight">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[#64748B] hover:text-[#0F172A] transition-colors duration-200 relative group py-1"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#2563EB] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-white border border-[#E2E8F0] text-[11px] font-mono text-[#64748B]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#18C8A0]" />
            <span>Advisory Active</span>
          </div>
          
          <button
            onClick={onOpenAdvisor}
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-tight bg-[#1769FF] hover:bg-[#2563EB] hover:text-white text-white border border-[#2563EB]/30 shadow-[0_0_20px_rgba(23,105,255,0.25)] hover:shadow-[0_0_24px_rgba(0,212,255,0.4)] transition-all duration-300 active:scale-95"
          >
            <span>Talk to an Advisor</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={onOpenAdvisor}
            className="px-3 py-1.5 rounded-lg text-[11px] font-semibold bg-[#1769FF] text-white border border-[#2563EB]/30"
          >
            Advisor
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#64748B] hover:text-[#0F172A]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#64748B] hover:text-[#2563EB] py-2 border-b border-[#E2E8F0]"
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
              className="w-full py-2.5 rounded-lg bg-[#1769FF] hover:bg-[#2563EB] hover:text-white text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(23,105,255,0.25)] transition-all"
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
