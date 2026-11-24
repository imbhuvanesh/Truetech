import React from 'react';
import { motion } from 'framer-motion';
import { ServicesSection } from '../components/agency/ServicesSection';
import { ProcessSection } from '../components/agency/ProcessSection';
import { WhyChooseUsSection } from '../components/agency/WhyChooseUsSection';
import { DoodleStar, DoodleUnderline } from '../components/Doodles';
import { MaskedLineReveal, FadeUpParagraph } from '../components/AnimatedText';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ServicesPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectService = (_serviceName: string) => {
    navigate('/contact');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="w-full flex flex-col items-center"
    >
      {/* =========================================================================
          PAGE HERO BANNER: DEDICATED SERVICES HEADER (ROYAL BLUE STACKED CARD)
         ========================================================================= */}
      <div className="w-full max-w-[1260px] bg-[#0645D8] hero-grid rounded-[36px] sm:rounded-[48px] md:rounded-[56px] p-6 sm:p-10 md:p-12 text-white text-center shadow-[0_25px_80px_rgba(4,26,85,0.4)] border border-white/15 my-2 sm:my-3 relative overflow-hidden">
        
        {/* Ambient Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-neon-lime text-xs font-bold uppercase tracking-wider mb-4">
          <span>Complete Digital Capabilities</span>
          <DoodleStar className="w-3.5 h-3.5 text-neon-lime" />
        </div>

        <MaskedLineReveal
          lines={["OUR CORE DISCIPLINES", "& DIGITAL SERVICES."]}
          className="font-sans text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl mx-auto"
          delay={0.1}
        />

        <div className="max-w-2xl mx-auto mt-4">
          <FadeUpParagraph
            className="text-white/85 text-sm sm:text-base md:text-lg leading-relaxed font-normal"
            delay={0.25}
          >
            We provide full-lifecycle digital capabilities across engineering, product design, brand identity, social video production, growth marketing, and intelligent workflow automation.
          </FadeUpParagraph>
          <DoodleUnderline className="w-56 h-4 text-neon-lime mx-auto mt-3" />
        </div>

        {/* 6 Disciplines Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-sans font-semibold">
          {[
            'Web Development',
            'App & Custom Software',
            'Creative Design & Branding',
            'Video & Social Production',
            'Digital Marketing & Meta Ads',
            'Intelligent Automation',
          ].map((item) => (
            <div key={item} className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white flex items-center space-x-1.5">
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main 6 Service Categories Container (Creamy Avocado #DCF4A2 Stacked Card) */}
      <div className="w-full max-w-[1260px] bg-[#DCF4A2] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] shadow-[0_20px_60px_-15px_rgba(6,69,216,0.06)] border border-black/[0.05] my-2 sm:my-3 overflow-hidden">
        <ServicesSection onSelectService={handleSelectService} />
      </div>

      {/* 4-Stage Agile Delivery Process */}
      <div className="w-full max-w-[1260px] bg-[#FAF9F5] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] shadow-[0_20px_60px_-15px_rgba(0,10,40,0.06)] border border-black/[0.05] my-2 sm:my-3 overflow-hidden">
        <ProcessSection />
      </div>

      {/* Why Choose Us */}
      <div className="w-full max-w-[1260px] bg-[#F4F7FB] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] shadow-[0_20px_60px_-15px_rgba(0,10,40,0.06)] border border-black/[0.05] my-2 sm:my-3 overflow-hidden">
        <WhyChooseUsSection />
      </div>

      {/* Bottom Conversion Callout */}
      <div className="w-full max-w-[1260px] bg-[#062B88] rounded-[36px] sm:rounded-[48px] p-8 sm:p-12 text-white text-center shadow-[0_25px_80px_rgba(4,26,85,0.4)] border border-white/15 my-2 sm:my-3">
        <h3 className="font-sans font-bold text-2xl sm:text-4xl text-white mb-3">
          Need a Custom Solution for Your Brand?
        </h3>
        <p className="text-white/85 text-sm sm:text-base max-w-xl mx-auto mb-6">
          Schedule a discovery call with our team. We'll audit your digital ecosystem and outline a custom roadmap.
        </p>
        <button
          onClick={() => navigate('/contact')}
          className="px-7 py-3.5 rounded-full bg-neon-lime text-primary-black font-sans font-bold text-sm tracking-tight inline-flex items-center space-x-2 shadow-lg hover:bg-white transition-colors"
        >
          <span>Request Custom Proposal</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};
