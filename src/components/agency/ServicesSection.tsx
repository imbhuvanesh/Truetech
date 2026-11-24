import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Palette,
  Video,
  TrendingUp,
  Cpu,
  ArrowUpRight,
  CheckCircle2,
  Code2,
} from 'lucide-react';
import { servicesData } from '../../data/agencyData';
import type { ServiceCategory } from '../../data/agencyData';
import { MaskedLineReveal, FadeUpParagraph, FadeUpText, SlowHighlight } from '../AnimatedText';
import {
  SmallNeonSticker,
  ConnectorArrow1,
  DoodleCorner,
  DoodleWashiTape,
  DoodleCardBorder,
  DoodleSquiggle,
} from '../Doodles';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Palette,
  Video,
  TrendingUp,
  Cpu,
};

// Two-line title mapping for each service to match reference card style
const serviceTwoLines: Record<string, string[]> = {
  'Web Development': ['WEB & APP', 'DEVELOPMENT'],
  'App & Software Development': ['MOBILE & CUSTOM', 'SOFTWARE'],
  'Creative Design': ['CREATIVE & BRAND', 'DESIGN'],
  'Video Production': ['VIDEO & SOCIAL', 'PRODUCTION'],
  'Digital Marketing': ['DIGITAL & META', 'MARKETING'],
  'Automation': ['INTELLIGENT', 'AUTOMATION'],
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const shouldReduceMotion = useReducedMotion();
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceCategory | null>(null);

  return (
    <section id="services" className="relative w-full py-8 sm:py-10 md:py-12 px-4 sm:px-8 text-black bg-[#DCF4A2] overflow-hidden">
      {/* Hand-Drawn Container Corners */}
      <div className="absolute top-3 left-4 z-10 opacity-70 pointer-events-none">
        <DoodleCorner position="top-left" color="#080808" className="w-8 h-8 sm:w-10 sm:h-10" />
      </div>
      <div className="absolute top-3 right-4 z-10 opacity-70 pointer-events-none">
        <DoodleCorner position="top-right" color="#080808" className="w-8 h-8 sm:w-10 sm:h-10" />
      </div>

      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 pb-4 border-b border-black/[0.08]">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-3">
              <FadeUpText delay={0.05} className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-royal-blue/10 text-royal-blue font-bold text-xs tracking-wider uppercase">
                <span>Full-Spectrum Solutions</span>
              </FadeUpText>
              <DoodleWashiTape text="DISCIPLINES // 01-06" color="#FFFFFF" className="hidden sm:inline-flex" />
            </div>
            
            <MaskedLineReveal
              lines={["OUR CORE DISCIPLINES", "& DIGITAL SERVICES."]}
              className="font-sans text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-black leading-[1.12]"
              delay={0.1}
            />
          </div>
          
          <div className="mt-4 md:mt-0 max-w-md">
            <FadeUpParagraph
              className="text-sm sm:text-base text-zinc-700 font-normal font-sans leading-relaxed"
              delay={0.25}
            >
              Six cohesive disciplines covering your entire digital footprint — from <SlowHighlight>high-performance engineering</SlowHighlight> to viral creative and <SlowHighlight>automated systems</SlowHighlight>.
            </FadeUpParagraph>
            <div className="mt-2">
              <DoodleSquiggle color="#080808" className="w-24 h-4 opacity-60" />
            </div>
          </div>
        </div>

        {/* =========================================================================
            6 SERVICE CARDS MATCHING REFERENCE CARD THEME
            bg-[#F6F6F6], rounded-[32px], 2-line DM Sans headers, bottom stickers
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {servicesData.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Globe;
            const lines = serviceTwoLines[service.title] || [service.title, 'SOLUTIONS'];

            return (
              <div key={service.id} className="relative group">
                <motion.div
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.01 : 0.6,
                    delay: shouldReduceMotion ? 0 : (idx % 3) * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -6 }}
                  onClick={() => onSelectService(service.title)}
                  className="relative h-full bg-white rounded-[32px] p-6 sm:p-7 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-card-soft hover:shadow-card-hover border border-black/[0.04] cursor-pointer overflow-hidden"
                >
                  {/* Subtle hand-drawn card border overlay */}
                  <DoodleCardBorder color="#080808" />
                  <div>
                    {/* Top Header: Icon + Popular Pill Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-2xl bg-royal-blue text-white flex items-center justify-center shadow-md">
                        <IconComponent className="w-5 h-5 stroke-[2] text-neon-lime" />
                      </div>
                      <div className="flex items-center space-x-2">
                        {service.popularTag && (
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-neon-lime text-black px-2.5 py-1 rounded-full shadow-sm">
                            {service.popularTag}
                          </span>
                        )}
                        <span className="font-sans font-bold text-xs text-zinc-400">
                          {service.number}
                        </span>
                      </div>
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
                      {service.tagline}
                    </FadeUpParagraph>

                    {/* Sub-services Pills Container */}
                    <div className="mt-5 space-y-1.5">
                      {service.subServices.map((sub) => (
                        <div
                          key={sub}
                          className="bg-white/90 rounded-xl px-3 py-1.5 flex items-center space-x-2 border border-black/[0.03] shadow-sm text-xs font-medium text-zinc-800"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-royal-blue flex-shrink-0" />
                          <span>{sub}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Graphical Sticker Matching The Theme */}
                  <div className="mt-8 pt-4 pb-2 flex flex-col items-center justify-center">
                    {idx % 3 === 0 && (
                      /* Sticker Type 1: Tilted Blue Pill + Overlapping Neon Pill */
                      <div className="relative flex items-center justify-center pr-6">
                        <div className="relative bg-royal-blue text-white rounded-2xl px-4 py-2.5 flex items-center space-x-2.5 shadow-pill-blue transform -rotate-4 transition-transform hover:scale-105">
                          <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center border border-white/20">
                            <Code2 className="w-4 h-4 text-neon-lime" />
                          </div>
                          <div>
                            <div className="font-sans text-xs font-bold leading-tight">custom.dev</div>
                            <div className="font-sans text-[10px] text-white/80">100% custom code</div>
                          </div>
                        </div>
                        <div className="absolute -right-2 -bottom-2.5 bg-neon-lime text-black font-sans text-[11px] font-bold px-3 py-1 rounded-full shadow-pill-neon border border-black/10">
                          FAST & SCALABLE
                        </div>
                      </div>
                    )}

                    {idx % 3 === 1 && (
                      /* Sticker Type 2: Dual Capsule Pill + Neon Circle Sticker */
                      <div className="relative flex flex-col items-center">
                        <div className="inline-flex items-center rounded-full bg-[#08236B] p-1 shadow-card-soft border border-white/10">
                          <div className="bg-[#041A55] text-white font-sans text-xs font-bold px-3.5 py-2 rounded-full">
                            PRO DESIGN
                          </div>
                          <div className="bg-royal-blue text-white font-sans text-xs font-bold px-3.5 py-2 rounded-full flex items-center space-x-1">
                            <span>MEDIA</span>
                          </div>
                        </div>
                        <div className="absolute -bottom-5 right-1">
                          <SmallNeonSticker />
                        </div>
                      </div>
                    )}

                    {idx % 3 === 2 && (
                      /* Sticker Type 3: Neon Speech Bubble with Stat & Tail */
                      <div className="relative w-full max-w-[220px]">
                        <div className="relative bg-neon-lime rounded-[20px] px-4 py-3 shadow-bubble-neon border border-black/10 flex flex-col items-center justify-center">
                          <div className="font-sans text-[10px] font-bold text-black/75 tracking-wider uppercase">
                            CLIENT GROWTH GUARANTEE
                          </div>
                          <div className="font-sans text-xl font-bold text-black tracking-tight mt-0.5 flex items-center space-x-1">
                            <span>+310% ROI</span>
                            <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                          </div>
                          <div className="absolute -bottom-2 left-5 w-3.5 h-3.5 bg-neon-lime rotate-45 transform origin-top-left border-r border-b border-black/10" />
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Desktop connector arrows between columns 1->2 and 2->3 */}
                {(idx === 0 || idx === 1 || idx === 3 || idx === 4) && (
                  <div className="hidden lg:block absolute -right-5 top-1/2 transform -translate-y-1/2 z-20 pointer-events-none opacity-60">
                    <ConnectorArrow1 />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-black/10">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
              <div>
                <span className="text-xs font-bold uppercase text-zinc-400 font-sans">{activeServiceModal.number} • Service Spec</span>
                <h3 className="font-sans font-bold text-2xl text-black mt-0.5">
                  {activeServiceModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveServiceModal(null)}
                className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 flex items-center justify-center font-bold"
              >
                ✕
              </button>
            </div>

            <div className="py-4 space-y-4">
              <p className="text-sm text-zinc-600 leading-relaxed font-sans">
                {activeServiceModal.description}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-black mb-2 font-sans">Deliverables:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {activeServiceModal.deliverables.map((d) => (
                    <div key={d} className="bg-[#F6F6F6] p-2.5 rounded-xl text-xs font-medium text-zinc-800 flex items-center space-x-2 border border-black/[0.04]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-royal-blue" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
              <button
                onClick={() => setActiveServiceModal(null)}
                className="text-xs font-semibold text-zinc-500 hover:text-black font-sans"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const title = activeServiceModal.title;
                  setActiveServiceModal(null);
                  onSelectService(title);
                }}
                className="px-5 py-2.5 bg-royal-blue text-white font-sans text-xs font-bold rounded-full hover:bg-black transition-colors shadow-md flex items-center space-x-1.5"
              >
                <span>Request {activeServiceModal.title}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
