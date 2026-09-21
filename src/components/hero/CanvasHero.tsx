import React, { useEffect, useRef, useState } from 'react';
import { FrameSequenceManager, drawImageCover, TOTAL_FRAMES } from '../../utils/frameLoader';
import { ChapterOverlays } from './ChapterOverlays';

interface CanvasHeroProps {
  onOpenAdvisor: () => void;
  onScrollToServices: () => void;
}

export const CanvasHero: React.FC<CanvasHeroProps> = ({
  onOpenAdvisor,
  onScrollToServices,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loadProgress, setLoadProgress] = useState(0);
  const [firstFrameReady, setFirstFrameReady] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const managerRef = useRef<FrameSequenceManager | null>(null);
  const currentFrameRef = useRef<number>(0);
  const targetFrameRef = useRef<number>(0);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Initialize sequence manager
    const manager = new FrameSequenceManager(
      (p) => setLoadProgress(p),
      () => {
        setFirstFrameReady(true);
        // Paint frame 0 immediately
        const initialImg = manager.getFrame(0);
        if (initialImg) {
          renderCanvas(0);
        }
      }
    );
    managerRef.current = manager;
    manager.startLoading();

    // Canvas resize handler with DPR scaling
    const resizeCanvas = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      renderCanvas(currentFrameRef.current);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Render frame to canvas
    function renderCanvas(frameIdx: number) {
      if (!canvas || !ctx || !managerRef.current) return;
      const img = managerRef.current.getFrame(frameIdx);
      if (!img) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;

      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, w, h);
      drawImageCover(ctx, img, w, h);
    }

    // Scroll listener calculating hero progress
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;
      if (scrollableDistance <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / scrollableDistance));
      setScrollProgress(progress);
      targetFrameRef.current = progress * (TOTAL_FRAMES - 1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Continuous smooth animation loop (Lerp)
    let lastRenderedFrame = -1;
    const animate = () => {
      // Easing interpolation
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.01) {
        currentFrameRef.current += diff * 0.18;
      } else {
        currentFrameRef.current = targetFrameRef.current;
      }

      const roundedFrame = Math.round(currentFrameRef.current);
      if (roundedFrame !== lastRenderedFrame) {
        renderCanvas(roundedFrame);
        lastRenderedFrame = roundedFrame;
      }

      rafIdRef.current = requestAnimationFrame(animate);
    };

    rafIdRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      manager.destroy();
    };
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full h-[520vh] bg-[#050505]"
    >
      {/* Sticky Canvas Viewport */}
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#050505]">
        {/* HTML5 Canvas */}
        <canvas
          ref={canvasRef}
          className="w-full h-full block object-cover select-none"
        />

        {/* Ambient Dark Gradient Vignette for cinematic edge blending */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/60" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#050505]/70 via-transparent to-[#050505]/70" />

        {/* Synchronized 5-Chapter HUD Overlays */}
        <ChapterOverlays
          progress={scrollProgress}
          onOpenAdvisor={onOpenAdvisor}
          onScrollToServices={onScrollToServices}
        />

        {/* Preloader subtle status pill while remaining frames stream */}
        {loadProgress < 0.98 && (
          <div className="absolute bottom-4 right-6 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#07090C]/80 border border-white/[0.08] backdrop-blur-md text-[10px] font-mono text-white/50">
            <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#0050FF] to-[#00D6FF] transition-all duration-300"
                style={{ width: `${Math.round(loadProgress * 100)}%` }}
              />
            </div>
            <span>SYNCING ASSETS: {Math.round(loadProgress * 100)}%</span>
          </div>
        )}
      </div>
    </section>
  );
};
