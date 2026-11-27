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

  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 28 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 28 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg']);

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
        return <DesignerAvatar size={64} className="sm:w-[70px] sm:h-[70px] border-2 border-white" />;
      case 'developer':
        return <DeveloperAvatar size={64} className="sm:w-[70px] sm:h-[70px] border-2 border-white" />;
      case 'punk':
        return <PunkAvatar size={64} className="sm:w-[70px] sm:h-[70px] border-2 border-white" />;
      case 'ape':
      default:
        return <ApeAvatar size={64} className="sm:w-[70px] sm:h-[70px] border-2 border-white" />;
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.9, y: 25 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.0, delay: floatDelay, ease: [0.19, 1, 0.22, 1] }}
      style={{
        transformStyle: 'preserve-3d',
      }}
      className={`relative z-20 cursor-pointer select-none ${className}`}
    >
      <motion.div
        animate={{
          y: [-4, 4, -4],
          rotate: [defaultRotate - 0.8, defaultRotate + 0.8, defaultRotate - 0.8],
        }}
        transition={{
          repeat: Infinity,
          duration: 7.5,
          ease: 'easeInOut',
          delay: floatDelay,
        }}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{
          scale: 1.04,
          transition: { duration: 0.35, ease: [0.19, 1, 0.22, 1] },
        }}
        /* Clean, visually independent solid container — zero overlays, zero murky layers */
        className="bg-[#04206E] border border-white/30 rounded-[26px] p-5 sm:p-6 flex flex-col items-center justify-center min-w-[155px] sm:min-w-[175px] md:min-w-[195px] shadow-[0_16px_36px_rgba(0,8,40,0.5)] hover:border-white/70 hover:shadow-[0_20px_45px_rgba(0,8,40,0.65)] transition-all duration-300"
      >
        {/* Avatar with clean border ring */}
        <div className="relative mb-3">
          {renderAvatar()}
        </div>

        {/* Name in clean DM Sans Bold */}
        <div className="font-sans text-white text-sm sm:text-[15px] font-bold tracking-tight text-center">
          {name}
        </div>

        {/* Role */}
        {role && (
          <div className="font-sans text-neon-lime text-[11px] font-semibold tracking-wide mt-0.5 text-center">
            {role}
          </div>
        )}

        {/* Points / Rating Badge */}
        <div className="mt-3 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white font-sans text-[11px] font-medium tracking-tight text-center">
          {points}
        </div>
      </motion.div>
    </motion.div>
  );
};
