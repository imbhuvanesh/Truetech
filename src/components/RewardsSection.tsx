import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ConnectorArrow1, ConnectorArrow2, SmallNeonSticker } from './Doodles';
import { MaskedLineReveal, FadeUpParagraph } from './AnimatedText';
import { Code2, ArrowUpRight } from 'lucide-react';

export const RewardsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full bg-white rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[56px] pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-24 px-4 sm:px-8 md:px-12 text-primary-black shadow-[0_-12px_45px_rgba(0,0,0,0.06)]">
      <div className="max-w-6xl mx-auto">
        
        {/* The 3 Horizontal Reward / Pillar Cards Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* =========================================================================
              CARD 1: WE BUILD (Web & App Development)
              Layered Shadow, Hover Elevation, Tilted Pill + Neon Pill
             ========================================================================= */}
          <div className="relative group">
            <motion.div
              initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.6,
                delay: shouldReduceMotion ? 0 : 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              onClick={() => scrollTo('services')}
              className="h-full bg-[#F6F6F6] rounded-[32px] p-6 sm:p-7 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-card-soft hover:shadow-card-hover border border-black/[0.035] cursor-pointer"
            >
              <div>
                {/* Heading with smooth line reveal */}
                <MaskedLineReveal
                  lines={["WE BUILD", "DIGITAL PRODUCTS"]}
                  className="font-sans text-xl sm:text-[22px] font-bold uppercase tracking-tight text-primary-black leading-[1.1]"
                  delay={0.1}
                />
                {/* Subtitle with fade up */}
                <FadeUpParagraph
                  className="font-sans text-xs sm:text-[13px] text-[#555555] mt-2.5 font-normal"
                  delay={0.25}
                >
                  high-performance websites, apps & custom software
                </FadeUpParagraph>
              </div>

              {/* Bottom Sticker Graphic - Fully visible with generous padding */}
              <div className="mt-10 sm:mt-12 pt-4 pb-4 px-2 flex flex-col items-center justify-center">
                <motion.div
                  initial={{
                    scale: shouldReduceMotion ? 1 : 0.92,
                    opacity: shouldReduceMotion ? 1 : 0,
                    y: shouldReduceMotion ? 0 : 12,
                  }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: false, amount: 0.05 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.01 : 0.55,
                    delay: shouldReduceMotion ? 0 : 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative flex items-center justify-center pr-6 sm:pr-8"
                >
                  
                  {/* Tilted Blue Pill Sticker with Layered Shadow */}
                  <div className="relative bg-royal-blue text-white rounded-2xl px-4 py-3 flex items-center space-x-3 shadow-pill-blue transform -rotate-6 transition-all duration-200 hover:scale-[1.03]">
                    <div className="relative w-9 h-9 rounded-full bg-white/15 flex items-center justify-center border border-white/30 shadow-inner">
                      <Code2 className="w-5 h-5 text-neon-lime" />
                    </div>
                    <div>
                      <div className="font-sans text-xs font-bold leading-tight">nexus.dev</div>
                      <div className="font-sans text-[10.5px] text-white/80 font-normal">100% custom code</div>
                    </div>
                  </div>

                  {/* Overlapping Neon Lime Green Pill Sticker with Glow Shadow */}
                  <div className="absolute -right-2 sm:-right-4 -bottom-3 bg-neon-lime text-primary-black font-sans text-xs font-bold px-3.5 py-1.5 rounded-full shadow-pill-neon border border-black/10 select-none transition-all duration-200 hover:scale-105">
                    FAST & SCALABLE
                  </div>

                </motion.div>
              </div>
            </motion.div>

            {/* Hand-drawn connector arrow between Card 1 & Card 2 (Desktop only) */}
            <div className="hidden md:block absolute -right-6 lg:-right-7 top-1/2 transform -translate-y-1/2 z-20 pointer-events-none">
              <ConnectorArrow1 />
            </div>
          </div>

          {/* =========================================================================
              CARD 2: WE CREATE (Creative Design & Video Production)
              Layered Shadow, Hover Elevation, Dual Capsule + Neon Circle Sticker
             ========================================================================= */}
          <div className="relative group">
            <motion.div
              initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.6,
                delay: shouldReduceMotion ? 0 : 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              onClick={() => scrollTo('work')}
              className="h-full bg-[#F6F6F6] rounded-[32px] p-6 sm:p-7 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-card-soft hover:shadow-card-hover border border-black/[0.035] cursor-pointer"
            >
              <div>
                {/* Heading with smooth line reveal */}
                <MaskedLineReveal
                  lines={["WE CREATE", "POWERFUL BRANDS"]}
                  className="font-sans text-xl sm:text-[22px] font-bold uppercase tracking-tight text-primary-black leading-[1.1]"
                  delay={0.15}
                />
                {/* Subtitle with fade up */}
                <FadeUpParagraph
                  className="font-sans text-xs sm:text-[13px] text-[#555555] mt-2.5 font-normal"
                  delay={0.3}
                >
                  brand identity, graphic design & video production
                </FadeUpParagraph>
              </div>

              {/* Bottom Sticker Graphic - Fully visible with clearance */}
              <div className="mt-10 sm:mt-12 pt-4 pb-6 px-2 flex flex-col items-center justify-center">
                <motion.div
                  initial={{
                    scale: shouldReduceMotion ? 1 : 0.92,
                    opacity: shouldReduceMotion ? 1 : 0,
                    y: shouldReduceMotion ? 0 : 12,
                  }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: false, amount: 0.05 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.01 : 0.55,
                    delay: shouldReduceMotion ? 0 : 0.25,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative flex flex-col items-center"
                >
                  
                  {/* Dual Capsule Pill Sticker with Soft Inset Border */}
                  <div className="inline-flex items-center rounded-full bg-[#08236B] p-1 shadow-card-soft border border-white/10">
                    {/* Left Darker Blue Pill */}
                    <div className="bg-[#041A55] text-white font-sans text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full">
                      CREATIVE
                    </div>
                    {/* Right Royal Blue Pill */}
                    <div className="bg-royal-blue text-white font-sans text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full flex items-center space-x-1">
                      <span>MARKETING</span>
                    </div>
                  </div>

                  {/* Floating Small Neon Sticker with Doodle Arrow directly overlapping */}
                  <div className="absolute -bottom-6 right-3 sm:right-5">
                    <SmallNeonSticker />
                  </div>

                </motion.div>
              </div>
            </motion.div>

            {/* Hand-drawn connector arrow between Card 2 & Card 3 (Desktop only) */}
            <div className="hidden md:block absolute -right-6 lg:-right-7 top-1/2 transform -translate-y-1/2 z-20 pointer-events-none">
              <ConnectorArrow2 />
            </div>
          </div>

          {/* =========================================================================
              CARD 3: WE GROW (Digital Marketing & Automation)
              Layered Shadow, Hover Elevation, Large Neon Speech Bubble
             ========================================================================= */}
          <div className="relative group">
            <motion.div
              initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.6,
                delay: shouldReduceMotion ? 0 : 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              onClick={() => scrollTo('contact')}
              className="h-full bg-[#F6F6F6] rounded-[32px] p-6 sm:p-7 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-card-soft hover:shadow-card-hover border border-black/[0.035] cursor-pointer"
            >
              <div>
                {/* Heading with smooth line reveal */}
                <MaskedLineReveal
                  lines={["WE GROW", "YOUR BUSINESS"]}
                  className="font-sans text-xl sm:text-[22px] font-bold uppercase tracking-tight text-primary-black leading-[1.1]"
                  delay={0.2}
                />
                {/* Subtitle with fade up */}
                <FadeUpParagraph
                  className="font-sans text-xs sm:text-[13px] text-[#555555] mt-2.5 font-normal"
                  delay={0.35}
                >
                  Meta ad campaigns, social growth & workflow automation
                </FadeUpParagraph>
              </div>

              {/* Bottom Sticker Graphic - Fully visible speech bubble & tail */}
              <div className="mt-10 sm:mt-12 pt-4 pb-5 px-2 flex flex-col items-center justify-center">
                <motion.div
                  initial={{
                    scale: shouldReduceMotion ? 1 : 0.92,
                    opacity: shouldReduceMotion ? 1 : 0,
                    y: shouldReduceMotion ? 0 : 12,
                  }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: false, amount: 0.05 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.01 : 0.55,
                    delay: shouldReduceMotion ? 0 : 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative w-full max-w-[250px]"
                >
                  {/* Large Neon Lime Speech Bubble Sticker with Layered Glow Shadow */}
                  <div className="relative bg-neon-lime rounded-[24px] px-5 py-4 shadow-bubble-neon border border-black/10 flex flex-col items-center justify-center transition-transform duration-200 hover:scale-[1.03]">
                    <div className="font-sans text-[11px] font-bold text-black/75 tracking-wide uppercase">
                      EST. CLIENT ROI BOOST
                    </div>
                    <div className="font-sans text-2xl sm:text-[26px] font-bold text-primary-black tracking-tight mt-0.5 flex items-center space-x-1">
                      <span>+310% GROWTH</span>
                      <ArrowUpRight className="w-5 h-5 text-black stroke-[3]" />
                    </div>

                    {/* Speech Bubble Tail at bottom left */}
                    <div className="absolute -bottom-2 left-6 w-4 h-4 bg-neon-lime rotate-45 transform origin-top-left border-r border-b border-black/10" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
