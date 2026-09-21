import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/layout/Navbar';
import { CanvasHero } from './components/hero/CanvasHero';
import { ServicesSection } from './components/sections/ServicesSection';
import { AdvisorySection } from './components/sections/AdvisorySection';
import { TrustSection } from './components/sections/TrustSection';
import { WhoWeServeSection } from './components/sections/WhoWeServeSection';
import { InsightsSection } from './components/sections/InsightsSection';
import { CtaSection } from './components/sections/CtaSection';
import { Footer } from './components/layout/Footer';
import { AdvisorModal } from './components/common/AdvisorModal';

export const App: React.FC = () => {
  const [isAdvisorOpen, setIsAdvisorOpen] = useState(false);
  const [advisorInitialService, setAdvisorInitialService] = useState<string | undefined>();
  const [advisorInitialSegment, setAdvisorInitialSegment] = useState<string | undefined>();

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const handleOpenAdvisor = (service?: string, segment?: string) => {
    setAdvisorInitialService(service);
    setAdvisorInitialSegment(segment);
    setIsAdvisorOpen(true);
  };

  const handleScrollToServices = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#0050FF]/30 selection:text-[#00D6FF]">
      {/* Fixed Apple-style Navigation */}
      <Navbar onOpenAdvisor={() => handleOpenAdvisor()} />

      <main>
        {/* Core Cinematic Hero: 520vh Sticky 300-Frame Scrollytelling Engine */}
        <CanvasHero
          onOpenAdvisor={() => handleOpenAdvisor()}
          onScrollToServices={handleScrollToServices}
        />

        {/* 6 Core Services with Scope Inspection Modal */}
        <ServicesSection
          onOpenAdvisorWithService={(serviceName) => handleOpenAdvisor(serviceName)}
        />

        {/* Strategic Advisory Progression: COMPLY -> UNDERSTAND -> OPTIMIZE -> GROW */}
        <AdvisorySection />

        {/* Why Ascent: 4 Pillars & Real Quantitative Performance Metrics */}
        <TrustSection />

        {/* Who We Serve: Interactive Industry Profiles */}
        <WhoWeServeSection
          onOpenAdvisorWithSegment={(segmentName) => handleOpenAdvisor(undefined, segmentName)}
        />

        {/* Editorial Regulatory Insights Desk */}
        <InsightsSection />

        {/* Final High-Impact CTA & Monolithic Brand Lockup */}
        <CtaSection
          onOpenAdvisor={() => handleOpenAdvisor()}
          onScrollToServices={handleScrollToServices}
        />
      </main>

      {/* Institutional Corporate Footer */}
      <Footer />

      {/* Consultation Booking Modal */}
      <AdvisorModal
        isOpen={isAdvisorOpen}
        onClose={() => setIsAdvisorOpen(false)}
        initialService={advisorInitialService}
        initialSegment={advisorInitialSegment}
      />
    </div>
  );
};

export default App;
