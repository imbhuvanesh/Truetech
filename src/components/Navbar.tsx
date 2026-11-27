import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Products', path: '/products' },
    { label: 'Our Work', path: '/work' },
    { label: 'Contact', path: '/contact' },
  ];

  // Collapse when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setExpanded(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setExpanded(false);
    }, 250);
  };

  const toggleExpanded = () => {
    setExpanded(prev => !prev);
  };

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="fixed top-4 sm:top-6 left-4 sm:left-6 z-50 select-none"
    >
      <motion.div
        layout
        transition={{
          duration: shouldReduceMotion ? 0.1 : 0.35,
          ease: [0.19, 1, 0.22, 1],
        }}
        onClick={!expanded ? toggleExpanded : undefined}
        className={`relative flex items-center bg-[#071330]/95 backdrop-blur-2xl border border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.45)] cursor-pointer overflow-hidden ${
          expanded
            ? 'rounded-3xl sm:rounded-full px-2 sm:px-3 py-2'
            : 'w-12 h-12 rounded-full justify-center hover:scale-105 active:scale-95'
        }`}
      >
        {/* Core Monogram Circle (Always visible as the anchor) */}
        <Link
          to="/"
          onClick={(e) => {
            if (!expanded) {
              e.preventDefault();
              toggleExpanded();
            }
          }}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-neon-lime text-[#041A55] font-black text-sm shrink-0 shadow-[0_0_16px_rgba(168,255,0,0.4)] transition-transform duration-200 hover:rotate-6"
          title="Genora Navigation"
        >
          <span>G</span>
        </Link>

        {/* Expanded Navigation Links */}
        <AnimatePresence>
          {expanded && (
            <motion.nav
              initial={{ opacity: 0, x: -10, filter: 'blur(4px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: -10, filter: 'blur(4px)' }}
              transition={{
                duration: shouldReduceMotion ? 0.1 : 0.25,
                ease: [0.19, 1, 0.22, 1],
              }}
              className="flex flex-col sm:flex-row items-start sm:items-center pl-2 sm:pl-3 pr-2 py-1 sm:py-0 space-y-1 sm:space-y-0 sm:space-x-1"
            >
              {navItems.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setExpanded(false)}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-sans tracking-wide transition-all duration-200 whitespace-nowrap ${
                      active
                        ? 'bg-white text-[#0645D8] font-bold shadow-sm'
                        : 'text-white/85 hover:text-white hover:bg-white/10 font-medium'
                    }`}
                  >
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
