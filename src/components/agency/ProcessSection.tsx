import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Search, Compass, PenTool, Rocket, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { processSteps } from '../../data/agencyData';
import { MaskedLineReveal, FadeUpParagraph, FadeUpText } from '../AnimatedText';
import { ConnectorArrow1, ConnectorArrow2, SmallNeonSticker } from '../Doodles';

const stepIcons = [Search, Compass, PenTool, Rocket];

const processTwoLines: Record<string, string[]> = {
  'Discovery & Research': ['DISCOVERY &', 'DEEP AUDIT'],
  'Strategy & Design': ['STRATEGY &', 'PROTOTYPING'],
  'Development & Testing': ['FULL-STACK', 'DEVELOPMENT'],
  'Launch & Growth': ['DEPLOYMENT &', 'SCALE ENGINE'],
};

export const ProcessSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="process" className="relative w-full py-16 sm:py-24 md:py-32 px-4 sm:px-8 text-black bg-[#FAFAFB]">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-black/[0.08]">
          <div className="max-w-2xl">
            <FadeUpText delay={0.05} className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-royal-blue/10 text-royal-blue font-bold text-xs tracking-wider uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-royal-blue animate-pulse" />
              <span>How We Work</span>
            </FadeUpText>
            
            <MaskedLineReveal
              lines={["OUR 4-STAGE AGILE", "DEVELOPMENT PROCESS."]}
              className="font-sans text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-black leading-[1.12]"
              delay={0.1}
            />
          </div>
          
          <FadeUpParagraph
            className="mt-4 md:mt-0 max-w-md text-sm sm:text-base text-zinc-600 font-normal font-sans leading-relaxed"
            delay={0.25}
          >
            A battle-tested methodology designed to eliminate ambiguity, ship on time, and maximize commercial impact.
          </FadeUpParagraph>
        </div>

        {/* =========================================================================
            4 PROCESS CARDS MATCHING REFERENCE CARD THEME
            bg-[#F6F6F6], rounded-[32px], two-line DM Sans headers, connector arrows
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {processSteps.map((step, idx) => {
            const Icon = stepIcons[idx] || Search;
            const lines = processTwoLines[step.name] || [step.name, 'PHASE'];

            return (
              <div key={step.step} className="relative group">
                <motion.div
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.01 : 0.6,
                    delay: shouldReduceMotion ? 0 : idx * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -6 }}
                  className="h-full bg-[#F6F6F6] rounded-[32px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-card-soft hover:shadow-card-hover border border-black/[0.035]"
                >
                  <div>
                    {/* Top Header: Step Number & Duration Tag */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-2xl bg-royal-blue text-white flex items-center justify-center shadow-md">
                        <Icon className="w-5 h-5 stroke-[2] text-neon-lime" />
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-white text-royal-blue px-2.5 py-1 rounded-full border border-black/[0.04] shadow-sm">
                          {step.duration}
                        </span>
                        <span className="font-sans font-bold text-xs text-zinc-400">
                          {step.step}
                        </span>
                      </div>
                    </div>

                    {/* Heading with smooth line reveal */}
                    <MaskedLineReveal
                      lines={lines}
                      className="font-sans text-lg sm:text-xl font-bold uppercase tracking-tight text-primary-black leading-[1.1]"
                      delay={0.1 + idx * 0.05}
                    />

                    {/* Subtitle / Tagline */}
                    <FadeUpParagraph
                      className="font-sans text-xs text-[#555555] mt-2 font-normal leading-relaxed"
                      delay={0.2 + idx * 0.05}
                    >
                      {step.tagline}
                    </FadeUpParagraph>

                    {/* Step Activities List */}
                    <div className="mt-5 space-y-1.5">
                      {step.activities.map((act) => (
                        <div
                          key={act}
                          className="bg-white/80 rounded-xl px-2.5 py-1.5 flex items-center space-x-2 border border-black/[0.03] text-[11px] font-medium text-zinc-800 shadow-xs"
                        >
                          <CheckCircle2 className="w-3 h-3 text-royal-blue flex-shrink-0" />
                          <span className="truncate">{act}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Graphical Sticker Matching The Theme */}
                  <div className="mt-8 pt-3 pb-2 flex flex-col items-center justify-center">
                    {idx === 0 && (
                      <div className="relative flex items-center justify-center pr-4">
                        <div className="bg-royal-blue text-white font-sans text-xs font-bold px-3 py-1.5 rounded-xl shadow-pill-blue transform -rotate-3">
                          AUDIT SPEC
                        </div>
                        <div className="absolute -right-2 -bottom-2 bg-neon-lime text-black font-sans text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-pill-neon">
                          STAGE 1
                        </div>
                      </div>
                    )}

                    {idx === 1 && (
                      <div className="relative flex flex-col items-center">
                        <div className="inline-flex items-center rounded-full bg-[#08236B] p-1 shadow-card-soft">
                          <span className="bg-[#041A55] text-white font-sans text-[11px] font-bold px-3 py-1.5 rounded-full">UI/UX</span>
                          <span className="bg-royal-blue text-white font-sans text-[11px] font-bold px-3 py-1.5 rounded-full">DESIGN</span>
                        </div>
                        <div className="absolute -bottom-4 right-0">
                          <SmallNeonSticker />
                        </div>
                      </div>
                    )}

                    {idx === 2 && (
                      <div className="relative flex items-center justify-center pr-4">
                        <div className="bg-royal-blue text-white font-sans text-xs font-bold px-3 py-1.5 rounded-xl shadow-pill-blue transform -rotate-3">
                          100% CODE
                        </div>
                        <div className="absolute -right-2 -bottom-2 bg-neon-lime text-black font-sans text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-pill-neon">
                          CLEAN TECH
                        </div>
                      </div>
                    )}

                    {idx === 3 && (
                      <div className="relative w-full max-w-[180px]">
                        <div className="relative bg-neon-lime rounded-[18px] px-3.5 py-2 shadow-bubble-neon border border-black/10 flex flex-col items-center justify-center">
                          <div className="font-sans text-[9px] font-bold text-black/75 tracking-wider uppercase">
                            FINAL MILESTONE
                          </div>
                          <div className="font-sans text-sm font-bold text-black tracking-tight flex items-center space-x-1">
                            <span>LIVE &amp; SCALE</span>
                            <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <div className="absolute -bottom-2 left-4 w-2.5 h-2.5 bg-neon-lime rotate-45 transform origin-top-left border-r border-b border-black/10" />
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Desktop connector arrows between stages 1->2, 2->3, 3->4 */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-5 top-1/2 transform -translate-y-1/2 z-20 pointer-events-none opacity-60">
                    {idx % 2 === 0 ? <ConnectorArrow1 /> : <ConnectorArrow2 />}
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
