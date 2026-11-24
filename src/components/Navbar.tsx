import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onStartProject: () => void;
  onOpenModal?: (tab: 'about' | 'stats' | 'tokenomics' | 'airdrop' | 'wallet') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onStartProject,
  onOpenModal: _onOpenModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative z-30 w-full pt-4 sm:pt-6 md:pt-8 px-4 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Modern Minimalist Agency Logo (Replaces Base Club button) */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
        </div>

        {/* Center: Navigation Container for all main page containers */}
        <nav className="hidden md:flex items-center space-x-1 bg-white/[0.08] backdrop-blur-xl px-4 py-2 rounded-full border border-white/20 shadow-[0_8px_32px_0_rgba(0,10,50,0.25),0_1px_2px_0_rgba(255,255,255,0.15)_inset]">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="relative px-3.5 py-1.5 rounded-full text-xs font-normal text-white/85 hover:text-white hover:bg-white/15 transition-all duration-200 font-sans tracking-wide"
            >
              <span>{item.label}</span>
            </button>
          ))}
          <button
            onClick={onStartProject}
            className="ml-1 relative px-3 py-1.5 rounded-full text-xs font-bold text-neon-lime hover:bg-white/15 transition-all flex items-center space-x-1.5 font-sans"
          >
            <span>Free Audit</span>
            <span className="w-1.5 h-1.5 rounded-full bg-neon-lime animate-ping" />
          </button>
        </nav>

        {/* Right: Start a Project CTA Button */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onStartProject}
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-3 w-full bg-[#072477]/95 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl flex flex-col space-y-2 text-white"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-left px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-white/10 transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-white/40">→</span>
              </button>
            ))}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onStartProject();
                }}
                className="w-full bg-neon-lime text-black font-archivo font-bold text-xs py-3 rounded-xl text-center shadow-lg hover:brightness-105 active:scale-95 transition-all"
              >
                Start a Project ↗
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
