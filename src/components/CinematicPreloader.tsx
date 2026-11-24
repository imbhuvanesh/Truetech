import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface CinematicPreloaderProps {
  onComplete?: () => void;
}

// Alphanumeric character set for randomized grid glyphs
const CHAR_SET = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'A', 'B', 'C', 'D', 'E', 'F', 'X', 'Y', 'Z',
  '#', '%', '::', 'PX', '8K', 'Ω', 'λ', '+', '$', 'NX'
];

export const CinematicPreloader: React.FC<CinematicPreloaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef<HTMLSpanElement>(null);
  const phaseLabelRef = useRef<HTMLSpanElement>(null);

  const [isFinished, setIsFinished] = useState(false);

  // 1. Lock background scrolling while preloader is active
  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    const originalDocOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalDocOverflow;
    };
  }, []);

  // 2. Main 3-Second Cinematic Dissolve Timeline on Pure White Background
  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      const timer = setTimeout(() => {
        setIsFinished(true);
        if (onComplete) onComplete();
      }, 500);
      return () => clearTimeout(timer);
    }

    // Resize canvas to full viewport with device pixel ratio
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Grid configuration: ~16px cell size
    const cellSize = window.innerWidth < 768 ? 18 : 16;

    // Transition state object scrubbed by GSAP
    const transitionState = {
      progress: 0,
      wave: 0,
    };

    /**
     * Draw the Dissolve Grid on Canvas (Pure White Background Theme)
     * Features:
     * - Pure white background (#FFFFFF)
     * - Cyber green (#A8FF00) and dark graphite (#111111) pixel cells
     * - Small 16px grid cells
     * - Randomized alphanumeric characters in selected cells
     * - Concentrated travelling dissolution wave from top to bottom
     */
    const renderDissolveGrid = () => {
      ctx.clearRect(0, 0, width, height);

      const p = transitionState.progress;
      if (p <= 0.001 || p >= 0.999) return;

      const bandY = p * height;
      const bandHeight = Math.max(180, height * 0.28);
      const halfBand = bandHeight / 2;

      const cols = Math.ceil(width / cellSize);
      const rows = Math.ceil(height / cellSize);

      ctx.save();

      // Loop through visible rows near the travelling band
      const startRow = Math.max(0, Math.floor((bandY - halfBand * 1.6) / cellSize));
      const endRow = Math.min(rows, Math.ceil((bandY + halfBand * 1.6) / cellSize));

      for (let r = startRow; r < endRow; r++) {
        const cellY = r * cellSize;
        const distFromCenter = Math.abs(cellY + cellSize / 2 - bandY);

        if (distFromCenter > halfBand * 1.4) continue;

        const normDist = distFromCenter / halfBand; // 0 at center, 1 at edge

        for (let c = 0; c < cols; c++) {
          const cellX = c * cellSize;

          // Deterministic hash per frame/cell
          const hash = Math.sin(r * 37.1 + c * 59.3 + p * 150) * 43758.5453;
          const rand = hash - Math.floor(hash);

          // Threshold for cell activation
          let threshold = 0.95;
          if (normDist < 0.25) {
            threshold = 0.88; // Concentrated solid band
          } else if (normDist < 0.6) {
            threshold = 0.60;
          } else if (normDist < 1.0) {
            threshold = 0.28; // Scattered trailing/leading edges
          } else {
            threshold = 0.10;
          }

          if (rand < threshold) {
            // Scatter offset
            let dx = 0;
            let dy = 0;
            if (normDist > 0.3) {
              const scatterHash = Math.cos(r * 19.7 + c * 83.1 + p * 90) * 12345.67;
              const scatterRand = scatterHash - Math.floor(scatterHash);
              dx = (scatterRand - 0.5) * 10 * normDist;
              dy = (rand - 0.5) * 10 * normDist;
            }

            // Cell color scheme: Cyber green (#A8FF00) and dark graphite (#111111)
            const isGreen = rand < 0.65;
            ctx.fillStyle = isGreen ? '#A8FF00' : '#111111';
            ctx.fillRect(cellX + dx, cellY + dy, cellSize, cellSize);

            // In ~30% of active cells, draw a crisp monospace alphanumeric character
            if (rand < 0.30 && normDist < 0.85) {
              const charIdx = Math.floor(rand * CHAR_SET.length);
              const char = CHAR_SET[charIdx];

              ctx.font = 'bold 10px monospace';
              // High contrast text on cell
              ctx.fillStyle = isGreen ? '#000000' : '#A8FF00';
              ctx.fillText(char, cellX + dx + cellSize * 0.2, cellY + dy + cellSize * 0.72);
            }
          }
        }
      }

      ctx.restore();
    };

    // Master 3.0-Second Timeline
    const masterTl = gsap.timeline({
      onUpdate: () => {
        // Update live stats & progress bar
        const currentTime = masterTl.time();
        const pct = Math.min(100, Math.round((currentTime / 3.0) * 100));

        if (counterRef.current) {
          counterRef.current.textContent = `${pct.toString().padStart(3, '0')}%`;
        }
        if (progressFillRef.current) {
          progressFillRef.current.style.width = `${pct}%`;
        }
        if (timeRef.current) {
          timeRef.current.textContent = `${currentTime.toFixed(1)}s / 3.0s`;
        }
      },
      onComplete: () => {
        // Final smooth reveal into actual website
        gsap.to(container, {
          opacity: 0,
          scale: 1.02,
          duration: 0.45,
          ease: 'power2.inOut',
          onComplete: () => {
            setIsFinished(true);
            if (onComplete) onComplete();
          },
        });
      },
    });

    const setPhase = (text: string) => {
      if (phaseLabelRef.current) {
        phaseLabelRef.current.textContent = text;
      }
    };

    // Phase 1: 0.0s – 0.5s: Initial studio typography entrance on pure white
    masterTl.add(() => setPhase('[01/03] INITIALIZING DIGITAL STUDIO'), 0.05);

    // Phase 2: 0.5s – 1.6s: Primary Cyber Green & Dark Pixel Dissolve Grid Wave
    masterTl.add(() => setPhase('[02/03] COMPILING CREATIVE MATRIX'), 0.5);
    masterTl.fromTo(
      transitionState,
      { progress: 0 },
      {
        progress: 1,
        duration: 1.1,
        ease: 'power2.inOut',
        onUpdate: renderDissolveGrid,
        onComplete: () => {
          ctx.clearRect(0, 0, width, height);
        },
      },
      0.5
    );

    // Phase 3: 1.6s – 2.5s: Secondary Fast-Scattering Pixel Disperse Wave
    masterTl.add(() => setPhase('[03/03] SYNTHESIZING PERFORMANCE ARCHITECTURE'), 1.6);
    masterTl.fromTo(
      transitionState,
      { progress: 0 },
      {
        progress: 1,
        duration: 0.9,
        ease: 'power2.inOut',
        onUpdate: renderDissolveGrid,
        onComplete: () => {
          ctx.clearRect(0, 0, width, height);
        },
      },
      1.6
    );

    // Phase 4: 2.5s – 3.0s: Final Disperse into Website
    masterTl.add(() => setPhase('[COMPLETED] LAUNCHING EXPERIENCE'), 2.5);
    masterTl.to(
      container,
      {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
      },
      2.5
    );

    return () => {
      masterTl.kill();
      window.removeEventListener('resize', handleResize);
    };
  }, [onComplete]);

  // If finished, remove completely from DOM
  if (isFinished) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      id="cinematic-preloader"
      className="fixed inset-0 z-[99999] w-screen h-screen bg-white text-black overflow-hidden select-none flex flex-col justify-between"
      style={{ touchAction: 'none' }}
    >
      {/* Full-Screen Dissolve Grid Canvas Layer on White */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-30"
        style={{ willChange: 'transform' }}
      />

      {/* Center Studio Wordmark on Pure White */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 text-black text-xs font-mono uppercase tracking-wider mb-4">
          <span className="w-2 h-2 rounded-full bg-[#A8FF00]" />
          <span>Nexus Creative Technology</span>
        </div>
        <h1 className="font-sans font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-black leading-none">
          WE BUILD. <br className="hidden sm:inline" />
          <span className="text-[#A8FF00] bg-black px-3 py-1 rounded-2xl inline-block mt-2 sm:mt-0">WE CREATE.</span>
        </h1>
        <p className="mt-4 font-mono text-xs sm:text-sm text-zinc-500 tracking-widest uppercase">
          Digital Products • Brand Identity • Meta Growth
        </p>
      </div>

      {/* Minimal Top Bar UI on Pure White (DM Mono) */}
      <div className="relative z-40 p-4 sm:p-6 md:p-8 flex items-center justify-between font-mono text-[11px] sm:text-xs text-zinc-600 tracking-widest pointer-events-none">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-sm bg-[#A8FF00] border border-black/20" />
          <span className="text-black font-semibold">[ SYS.NEXUS // PRELOADER v3.0 ]</span>
        </div>
        <div className="hidden sm:flex items-center space-x-4 text-zinc-400">
          <span>GRID: 16PX</span>
          <span className="text-[#A8FF00] bg-black px-1.5 py-0.5 rounded">COLOR: #A8FF00</span>
          <span ref={timeRef} className="text-black font-bold">0.0s / 3.0s</span>
        </div>
      </div>

      {/* Minimal Bottom Bar UI on Pure White (DM Mono) */}
      <div className="relative z-40 p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3 font-mono text-[11px] sm:text-xs pointer-events-none">
        {/* Phase Label */}
        <div className="flex items-center space-x-2 text-zinc-700">
          <span className="text-[#A8FF00] bg-black px-1 rounded font-bold">&gt;&gt;</span>
          <span ref={phaseLabelRef} className="tracking-wider uppercase font-medium">
            [01/03] INITIALIZING DIGITAL STUDIO
          </span>
        </div>

        {/* Numeric Counter & Progress Bar */}
        <div className="flex flex-col items-start sm:items-end space-y-1.5 min-w-[140px]">
          <div className="flex items-center space-x-2">
            <span className="text-zinc-400 text-[10px] uppercase tracking-wider">LOAD STATE:</span>
            <span ref={counterRef} className="text-lg sm:text-xl font-bold text-black tracking-tight">
              000%
            </span>
          </div>

          {/* Micro Progress Bar Track */}
          <div className="w-full sm:w-36 h-1.5 bg-zinc-100 border border-black/5 rounded-full overflow-hidden">
            <div
              ref={progressFillRef}
              className="h-full bg-[#A8FF00] shadow-[0_0_8px_#A8FF00] transition-all duration-75"
              style={{ width: '0%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
