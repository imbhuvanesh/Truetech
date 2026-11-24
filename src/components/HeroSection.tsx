import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  HeroHashtag,
  TopRightArrow,
  BottomLeftArrow,
  GetStartedBadge,
  DoodleConnectorBracket,
  DoodleStar,
  DoodleSparkle,
  DoodleBurst,
  DoodleCorner,
} from './Doodles';
import { FloatingNFTCard } from './FloatingNFTCard';
import { MaskedHeroWord, SlowHighlight } from './AnimatedText';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted?: () => void;
  onExploreServices?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted, onExploreServices }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full pt-4 sm:pt-6 md:pt-8 pb-8 sm:pb-12 md:pb-14 px-4 sm:px-6 md:px-8 select-none flex flex-col items-center justify-center overflow-visible">
      {/* Decorative Container Hand-Drawn Corners */}
      <div className="absolute top-2 left-3 sm:left-6 z-10 opacity-70">
        <DoodleCorner position="top-left" color="#A8FF00" className="w-8 h-8 sm:w-10 sm:h-10" />
      </div>
      <div className="absolute top-2 right-3 sm:right-6 z-10 opacity-70">
        <DoodleCorner position="top-right" color="#A8FF00" className="w-8 h-8 sm:w-10 sm:h-10" />
      </div>
      
      {/* Centered Hero Composition */}
      <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center">

        {/* Agency Top Category Pill Badge with Lightbulb Accent */}
        <div className="relative mb-3 sm:mb-4 z-20 inline-flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center justify-center space-x-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-sans text-xs sm:text-[13px] font-semibold tracking-wide shadow-sm"
          >
            <span className="uppercase tracking-wider">Creative Technology &amp; Digital Marketing</span>
            <DoodleStar className="w-3.5 h-3.5 text-neon-lime ml-1" />
          </motion.div>

          {/* Hand-Drawn Sparkle Accent */}
          <div className="absolute -right-8 -top-3 hidden sm:block">
            <DoodleSparkle color="#A8FF00" className="w-6 h-6" />
          </div>
        </div>

        {/* Top-Right Hand-Drawn Arrow (Loops toward Elena Vance) */}
        <div className="absolute z-20 pointer-events-none 
          top-[-8px] right-[2%] 
          sm:top-[-12px] sm:right-[6%] 
          md:top-[-15px] md:right-[10%] 
          lg:top-[-18px] lg:right-[14%]"
        >
          <TopRightArrow className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36" />
        </div>

        {/* Floating Profile Card 1: Elena Vance (Design Director) */}
        <div className="absolute z-20 
          top-[4%] right-[-2%] 
          sm:top-[8%] sm:right-[2%] 
          md:top-[12%] md:right-[4%] 
          lg:top-[14%] lg:right-[6%]
          scale-[0.70] sm:scale-80 md:scale-95 lg:scale-100 origin-top-right hidden sm:block"
        >
          <FloatingNFTCard 
            type="designer" 
            name="Elena Vance" 
            role="Design Director"
            points="★ 5.0 • 48+ Reviews" 
            defaultRotate={6} 
            floatDelay={0.3} 
          />
        </div>

        {/* Bottom-Left Hand-Drawn Arrow (Points toward Marcus Chen) */}
        <div className="absolute z-20 pointer-events-none 
          bottom-[12%] left-[2%] 
          sm:bottom-[14%] sm:left-[5%] 
          md:bottom-[15%] md:left-[8%] 
          lg:bottom-[16%] lg:left-[10%]"
        >
          <BottomLeftArrow className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36" />
        </div>

        {/* Floating Profile Card 2: Marcus Chen (Full-Stack Architect) */}
        <div className="absolute z-20 
          bottom-[2%] left-[-2%] 
          sm:bottom-[4%] sm:left-[2%] 
          md:bottom-[6%] md:left-[4%] 
          lg:bottom-[8%] lg:left-[6%]
          scale-[0.70] sm:scale-80 md:scale-95 lg:scale-100 origin-bottom-left hidden sm:block"
        >
          <FloatingNFTCard 
            type="developer" 
            name="Marcus Chen" 
            role="Full-Stack Architect"
            points="100% On-Time Delivery" 
            defaultRotate={-6} 
            floatDelay={0.5} 
          />
        </div>

        {/* Circular Neon Rotating Badge */}
        <motion.div
          initial={{
            opacity: 0,
            scale: shouldReduceMotion ? 1 : 0.6,
            rotate: shouldReduceMotion ? 0 : -20,
            y: shouldReduceMotion ? 0 : 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: 0,
          }}
          transition={{
            duration: shouldReduceMotion ? 0.01 : 0.85,
            delay: shouldReduceMotion ? 0 : 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute z-20 
            bottom-[-16px] right-[2%] 
            sm:bottom-[-8px] sm:right-[4%] 
            md:bottom-[4px] md:right-[6%] 
            lg:bottom-[10px] lg:right-[8%]"
        >
          <GetStartedBadge 
            onClick={onGetStarted}
            className="w-20 h-20 sm:w-26 sm:h-26 md:w-32 md:h-32 lg:w-38 lg:h-38" 
          />
        </motion.div>

        {/* =========================================================================
            THE SINGLE BIG "WE" TYPOGRAPHY LOCKUP
            One large, bold "WE" visually connecting all three words: "BUILD", "CREATE", "GROW"
           ========================================================================= */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 tracking-tight uppercase text-white my-3 sm:my-5 md:my-7">
          
          {/* Left: Giant "WE" */}
          <div className="relative flex items-center justify-center">
            {/* Hand-Drawn Neon Hashtag Doodle */}
            <div className="absolute -left-8 sm:-left-14 md:-left-20 lg:-left-24 -top-6 sm:-top-8 md:-top-10 pointer-events-none">
              <HeroHashtag className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40" />
            </div>

            <motion.span
              initial={{ scale: shouldReduceMotion ? 1 : 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="text-[82px] sm:text-[120px] md:text-[150px] lg:text-[185px] xl:text-[210px] font-extrabold tracking-tighter leading-none text-white drop-shadow-[0_12px_36px_rgba(0,10,50,0.35)] select-none"
            >
              WE
            </motion.span>
          </div>

          {/* Middle: Doodle Connector Bracket linking WE to BUILD / CREATE / GROW */}
          <div className="hidden md:flex items-center justify-center shrink-0">
            <DoodleConnectorBracket className="w-8 lg:w-11 h-36 md:h-44 lg:h-52" />
          </div>

          {/* Right: Stacked Column with BUILD., CREATE., GROW. */}
          <div className="flex flex-col items-center md:items-start justify-center leading-[0.88] text-[44px] sm:text-[64px] md:text-[80px] lg:text-[98px] xl:text-[112px] tracking-tight">
            
            {/* Word 1: BUILD. */}
            <div className="text-white font-bold">
              <MaskedHeroWord text="BUILD." delay={0.15} />
            </div>

            {/* Word 2: CREATE. */}
            <div className="text-white/95 font-bold mt-1 md:mt-2">
              <MaskedHeroWord text="CREATE." delay={0.3} />
            </div>

            {/* Word 3: GROW. (Neon Lime Accent) */}
            <div className="relative text-neon-lime font-extrabold mt-1 md:mt-2 flex items-center">
              <MaskedHeroWord text="GROW." delay={0.45} />
              <div className="absolute -right-10 -top-4 hidden sm:block pointer-events-none">
                <DoodleBurst color="#A8FF00" className="w-9 h-9 opacity-85" />
              </div>
            </div>

          </div>

        </div>

        {/* Agency Description Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative z-20 mt-4 sm:mt-6 max-w-xl text-center text-white/90 font-sans font-normal text-xs sm:text-sm md:text-base leading-relaxed px-4"
        >
          Your ideas deserve more than just an online presence. We turn them into powerful digital experiences through <SlowHighlight dark>technology</SlowHighlight>, <SlowHighlight dark>creativity</SlowHighlight> and <SlowHighlight dark>smart marketing</SlowHighlight>.
        </motion.p>

        {/* Hero Action CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative z-20 mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <button
            onClick={onGetStarted}
            className="group px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-neon-lime text-primary-black font-sans font-bold text-xs sm:text-sm tracking-tight flex items-center space-x-2 shadow-[0_8px_25px_rgba(168,255,0,0.4)] hover:shadow-[0_12px_35px_rgba(168,255,0,0.6)] hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            onClick={onExploreServices}
            className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 font-sans font-semibold text-xs sm:text-sm tracking-tight flex items-center space-x-2 backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-neon-lime" />
            <span>Explore Services</span>
          </button>
        </motion.div>

      </div>

    </section>
  );
};
