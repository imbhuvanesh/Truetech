import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '../components/HeroSection';
import { TabContentToggle } from '../components/agency/TabContentToggle';
import { ServicesSection } from '../components/agency/ServicesSection';
import { ProductsSection } from '../components/agency/ProductsSection';
import { WhyChooseUsSection } from '../components/agency/WhyChooseUsSection';
import { ProcessSection } from '../components/agency/ProcessSection';
import { ContactSection } from '../components/agency/ContactSection';
import confetti from 'canvas-confetti';
import { useNavigate } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#A8FF00', '#0645D8', '#FFFFFF'],
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
          STACKED CONTAINER 1: HERO CONTAINER (ELECTRIC ROYAL BLUE)
         ========================================================================= */}
      <div className="w-full max-w-[1260px] bg-[#0645D8] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] shadow-[0_25px_80px_rgba(4,26,85,0.4)] border border-white/15 my-3 sm:my-4 overflow-hidden relative">
        <HeroSection
          onGetStarted={handleGetStarted}
          onExploreServices={() => navigate('/services')}
        />
      </div>

      {/* =========================================================================
          STACKED CONTAINER 2: COLLABORATION FRAMEWORK (SOFT SLATE)
         ========================================================================= */}
      <div className="w-full max-w-[1260px] bg-[#F2F5FA] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] shadow-[0_20px_60px_-15px_rgba(0,10,40,0.06)] border border-black/[0.05] my-3 sm:my-4 overflow-hidden">
        <TabContentToggle />
      </div>

      {/* =========================================================================
          STACKED CONTAINER 4: CORE DISCIPLINES / SERVICES (CREAMY AVOCADO #DCF4A2)
         ========================================================================= */}
      <div className="w-full max-w-[1260px] bg-[#DCF4A2] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] shadow-[0_20px_60px_-15px_rgba(6,69,216,0.06)] border border-black/[0.05] my-3 sm:my-4 overflow-hidden">
        <ServicesSection onSelectService={handleSelectService} />
      </div>

      {/* =========================================================================
          STACKED CONTAINER 5: PROPRIETARY PRODUCTS & TOOLS (CLEAN WHITE #FAFBFD)
         ========================================================================= */}
      <div className="w-full max-w-[1260px] bg-[#FAFBFD] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] shadow-[0_20px_60px_-15px_rgba(0,10,40,0.06)] border border-black/[0.05] my-3 sm:my-4 overflow-hidden">
        <ProductsSection />
      </div>

      {/* =========================================================================
          STACKED CONTAINER 6: WHY CHOOSE US (COOL LAVENDER SILVER)
         ========================================================================= */}
      <div className="w-full max-w-[1260px] bg-[#F4F7FB] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] shadow-[0_20px_60px_-15px_rgba(0,10,40,0.06)] border border-black/[0.05] my-3 sm:my-4 overflow-hidden">
        <WhyChooseUsSection />
      </div>

      {/* =========================================================================
          STACKED CONTAINER 9: 4-STAGE AGILE PROCESS (WARM PAPER SAND)
         ========================================================================= */}
      <div className="w-full max-w-[1260px] bg-[#FAF9F5] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] shadow-[0_20px_60px_-15px_rgba(0,10,40,0.06)] border border-black/[0.05] my-3 sm:my-4 overflow-hidden">
        <ProcessSection />
      </div>

      {/* =========================================================================
          STACKED CONTAINER 10: CONTACT SECTION (DEEP ROYAL COBALT)
         ========================================================================= */}
      <div className="w-full max-w-[1260px] bg-[#062B88] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] shadow-[0_25px_80px_rgba(4,26,85,0.4)] border border-white/15 my-3 sm:my-4 overflow-hidden">
        <ContactSection preselectedService="Web Development" />
      </div>
    </motion.div>
  );
};
