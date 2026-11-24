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
    <header className="relative z-30 w-full pt-3 sm:pt-4 px-3 sm:px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Navigation Container: Clean, Minimal, Uniform Spacing, No Green Dots */}
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

        {/* Mobile current page badge (clean, no green dot) */}
        <div className="md:hidden">
          <span className="text-xs font-bold text-white uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 border border-white/20">
            NEXUS
          </span>
        </div>

        {/* Right Action: Start a Project CTA Button (No green dot) */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handleStartProject}
            className="group border border-white/80 hover:border-white bg-white hover:bg-neon-lime text-[#0645D8] hover:text-primary-black px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold tracking-tight font-sans transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.18)] hover:shadow-[0_8px_30px_rgba(168,255,0,0.4)] active:scale-95 flex items-center space-x-1.5"
          >
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

      {/* Mobile Drawer Navigation (No green dots) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2.5 w-full bg-[#041A55]/95 backdrop-blur-2xl rounded-3xl border border-white/20 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
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
                        : 'text-white/90 hover:bg-white/10 font-medium'
                    }`}
                  >
                    <span>{item.label}</span>
                  </Link>
                );
              })}

              <div className="pt-2.5 border-t border-white/15">
                <button
                  onClick={handleStartProject}
                  className="w-full py-2.5 rounded-2xl bg-neon-lime text-black font-sans font-bold text-xs tracking-tight flex items-center justify-center space-x-2"
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
