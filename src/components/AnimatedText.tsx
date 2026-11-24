import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Cubic bezier matching himaaax's tab transition: cubic-bezier(0.256, 0.009, 0.125, 0.997)
const HIMAAAX_EASE = [0.256, 0.009, 0.125, 0.997] as const;

interface MaskedHeadingProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

// Letter-by-letter masked slide-up reveal for Hero
export const MaskedHeroWord: React.FC<MaskedHeadingProps> = ({
  text,
  className = '',
  delay = 0,
  stagger = 0.04,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const letters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : stagger,
        delayChildren: shouldReduceMotion ? 0 : delay,
      },
    },
  };

  const letterVariants = {
    hidden: {
      y: shouldReduceMotion ? '0%' : '150%',
      opacity: shouldReduceMotion ? 1 : 0,
    },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.45,
        ease: HIMAAAX_EASE,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className={`inline-flex overflow-hidden ${className}`}
    >
      {letters.map((char, index) => (
        <span key={index} className="himaaax-split-line inline-block overflow-hidden pb-1">
          <motion.span
            variants={letterVariants}
            className="himaaax-split-inner inline-block"
            style={{ willChange: 'transform, opacity' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
};

// Line-by-line masked reveal for Section Headings
// Uses .himaaax-split-line overflow-hidden mask with 150% Y-offset
// Re-triggers every time the user visits (once: false)
export const MaskedLineReveal: React.FC<{
  lines: string[];
  className?: string;
  delay?: number;
  stagger?: number;
}> = ({ lines, className = '', delay = 0, stagger = 0.06 }) => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : stagger,
        delayChildren: shouldReduceMotion ? 0 : delay,
      },
    },
  };

  const lineVariants = {
    hidden: {
      y: shouldReduceMotion ? 0 : '150%',
      opacity: shouldReduceMotion ? 1 : 0,
    },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.45,
        ease: HIMAAAX_EASE,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      className={className}
    >
      {lines.map((line, idx) => (
        <div key={idx} className="himaaax-split-line overflow-hidden block leading-tight pb-1">
          <motion.span
            variants={lineVariants}
            className="himaaax-split-inner block"
            style={{ willChange: 'transform, opacity' }}
          >
            {line}
          </motion.span>
        </div>
      ))}
    </motion.div>
  );
};

// Split Text Reveal that automatically splits by sentences or word chunks
// Wraps lines with himaaax-split-line mask and re-triggers on every scroll visit
export const SplitMaskedText: React.FC<{
  text: string;
  className?: string;
  delay?: number;
}> = ({ text, className = '', delay = 0 }) => {
  // Split on sentences or punctuation
  const lines = text
    .split(/(?<=[.!?])\s+/)
    .filter(Boolean);

  return (
    <MaskedLineReveal
      lines={lines.length > 0 ? lines : [text]}
      className={className}
      delay={delay}
    />
  );
};

// Paragraph smooth fade and masked slide up
// Re-triggers every time user scrolls past (once: false)
export const FadeUpParagraph: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = '', delay = 0.15 }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="himaaax-split-line overflow-hidden block">
      <motion.p
        initial={{
          opacity: shouldReduceMotion ? 1 : 0,
          y: shouldReduceMotion ? 0 : '100%',
        }}
        whileInView={{
          opacity: 1,
          y: '0%',
        }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.5,
          delay: shouldReduceMotion ? 0 : delay,
          ease: HIMAAAX_EASE,
        }}
        className={className}
        style={{ willChange: 'transform, opacity' }}
      >
        {children}
      </motion.p>
    </div>
  );
};

// Generic Text / Heading smooth fade and masked slide up
// Re-triggers every time user scrolls past (once: false)
export const FadeUpText: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = '', delay = 0.08 }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="himaaax-split-line overflow-hidden block">
      <motion.div
        initial={{
          opacity: shouldReduceMotion ? 1 : 0,
          y: shouldReduceMotion ? 0 : '120%',
        }}
        whileInView={{
          opacity: 1,
          y: '0%',
        }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.45,
          delay: shouldReduceMotion ? 0 : delay,
          ease: HIMAAAX_EASE,
        }}
        className={className}
        style={{ willChange: 'transform, opacity' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// Slow Green Highlighter for key important words across the entire site
// Slowly draws from left to right as the user scrolls into view
// Re-triggers every time user visits (once: false)
export const SlowHighlight: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  dark?: boolean;
}> = ({
  children,
  className = '',
  delay = 0.25,
  duration = 0.85,
  dark = false,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <span className={`relative inline-block px-1.5 py-0.5 rounded mx-0.5 font-bold ${className}`}>
      {/* Animated Green Highlighter Sweep from Left to Right */}
      <motion.span
        initial={{ scaleX: shouldReduceMotion ? 1 : 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{
          duration: shouldReduceMotion ? 0.01 : duration,
          delay: shouldReduceMotion ? 0 : delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          transformOrigin: 'left center',
          willChange: 'transform',
        }}
        className={`absolute inset-0 rounded pointer-events-none ${
          dark
            ? 'bg-[#A8FF00] shadow-[0_0_16px_rgba(168,255,0,0.55)]'
            : 'bg-[#A8FF00]/60 border-b-2 border-[#65A30D]'
        }`}
      />
      {/* Foreground text sitting on top of the green highlight */}
      <span
        className={`relative z-10 transition-colors duration-300 ${
          dark ? 'text-primary-black font-extrabold' : 'text-primary-black font-bold'
        }`}
      >
        {children}
      </span>
    </span>
  );
};
