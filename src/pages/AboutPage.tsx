import React from 'react';
import { motion } from 'framer-motion';
import { AboutSection } from '../components/agency/AboutSection';
import { TabContentToggle } from '../components/agency/TabContentToggle';
import { WhyChooseUsSection } from '../components/agency/WhyChooseUsSection';
import { ProcessSection } from '../components/agency/ProcessSection';
import { DoodleStar, DoodleUnderline, DoodleCorner } from '../components/Doodles';
import { MaskedLineReveal, FadeUpParagraph } from '../components/AnimatedText';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="w-full flex flex-col items-center"
    >
      {/* =========================================================================
          PAGE HERO BANNER: DEDICATED ABOUT HEADER (EVERGREEN STACKED CARD)
         ========================================================================= */}
      <div className="w-full max-w-[1260px] bg-[#05472A] hero-grid rounded-[36px] sm:rounded-[48px] md:rounded-[56px] p-6 sm:p-10 md:p-12 text-white text-center shadow-[0_25px_80px_rgba(5,71,42,0.3)] border border-white/15 my-2 sm:my-3 relative overflow-hidden">
        {/* Hand-Drawn Container Corners */}
        <div className="absolute top-3 left-4 z-20 opacity-70 pointer-events-none">
          <DoodleCorner position="top-left" color="#DFEF87" className="w-8 h-8 sm:w-10 sm:h-10" />
        </div>
        <div className="absolute top-3 right-4 z-20 opacity-70 pointer-events-none">
          <DoodleCorner position="top-right" color="#DFEF87" className="w-8 h-8 sm:w-10 sm:h-10" />
        </div>

        {/* Ambient Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#DFEF87] text-xs font-bold uppercase tracking-wider mb-4">
          <span>Our Story &amp; Agency Philosophy</span>
          <DoodleStar className="w-3.5 h-3.5 text-[#DFEF87]" />
        </div>

        <MaskedLineReveal
          lines={["WE COMBINE TECHNOLOGY,", "CREATIVITY & MARKETING."]}
          className="font-sans text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl mx-auto"
          delay={0.1}
        />

        <div className="max-w-2xl mx-auto mt-4">
          <FadeUpParagraph
            className="text-white/85 text-sm sm:text-base md:text-lg leading-relaxed font-normal"
            delay={0.25}
          >
            We are a creative technology and digital marketing agency providing complete digital solutions to businesses, startups and individuals. Our goal is to help brands establish their online presence, improve their digital identity and grow their business.
          </FadeUpParagraph>
          <DoodleUnderline className="w-64 h-4 text-[#DFEF87] mx-auto mt-3" />
        </div>

        {/* Quick Highlights Row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-sans font-semibold">
          <div className="px-4 py-2 rounded-full bg-white/10 border border-white/15 flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-[#DFEF87]" />
            <span>100% Custom Architecture</span>
          </div>
          <div className="px-4 py-2 rounded-full bg-white/10 border border-white/15 flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-[#DFEF87]" />
            <span>Direct Partner Access</span>
          </div>
          <div className="px-4 py-2 rounded-full bg-white/10 border border-white/15 flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-[#DFEF87]" />
            <span>Fast 2-Hour Response Time</span>
          </div>
        </div>
      </div>

      {/* Main Narrative & Values Container (Sunny Lime #DFEF87) */}
      <div className="w-full max-w-[1260px] bg-[#DFEF87] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] shadow-[0_20px_60px_-15px_rgba(5,71,42,0.08)] border border-[#05472A]/[0.12] my-2 sm:my-3 overflow-hidden">
        <AboutSection onExploreServices={() => navigate('/services')} />
      </div>

      {/* Collaboration Framework (GSAP Tab Content Toggle) */}
      <div className="w-full max-w-[1260px] bg-[#FFFFFF] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] shadow-[0_20px_60px_-15px_rgba(5,71,42,0.06)] border border-[#05472A]/[0.08] my-2 sm:my-3 overflow-hidden">
        <TabContentToggle />
      </div>

      {/* Why Choose Us (5 Pillars) */}
      <div className="w-full max-w-[1260px] bg-[#05472A] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] shadow-[0_25px_80px_rgba(5,71,42,0.3)] border border-white/15 my-2 sm:my-3 overflow-hidden">
        <WhyChooseUsSection />
      </div>

      {/* 4-Stage Agile Delivery Process */}
      <div className="w-full max-w-[1260px] bg-[#FFFFFF] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] shadow-[0_20px_60px_-15px_rgba(5,71,42,0.06)] border border-[#05472A]/[0.08] my-2 sm:my-3 overflow-hidden">
        <ProcessSection />
      </div>

      {/* Bottom Conversion Callout */}
      <div className="w-full max-w-[1260px] bg-[#05472A] rounded-[36px] sm:rounded-[48px] p-8 sm:p-12 text-white text-center shadow-[0_25px_80px_rgba(5,71,42,0.3)] border border-white/15 my-2 sm:my-3">
        <h3 className="font-sans font-bold text-2xl sm:text-4xl text-white mb-3">
          Ready to Work with a Strategic Partner?
        </h3>
        <p className="text-white/85 text-sm sm:text-base max-w-xl mx-auto mb-6">
          Let's discuss how our multidisciplinary team can design, engineer, and scale your brand.
        </p>
        <button
          onClick={() => navigate('/contact')}
          className="px-7 py-3.5 rounded-full bg-[#DFEF87] text-[#05472A] font-sans font-bold text-sm tracking-tight inline-flex items-center space-x-2 shadow-lg hover:bg-white transition-colors cursor-pointer"
        >
          <span>Start a Conversation</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};
