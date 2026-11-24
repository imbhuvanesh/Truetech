import React, { useEffect, useRef, useState, useMemo } from 'react';
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
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Dynamic base URL for assets
  const rawBase = import.meta.env.BASE_URL || '/';
  const BASE = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

  // 5 high-resolution grayscale images
  const slides = useMemo(() => [
    `${BASE}preloader/slide-1.jpg`,
    `${BASE}preloader/slide-2.jpg`,
    `${BASE}preloader/slide-3.jpg`,
    `${BASE}preloader/slide-4.jpg`,
    `${BASE}preloader/slide-5.jpg`,
  ], [BASE]);

  const slideRefs = useRef<(HTMLImageElement | null)[]>([]);

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

  // 2. Preload all 5 images before triggering animation
  useEffect(() => {
    let isCancelled = false;
    let loadedCount = 0;

    const timeout = setTimeout(() => {
      // Fallback: Proceed even if network is slow
      if (!isCancelled) setImagesLoaded(true);
    }, 1500);

    slides.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount >= slides.length && !isCancelled) {
          clearTimeout(timeout);
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount >= slides.length && !isCancelled) {
          clearTimeout(timeout);
          setImagesLoaded(true);
        }
      };
    });

    return () => {
      isCancelled = true;
      clearTimeout(timeout);
    };
  }, [slides]);

  // 3. Main 5-Second Cinematic Dissolve Timeline with GSAP
  useEffect(() => {
    if (!imagesLoaded) return;

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
      }, 800);
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
      activeIncomingIndex: 1,
      totalPercent: 0,
    };

    /**
     * Draw the Dissolve Grid on Canvas
     * Features:
     * - Concentrated solid transition band traveling vertically
     * - Small 16px grid cells
     * - Bright orange dissolve color (#FF6426)
     * - Randomized alphanumeric characters in selected cells
     * - Randomized scatter offsets along the dissolution edges
     */
    const renderDissolveGrid = () => {
      ctx.clearRect(0, 0, width, height);

      const p = transitionState.progress;
      if (p <= 0.001 || p >= 0.999) return;

      const bandY = p * height;
      const bandHeight = Math.max(160, height * 0.24);
      const halfBand = bandHeight / 2;

      const cols = Math.ceil(width / cellSize);
      const rows = Math.ceil(height / cellSize);

      ctx.save();

      // Loop through visible rows near the band
      const startRow = Math.max(0, Math.floor((bandY - halfBand * 1.5) / cellSize));
      const endRow = Math.min(rows, Math.ceil((bandY + halfBand * 1.5) / cellSize));

      for (let r = startRow; r < endRow; r++) {
        const cellY = r * cellSize;
        const distFromCenter = Math.abs(cellY + cellSize / 2 - bandY);

        if (distFromCenter > halfBand * 1.3) continue;

        const normDist = distFromCenter / halfBand; // 0 at center, 1 at edge

        for (let c = 0; c < cols; c++) {
          const cellX = c * cellSize;

          // Pseudo-random factor deterministic per frame/cell
          const hash = Math.sin(r * 37.1 + c * 59.3 + p * 120) * 43758.5453;
          const rand = hash - Math.floor(hash);

          // Threshold for cell activation
          let threshold = 0.95;
          if (normDist < 0.25) {
            threshold = 0.92; // Concentrated solid band
          } else if (normDist < 0.6) {
            threshold = 0.65;
          } else if (normDist < 1.0) {
            threshold = 0.32; // Scattered trailing/leading edges
          } else {
            threshold = 0.12;
          }

          if (rand < threshold) {
            // Scatter offset
            let dx = 0;
            let dy = 0;
            if (normDist > 0.3) {
              const scatterHash = Math.cos(r * 19.7 + c * 83.1 + p * 80) * 12345.67;
              const scatterRand = scatterHash - Math.floor(scatterHash);
              dx = (scatterRand - 0.5) * 10 * normDist;
              dy = (rand - 0.5) * 10 * normDist;
            }

            // Draw bright orange cell
            ctx.fillStyle = '#FF6426';
            ctx.fillRect(cellX + dx, cellY + dy, cellSize, cellSize);

            // In ~28% of active cells, draw a crisp monospace alphanumeric character
            if (rand < 0.28 && normDist < 0.85) {
              const charIdx = Math.floor(rand * CHAR_SET.length);
              const char = CHAR_SET[charIdx];

              ctx.font = 'bold 10px monospace';
              // High contrast: dark obsidian or pure white
              ctx.fillStyle = rand < 0.14 ? '#141414' : '#FFFFFF';
              ctx.fillText(char, cellX + dx + cellSize * 0.2, cellY + dy + cellSize * 0.72);
            }
          }
        }
      }

      ctx.restore();
    };

    // Master 5.0-Second Timeline
    const masterTl = gsap.timeline({
      onUpdate: () => {
        // Update live stats & progress bar
        const currentTime = masterTl.time();
        const pct = Math.min(100, Math.round((currentTime / 5.0) * 100));

        if (counterRef.current) {
          counterRef.current.textContent = `${pct.toString().padStart(3, '0')}%`;
        }
        if (progressFillRef.current) {
          progressFillRef.current.style.width = `${pct}%`;
        }
        if (timeRef.current) {
          timeRef.current.textContent = `${currentTime.toFixed(1)}s / 5.0s`;
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

    // Initial State: Slide 0 is visible, all others clipped out
    slideRefs.current.forEach((img, idx) => {
      if (!img) return;
      if (idx === 0) {
        gsap.set(img, { opacity: 1, scale: 1.05, clipPath: 'inset(0% 0% 0% 0%)' });
      } else {
        gsap.set(img, { opacity: 0, scale: 1, clipPath: 'inset(0% 0% 100% 0%)' });
      }
    });

    // Phase 1: 0.0s – 0.5s: Initial image entrance
    masterTl.to(
      slideRefs.current[0],
      {
        scale: 1.0,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
      },
      0
    );

    // Phase Label Helpers
    const setPhase = (text: string) => {
      if (phaseLabelRef.current) {
        phaseLabelRef.current.textContent = text;
      }
    };

    masterTl.add(() => setPhase('[01/04] INITIALIZING SPATIAL ARCHITECTURE'), 0.05);

    // Transitions Configuration:
    // Transition 1: 0.5s – 1.5s (Image 0 -> Image 1)
    // Transition 2: 1.5s – 2.5s (Image 1 -> Image 2)
    // Transition 3: 2.5s – 3.5s (Image 2 -> Image 3)
    // Transition 4: 3.5s – 4.5s (Image 3 -> Image 4)
    const transitions = [
      { start: 0.5, from: 0, to: 1, label: '[02/04] RECONSTRUCTING NEURAL MATRIX' },
      { start: 1.5, from: 1, to: 2, label: '[03/04] SYNTHESIZING BRAND TOPOLOGY' },
      { start: 2.5, from: 2, to: 3, label: '[04/04] DEPLOYING HIGH-PERFORMANCE CODE' },
      { start: 3.5, from: 3, to: 4, label: '[05/05] SYSTEM READY // ENTERING APPLICATION' },
    ];

    transitions.forEach((t) => {
      masterTl.add(() => {
        setPhase(t.label);
        transitionState.activeIncomingIndex = t.to;
        const incomingImg = slideRefs.current[t.to];
        if (incomingImg) {
          gsap.set(incomingImg, { opacity: 1, zIndex: t.to + 1 });
        }
      }, t.start);

      // Animate progress 0 -> 1 over 1.0 second
      masterTl.fromTo(
        transitionState,
        { progress: 0 },
        {
          progress: 1,
          duration: 1.0,
          ease: 'power2.inOut',
          onUpdate: () => {
            const p = transitionState.progress;
            // Update CSS clip-path on the incoming image
            const incomingImg = slideRefs.current[t.to];
            if (incomingImg) {
              const bottomClip = Math.max(0, 100 - p * 100);
              incomingImg.style.clipPath = `inset(0% 0% ${bottomClip.toFixed(2)}% 0%)`;
            }
            renderDissolveGrid();
          },
          onComplete: () => {
            // Clean up previous image
            const prevImg = slideRefs.current[t.from];
            if (prevImg) {
              gsap.set(prevImg, { opacity: 0 });
            }
            ctx.clearRect(0, 0, width, height);
          },
        },
        t.start
      );
    });

    // Phase 5: 4.5s – 5.0s: Final dissolve scatter and smooth reveal of website
    masterTl.add(() => {
      setPhase('[COMPLETED] LAUNCHING EXPERIENCE');
    }, 4.5);

    // Final disperse effect on canvas between 4.5s and 5.0s
    masterTl.to(
      transitionState,
      {
        progress: 1,
        duration: 0.5,
        onUpdate: () => {
          // Subtle dissolution flicker
          const alpha = 1 - (masterTl.time() - 4.5) / 0.5;
          canvas.style.opacity = alpha.toFixed(2);
        },
      },
      4.5
    );

    return () => {
      masterTl.kill();
      window.removeEventListener('resize', handleResize);
    };
  }, [imagesLoaded, onComplete]);

  // If finished, remove completely from DOM
  if (isFinished) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      id="cinematic-preloader"
      className="fixed inset-0 z-[99999] w-screen h-screen bg-[#141414] overflow-hidden select-none"
      style={{ touchAction: 'none' }}
    >
      {/* Background Grayscale Images with Object-Fit Cover */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {slides.map((src, index) => (
          <img
            key={src}
            ref={(el) => {
              slideRefs.current[index] = el;
            }}
            src={src}
            alt={`Nexus Cinematic Experience Slide ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 brightness-[0.80] pointer-events-none transition-none"
            style={{
              opacity: index === 0 ? 1 : 0,
              zIndex: index + 1,
              willChange: 'clip-path, transform, opacity',
            }}
          />
        ))}
      </div>

      {/* Full-Screen Dissolve Grid Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-30"
        style={{ willChange: 'transform' }}
      />

      {/* Cinematic Subtle Grain & Vignette Overlay */}
      <div className="absolute inset-0 pointer-events-none z-30 shadow-[inset_0_0_120px_rgba(0,0,0,0.85)]" />

      {/* Minimal Top Bar UI (DM Mono) */}
      <div className="absolute top-0 left-0 right-0 z-40 p-4 sm:p-6 md:p-8 flex items-center justify-between font-mono text-[11px] sm:text-xs text-white/70 tracking-widest pointer-events-none">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-sm bg-[#FF6426]" />
          <span className="text-white font-semibold">[ SYS.NEXUS // DISSOLVE SEQUENCE v2.5 ]</span>
        </div>
        <div className="hidden sm:flex items-center space-x-4 text-white/50">
          <span>GRID: 16PX</span>
          <span>DISSOLVE: #FF6426</span>
          <span ref={timeRef} className="text-[#FF6426] font-medium">0.0s / 5.0s</span>
        </div>
      </div>

      {/* Minimal Bottom Bar UI (DM Mono) */}
      <div className="absolute bottom-0 left-0 right-0 z-40 p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3 font-mono text-[11px] sm:text-xs pointer-events-none">
        {/* Phase Label */}
        <div className="flex items-center space-x-2 text-white/80">
          <span className="text-[#FF6426] font-bold">&gt;&gt;</span>
          <span ref={phaseLabelRef} className="tracking-wider uppercase">
            [01/04] INITIALIZING SPATIAL ARCHITECTURE
          </span>
        </div>

        {/* Numeric Counter & Progress Bar */}
        <div className="flex flex-col items-start sm:items-end space-y-1.5 min-w-[140px]">
          <div className="flex items-center space-x-2">
            <span className="text-white/40 text-[10px] uppercase tracking-wider">LOAD STATE:</span>
            <span ref={counterRef} className="text-lg sm:text-xl font-bold text-white tracking-tight">
              000%
            </span>
          </div>

          {/* Micro Progress Bar Track */}
          <div className="w-full sm:w-36 h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              ref={progressFillRef}
              className="h-full bg-[#FF6426] shadow-[0_0_8px_#FF6426] transition-all duration-75"
              style={{ width: '0%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
