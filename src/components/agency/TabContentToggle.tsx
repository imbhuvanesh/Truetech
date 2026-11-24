import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { DoodleCorner, DoodleChatBubble, DoodleLightbulb, DoodleSparkle, DoodleCardBorder } from '../Doodles';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(SplitText);
}

interface TabItem {
  id: string;
  label: string;
  text: string;
}

const TAB_CONTENT: TabItem[] = [
  {
    id: 'teams',
    label: 'Teams',
    text: 'Work that moves at the speed of trust. Shared language, aligned direction, and a process that makes collaboration feel genuinely effortless.',
  },
  {
    id: 'founders',
    label: 'Founders',
    text: 'Turn early conviction into something people actually want. From rough idea to refined product — without losing what made it compelling.',
  },
  {
    id: 'designers',
    label: 'Designers',
    text: 'Craft interfaces that speak before a single word is read. Visual systems built to carry meaning across every touchpoint of a product.',
  },
  {
    id: 'engineers',
    label: 'Engineers',
    text: 'Build with precision on a foundation that scales. Architecture decisions that outlast the brief and hold up under real-world pressure.',
  },
];

const DURATION = 0.85;
const STAGGER = 0.08;
const OVERLAP = '<0.45';
const Y_OFFSET = 130;

export const TabContentToggle: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const splitsRef = useRef<any[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const queuedIndexRef = useRef<number | null>(null);
  const switchTabRef = useRef<(idx: number) => void>(() => { });

  const runTransition = useCallback((nextIndex: number) => {
    const currentSplit = splitsRef.current[activeIndexRef.current];
    const nextSplit = splitsRef.current[nextIndex];

    const currentLines = currentSplit?.lines;
    const nextLines = nextSplit?.lines;

    if (!currentLines || !nextLines) {
      activeIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);
      isAnimatingRef.current = false;
      return;
    }

    gsap.killTweensOf(currentLines);
    gsap.killTweensOf(nextLines);

    gsap.set(currentLines, { yPercent: 0, opacity: 1 });
    gsap.set(nextLines, { yPercent: Y_OFFSET, opacity: 1 });

    tlRef.current?.kill();

    tlRef.current = gsap.timeline({
      onComplete: () => {
        activeIndexRef.current = nextIndex;
        setActiveIndex(nextIndex);
        isAnimatingRef.current = false;

        if (queuedIndexRef.current !== null && queuedIndexRef.current !== activeIndexRef.current) {
          const q = queuedIndexRef.current;
          queuedIndexRef.current = null;
          switchTabRef.current(q);
        }
      },
    });

    tlRef.current.to(currentLines, {
      yPercent: Y_OFFSET,
      duration: DURATION * 0.7,
      stagger: STAGGER * 0.75,
      ease: 'power2.in',
    });

    tlRef.current.to(
      nextLines,
      {
        yPercent: 0,
        duration: DURATION,
        stagger: STAGGER,
        ease: 'power3.out',
      },
      OVERLAP
    );
  }, []);

  const switchTab = useCallback((nextIndex: number) => {
    if (nextIndex === activeIndexRef.current) return;

    if (isAnimatingRef.current) {
      queuedIndexRef.current = nextIndex;
      return;
    }

    isAnimatingRef.current = true;
    setActiveIndex(nextIndex);
    runTransition(nextIndex);
  }, [runTransition]);

  useEffect(() => {
    switchTabRef.current = switchTab;
  }, [switchTab]);

  useEffect(() => {
    // Initialize SplitText on all role-content panels
    const panels = panelsRef.current.filter(Boolean) as HTMLDivElement[];
    if (panels.length === 0) return;

    // Clean previous splits if any
    splitsRef.current.forEach((split) => {
      try {
        split.revert();
      } catch {
        // ignore revert error
      }
    });

    splitsRef.current = panels.map((el, i) => {
      try {
        return SplitText.create(el, {
          type: 'lines',
          mask: 'lines',
          linesClass: 'himaaax-split-line',
          autoSplit: true,
          onSplit(self: any) {
            gsap.set(el, { opacity: 1 });
            if (i === activeIndexRef.current) {
              gsap.set(self.lines, { yPercent: 0, opacity: 1 });
            } else {
              gsap.set(self.lines, { yPercent: Y_OFFSET, opacity: 1 });
            }
          },
        });
      } catch {
        // Fallback if SplitText is not available
        return {
          lines: [el],
          revert: () => { },
        };
      }
    });

    // Explicitly guarantee initial line states
    splitsRef.current.forEach((split, i) => {
      if (split && split.lines) {
        if (i === activeIndexRef.current) {
          gsap.set(split.lines, { yPercent: 0, opacity: 1 });
        } else {
          gsap.set(split.lines, { yPercent: Y_OFFSET, opacity: 1 });
        }
      }
    });

    // Re-trigger animation every time user visits (scrolls into view)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentSplit = splitsRef.current[activeIndexRef.current];
            if (currentSplit?.lines) {
              gsap.fromTo(
                currentSplit.lines,
                { yPercent: Y_OFFSET, opacity: 1 },
                {
                  yPercent: 0,
                  duration: DURATION + 0.2,
                  stagger: STAGGER,
                  ease: 'power3.out',
                }
              );
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      tlRef.current?.kill();
      splitsRef.current.forEach((split) => {
        try {
          split.revert();
        } catch {
          // ignore
        }
      });
    };
  }, []);

  return (
    <section className="relative w-full py-8 sm:py-10 md:py-12 px-4 sm:px-8 bg-[#DCF4A2] border-y border-black/[0.06] overflow-hidden">
      {/* Hand-Drawn Container Corners */}
      <div className="absolute top-3 left-4 z-10 opacity-70 pointer-events-none">
        <DoodleCorner position="top-left" color="#080808" className="w-8 h-8 sm:w-10 sm:h-10" />
      </div>
      <div className="absolute top-3 right-4 z-10 opacity-70 pointer-events-none">
        <DoodleCorner position="top-right" color="#080808" className="w-8 h-8 sm:w-10 sm:h-10" />
      </div>

      {/* Floating Doodle Accents */}
      <div className="absolute top-8 left-8 hidden lg:block pointer-events-none opacity-80">
        <DoodleLightbulb color="#080808" className="w-9 h-11" />
      </div>
      <div className="absolute top-8 right-8 hidden lg:block pointer-events-none opacity-80">
        <DoodleChatBubble color="#080808" className="w-10 h-8" />
      </div>

      <div ref={containerRef} className="tabs-demo relative z-10">
        {/* Section Header Label */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-royal-blue/10 text-royal-blue font-bold text-xs tracking-wider uppercase mb-3">
            <span>Collaboration Framework</span>
            <DoodleSparkle color="#080808" className="w-3.5 h-3.5" />
          </div>
          <h2 className="text-sm font-semibold tracking-widest text-zinc-600 uppercase">
            Built for High-Growth Product Environments
          </h2>
        </div>

        {/* Tab Buttons matching himaaax code with ID #tabs */}
        <div className="tabs" id="tabs" role="tablist">
          {TAB_CONTENT.map((tab, idx) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeIndex === idx}
              onClick={() => switchTab(idx)}
              className={`tab ${activeIndex === idx ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Wrapper matching himaaax code with ID #contentWrapper */}
        <div className="content-wrapper relative bg-white/60 backdrop-blur-sm rounded-3xl p-6 sm:p-10 border border-black/[0.04] shadow-card-soft" id="contentWrapper">
          <DoodleCardBorder color="#080808" />
          {TAB_CONTENT.map((tab, idx) => (
            <div
              key={tab.id}
              ref={(el) => {
                panelsRef.current[idx] = el;
              }}
              className="role-content select-text"
              style={{
                pointerEvents: activeIndex === idx ? 'auto' : 'none',
              }}
            >
              {tab.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
