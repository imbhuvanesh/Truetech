import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles, Terminal, CheckCircle2, Layers, Target, ArrowUpRight, Code2 } from 'lucide-react';
import { whyChooseUsData } from '../../data/agencyData';
import { MaskedLineReveal, FadeUpParagraph, FadeUpText } from '../AnimatedText';
import { ConnectorArrow1, SmallNeonSticker } from '../Doodles';

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  Terminal,
  CheckCircle2,
  Layers,
  Target,
};

// Two-line uppercase titles for each pillar
const pillarTwoLines: Record<string, string[]> = {
  'Creative Thinking': ['CREATIVE', 'THINKING'],
  'Modern Technology': ['MODERN', 'TECHNOLOGY'],
  'Quality-Driven Work': ['QUALITY-DRIVEN', 'DELIVERY'],
  'All-in-One Solutions': ['ALL-IN-ONE', 'SOLUTIONS'],
  'Business-Focused Approach': ['BUSINESS-FIRST', 'ROI APPROACH'],
};

export const WhyChooseUsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="why-us" className="relative w-full py-8 sm:py-10 md:py-12 px-4 sm:px-8 text-black bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 pb-4 border-b border-black/[0.08]">
          <div className="max-w-2xl">
            <FadeUpText delay={0.05} className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-royal-blue/10 text-royal-blue font-bold text-xs tracking-wider uppercase mb-3">
              <span>Competitive Edge</span>
            </FadeUpText>
            
            <MaskedLineReveal
              lines={["WHY TOP BRANDS CHOOSE", "NEXUS DIGITAL AGENCY."]}
              className="font-sans text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-black leading-[1.12]"
              delay={0.1}
            />
          </div>
          
          <FadeUpParagraph
            className="mt-4 md:mt-0 max-w-md text-sm sm:text-base text-zinc-600 font-normal font-sans leading-relaxed"
            delay={0.25}
          >
            We bridge the gap between aesthetic brilliance, robust technical engineering, and aggressive commercial growth.
          </FadeUpParagraph>
        </div>

        {/* =========================================================================
            PILLAR CARDS MATCHING REFERENCE CARD THEME
            bg-[#F6F6F6], rounded-[32px], two-line DM Sans headers, graphic pills
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {whyChooseUsData.map((item, idx) => {
            const Icon = iconMap[item.icon] || Sparkles;
            const lines = pillarTwoLines[item.title] || [item.title, 'EXCELLENCE'];

            return (
              <div key={item.id} className="relative group">
                <motion.div
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.01 : 0.6,
                    delay: shouldReduceMotion ? 0 : (idx % 3) * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -6 }}
                  className="h-full bg-[#F6F6F6] rounded-[32px] p-6 sm:p-7 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-card-soft hover:shadow-card-hover border border-black/[0.035]"
                >
                  <div>
                    {/* Top: Icon + Metric Tag */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-2xl bg-royal-blue text-white flex items-center justify-center shadow-md">
                        <Icon className="w-5 h-5 stroke-[2] text-neon-lime" />
                      </div>
                      <span className="font-sans text-[11px] font-bold uppercase tracking-wider bg-white text-royal-blue px-3 py-1 rounded-full border border-black/[0.04] shadow-sm">
                        {item.metric}
                      </span>
                    </div>

                    {/* Heading with smooth line reveal */}
                    <MaskedLineReveal
                      lines={lines}
                      className="font-sans text-xl sm:text-[22px] font-bold uppercase tracking-tight text-primary-black leading-[1.1]"
                      delay={0.1 + (idx % 3) * 0.05}
                    />

                    {/* Subtitle / Tagline with fade up */}
                    <FadeUpParagraph
                      className="font-sans text-xs sm:text-[13px] text-[#555555] mt-2 font-normal leading-relaxed"
                      delay={0.2 + (idx % 3) * 0.05}
                    >
                      {item.subtitle}
                    </FadeUpParagraph>

                    {/* Description */}
                    <p className="font-sans text-xs sm:text-sm text-zinc-600 mt-4 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Graphical Sticker Matching The Reference Theme */}
                  <div className="mt-8 pt-4 pb-2 flex flex-col items-center justify-center">
                    {idx % 3 === 0 && (
                      <div className="relative flex items-center justify-center pr-6">
                        <div className="relative bg-royal-blue text-white rounded-2xl px-4 py-2 flex items-center space-x-2 shadow-pill-blue transform -rotate-4">
                          <Code2 className="w-4 h-4 text-neon-lime" />
                          <span className="font-sans text-xs font-bold">{item.metric}</span>
                        </div>
                        <div className="absolute -right-2 -bottom-2.5 bg-neon-lime text-black font-sans text-[10px] font-bold px-3 py-1 rounded-full shadow-pill-neon border border-black/10">
                          PROVEN STANDARD
                        </div>
                      </div>
                    )}

                    {idx % 3 === 1 && (
                      <div className="relative flex flex-col items-center">
                        <div className="inline-flex items-center rounded-full bg-[#08236B] p-1 shadow-card-soft border border-white/10">
                          <div className="bg-[#041A55] text-white font-sans text-xs font-bold px-3.5 py-2 rounded-full">
                            VERIFIED
                          </div>
                          <div className="bg-royal-blue text-white font-sans text-xs font-bold px-3.5 py-2 rounded-full">
                            PARTNER
                          </div>
                        </div>
                        <div className="absolute -bottom-5 right-1">
                          <SmallNeonSticker />
                        </div>
                      </div>
                    )}

                    {idx % 3 === 2 && (
                      <div className="relative w-full max-w-[210px]">
                        <div className="relative bg-neon-lime rounded-[20px] px-4 py-2.5 shadow-bubble-neon border border-black/10 flex flex-col items-center justify-center">
                          <div className="font-sans text-[9.5px] font-bold text-black/75 tracking-wider uppercase">
                            CLIENT SUCCESS GUARANTEE
                          </div>
                          <div className="font-sans text-lg font-bold text-black tracking-tight flex items-center space-x-1">
                            <span>100% SATISFACTION</span>
                            <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <div className="absolute -bottom-2 left-5 w-3 h-3 bg-neon-lime rotate-45 transform origin-top-left border-r border-b border-black/10" />
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Connector arrow between columns 1->2 and 2->3 */}
                {(idx === 0 || idx === 1 || idx === 3) && (
                  <div className="hidden lg:block absolute -right-5 top-1/2 transform -translate-y-1/2 z-20 pointer-events-none opacity-60">
                    <ConnectorArrow1 />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
