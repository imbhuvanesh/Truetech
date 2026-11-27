import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion, type Variants } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { X, ChevronDown } from 'lucide-react';

interface NavItem {
  label: string;
  path: string;
  sectionId: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/', sectionId: 'home' },
  { label: 'About', path: '/about', sectionId: 'about' },
  { label: 'Services', path: '/services', sectionId: 'services' },
  { label: 'Products', path: '/products', sectionId: 'products' },
  { label: 'Our Work', path: '/work', sectionId: 'work' },
  { label: 'Contact', path: '/contact', sectionId: 'contact' },
];

const getRouteSection = (pathname: string): string => {
  const matched = NAV_ITEMS.find(
    (item) => item.path !== '/' && pathname.startsWith(item.path)
  );
  return matched ? matched.label : 'Home';
};

export const Navbar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrollSection, setScrollSection] = useState('Home');
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  // Derive active section: route-based on subpages, scroll-based on homepage ('/')
  const activeSection = location.pathname === '/' ? scrollSection : getRouteSection(location.pathname);

  // Dynamic active section detection based on scroll position when on homepage
  useEffect(() => {
    if (location.pathname !== '/') return;

    const sectionIds = ['home', 'services', 'products', 'contact'];
    const sectionMap: Record<string, string> = {
      home: 'Home',
      services: 'Services',
      products: 'Products',
      contact: 'Contact',
    };

    const handleScroll = () => {
      if (window.scrollY < 220) {
        setScrollSection('Home');
        return;
      }

      const viewportTrigger = 280;
      let current = 'Home';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= viewportTrigger && rect.bottom > 120) {
            current = sectionMap[id];
          }
        }
      }

      setScrollSection((prev) => (prev !== current ? current : prev));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

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

  const handleLinkClick = (label: string) => {
    setScrollSection(label);
    setExpanded(false);
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
            : 'h-11 sm:h-12 pl-1.5 pr-3 py-1.5 cursor-pointer hover:border-white/25 active:scale-95'
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          {!expanded ? (
            /* =========================================================================
               NORDIC COMPACT PILL WITH 'G' LOGO & DYNAMIC ACTIVE SECTION
               ========================================================================= */
            <motion.button
              key="compact-trigger"
              onClick={() => setExpanded(true)}
              aria-expanded={false}
              aria-label={`Open navigation menu. Currently on ${activeSection}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="w-full h-full flex items-center gap-2 cursor-pointer focus:outline-none group rounded-full"
            >
              {/* 'G' Logo Badge */}
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neon-lime text-[#041A55] font-black text-xs sm:text-sm flex items-center justify-center shrink-0 shadow-[0_0_14px_rgba(168,255,0,0.45)] transition-all duration-200 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(168,255,0,0.65)] select-none">
                <span>G</span>
              </div>

              {/* Minimal Divider */}
              <div className="w-[1px] h-3.5 bg-white/15 shrink-0" />

              {/* Dynamic Active Section Label with Smooth Transition */}
              <div className="min-w-[48px] sm:min-w-[56px] text-left">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeSection}
                    initial={{ opacity: 0, y: 5, filter: shouldReduceMotion ? 'none' : 'blur(2px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -5, filter: shouldReduceMotion ? 'none' : 'blur(2px)' }}
                    transition={{
                      duration: shouldReduceMotion ? 0.05 : 0.22,
                      ease: [0.16, 1, 0.3, 1] as const,
                    }}
                    className="block text-xs sm:text-[13px] font-sans font-medium text-white/95 tracking-wide whitespace-nowrap"
                  >
                    {activeSection}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Subtle Expanding Hint Icon */}
              <ChevronDown className="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-colors duration-200 shrink-0" />
            </motion.button>
          ) : (
            /* =========================================================================
               EXPANDED NORDIC PILL NAVBAR
               ========================================================================= */
            <motion.div
              key="expanded-menu"
              className="flex items-center gap-1 sm:gap-1.5"
            >
              {/* Brand 'G' Logo (Links to Home and collapses menu) */}
              <Link
                to="/"
                onClick={() => handleLinkClick('Home')}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neon-lime text-[#041A55] font-black text-xs sm:text-sm flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(168,255,0,0.35)] hover:scale-105 active:scale-95 transition-all duration-150 select-none focus:outline-none"
                title="Genora Home"
              >
                <span>G</span>
              </Link>

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
                {NAV_ITEMS.map((item) => {
                  const isCurrentActive = activeSection === item.label;
                  return (
                    <motion.li key={item.label} variants={itemVariants} className="shrink-0">
                      <Link
                        to={item.path}
                        onClick={() => handleLinkClick(item.label)}
                        className={`block px-3 sm:px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-sans tracking-wide transition-all duration-200 whitespace-nowrap focus:outline-none ${
                          isCurrentActive
                            ? 'bg-white/[0.16] text-white font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]'
                            : 'text-white/70 hover:text-white hover:bg-white/[0.08] font-normal'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </motion.ul>

              {/* Minimal Divider */}
              <div className="w-[1px] h-4 bg-white/10 shrink-0 mx-0.5" />

              {/* Close / Collapse Button */}
              <button
                onClick={() => setExpanded(false)}
                aria-label="Close navigation menu"
                className="w-7 h-7 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/[0.08] active:scale-90 transition-all duration-150 cursor-pointer shrink-0 focus:outline-none"
              >
                <X className="w-3.5 h-3.5 stroke-[2]" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};
