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
    { name: 'Expertise', href: '#advisory' },
    { name: 'Governance', href: '#trust' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#071225]/90 backdrop-blur-sm border-b border-[rgba(70,150,220,0.18)] py-3 shadow-2xl'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Left */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-md bg-[#0A1629] border border-[rgba(70,150,220,0.28)] flex items-center justify-center transition-all duration-300 group-hover:border-[#00D4FF]/60 group-hover:shadow-[0_0_15px_rgba(0,212,255,0.2)]">
            <svg
              className="w-4 h-4 text-[#00D4FF]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 22 22 2 22" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-bold tracking-[0.18em] text-[#F5F8FF] uppercase font-sans">
              ASCENT
            </span>
            <span className="text-[9px] tracking-[0.26em] text-[#00D4FF]/90 uppercase font-mono mt-0.5">
              ADVISORS LLP
            </span>
          </div>
        </a>

        {/* Center Nav Items */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium tracking-tight">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[#91A4BD] hover:text-[#F5F8FF] transition-colors duration-200 relative group py-1"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00D4FF] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#071225] border border-[rgba(70,150,220,0.18)] text-[11px] font-mono text-[#91A4BD]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#18C8A0]" />
            <span>Advisory Active</span>
          </div>
          
          <button
            onClick={onOpenAdvisor}
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-tight bg-[#1769FF] hover:bg-[#00D4FF] hover:text-[#030817] text-[#F5F8FF] border border-[#00D4FF]/30 shadow-[0_0_20px_rgba(23,105,255,0.25)] hover:shadow-[0_0_24px_rgba(0,212,255,0.4)] transition-all duration-300 active:scale-95"
          >
            <span>Talk to an Advisor</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={onOpenAdvisor}
            className="px-3 py-1.5 rounded-lg text-[11px] font-semibold bg-[#1769FF] text-[#F5F8FF] border border-[#00D4FF]/30"
          >
            Advisor
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#91A4BD] hover:text-[#F5F8FF]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#071225]/95 backdrop-blur-md border-b border-[rgba(70,150,220,0.18)] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#91A4BD] hover:text-[#00D4FF] py-2 border-b border-[rgba(70,150,220,0.1)]"
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
              className="w-full py-2.5 rounded-lg bg-[#1769FF] hover:bg-[#00D4FF] hover:text-[#030817] text-[#F5F8FF] font-semibold text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(23,105,255,0.25)] transition-all"
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
