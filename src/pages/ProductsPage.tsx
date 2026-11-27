import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ProductsSection } from '../components/agency/ProductsSection';
import { DoodleStar, DoodleUnderline, DoodleCorner, DoodleSparkle } from '../components/Doodles';
import { MaskedLineReveal, FadeUpParagraph } from '../components/AnimatedText';
import { ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';

export const ProductsPage: React.FC = () => {
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
          PAGE HERO BANNER: DEDICATED PRODUCTS HEADER (EVERGREEN STACKED CARD)
         ========================================================================= */}
      <div className="w-full max-w-[1260px] bg-[#05472A] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] p-6 sm:p-10 md:p-14 text-white text-center shadow-[0_25px_80px_rgba(5,71,42,0.3)] border border-white/15 my-2 sm:my-3 relative overflow-hidden">
        {/* Hand-Drawn Container Corners */}
        <div className="absolute top-3 left-4 z-20 opacity-70 pointer-events-none">
          <DoodleCorner position="top-left" color="#DFEF87" className="w-8 h-8 sm:w-10 sm:h-10" />
        </div>
        <div className="absolute top-3 right-4 z-20 opacity-70 pointer-events-none">
          <DoodleCorner position="top-right" color="#DFEF87" className="w-8 h-8 sm:w-10 sm:h-10" />
        </div>

        {/* Ambient Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#DFEF87] text-xs font-bold uppercase tracking-wider mb-4">
          <span>Production-Grade Accelerators</span>
          <DoodleStar className="w-3.5 h-3.5 text-[#DFEF87]" />
        </div>

        <MaskedLineReveal
          lines={["PROPRIETARY DIGITAL TOOLS", "& ACCELERATION PACKAGES."]}
          className="font-sans text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl mx-auto"
          delay={0.1}
        />

        <div className="max-w-2xl mx-auto mt-4">
          <FadeUpParagraph
            className="text-white/85 text-sm sm:text-base md:text-lg leading-relaxed font-normal"
            delay={0.25}
          >
            Pre-built frameworks, automation engines, and production-tested toolkits engineered to accelerate your launch, cut development cycles by 70%, and scale without friction.
          </FadeUpParagraph>
          <DoodleUnderline className="w-56 h-4 text-[#DFEF87] mx-auto mt-3" />
        </div>

        {/* Highlights Row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-white/90">
          <div className="flex items-center space-x-1.5 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
            <Zap className="w-3.5 h-3.5 text-[#DFEF87]" />
            <span>Rapid 7-Day Deployment</span>
          </div>
          <div className="flex items-center space-x-1.5 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-[#DFEF87]" />
            <span>Commercial-Ready Codebase</span>
          </div>
          <div className="flex items-center space-x-1.5 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
            <DoodleSparkle color="#DFEF87" className="w-3.5 h-3.5" />
            <span>Full Developer Handoff</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          STACKED CONTAINER 2: PRODUCTS SHOWCASE GRID (LIME BLUE #40FFA7)
         ========================================================================= */}
      <div className="w-full max-w-[1260px] bg-[#40FFA7] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] shadow-[0_20px_60px_-15px_rgba(64,255,167,0.3)] border border-[#050761]/[0.12] my-2 sm:my-3 overflow-hidden">
        <ProductsSection />
      </div>

      {/* =========================================================================
          STACKED CONTAINER 3: CUSTOM REQUIREMENTS CTA
         ========================================================================= */}
      <div className="w-full max-w-[1260px] bg-[#05472A] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] p-8 sm:p-10 md:p-12 text-white shadow-[0_20px_60px_-15px_rgba(5,71,42,0.3)] border border-white/15 my-2 sm:my-3 relative overflow-hidden text-center flex flex-col items-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#DFEF87] text-xs font-bold uppercase tracking-wider mb-3">
          <span>Need Something Custom?</span>
        </div>
        <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white max-w-xl">
          We engineer bespoke digital solutions tailored to your unique requirements.
        </h2>
        <p className="text-white/85 text-sm sm:text-base max-w-lg mt-3">
          From custom SaaS platforms and ERP automation to bespoke mobile apps, our team brings enterprise engineering directly to your business.
        </p>
        <button
          onClick={() => navigate('/contact')}
          className="mt-6 bg-[#DFEF87] text-[#05472A] hover:bg-white px-8 py-3.5 rounded-full text-sm font-bold tracking-tight transition-all duration-300 shadow-md flex items-center space-x-2 group cursor-pointer"
        >
          <span>Discuss Custom Architecture</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </motion.div>
  );
};
