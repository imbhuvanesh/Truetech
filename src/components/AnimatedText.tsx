import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Premium quintic easing curve [0.19, 1, 0.22, 1] for ultra-smooth, slow, silky editorial motion
const LUXURY_EASE = [0.19, 1, 0.22, 1] as const;

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
  stagger = 0.045,
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
      y: shouldReduceMotion ? '0%' : '140%',
      opacity: shouldReduceMotion ? 1 : 0,
    },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.85,
        ease: LUXURY_EASE,
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
// Uses .himaaax-split-line overflow-hidden mask with Y-offset
// Re-triggers every time the user visits (once: false)
export const MaskedLineReveal: React.FC<{
  lines: string[];
  className?: string;
  delay?: number;
  stagger?: number;
}> = ({ lines, className = '', delay = 0, stagger = 0.08 }) => {
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
      y: shouldReduceMotion ? 0 : '140%',
      opacity: shouldReduceMotion ? 1 : 0,
    },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.95,
        ease: LUXURY_EASE,
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
export const SplitMaskedText: React.FC<{
  text: string;
  className?: string;
  delay?: number;
}> = ({ text, className = '', delay = 0 }) => {
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
          duration: shouldReduceMotion ? 0 : 1.05,
          delay: shouldReduceMotion ? 0 : delay,
          ease: LUXURY_EASE,
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
          duration: shouldReduceMotion ? 0 : 0.9,
          delay: shouldReduceMotion ? 0 : delay,
          ease: LUXURY_EASE,
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
// Slowly and smoothly draws from left to right as the user scrolls into view
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
  delay = 0.3,
  duration = 1.35,
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
          ease: LUXURY_EASE,
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
