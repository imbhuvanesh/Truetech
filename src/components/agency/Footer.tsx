import React from 'react';
import { ArrowUp, Mail, Phone, MessageSquare, Globe, Share2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'About Us', href: '#about' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Our Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  const serviceLinks = [
    'Web Development',
    'App & Software',
    'Creative Design',
    'Video Production',
    'Digital Marketing',
    'Automation Solutions'
  ];

  return (
    <footer className="w-full bg-[#FAFAFB] text-zinc-800 pt-16 sm:pt-20 pb-12 px-4 sm:px-8 border-t border-black/[0.06]">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Tier: Logo, Description & Back to Top */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-12 border-b border-black/[0.06] gap-6">
          <div className="max-w-md">
            <div className="flex items-center space-x-2.5 mb-3 cursor-pointer" onClick={scrollToTop}>
              <div className="w-9 h-9 rounded-2xl bg-royal-blue text-white flex items-center justify-center font-sans font-bold text-base shadow-sm">
                N
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="font-sans font-bold text-xl tracking-tight text-black">
                  NEXUS
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-neon-lime" />
                <span className="font-sans font-light text-zinc-500 text-xs tracking-wider uppercase ml-1">Studio</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal font-sans">
              A creative technology and digital marketing agency providing complete digital solutions to businesses, startups and individuals. We build digital experiences, create powerful brands and help businesses grow.
            </p>
          </div>

          <div>
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center space-x-2 bg-white hover:bg-royal-blue text-zinc-700 hover:text-white px-5 py-2.5 rounded-full text-xs font-bold font-sans transition-all duration-300 shadow-sm border border-black/[0.04]"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Middle Tier: Grid of Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-black/[0.06] text-xs">
          
          {/* Col 1: Navigation */}
          <div>
            <div className="font-sans font-bold text-xs text-black uppercase tracking-wider mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5 text-zinc-600 font-sans">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-royal-blue transition-colors font-medium">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Services */}
          <div>
            <div className="font-sans font-bold text-xs text-black uppercase tracking-wider mb-4">
              Services
            </div>
            <ul className="space-y-2.5 text-zinc-600 font-sans">
              {serviceLinks.map((svc) => (
                <li key={svc}>
                  <a href="#services" className="hover:text-royal-blue transition-colors font-medium">
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div>
            <div className="font-sans font-bold text-xs text-black uppercase tracking-wider mb-4">
              Contact
            </div>
            <ul className="space-y-3 text-zinc-600 font-sans">
              <li className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-royal-blue" />
                <a href="mailto:hello@nexusstudio.agency" className="hover:text-royal-blue transition-colors">
                  hello@nexusstudio.agency
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer" className="hover:text-emerald-700 transition-colors font-medium">
                  WhatsApp Direct
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-royal-blue" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="text-[11px] text-zinc-400 pt-1">
                Mon - Fri • 9:00 AM - 6:00 PM EST
              </li>
            </ul>
          </div>

          {/* Col 4: Agency Pillars & Social */}
          <div>
            <div className="font-sans font-bold text-xs text-black uppercase tracking-wider mb-4">
              Connect
            </div>
            <p className="text-zinc-600 text-xs mb-4 leading-relaxed font-sans">
              Follow our engineering logs, creative design showcases, and growth frameworks.
            </p>
            <div className="flex items-center space-x-2.5">
              <a href="#" className="w-8 h-8 rounded-full bg-white hover:bg-royal-blue hover:text-white text-zinc-700 flex items-center justify-center transition-all border border-black/[0.04] shadow-xs" title="Global Network">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white hover:bg-royal-blue hover:text-white text-zinc-700 flex items-center justify-center transition-all border border-black/[0.04] shadow-xs" title="Social Channels">
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 gap-3 font-sans">
          <div>
            © 2026 Nexus Studio Inc. All rights reserved. Creative Technology & Marketing Agency.
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            <span>•</span>
            <span className="text-royal-blue font-bold">100% Quality Guaranteed</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
