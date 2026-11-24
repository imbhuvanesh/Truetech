import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { DesignerAvatar, DeveloperAvatar, PunkAvatar, ApeAvatar } from './Avatars';

interface FloatingNFTCardProps {
  type: 'designer' | 'developer' | 'punk' | 'ape';
  name: string;
  points: string;
  role?: string;
  defaultRotate: number;
  className?: string;
  floatDelay?: number;
}

export const FloatingNFTCard: React.FC<FloatingNFTCardProps> = ({
  type,
  name,
  points,
  role,
  defaultRotate,
  className = '',
  floatDelay = 0,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse tilt physics using spring motion
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 350, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 350, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const renderAvatar = () => {
    switch (type) {
      case 'designer':
        return <DesignerAvatar size={66} className="sm:w-[74px] sm:h-[74px] shadow-md border-[2.5px] border-white" />;
      case 'developer':
        return <DeveloperAvatar size={66} className="sm:w-[74px] sm:h-[74px] shadow-md border-[2.5px] border-white" />;
      case 'punk':
        return <PunkAvatar size={66} className="sm:w-[74px] sm:h-[74px] shadow-md border-[2.5px] border-white" />;
      case 'ape':
      default:
        return <ApeAvatar size={66} className="sm:w-[74px] sm:h-[74px] shadow-md border-[2.5px] border-white" />;
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.85, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: floatDelay, ease: [0.16, 1, 0.3, 1] }}
      style={{
        transformStyle: 'preserve-3d',
      }}
      className={`relative z-20 cursor-pointer select-none ${className}`}
    >
      <motion.div
        animate={{
          y: [-5, 5, -5],
          rotate: [defaultRotate - 1, defaultRotate + 1, defaultRotate - 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 5.5,
          ease: 'easeInOut',
          delay: floatDelay,
        }}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{
          scale: 1.06,
          transition: { duration: 0.2 },
        }}
        className="glass-nft-card rounded-[30px] p-5 sm:p-6 flex flex-col items-center justify-center min-w-[155px] sm:min-w-[180px] md:min-w-[200px] shadow-[0_20px_50px_rgba(0,10,60,0.35),0_0_0_1px_rgba(255,255,255,0.2)_inset] hover:shadow-[0_25px_65px_rgba(0,10,70,0.5),0_0_0_1px_rgba(255,255,255,0.3)_inset] transition-all"
      >
        {/* Glow sheen on top */}
        <div className="absolute inset-0 rounded-[30px] bg-gradient-to-b from-white/40 via-white/10 to-transparent pointer-events-none" />

        {/* Avatar with pure white border ring */}
        <div className="relative mb-3 sm:mb-3.5">
          {renderAvatar()}
        </div>

        {/* Name in DM Sans Bold (700) */}
        <div className="font-sans text-white text-sm sm:text-[15px] font-bold tracking-tight text-center drop-shadow-[0_2px_4px_rgba(0,10,40,0.6)]">
          {name}
        </div>

        {/* Role if provided */}
        {role && (
          <div className="font-sans text-neon-lime text-[11px] font-medium tracking-wide mt-0.5 text-center drop-shadow-[0_1px_2px_rgba(0,10,40,0.5)]">
            {role}
          </div>
        )}

        {/* Points / Metric in DM Sans Regular (400) */}
        <div className="font-sans text-white/90 text-[10.5px] sm:text-xs font-normal tracking-normal mt-0.5 text-center drop-shadow-[0_1px_3px_rgba(0,10,40,0.5)]">
          {points}
        </div>
      </motion.div>
    </motion.div>
  );
};
