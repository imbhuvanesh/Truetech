import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '../components/HeroSection';
import { TabContentToggle } from '../components/agency/TabContentToggle';
import { ServicesSection } from '../components/agency/ServicesSection';
import { ProductsSection } from '../components/agency/ProductsSection';
import { WhyChooseUsSection } from '../components/agency/WhyChooseUsSection';
import { ProcessSection } from '../components/agency/ProcessSection';
import { ContactSection } from '../components/agency/ContactSection';
import { ScrollMaskReveal } from '../components/ScrollMaskReveal';
import confetti from 'canvas-confetti';
import { useNavigate } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#DFEF87', '#05472A', '#FFFFFF'],
    });
    navigate('/contact');
  };

  const handleSelectService = (_serviceName: string) => {
    navigate('/contact');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="w-full flex flex-col items-center"
    >
      {/* =========================================================================
          STACKED CONTAINER 1: HERO CONTAINER (EVERGREEN #05472A)
         ========================================================================= */}
      <ScrollMaskReveal
        id="home"
        delay={0.05}
        duration={1.0}
        threshold={0.1}
        className="w-full max-w-[1260px] bg-[#05472A] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] shadow-[0_25px_80px_rgba(5,71,42,0.3)] border border-white/15 my-3 sm:my-4 overflow-hidden relative"
      >
        <HeroSection
          onGetStarted={handleGetStarted}
          onExploreServices={() => navigate('/services')}
        />
      </ScrollMaskReveal>

      {/* =========================================================================
          STACKED CONTAINER 2: COLLABORATION FRAMEWORK (LIME BLUE #40FFA7)
         ========================================================================= */}
      <ScrollMaskReveal
        id="framework"
        threshold={0.15}
        duration={1.05}
        className="w-full max-w-[1260px] bg-[#40FFA7] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] shadow-[0_20px_60px_-15px_rgba(64,255,167,0.3)] border border-[#050761]/[0.12] my-3 sm:my-4 overflow-hidden"
      >
        <TabContentToggle />
      </ScrollMaskReveal>

      {/* =========================================================================
          STACKED CONTAINER 4: CORE DISCIPLINES / SERVICES (SUNNY LIME #DFEF87)
         ========================================================================= */}
      <ScrollMaskReveal
        id="services"
        threshold={0.15}
        duration={1.05}
        className="w-full max-w-[1260px] bg-[#DFEF87] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] shadow-[0_20px_60px_-15px_rgba(5,71,42,0.1)] border border-[#05472A]/[0.12] my-3 sm:my-4 overflow-hidden"
      >
        <ServicesSection onSelectService={handleSelectService} />
      </ScrollMaskReveal>

      {/* =========================================================================
          STACKED CONTAINER 5: PROPRIETARY PRODUCTS & TOOLS (LIME BLUE #40FFA7)
         ========================================================================= */}
      <ScrollMaskReveal
        id="products"
        threshold={0.15}
        duration={1.05}
        className="w-full max-w-[1260px] bg-[#40FFA7] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] shadow-[0_20px_60px_-15px_rgba(64,255,167,0.3)] border border-[#050761]/[0.12] my-3 sm:my-4 overflow-hidden"
      >
        <ProductsSection />
      </ScrollMaskReveal>

      {/* =========================================================================
          STACKED CONTAINER 6: WHY CHOOSE US (EVERGREEN #05472A)
         ========================================================================= */}
      <ScrollMaskReveal
        threshold={0.15}
        duration={1.05}
        className="w-full max-w-[1260px] bg-[#05472A] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] shadow-[0_25px_80px_rgba(5,71,42,0.3)] border border-white/15 my-3 sm:my-4 overflow-hidden"
      >
        <WhyChooseUsSection />
      </ScrollMaskReveal>

      {/* =========================================================================
          STACKED CONTAINER 9: 4-STAGE AGILE PROCESS (LIME BLUE #40FFA7)
         ========================================================================= */}
      <ScrollMaskReveal
        id="process"
        threshold={0.15}
        duration={1.05}
        className="w-full max-w-[1260px] bg-[#40FFA7] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] shadow-[0_20px_60px_-15px_rgba(64,255,167,0.3)] border border-[#050761]/[0.12] my-3 sm:my-4 overflow-hidden"
      >
        <ProcessSection />
      </ScrollMaskReveal>

      {/* =========================================================================
          STACKED CONTAINER 10: CONTACT SECTION (EVERGREEN #05472A)
         ========================================================================= */}
      <ScrollMaskReveal
        id="contact"
        threshold={0.15}
        duration={1.05}
        className="w-full max-w-[1260px] bg-[#05472A] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] shadow-[0_25px_80px_rgba(5,71,42,0.3)] border border-white/15 my-3 sm:my-4 overflow-hidden"
      >
        <ContactSection preselectedService="Web Development" />
      </ScrollMaskReveal>
    </motion.div>
  );
};
