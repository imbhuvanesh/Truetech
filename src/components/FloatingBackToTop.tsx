import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const RADIUS = 20;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export const FloatingBackToTop: React.FC = () => {
  const [progress, setProgress] = useState(() => {
    if (typeof window === 'undefined') return 0;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    return docHeight > 0 ? Math.min(window.scrollY / docHeight, 1) : 0;
  });
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.scrollY > 180;
  });
  const shouldReduceMotion = useReducedMotion();

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
    setProgress(pct);
    setIsVisible(scrollTop > 180);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: shouldReduceMotion ? 'auto' : 'smooth' });
  };

  const strokeOffset = CIRCUMFERENCE - progress * CIRCUMFERENCE;
  const pct = Math.round(progress * 100);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          aria-label={`Back to top – ${pct}% scrolled`}
          initial={{ opacity: 0, scale: 0.5, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 24 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: [0.19, 1, 0.22, 1] }}
          className="fixed bottom-6 right-6 z-50 group flex items-center justify-center w-14 h-14 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#A8FF00]/40 rounded-full"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          {/* Dark background circle */}
          <div className="absolute inset-0 rounded-full bg-[#070B16] shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_20px_rgba(168,255,0,0.25)] group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.65),0_0_36px_rgba(168,255,0,0.55)] transition-shadow duration-500" />

          {/* SVG Progress Ring */}
          <svg
            viewBox="0 0 56 56"
            className="absolute inset-0 w-full h-full -rotate-90"
            aria-hidden="true"
          >
            {/* Track */}
            <circle
              cx="28"
              cy="28"
              r={RADIUS}
              fill="none"
              stroke="rgba(168,255,0,0.15)"
              strokeWidth="3"
            />
            {/* Progress arc */}
            <motion.circle
              cx="28"
              cy="28"
              r={RADIUS}
              fill="none"
              stroke="#A8FF00"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              animate={{ strokeDashoffset: strokeOffset }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.15, ease: 'linear' }}
            />
          </svg>

          {/* Inner content: percentage or arrow */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            {pct > 0 && pct < 100 ? (
              <span className="text-[#A8FF00] text-[11px] font-mono font-bold leading-none tabular-nums">
                {pct}
              </span>
            ) : (
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="w-5 h-5 stroke-[#A8FF00] group-hover:-translate-y-0.5 transition-transform duration-200"
              >
                <path d="M10 16 L10 4" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M5 9 L10 4 L15 9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>

          {/* Doodle-style sketchy outer ring (decorative) */}
          <svg
            viewBox="0 0 60 60"
            className="absolute inset-[-3px] w-[calc(100%+6px)] h-[calc(100%+6px)] pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity duration-300"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M 30 5 C 44 4, 55 15, 55 29 C 55 44, 43 56, 29 56 C 14 56, 4 44, 4 29 C 4 14, 17 4, 31 4"
              stroke="#A8FF00"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="4 3"
            />
          </svg>

          {/* Tooltip */}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#070B16] text-[#A8FF00] text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-lg border border-[#A8FF00]/30 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            ↑ Back to Top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
