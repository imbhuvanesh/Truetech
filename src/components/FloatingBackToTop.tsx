import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export const FloatingBackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 320px
      if (window.scrollY > 320) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Back to top of page"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.12, rotate: -4 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 350, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 group flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#070B16] text-[#A8FF00] border-2 border-[#A8FF00] shadow-[0_10px_30px_rgba(0,0,0,0.45),0_0_20px_rgba(168,255,0,0.35)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(168,255,0,0.65)] cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#A8FF00]/40 transition-shadow duration-300"
        >
          {/* Hand-drawn organic sketch border loop */}
          <svg
            viewBox="0 0 60 60"
            className="absolute inset-0 w-full h-full pointer-events-none stroke-[#A8FF00] opacity-80"
            fill="none"
          >
            <path
              d="M 30 4 C 44 3, 56 16, 56 30 C 56 44, 43 56, 30 56 C 16 56, 4 44, 4 30 C 4 15, 17 4, 31 4"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="3 2"
            />
          </svg>

          {/* Hand-drawn upward arrow with organic sketchy arrowhead */}
          <svg
            viewBox="0 0 32 32"
            fill="none"
            className="w-6 h-6 stroke-[#A8FF00] group-hover:-translate-y-1 transition-transform duration-200"
          >
            {/* Shaft */}
            <path
              d="M 16 24 C 15.8 18, 16.2 12, 16 8"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Left arrowhead stroke */}
            <path
              d="M 10 14 C 12 11, 14 9, 16 8"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Right arrowhead stroke */}
            <path
              d="M 22 14 C 20 11, 18 9, 16 8"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Tooltip on hover */}
          <span className="absolute -top-9 bg-[#070B16] text-[#A8FF00] text-[11px] font-mono tracking-wider px-2 py-0.5 rounded-md border border-[#A8FF00]/30 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            TOP ↑
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
