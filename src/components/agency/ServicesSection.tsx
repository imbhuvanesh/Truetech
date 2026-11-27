import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Palette,
  Video,
  TrendingUp,
  Zap,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Database,
} from 'lucide-react';
import { servicesData } from '../../data/agencyData';
import type { ServiceCategory } from '../../data/agencyData';
import { MaskedLineReveal, FadeUpParagraph, FadeUpText, SlowHighlight } from '../AnimatedText';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Palette,
  Video,
  TrendingUp,
  Zap,
  Code2,
  Database,
};

// Two-line title mapping for each service
const serviceTwoLines: Record<string, string[]> = {
  'Web Design & Development':          ['WEB DESIGN', '& DEVELOPMENT'],
  'Mobile App Development':            ['MOBILE APP', 'DEVELOPMENT'],
  'ERP, CRM, Billing & POS Systems':   ['ERP, CRM', 'BILLING & POS'],
  'Custom Software & SaaS Engineering':['CUSTOM SOFTWARE', '& SAAS'],
  'AI, ML & Intelligent Automation':   ['AI & ML', 'AUTOMATION'],
  'Creative Design & Branding':        ['CREATIVE DESIGN', '& BRANDING'],
  'Video Production & Motion Graphics':['VIDEO & MOTION', 'PRODUCTION'],
  'Digital Marketing & Performance Ads':['DIGITAL MARKETING', '& SEO ADS'],
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const shouldReduceMotion = useReducedMotion();
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceCategory | null>(null);

  return (
    <section id="services" className="relative w-full py-8 sm:py-10 md:py-12 px-4 sm:px-8 text-[#050761] bg-[#40FFA7] overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 pb-4 border-b border-[#050761]/[0.12]">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-3">
              <FadeUpText delay={0.05} className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#050761]/10 text-[#050761] font-bold text-xs tracking-wider uppercase">
                <span>Full-Spectrum Solutions</span>
              </FadeUpText>
            </div>
            
            <MaskedLineReveal
              lines={["OUR CORE DISCIPLINES", "& DIGITAL SERVICES."]}
              className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#050761] leading-[1.12]"
              delay={0.1}
            />
          </div>
          
          <div className="mt-4 md:mt-0 max-w-md">
            <FadeUpParagraph
              className="text-sm sm:text-base text-zinc-700 font-normal font-sans leading-relaxed"
              delay={0.25}
            >
              Eight cohesive disciplines covering your entire digital ecosystem — from <SlowHighlight>high-performance engineering</SlowHighlight> and enterprise ERP systems to AI automation, cinematic video and <SlowHighlight>data-driven marketing</SlowHighlight>.
            </FadeUpParagraph>
          </div>
        </div>

        {/* =========================================================================
            8 SERVICE CARDS (3-col grid: rows of 3+3+2)
            bg-white, rounded-[32px], 2-line DM Sans headers, bottom stickers
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {servicesData.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Globe;
            const lines = serviceTwoLines[service.title] || [service.title.split(' ').slice(0, 2).join(' ').toUpperCase(), 'SOLUTIONS'];

            return (
              <div key={service.id} className="relative group">
                <motion.div
                  initial={{
                    clipPath: shouldReduceMotion ? 'none' : 'inset(0% 0% 16% 0% round 24px)',
                    opacity: shouldReduceMotion ? 1 : 0,
                    y: shouldReduceMotion ? 0 : 30,
                  }}
                  whileInView={{
                    clipPath: shouldReduceMotion ? 'none' : 'inset(0% 0% 0% 0% round 32px)',
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.01 : 0.9,
                    delay: shouldReduceMotion ? 0 : (idx % 3) * 0.1,
                    ease: [0.16, 1, 0.3, 1] as const,
                  }}
                  whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.19, 1, 0.22, 1] } }}
                  onClick={() => onSelectService(service.title)}
                  className="relative h-full bg-white rounded-[32px] p-6 sm:p-7 md:p-8 flex flex-col justify-between transition-shadow duration-500 shadow-card-soft hover:shadow-card-hover border border-black/[0.04] cursor-pointer overflow-hidden"
                  style={{ willChange: 'clip-path, transform, opacity' }}
                >
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

                {/* Sub-services Pills Container — show first 5, rest hidden on mobile */}
                    <div className="mt-5 space-y-1.5">
                      {service.subServices.slice(0, 5).map((sub) => (
                        <div
                          key={sub}
                          className="bg-white/90 rounded-xl px-3 py-1.5 flex items-center space-x-2 border border-black/[0.03] shadow-sm text-xs font-medium text-zinc-800"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-royal-blue flex-shrink-0" />
                          <span>{sub}</span>
                        </div>
                      ))}
                      {service.subServices.length > 5 && (
                        <div className="text-[11px] text-zinc-400 font-medium pl-1 pt-0.5">
                          +{service.subServices.length - 5} more services
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Clean Service Card Action Footer */}
                  <div className="mt-8 pt-4 border-t border-black/[0.04] flex items-center justify-between">
                    <span className="text-xs font-semibold text-zinc-500 font-sans group-hover:text-black transition-colors">
                      View Service Scope &amp; Deliverables
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#F6F6F6] group-hover:bg-[#0645D8] text-zinc-600 group-hover:text-white flex items-center justify-center transition-all duration-200">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
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
