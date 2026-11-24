import React from 'react';
import { ArrowUp, Mail, Phone, MessageSquare, ArrowUpRight, Globe } from 'lucide-react';
import {
  DoodleStar,
  DoodleCorner,
  DoodleHeart,
  DoodleCardBorder,
  DoodleWashiTape,
} from '../Doodles';
import { SlowHighlight } from '../AnimatedText';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Our Work', href: '/work' },
    { label: 'Contact', href: '/contact' },
  ];

  const serviceLinks = [
    { label: 'Web Development', href: '/services' },
    { label: 'App & Custom Software', href: '/services' },
    { label: 'Creative Design & Branding', href: '/services' },
    { label: 'Video & Social Production', href: '/services' },
    { label: 'Digital & Meta Marketing', href: '/services' },
    { label: 'Intelligent Automation', href: '/services' },
  ];

  return (
    <footer className="w-full max-w-[1260px] mx-auto mt-8 sm:mt-12 md:mt-16 mb-6 sm:mb-10 px-2 sm:px-4 select-none relative">
      
      {/* =========================================================================
          SEPARATE STACKED-CARD CONTAINER
          Distinct dark obsidian palette (#070B16), layered card styling,
          proper depth, subtle shadows and rounded corners
         ========================================================================= */}
      <div className="w-full bg-[#070B16] text-white rounded-[36px] sm:rounded-[48px] md:rounded-[56px] p-6 sm:p-8 md:p-10 lg:p-12 border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.5)] relative overflow-hidden">
        
        {/* Hand-Drawn Container Corners */}
        <div className="absolute top-3 left-4 z-20 opacity-70 pointer-events-none">
          <DoodleCorner position="top-left" color="#A8FF00" className="w-8 h-8 sm:w-10 sm:h-10" />
        </div>
        <div className="absolute top-3 right-4 z-20 opacity-70 pointer-events-none">
          <DoodleCorner position="top-right" color="#A8FF00" className="w-8 h-8 sm:w-10 sm:h-10" />
        </div>

        {/* Subtle Tech Grid Accent */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

        {/* =========================================================================
            LAYER 1: TOP CALLOUT CARD (Pre-footer CTA Banner inside container)
           ========================================================================= */}
        <div className="relative z-10 bg-white/[0.04] border border-white/10 rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 md:p-10 mb-8 sm:mb-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-[0_12px_40px_rgba(0,0,0,0.3)] overflow-hidden">
          {/* Hand-Drawn Card Border */}
          <DoodleCardBorder color="#A8FF00" />

          <div className="text-center lg:text-left max-w-xl relative z-10">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-3">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neon-lime/10 border border-neon-lime/20 text-neon-lime text-xs font-bold uppercase tracking-wider">
                <span>Let's Build Together</span>
                <DoodleStar className="w-3 h-3 text-neon-lime" />
              </div>
              <DoodleWashiTape text="OPEN SLOTS: 2" color="#A8FF00" className="hidden sm:inline-flex" />
            </div>
            <h3 className="font-sans font-light text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-snug">
              Have a Project in Mind? Let's Create <SlowHighlight dark>Impact</SlowHighlight>.
            </h3>
            <p className="font-sans font-normal text-xs sm:text-sm text-zinc-400 mt-2">
              From web platforms and custom software to brand systems and scalable Meta ad funnels.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="group px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-neon-lime hover:bg-white text-primary-black font-sans font-bold text-xs sm:text-sm tracking-tight flex items-center space-x-2 shadow-[0_8px_25px_rgba(168,255,0,0.4)] hover:shadow-[0_12px_35px_rgba(255,255,255,0.4)] transition-all duration-300 active:scale-95"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-sans font-semibold text-xs sm:text-sm tracking-tight flex items-center space-x-2 transition-all duration-200 active:scale-95"
            >
              <MessageSquare className="w-4 h-4 text-neon-lime" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>

        {/* =========================================================================
            LAYER 2: MAIN FOOTER CONTENT GRID
           ========================================================================= */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-8 sm:pb-10 border-b border-white/10 text-xs sm:text-sm">
          
          {/* Col 1 (5 cols): Company Brand & Philosophy */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Brand Logo */}
              <div 
                className="flex items-center space-x-2.5 mb-4 cursor-pointer group select-none" 
                onClick={scrollToTop}
              >
                <div className="w-10 h-10 rounded-2xl bg-white text-[#0645D8] flex items-center justify-center font-sans font-bold text-lg shadow-[0_4px_20px_rgba(0,0,0,0.3)] group-hover:scale-105 transition-transform duration-200">
                  N
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center space-x-1.5">
                    <span className="font-sans font-bold text-xl tracking-tight text-white">NEXUS</span>
                  </div>
                  <span className="font-sans font-light text-white/70 text-[10px] tracking-wider uppercase">Digital Agency</span>
                </div>
              </div>

              <p className="text-zinc-400 font-sans font-normal text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
                A creative technology and digital marketing agency providing complete digital solutions to businesses, startups and individuals. We turn vision into scalable digital experiences.
              </p>

              {/* Status Indicator */}
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium font-sans">
                <span>Accepting New Client Projects for Q1 2027</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex items-center space-x-2.5">
              {[
                { href: 'https://github.com/imbhuvanesh/Truetech', label: 'GitHub', svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> },
                { href: 'https://twitter.com', label: 'Twitter', svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
                { href: 'https://linkedin.com', label: 'LinkedIn', svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> },
                { href: 'https://dribbble.com', label: 'Web', svg: <Globe className="w-4 h-4" /> },
              ].map(({ href, label, svg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-neon-lime text-zinc-400 hover:text-black border border-white/10 flex items-center justify-center transition-all duration-200"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 (2 cols): Navigation */}
          <div className="lg:col-span-2">
            <div className="font-sans font-bold text-xs text-white uppercase tracking-wider mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5 text-zinc-400 font-sans text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    onClick={scrollToTop}
                    className="hover:text-neon-lime transition-colors font-medium flex items-center space-x-1"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 (3 cols): Services */}
          <div className="lg:col-span-3">
            <div className="font-sans font-bold text-xs text-white uppercase tracking-wider mb-4">
              Services
            </div>
            <ul className="space-y-2.5 text-zinc-400 font-sans text-xs sm:text-sm">
              {serviceLinks.map((svc) => (
                <li key={svc.label}>
                  <Link
                    to={svc.href}
                    onClick={scrollToTop}
                    className="hover:text-neon-lime transition-colors font-medium"
                  >
                    {svc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 (2 cols): Contact Info */}
          <div className="lg:col-span-2">
            <div className="font-sans font-bold text-xs text-white uppercase tracking-wider mb-4">
              Direct Reach
            </div>
            <ul className="space-y-3 text-zinc-400 font-sans text-xs">
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-neon-lime shrink-0 mt-0.5" />
                <a href="mailto:hello@nexusdigital.agency" className="hover:text-white transition-colors break-all">
                  hello@nexusdigital.agency
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-neon-lime shrink-0" />
                <span className="text-zinc-300 font-medium">+1 (800) 450-NEXUS</span>
              </li>
              <li className="pt-2">
                <div className="text-[11px] text-zinc-400 font-normal">
                  Response Guarantee: <span className="text-neon-lime font-bold">&lt; 2 Hours</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* =========================================================================
            LAYER 3: BOTTOM COPYRIGHT & METADATA BAR
           ========================================================================= */}
        <div className="relative z-10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 font-sans gap-4">
          <div className="flex items-center space-x-2">
            <span>&copy; 2027 NEXUS Digital Agency. Hand-crafted with</span>
            <DoodleHeart color="#A8FF00" className="w-4 h-4 inline-block" />
            <span>for ambitious brands.</span>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/about" className="hover:text-neon-lime transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/about" className="hover:text-neon-lime transition-colors">Terms of Service</Link>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1.5 text-zinc-300 hover:text-neon-lime transition-colors font-semibold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </footer>
  );
};
