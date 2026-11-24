import React from 'react';
import { motion } from 'framer-motion';
import { ContactSection } from '../components/agency/ContactSection';
import { DoodleStar, DoodleUnderline, DoodleCorner } from '../components/Doodles';
import { MaskedLineReveal, FadeUpParagraph } from '../components/AnimatedText';
import { MessageSquare, Mail, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="w-full flex flex-col items-center"
    >
      {/* =========================================================================
          PAGE HERO BANNER: DEDICATED CONTACT HEADER (ROYAL BLUE STACKED CARD)
         ========================================================================= */}
      <div className="w-full max-w-[1260px] bg-[#0645D8] hero-grid rounded-[36px] sm:rounded-[48px] md:rounded-[56px] p-6 sm:p-10 md:p-12 text-white text-center shadow-[0_25px_80px_rgba(4,26,85,0.4)] border border-white/15 my-2 sm:my-3 relative overflow-hidden">
        {/* Hand-Drawn Container Corners */}
        <div className="absolute top-3 left-4 z-20 opacity-70 pointer-events-none">
          <DoodleCorner position="top-left" color="#A8FF00" className="w-8 h-8 sm:w-10 sm:h-10" />
        </div>
        <div className="absolute top-3 right-4 z-20 opacity-70 pointer-events-none">
          <DoodleCorner position="top-right" color="#A8FF00" className="w-8 h-8 sm:w-10 sm:h-10" />
        </div>
        
        {/* Ambient Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-neon-lime text-xs font-bold uppercase tracking-wider mb-4">
          <span>Direct Partner Access</span>
          <DoodleStar className="w-3.5 h-3.5 text-neon-lime" />
        </div>

        <MaskedLineReveal
          lines={["HAVE A PROJECT IN MIND?", "LET'S BUILD SOMETHING EXTRAORDINARY."]}
          className="font-sans text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl mx-auto"
          delay={0.1}
        />

        <div className="max-w-2xl mx-auto mt-4">
          <FadeUpParagraph
            className="text-white/85 text-sm sm:text-base md:text-lg leading-relaxed font-normal"
            delay={0.25}
          >
            Tell us about your project vision, timeline, and goals. Our senior partners respond within 2 hours with a comprehensive audit and project scope.
          </FadeUpParagraph>
          <DoodleUnderline className="w-56 h-4 text-neon-lime mx-auto mt-3" />
        </div>

        {/* 3 Direct Reach Pillars */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-left">
          <a
            href="https://wa.me/15551234567?text=Hello%20Nexus%20Studio%2C%20I%20have%20a%20project%20in%20mind!"
            target="_blank"
            rel="noreferrer"
            className="bg-white/10 hover:bg-white/20 border border-white/15 rounded-2xl p-4 flex items-center space-x-3 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-white/70 uppercase">Direct WhatsApp</div>
              <div className="text-sm font-bold text-white">Instant Chat</div>
            </div>
          </a>

          <a
            href="mailto:hello@nexusdigital.agency"
            className="bg-white/10 hover:bg-white/20 border border-white/15 rounded-2xl p-4 flex items-center space-x-3 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-neon-lime text-black flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-white/70 uppercase">Email Directly</div>
              <div className="text-sm font-bold text-white">hello@nexusdigital.agency</div>
            </div>
          </a>

          <div className="bg-white/10 border border-white/15 rounded-2xl p-4 flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-neon-lime" />
            </div>
            <div>
              <div className="text-[11px] text-white/70 uppercase">Response Time</div>
              <div className="text-sm font-bold text-neon-lime">&lt; 2 Hours</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Contact Form Container (Deep Royal Cobalt Stacked Card) */}
      <div className="w-full max-w-[1260px] bg-[#062B88] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] shadow-[0_25px_80px_rgba(4,26,85,0.4)] border border-white/15 my-2 sm:my-3 overflow-hidden">
        <ContactSection preselectedService="Web Development" />
      </div>

      {/* Trust & Guarantee Box (Creamy Avocado #DCF4A2) */}
      <div className="w-full max-w-[1260px] bg-[#DCF4A2] rounded-[36px] sm:rounded-[48px] p-8 sm:p-10 border border-black/[0.05] shadow-[0_12px_40px_rgba(0,0,0,0.04)] my-2 sm:my-3">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-start space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-royal-blue/10 text-royal-blue flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-black text-sm">NDAs &amp; IP Protection</h4>
              <p className="text-zinc-600 text-xs mt-1">Full intellectual property transfer upon delivery. Strict confidentiality guaranteed.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-royal-blue/10 text-royal-blue flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-black text-sm">Milestone-Based Billing</h4>
              <p className="text-zinc-600 text-xs mt-1">Transparent sprint budgets and milestone-based approvals. No unexpected invoices.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-royal-blue/10 text-royal-blue flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-black text-sm">Dedicated Team Delivery</h4>
              <p className="text-zinc-600 text-xs mt-1">Dedicated senior designer, full-stack engineer, and product manager per project.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
