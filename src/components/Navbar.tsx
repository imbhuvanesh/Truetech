import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion, type Variants } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Products', path: '/products' },
    { label: 'Our Work', path: '/work' },
    { label: 'Contact', path: '/contact' },
  ];

  // Collapse on outside click
  const handleClickOutside = useCallback((event: MouseEvent | TouchEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setExpanded(false);
    }
  }, []);

  // Collapse on Escape key
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setExpanded(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClickOutside, handleKeyDown]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const listVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.04,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : 6,
      filter: shouldReduceMotion ? 'none' : 'blur(4px)',
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.28,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.12 },
    },
  };

  return (
    <nav
      ref={containerRef}
      aria-label="Main Navigation"
      className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 select-none flex items-center justify-center max-w-[calc(100vw-2rem)]"
    >
      <motion.div
        layout
        transition={{
          duration: shouldReduceMotion ? 0.05 : 0.35,
          ease: [0.16, 1, 0.3, 1] as const,
        }}
        className={`relative flex items-center bg-[#070D1E]/80 backdrop-blur-xl border border-white/[0.12] shadow-[0_10px_35px_-5px_rgba(0,0,0,0.35)] rounded-full transition-shadow duration-300 ${
          expanded
            ? 'p-1.5 sm:p-2 overflow-x-auto no-scrollbar'
            : 'w-11 h-11 sm:w-12 sm:h-12 justify-center hover:border-white/25 active:scale-95'
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          {!expanded ? (
            /* =========================================================================
               NORDIC MINIMAL COMPACT CIRCULAR BUTTON (TOP-CENTER)
               ========================================================================= */
            <motion.button
              key="trigger"
              onClick={() => setExpanded(true)}
              aria-expanded={false}
              aria-label="Open navigation menu"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.2 }}
              className="w-full h-full flex flex-col items-center justify-center gap-1 cursor-pointer focus:outline-none group rounded-full"
            >
              {/* Minimal Nordic 2-dash icon */}
              <span className="w-4 h-[1.5px] bg-white/90 rounded-full transition-transform duration-200 group-hover:scale-x-110" />
              <span className="w-2.5 h-[1.5px] bg-white/70 rounded-full transition-transform duration-200 group-hover:scale-x-125" />
            </motion.button>
          ) : (
            /* =========================================================================
               EXPANDED NORDIC PILL NAVBAR
               ========================================================================= */
            <motion.div
              key="expanded-menu"
              className="flex items-center gap-1 sm:gap-1.5"
            >
              {/* Close / Collapse Toggle */}
              <button
                onClick={() => setExpanded(false)}
                aria-label="Close navigation menu"
                className="w-8 h-8 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.08] active:scale-90 transition-all duration-150 cursor-pointer shrink-0 focus:outline-none"
              >
                <X className="w-4 h-4 stroke-[1.75]" />
              </button>

              {/* Minimal Divider */}
              <div className="w-[1px] h-4 bg-white/10 shrink-0 mx-0.5" />

              {/* Staggered Navigation Links */}
              <motion.ul
                variants={listVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex items-center gap-1 sm:gap-1.5 list-none m-0 p-0"
              >
                {navItems.map((item) => {
                  const active = isActive(item.path);
                  return (
                    <motion.li key={item.label} variants={itemVariants} className="shrink-0">
                      <Link
                        to={item.path}
                        onClick={() => setExpanded(false)}
                        className={`block px-3 sm:px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-sans tracking-wide transition-all duration-200 whitespace-nowrap focus:outline-none ${
                          active
                            ? 'bg-white/[0.14] text-white font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]'
                            : 'text-white/70 hover:text-white hover:bg-white/[0.08] font-normal'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};
