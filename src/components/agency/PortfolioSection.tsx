import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/agencyData';
import type { ProjectItem } from '../../data/agencyData';
import { MaskedLineReveal, FadeUpParagraph, FadeUpText } from '../AnimatedText';

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    'All',
    'Web Development',
    'App & Software',
    'Creative Design',
    'Video Production',
    'Digital Marketing',
  ];

  const filteredProjects = activeCategory === 'All'
    ? portfolioData
    : portfolioData.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="relative w-full py-16 sm:py-24 md:py-32 px-4 sm:px-8 text-black bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 pb-6 border-b border-black/[0.08]">
          <div className="max-w-2xl">
            <FadeUpText delay={0.05} className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-royal-blue/10 text-royal-blue font-bold text-xs tracking-wider uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-royal-blue animate-pulse" />
              <span>Selected Portfolio</span>
            </FadeUpText>
            
            <MaskedLineReveal
              lines={["PROVEN COMMERCIAL WORK", "& CLIENT RESULTS."]}
              className="font-sans text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-black leading-[1.12]"
              delay={0.1}
            />
          </div>
          
          <FadeUpParagraph
            className="mt-4 md:mt-0 max-w-md text-sm sm:text-base text-zinc-600 font-normal font-sans leading-relaxed"
            delay={0.25}
          >
            A curated showcase of high-performance websites, scalable software, brand systems, and high-impact digital campaigns.
          </FadeUpParagraph>
        </div>

        {/* Filter Pills Container */}
        <div className="bg-[#F6F6F6] p-2 rounded-2xl sm:rounded-full mb-10 sm:mb-12 border border-black/[0.04] shadow-card-soft overflow-x-auto">
          <div className="flex items-center space-x-1.5 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-sans transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-royal-blue text-white font-bold shadow-md scale-[1.02]'
                    : 'text-zinc-600 font-normal hover:text-black hover:bg-white/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* =========================================================================
            PORTFOLIO CARDS MATCHING REFERENCE CARD THEME
            bg-[#F6F6F6], rounded-[32px], DM Sans, soft layered shadows
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
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: (idx % 3) * 0.05 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer bg-[#F6F6F6] rounded-[32px] p-6 sm:p-7 flex flex-col justify-between border border-black/[0.035] shadow-card-soft hover:shadow-card-hover transition-all duration-300 group"
              >
                <div>
                  {/* Visual Preview Box */}
                  <div className={`relative h-44 sm:h-48 rounded-2xl bg-gradient-to-br ${project.visualGradient} p-5 flex flex-col justify-between text-white overflow-hidden shadow-md border border-white/10 mb-5 group-hover:scale-[1.01] transition-transform duration-300`}>
                    <div className="flex items-center justify-between z-10">
                      <span className="text-[10.5px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 font-sans">
                        {project.category}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="z-10">
                      <div className="font-sans font-bold text-xs text-white/70 uppercase tracking-widest">{project.client}</div>
                      <div className="font-sans font-bold text-base sm:text-lg text-white leading-tight drop-shadow-md mt-0.5">
                        {project.title}
                      </div>
                    </div>

                    <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-white/10 rounded-full blur-xl pointer-events-none" />
                  </div>

                  {/* Outcome Metric Badge */}
                  <div className="bg-white rounded-xl px-3.5 py-2 border border-black/[0.04] flex items-center justify-between mb-3.5 shadow-sm">
                    <span className="text-[11px] font-normal text-zinc-500 font-sans">Key Outcome</span>
                    <span className="font-sans text-xs font-bold text-emerald-600">{project.metrics}</span>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm text-zinc-600 line-clamp-2 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Pill Tags & Action */}
                <div className="mt-5 pt-3.5 border-t border-black/[0.04] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[10.5px] font-medium bg-white text-zinc-700 px-2.5 py-1 rounded-lg border border-black/[0.03] shadow-xs font-sans">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-bold text-royal-blue flex items-center space-x-1 font-sans group-hover:underline underline-offset-4">
                    <span>View Case</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <div className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-black/10 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
              <div>
                <span className="text-xs font-bold uppercase text-zinc-400 font-sans">{selectedProject.client} • {selectedProject.year}</span>
                <h3 className="font-sans font-bold text-2xl text-black mt-0.5">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 flex items-center justify-center font-bold"
              >
                ✕
              </button>
            </div>

            <div className="py-5 space-y-5">
              <div className={`w-full h-48 rounded-2xl bg-gradient-to-br ${selectedProject.visualGradient} p-6 flex flex-col justify-end text-white shadow-inner`}>
                <div className="text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-3 py-1 rounded-full w-max mb-2 font-sans">
                  {selectedProject.category}
                </div>
                <div className="font-sans font-bold text-xl drop-shadow">{selectedProject.metrics}</div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-black mb-1.5 font-sans">Project Overview</h4>
                <p className="text-sm text-zinc-600 leading-relaxed font-sans font-normal">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-black mb-2 font-sans">Technologies & Disciplines</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map(t => (
                    <span key={t} className="bg-[#F6F6F6] text-zinc-800 text-xs font-medium px-3 py-1.5 rounded-xl border border-black/[0.04] font-sans flex items-center space-x-1.5">
                      <Sparkles className="w-3 h-3 text-royal-blue" />
                      <span>{t}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
              <button
                onClick={() => setSelectedProject(null)}
                className="text-xs font-semibold text-zinc-500 hover:text-black font-sans"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedProject(null);
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2.5 bg-royal-blue text-white font-sans text-xs font-bold rounded-full hover:bg-black transition-colors shadow-md flex items-center space-x-1.5"
              >
                <span>Request Similar Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
