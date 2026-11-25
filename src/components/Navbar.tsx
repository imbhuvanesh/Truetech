import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  onStartProject?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProject }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Products', path: '/products' },
    { label: 'Our Work', path: '/work' },
    { label: 'Contact', path: '/contact' },
  ];

  // Listen to scroll position for floating glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStartProject = () => {
    setMobileMenuOpen(false);
    if (onStartProject) {
      onStartProject();
    } else {
      navigate('/contact');
    }
  };

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 w-full px-3 sm:px-6 pt-3 sm:pt-4"
      animate={scrolled ? {
        paddingTop: '8px',
        paddingBottom: '8px',
      } : {
        paddingTop: '12px',
        paddingBottom: '0px',
      }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: [0.19, 1, 0.22, 1] }}
    >
      {/* Floating glass backdrop – appears when scrolled */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            key="navbar-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 bg-[#041A55]/85 backdrop-blur-2xl border-b border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
            style={{ borderRadius: 0 }}
          />
        )}
      </AnimatePresence>

      <div className="relative max-w-6xl mx-auto flex items-center justify-between">

        {/* Logo / Brand */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 rounded-xl bg-neon-lime flex items-center justify-center shadow-[0_0_16px_rgba(168,255,0,0.5)] group-hover:shadow-[0_0_28px_rgba(168,255,0,0.8)] transition-shadow duration-300">
            <span className="text-[#041A55] font-black text-sm leading-none">N</span>
          </div>
          <span className="hidden sm:block text-white font-bold text-sm tracking-tight">Nexus</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 bg-white/[0.12] backdrop-blur-xl p-1 rounded-full border border-white/20 shadow-[0_8px_32px_0_rgba(0,10,50,0.22)]">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`relative px-4 sm:px-5 py-2 rounded-full text-xs font-sans tracking-wide transition-all duration-200 ${
                  active
                    ? 'bg-white text-[#0645D8] font-bold shadow-md'
                    : 'text-white/85 hover:text-white hover:bg-white/15 font-medium'
                }`}
              >
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile brand badge */}
        <div className="md:hidden">
          <span className="text-xs font-bold text-white uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 border border-white/20">
            NEXUS
          </span>
        </div>

        {/* Right Action */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handleStartProject}
            className="group border border-white/80 hover:border-white bg-white hover:bg-neon-lime text-[#0645D8] hover:text-primary-black px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold tracking-tight font-sans transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.18)] hover:shadow-[0_8px_30px_rgba(168,255,0,0.4)] active:scale-95 flex items-center space-x-1.5"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.22 }}
            className="relative md:hidden mt-2.5 w-full max-w-6xl mx-auto bg-[#041A55]/95 backdrop-blur-2xl rounded-3xl border border-white/20 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="flex flex-col space-y-1.5">
              {navItems.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-2xl text-sm font-sans tracking-tight text-left flex items-center justify-between ${
                      active
                        ? 'bg-white text-[#0645D8] font-bold'
                        : 'text-white/85 hover:text-white hover:bg-white/10 font-medium'
                    }`}
                  >
                    <span>{item.label}</span>
                    {active && <span className="w-2 h-2 rounded-full bg-[#0645D8]" />}
                  </Link>
                );
              })}
              <button
                onClick={handleStartProject}
                className="mt-2 w-full bg-neon-lime text-primary-black py-3 rounded-2xl font-bold text-sm flex items-center justify-center space-x-2 hover:brightness-110 transition-all active:scale-[0.98]"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
