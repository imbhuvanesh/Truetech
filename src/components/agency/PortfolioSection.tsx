import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../../data/agencyData';
import type { ProjectItem } from '../../data/agencyData';
import { MaskedLineReveal, FadeUpParagraph, FadeUpText, SlowHighlight } from '../AnimatedText';
import {
  DoodleStar,
  DoodleUnderline,
  DoodleCorner,
  DoodleCamera,
  DoodleWashiTape,
} from '../Doodles';

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    'All',
    'Web Development',
    'Mobile App',
    'ERP & CRM',
    'Custom Software',
    'AI & Automation',
    'Creative Design',
    'Video Production',
    'Digital Marketing',
  ];

  const filteredProjects = activeCategory === 'All'
    ? portfolioData
    : portfolioData.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="relative w-full py-8 sm:py-10 md:py-12 px-4 sm:px-8 text-white bg-[#0A1022] select-none overflow-hidden">
      {/* Hand-Drawn Container Corners */}
      <div className="absolute top-3 left-4 z-20 opacity-70 pointer-events-none">
        <DoodleCorner position="top-left" color="#A8FF00" className="w-8 h-8 sm:w-10 sm:h-10" />
      </div>
      <div className="absolute top-3 right-4 z-20 opacity-70 pointer-events-none">
        <DoodleCorner position="top-right" color="#A8FF00" className="w-8 h-8 sm:w-10 sm:h-10" />
      </div>
      
      {/* Subtle Tech Grid inside Midnight Container */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 pb-4 border-b border-white/10">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-3">
              <FadeUpText delay={0.05} className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neon-lime/10 border border-neon-lime/20 text-neon-lime font-bold text-xs tracking-wider uppercase">
                <span>Selected Portfolio</span>
                <DoodleStar className="w-3.5 h-3.5 text-neon-lime" />
              </FadeUpText>
              <DoodleWashiTape text="FEATURED RELEASES" color="#A8FF00" className="hidden sm:inline-flex" />
            </div>
            
            <div className="flex items-center space-x-3">
              <MaskedLineReveal
                lines={["PROVEN COMMERCIAL WORK", "& CLIENT RESULTS."]}
                className="font-sans text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-[1.12]"
                delay={0.1}
              />
              <div className="hidden lg:block shrink-0 -mt-4">
                <DoodleCamera color="#A8FF00" className="w-9 h-8 opacity-80" />
              </div>
            </div>
          </div>
          
          <div className="mt-4 md:mt-0 max-w-md">
            <FadeUpParagraph
              className="text-sm sm:text-base text-zinc-300 font-normal font-sans leading-relaxed"
              delay={0.25}
            >
              A curated showcase of <SlowHighlight dark>high-performance websites</SlowHighlight>, <SlowHighlight dark>scalable software</SlowHighlight>, brand systems, and <SlowHighlight dark>high-impact digital campaigns</SlowHighlight>.
            </FadeUpParagraph>
            <DoodleUnderline className="w-48 h-3 text-neon-lime mt-2" />
          </div>
        </div>

        {/* Filter Pills Container (Glass Dark Stacked Card) */}
        <div className="bg-white/[0.06] backdrop-blur-md p-2 rounded-2xl sm:rounded-full mb-6 sm:mb-8 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)] overflow-x-auto">
          <div className="flex items-center space-x-1.5 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-sans transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-neon-lime text-primary-black font-bold shadow-[0_4px_16px_rgba(168,255,0,0.4)] scale-[1.02]'
                    : 'text-zinc-300 font-normal hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* =========================================================================
            PORTFOLIO CARDS (Deep Navy Card Stack with Neon Accents)
           ========================================================================= */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.75, delay: (idx % 3) * 0.08, ease: [0.19, 1, 0.22, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.45, ease: [0.19, 1, 0.22, 1] } }}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer bg-[#11182D] rounded-[32px] p-6 sm:p-7 flex flex-col justify-between border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_60px_rgba(6,69,216,0.3)] hover:border-white/25 transition-shadow duration-500 group"
              >
                <div>
                  {/* Visual Preview Box */}
                  <div className={`relative h-44 sm:h-48 rounded-2xl bg-gradient-to-br ${project.visualGradient} p-5 flex flex-col justify-between text-white overflow-hidden shadow-md border border-white/15 mb-5 group-hover:scale-[1.01] transition-transform duration-300`}>
                    <div className="flex items-center justify-between z-10">
                      <span className="text-[10.5px] font-bold uppercase tracking-wider bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 font-sans text-white">
                        {project.category}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="z-10">
                      <div className="text-[11px] font-medium text-white/80 font-sans uppercase tracking-wider">{project.client}</div>
                      <div className="font-sans font-bold text-lg sm:text-xl text-white tracking-tight">{project.title}</div>
                    </div>

                    {/* Gradient Overlay Accent */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                  </div>

                  {/* Description */}
                  <p className="font-sans font-normal text-xs sm:text-[13px] text-zinc-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Impact Metric Pill */}
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-neon-lime/10 border border-neon-lime/20 text-neon-lime text-xs font-bold font-sans">
                    <Sparkles className="w-3.5 h-3.5 text-neon-lime" />
                    <span>{project.metrics}</span>
                  </div>
                </div>

                {/* Bottom Tags */}
                <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10.5px] font-medium px-2.5 py-0.5 rounded-full bg-white/10 text-zinc-300 font-sans border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-bold text-white group-hover:text-neon-lime flex items-center space-x-1 font-sans transition-colors">
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Interactive Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-xl bg-[#0F172A] text-white rounded-[32px] p-6 sm:p-8 border border-white/20 shadow-[0_25px_80px_rgba(0,0,0,0.6)] z-10"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider bg-neon-lime text-black px-3 py-1 rounded-full">
                  {selectedProject.category}
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  ✕
                </button>
              </div>

              <h3 className="font-sans font-bold text-2xl sm:text-3xl text-white mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-zinc-300 font-sans text-sm leading-relaxed mb-4">
                {selectedProject.description}
              </p>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6">
                <div className="text-xs text-zinc-400 uppercase tracking-wider mb-1">Key Performance Metric</div>
                <div className="text-lg font-bold text-neon-lime flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-neon-lime" />
                  <span>{selectedProject.metrics}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="text-xs text-zinc-400">Client: <span className="text-white font-medium">{selectedProject.client}</span></div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-full bg-neon-lime text-black font-sans font-bold text-xs hover:bg-white transition-colors"
                >
                  Close Case Study
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
