import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { HeroHashtag, TopRightArrow, BottomLeftArrow, GetStartedBadge } from './Doodles';
import { FloatingNFTCard } from './FloatingNFTCard';
import { MaskedHeroWord } from './AnimatedText';

interface HeroSectionProps {
  onGetStarted?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full pt-10 sm:pt-14 md:pt-16 pb-16 sm:pb-24 md:pb-28 px-4 sm:px-8 select-none flex flex-col items-center justify-center overflow-visible">
      
      {/* Centered Composition Container */}
      <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center">

        {/* Agency Top Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-3 sm:mb-5 z-20 inline-flex items-center justify-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-inter text-[10.5px] sm:text-xs md:text-[13px] font-semibold tracking-wide shadow-sm max-w-[92vw]"
        >
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-neon-lime animate-pulse shrink-0" />
          <span className="text-center">CREATIVE TECHNOLOGY &amp; DIGITAL MARKETING AGENCY</span>
        </motion.div>

        {/* =========================================================================
            TOP-RIGHT NEON DOODLE ARROW (Looping down toward pearl.eth)
           ========================================================================= */}
        <div className="absolute z-20 pointer-events-none 
          top-[-10px] right-[4%] 
          sm:top-[-15px] sm:right-[8%] 
          md:top-[-20px] md:right-[14%] 
          lg:top-[-25px] lg:right-[18%]"
        >
          <TopRightArrow className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40" />
        </div>

        {/* =========================================================================
            FLOATING CARD 1: Elena Vance (Design Lead - Agency Floating Card)
            Positioned over the upper-right of HERO
           ========================================================================= */}
        <div className="absolute z-20 
          top-[13%] right-[1%] 
          sm:top-[15%] sm:right-[6%] 
          md:top-[18%] md:right-[10%] 
          lg:top-[20%] lg:right-[15%]
          scale-[0.76] sm:scale-90 md:scale-100 origin-top-right"
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

        {/* =========================================================================
            BOTTOM-LEFT NEON DOODLE ARROW (Curving up-right toward Marcus Chen)
           ========================================================================= */}
        <div className="absolute z-20 pointer-events-none 
          bottom-[14%] left-[1%] 
          sm:bottom-[15%] sm:left-[5%] 
          md:bottom-[16%] md:left-[8%] 
          lg:bottom-[18%] lg:left-[12%]"
        >
          <BottomLeftArrow className="w-16 h-16 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40" />
        </div>

        {/* =========================================================================
            FLOATING CARD 2: Marcus Chen (Tech Lead - Agency Floating Card)
            Positioned over the lower-left of HERO
           ========================================================================= */}
        <div className="absolute z-20 
          bottom-[1%] left-[1%] 
          sm:bottom-[3%] sm:left-[6%] 
          md:bottom-[6%] md:left-[10%] 
          lg:bottom-[8%] lg:left-[16%]
          scale-[0.76] sm:scale-90 md:scale-100 origin-bottom-left"
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

        {/* =========================================================================
            CIRCULAR NEON STICKER (GET STARTED / EXPLORE SERVICES - Rotating Badge)
            Positioned at the bottom-right of HERO
           ========================================================================= */}
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
            bottom-[-10px] right-[2%] 
            sm:bottom-[0px] sm:right-[4%] 
            md:bottom-[10px] md:right-[8%] 
            lg:bottom-[16px] lg:right-[12%]"
        >
          <GetStartedBadge 
            onClick={onGetStarted}
            className="w-22 h-22 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-42 lg:h-42" 
          />
        </motion.div>

        {/* =========================================================================
            THE MASSIVE HEADLINE (OpenAI Sans inspired typography in DM Sans)
            Light (300) for "WE", Bold (700) for "BUILD / CREATE / GROW"
           ========================================================================= */}
        <div className="relative z-10 flex flex-col items-center justify-center font-sans tracking-tight uppercase leading-[0.9] text-white">
          
          {/* LINE 1: # WE BUILD */}
          <div className="relative flex items-center justify-center">
            {/* Hand-Drawn Neon Lime Green Hashtag # */}
            <div className="absolute -left-12 sm:-left-24 md:-left-36 lg:-left-44 -top-3 sm:-top-6 md:-top-10">
              <HeroHashtag className="w-16 h-16 sm:w-32 sm:h-32 md:w-44 md:h-44 lg:w-50 lg:h-50" />
            </div>

            {/* Headline with Light (300) + Bold (700) */}
            <h1 className="text-[52px] sm:text-[100px] md:text-[140px] lg:text-[170px] xl:text-[190px] font-light tracking-tight text-white drop-shadow-[0_8px_30px_rgba(0,10,50,0.4)]">
              WE <span className="font-bold"><MaskedHeroWord text="BUILD." delay={0.15} /></span>
            </h1>
          </div>

          {/* LINE 2: WE CREATE */}
          <div className="text-[52px] sm:text-[100px] md:text-[140px] lg:text-[170px] xl:text-[190px] font-light tracking-tight text-white drop-shadow-[0_8px_30px_rgba(0,10,50,0.4)] mt-[-4px] sm:mt-[-10px] md:mt-[-16px]">
            WE <span className="font-bold text-white/95"><MaskedHeroWord text="CREATE." delay={0.3} /></span>
          </div>

          {/* LINE 3: WE GROW */}
          <div className="text-[52px] sm:text-[100px] md:text-[140px] lg:text-[170px] xl:text-[190px] font-light tracking-tight text-white drop-shadow-[0_8px_30px_rgba(0,10,50,0.4)] mt-[-4px] sm:mt-[-10px] md:mt-[-16px]">
            WE <span className="font-bold text-neon-lime"><MaskedHeroWord text="GROW." delay={0.45} /></span>
          </div>

        </div>

        {/* Agency Subtitle & Description in DM Sans Regular (400) */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="hidden sm:block relative z-20 mt-6 sm:mt-8 max-w-xl text-center text-white/90 font-sans font-normal text-xs sm:text-sm md:text-base leading-relaxed px-4"
        >
          Your ideas deserve more than just an online presence. We turn them into powerful digital experiences through <span className="font-bold text-white">technology</span>, <span className="font-bold text-white">creativity</span> and <span className="font-bold text-neon-lime">smart marketing</span>.
        </motion.p>

      </div>

    </section>
  );
};
