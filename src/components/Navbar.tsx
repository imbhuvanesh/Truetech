import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  onStartProject?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProject }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Our Work', path: '/work' },
    { label: 'Contact', path: '/contact' },
  ];

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
    <header className="relative z-30 w-full pt-4 sm:pt-6 md:pt-8 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Modern Minimalist Agency Logo */}
        <Link 
          to="/"
          className="flex items-center space-x-2.5 cursor-pointer group select-none"
        >
          {/* Geometric Agency Emblem */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-white text-[#0645D8] flex items-center justify-center font-bold text-base sm:text-lg shadow-[0_4px_20px_rgba(0,0,0,0.18)] group-hover:scale-105 transition-transform duration-200">
            <span className="font-sans font-bold">N</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-1.5">
              <span className="font-sans font-bold text-white text-base sm:text-lg tracking-tight leading-none">NEXUS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-neon-lime" />
            </div>
            <span className="font-sans font-light text-white/70 text-[10px] sm:text-[11px] tracking-wider uppercase leading-tight mt-0.5">Digital Agency</span>
          </div>
        </Link>

        {/* Center: Navigation Container for all main page routes */}
        <nav className="hidden md:flex items-center space-x-1 bg-white/[0.10] backdrop-blur-xl px-3 py-1.5 rounded-full border border-white/20 shadow-[0_8px_32px_0_rgba(0,10,50,0.25),0_1px_2px_0_rgba(255,255,255,0.15)_inset]">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`relative px-4 py-1.5 rounded-full text-xs font-sans tracking-wide transition-all duration-200 ${
                  active 
                    ? 'bg-white text-[#0645D8] font-bold shadow-md' 
                    : 'text-white/85 hover:text-white hover:bg-white/15 font-normal'
                }`}
              >
                <span>{item.label}</span>
                {active && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-neon-lime" />
                )}
              </Link>
            );
          })}
          
          <Link
            to="/contact"
            className="ml-1 relative px-3.5 py-1.5 rounded-full text-xs font-bold text-neon-lime hover:bg-white/15 transition-all flex items-center space-x-1.5 font-sans"
          >
            <span>Free Audit</span>
            <span className="w-1.5 h-1.5 rounded-full bg-neon-lime animate-ping" />
          </Link>
        </nav>

        {/* Right: Start a Project CTA Button */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handleStartProject}
            className="group border border-white/80 hover:border-white bg-white hover:bg-neon-lime text-[#0645D8] hover:text-primary-black px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold tracking-tight font-sans transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.18),0_1px_2px_rgba(255,255,255,0.4)_inset] hover:shadow-[0_8px_30px_rgba(168,255,0,0.4)] active:scale-95 flex items-center space-x-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-neon-lime group-hover:bg-black transition-colors" />
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 w-full bg-[#041A55]/95 backdrop-blur-2xl rounded-3xl border border-white/20 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="flex flex-col space-y-2">
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
                        : 'text-white/90 hover:bg-white/10 font-medium'
                    }`}
                  >
                    <span>{item.label}</span>
                    {active && <span className="w-2 h-2 rounded-full bg-neon-lime" />}
                  </Link>
                );
              })}

              <div className="pt-3 border-t border-white/15">
                <button
                  onClick={handleStartProject}
                  className="w-full py-3 rounded-2xl bg-neon-lime text-black font-sans font-bold text-xs tracking-tight flex items-center justify-center space-x-2"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};
