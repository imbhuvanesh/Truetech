import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ConnectorArrow1, ConnectorArrow2, SmallNeonSticker } from '../Doodles';
import { MaskedLineReveal, FadeUpParagraph, FadeUpText } from '../AnimatedText';
import { Code2, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC<{ onExploreServices: () => void }> = ({ onExploreServices }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="relative w-full py-16 sm:py-24 md:py-28 px-4 sm:px-8 text-black bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-black/[0.08]">
          <div className="max-w-2xl">
            <FadeUpText delay={0.05} className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-royal-blue/10 text-royal-blue font-bold text-xs tracking-wider uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-royal-blue animate-pulse" />
              <span>About Nexus Studio</span>
            </FadeUpText>
            
            <MaskedLineReveal
              lines={["WE COMBINE TECHNOLOGY,", "CREATIVITY & MARKETING."]}
              className="font-sans text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-black leading-[1.12]"
              delay={0.1}
            />
          </div>
          
          <FadeUpParagraph
            className="mt-4 md:mt-0 max-w-sm text-sm sm:text-base text-zinc-600 font-normal font-sans leading-relaxed"
            delay={0.25}
          >
            We are a creative technology and digital marketing agency providing complete digital solutions to businesses, startups and individuals.
          </FadeUpParagraph>
        </div>

        {/* Big Narrative Highlight Banner (Light Container with Soft Layered Shadow) */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="bg-[#FAFAFB] rounded-[36px] p-6 sm:p-10 md:p-12 mb-12 border border-black/[0.04] shadow-card-soft"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <FadeUpText delay={0.1} className="font-sans font-light text-2xl sm:text-3xl text-black leading-snug">
                "Our goal is to help brands <span className="font-bold">establish their online presence</span>, improve their digital identity and <span className="font-bold">grow their business</span>."
              </FadeUpText>
              
              <FadeUpParagraph
                delay={0.2}
                className="mt-4 text-sm sm:text-base text-zinc-600 font-normal font-sans leading-relaxed"
              >
                In today's digital landscape, generic websites and disconnected marketing fail to convert. We unite world-class software engineering with strategic design and high-yield marketing funnels so your company leads its market.
              </FadeUpParagraph>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {['Verified Delivery Guarantee', 'Direct Partner Access', 'Rapid Turnarounds'].map((item, i) => (
                  <FadeUpText
                    key={item}
                    delay={0.3 + i * 0.08}
                    className="inline-flex items-center space-x-1.5 bg-white px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-700 border border-black/[0.04] shadow-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-royal-blue" />
                    <span>{item}</span>
                  </FadeUpText>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
              {[
                { number: '100%', label: 'End-to-End Delivery' },
                { number: '6-in-1', label: 'Unified Disciplines' },
                { number: '<2h', label: 'Response Guarantee' },
                { number: '+310%', label: 'Average Client ROI' },
              ].map((stat, i) => (
                <FadeUpText
                  key={stat.label}
                  delay={0.2 + i * 0.08}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-black/[0.04] shadow-card-soft hover:shadow-card-hover transition-all"
                >
                  <div className="font-sans font-bold text-2xl sm:text-3xl text-black">{stat.number}</div>
                  <div className="text-xs text-zinc-500 font-normal font-sans mt-1">{stat.label}</div>
                </FadeUpText>
              ))}
            </div>
          </div>
        </motion.div>

        {/* =========================================================================
            THE 3 PILLAR CARDS MATCHING REFERENCE CARD THEME
            1. MODERN TECHNOLOGY (Code Pill + Neon Pill) -> Arrow 1
            2. BOLD CREATIVITY (Dual Pill + Neon Sticker) -> Arrow 2
            3. SMART MARKETING (Neon Speech Bubble + Stat)
           ========================================================================= */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: Modern Technology */}
          <div className="relative group">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -6 }}
              onClick={onExploreServices}
              className="h-full bg-[#F6F6F6] rounded-[32px] p-6 sm:p-7 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-card-soft hover:shadow-card-hover border border-black/[0.035] cursor-pointer"
            >
              <div>
                <MaskedLineReveal
                  lines={["MODERN", "TECHNOLOGY"]}
                  className="font-sans text-xl sm:text-[22px] font-bold uppercase tracking-tight text-primary-black leading-[1.1]"
                  delay={0.1}
                />
                <FadeUpParagraph
                  className="font-sans text-xs sm:text-[13px] text-[#555555] mt-2.5 font-normal leading-relaxed"
                  delay={0.2}
                >
                  robust engineering, high-speed web apps & custom software architectures
                </FadeUpParagraph>
              </div>

              {/* Bottom Sticker Graphic */}
              <div className="mt-10 sm:mt-12 pt-4 pb-4 px-2 flex flex-col items-center justify-center">
                <div className="relative flex items-center justify-center pr-6 sm:pr-8">
                  {/* Tilted Blue Pill */}
                  <div className="relative bg-royal-blue text-white rounded-2xl px-4 py-3 flex items-center space-x-3 shadow-pill-blue transform -rotate-6 transition-all duration-200 hover:scale-[1.03]">
                    <div className="relative w-9 h-9 rounded-full bg-white/15 flex items-center justify-center border border-white/30 shadow-inner">
                      <Code2 className="w-5 h-5 text-neon-lime" />
                    </div>
                    <div>
                      <div className="font-sans text-xs font-bold leading-tight">stack.dev</div>
                      <div className="font-sans text-[10.5px] text-white/80 font-normal">React • Next • Python</div>
                    </div>
                  </div>

                  {/* Overlapping Neon Pill */}
                  <div className="absolute -right-2 sm:-right-4 -bottom-3 bg-neon-lime text-primary-black font-sans text-xs font-bold px-3.5 py-1.5 rounded-full shadow-pill-neon border border-black/10 select-none transition-all duration-200 hover:scale-105">
                    HIGH PERFORMANCE
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hand-drawn connector arrow between Card 1 & Card 2 */}
            <div className="hidden md:block absolute -right-6 lg:-right-7 top-1/2 transform -translate-y-1/2 z-20 pointer-events-none">
              <ConnectorArrow1 />
            </div>
          </div>

          {/* Card 2: Bold Creativity */}
          <div className="relative group">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -6 }}
              onClick={onExploreServices}
              className="h-full bg-[#F6F6F6] rounded-[32px] p-6 sm:p-7 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-card-soft hover:shadow-card-hover border border-black/[0.035] cursor-pointer"
            >
              <div>
                <MaskedLineReveal
                  lines={["BOLD", "CREATIVITY"]}
                  className="font-sans text-xl sm:text-[22px] font-bold uppercase tracking-tight text-primary-black leading-[1.1]"
                  delay={0.15}
                />
                <FadeUpParagraph
                  className="font-sans text-xs sm:text-[13px] text-[#555555] mt-2.5 font-normal leading-relaxed"
                  delay={0.25}
                >
                  distinctive brand systems, poster design & high-converting video production
                </FadeUpParagraph>
              </div>

              {/* Bottom Sticker Graphic */}
              <div className="mt-10 sm:mt-12 pt-4 pb-6 px-2 flex flex-col items-center justify-center">
                <div className="relative flex flex-col items-center">
                  {/* Dual Capsule Pill Sticker */}
                  <div className="inline-flex items-center rounded-full bg-[#08236B] p-1 shadow-card-soft border border-white/10">
                    <div className="bg-[#041A55] text-white font-sans text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full">
                      IDENTITY
                    </div>
                    <div className="bg-royal-blue text-white font-sans text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full flex items-center space-x-1">
                      <span>MEDIA</span>
                    </div>
                  </div>

                  {/* Overlapping Small Neon Sticker */}
                  <div className="absolute -bottom-6 right-3 sm:right-5">
                    <SmallNeonSticker />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hand-drawn connector arrow between Card 2 & Card 3 */}
            <div className="hidden md:block absolute -right-6 lg:-right-7 top-1/2 transform -translate-y-1/2 z-20 pointer-events-none">
              <ConnectorArrow2 />
            </div>
          </div>

          {/* Card 3: Smart Marketing */}
          <div className="relative group">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -6 }}
              onClick={onExploreServices}
              className="h-full bg-[#F6F6F6] rounded-[32px] p-6 sm:p-7 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-card-soft hover:shadow-card-hover border border-black/[0.035] cursor-pointer"
            >
              <div>
                <MaskedLineReveal
                  lines={["SMART", "MARKETING"]}
                  className="font-sans text-xl sm:text-[22px] font-bold uppercase tracking-tight text-primary-black leading-[1.1]"
                  delay={0.2}
                />
                <FadeUpParagraph
                  className="font-sans text-xs sm:text-[13px] text-[#555555] mt-2.5 font-normal leading-relaxed"
                  delay={0.3}
                >
                  Meta campaigns, organic growth & intelligent automated sales pipelines
                </FadeUpParagraph>
              </div>

              {/* Bottom Sticker Graphic */}
              <div className="mt-10 sm:mt-12 pt-4 pb-5 px-2 flex flex-col items-center justify-center">
                <div className="relative w-full max-w-[250px]">
                  {/* Large Neon Speech Bubble */}
                  <div className="relative bg-neon-lime rounded-[24px] px-5 py-4 shadow-bubble-neon border border-black/10 flex flex-col items-center justify-center transition-transform duration-200 hover:scale-[1.03]">
                    <div className="font-sans text-[11px] font-bold text-black/75 tracking-wide uppercase">
                      CLIENT PIPELINE BOOST
                    </div>
                    <div className="font-sans text-2xl sm:text-[26px] font-bold text-primary-black tracking-tight mt-0.5 flex items-center space-x-1">
                      <span>10X VELOCITY</span>
                      <ArrowUpRight className="w-5 h-5 text-black stroke-[3]" />
                    </div>

                    {/* Speech Bubble Tail at bottom left */}
                    <div className="absolute -bottom-2 left-6 w-4 h-4 bg-neon-lime rotate-45 transform origin-top-left border-r border-b border-black/10" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
