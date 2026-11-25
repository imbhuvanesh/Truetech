import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Package, ArrowUpRight, CheckCircle2, Sparkles, Layers, Cpu, Palette } from 'lucide-react';
import { productsData } from '../../data/agencyData';
import type { ProductItem } from '../../data/agencyData';
import { MaskedLineReveal, FadeUpParagraph, FadeUpText, SlowHighlight } from '../AnimatedText';
import {
  DoodleCorner,
  DoodleWashiTape,
  DoodleCardBorder,
  DoodleStar,
  DoodleSparkle,
  DoodleUnderline,
} from '../Doodles';

const productIcons: Record<string, React.ElementType> = {
  'nexus-starter-suite': Cpu,
  'autoflow-crm-hub': Layers,
  'brandbox-design-system': Palette,
};

export const ProductsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const navigate = useNavigate();

  const handleInquire = (product: ProductItem) => {
    navigate('/contact', { state: { prefillService: `Product inquiry: ${product.name}` } });
  };

  return (
    <section id="products" className="relative w-full py-8 sm:py-10 md:py-14 px-4 sm:px-8 text-black bg-[#FAFBFD] overflow-hidden">
      {/* Hand-Drawn Container Corners */}
      <div className="absolute top-3 left-4 z-10 opacity-70 pointer-events-none">
        <DoodleCorner position="top-left" color="#080808" className="w-8 h-8 sm:w-10 sm:h-10" />
      </div>
      <div className="absolute top-3 right-4 z-10 opacity-70 pointer-events-none">
        <DoodleCorner position="top-right" color="#080808" className="w-8 h-8 sm:w-10 sm:h-10" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-4 border-b border-black/[0.08]">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-3">
              <FadeUpText delay={0.05} className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-royal-blue/10 text-royal-blue font-bold text-xs tracking-wider uppercase">
                <Package className="w-3.5 h-3.5" />
                <span>Proprietary Toolkits &amp; Frameworks</span>
              </FadeUpText>
              <DoodleWashiTape text="PRODUCTS // ACCELERATORS" color="#DCF4A2" className="hidden sm:inline-flex" />
            </div>

            <div className="flex items-center space-x-3">
              <MaskedLineReveal
                lines={["PRE-ENGINEERED DIGITAL", "PRODUCTS & ACCELERATORS."]}
                className="font-sans text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-black leading-[1.12]"
                delay={0.1}
              />
              <div className="hidden lg:block shrink-0 -mt-4">
                <DoodleSparkle color="#0645D8" className="w-8 h-8" />
              </div>
            </div>
          </div>

          <div className="mt-4 md:mt-0 max-w-md">
            <FadeUpParagraph
              className="text-sm sm:text-base text-zinc-600 font-normal font-sans leading-relaxed"
              delay={0.25}
            >
              Battle-tested tools, software engines, and pre-built design systems crafted by <SlowHighlight>Nexus Studio</SlowHighlight> to help companies launch in days instead of months.
            </FadeUpParagraph>
            <div className="mt-2 flex items-center space-x-2">
              <DoodleUnderline className="w-48 h-3 text-royal-blue opacity-75" />
            </div>
          </div>
        </div>

        {/* =========================================================================
            PRODUCTS GRID (3 COLUMN RESPONSIVE)
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {productsData.map((product, idx) => {
            const Icon = productIcons[product.id] || Sparkles;

            return (
              <div key={product.id} className="relative group">
                <motion.div
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.01 : 0.95,
                    delay: shouldReduceMotion ? 0 : idx * 0.12,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  whileHover={{ y: -8, transition: { duration: 0.45, ease: [0.19, 1, 0.22, 1] } }}
                  className="relative h-full bg-white rounded-[32px] p-6 sm:p-7 md:p-8 flex flex-col justify-between transition-all duration-500 shadow-card-soft hover:shadow-card-hover border border-black/[0.04] overflow-hidden"
                >
                  {/* Subtle hand-drawn card border overlay */}
                  <DoodleCardBorder color="#080808" />

                  <div className="relative z-10">
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#0645D8]/10 text-royal-blue flex items-center justify-center shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#DCF4A2] text-black border border-black/[0.06]">
                        {product.badge}
                      </span>
                    </div>

                    {/* Category */}
                    <div className="text-[11px] font-bold uppercase tracking-widest text-zinc-500 mb-1">
                      {product.category}
                    </div>

                    {/* Product Name */}
                    <h3 className="font-sans text-xl sm:text-[22px] font-bold tracking-tight text-primary-black leading-snug">
                      {product.name}
                    </h3>

                    {/* Tagline */}
                    <p className="font-sans text-xs sm:text-[13px] text-zinc-600 font-medium mt-1 leading-snug">
                      {product.tagline}
                    </p>

                    {/* Description */}
                    <p className="font-sans text-xs text-zinc-500 mt-3 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Key Highlights list */}
                    <div className="mt-5 pt-4 border-t border-black/[0.06] space-y-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-black flex items-center space-x-1">
                        <span>Key Highlights</span>
                        <DoodleStar className="w-3 h-3 text-royal-blue" />
                      </div>
                      {product.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start space-x-2 text-xs text-zinc-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-royal-blue shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Area */}
                  <div className="relative z-10 mt-6 pt-4 border-t border-black/[0.06] flex flex-col space-y-3">
                    <div className="text-[11px] font-mono text-zinc-500">
                      {product.pricingPlaceholder}
                    </div>

                    <button
                      onClick={() => handleInquire(product)}
                      className="w-full group/btn bg-royal-blue hover:bg-neon-lime text-white hover:text-black py-3 px-4 rounded-2xl text-xs font-bold tracking-wide transition-all duration-300 flex items-center justify-center space-x-2 shadow-sm hover:shadow-md cursor-pointer"
                    >
                      <span>{product.ctaText}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
