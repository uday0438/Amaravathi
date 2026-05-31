import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Compass as CompassIcon } from 'lucide-react';
import compass3d from '@/assets/compass3d.png';

interface CompassProps {
  activeDirection: 'N' | 'E' | 'S' | 'W' | 'C';
  onDirectionClick?: (direction: 'N' | 'E' | 'S' | 'W' | 'C') => void;
  size?: number;
}

export function Compass({ activeDirection, onDirectionClick, size = 340 }: CompassProps) {
  // Stateful window resize listener for mobile scaling
  const [responsiveSize, setResponsiveSize] = React.useState(size);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 400) {
        setResponsiveSize(Math.min(size, 250));
      } else if (window.innerWidth < 640) {
        setResponsiveSize(Math.min(size, 290));
      } else {
        setResponsiveSize(size);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [size]);

  // Mapping directions to angles
  const directionAngles = {
    N: 0,
    E: 90,
    S: 180,
    W: 270,
    C: 360 + 45, // Center/Future gets diagonal angle
  };

  const currentAngle = directionAngles[activeDirection] || 0;

  // 3D Hover Tilt effect values using spring physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["18deg", "-18deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-18deg", "18deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handlePointClick = (dir: 'N' | 'E' | 'S' | 'W' | 'C', e: React.MouseEvent) => {
    e.stopPropagation();
    if (onDirectionClick) {
      onDirectionClick(dir);
    }
  };

  return (
    <div 
      className="relative flex items-center justify-center select-none"
      style={{ width: responsiveSize, height: responsiveSize, perspective: 1000 }}
    >
      {/* Dynamic Ambient Glow Behind Compass */}
      <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-maroon/15 via-gold/10 to-indigo-500/10 blur-2xl animate-pulse-glow" />

      {/* 3D Tilting Master Compass Container */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-full rounded-full cursor-pointer flex items-center justify-center p-3 transition-shadow duration-300 shadow-[0_30px_70px_rgba(0,0,0,0.12)] hover:shadow-[0_45px_90px_rgba(139,21,56,0.15)] bg-transparent"
      >
        
        {/* Under-shadow layer for depth */}
        <div 
          className="absolute inset-[15px] rounded-full bg-slate-950/5 pointer-events-none blur-sm"
          style={{ transform: "translateZ(5px)" }}
        />

        {/* 3D Rotating Compass Image Layer */}
        <motion.div
          animate={{ rotate: currentAngle }}
          transition={{ type: 'spring', stiffness: 50, damping: 7.5, mass: 1.35 }}
          className="absolute inset-[15px] pointer-events-none z-10 flex items-center justify-center"
          style={{ transformStyle: "preserve-3d", transform: "translateZ(18px)" }}
        >
          <img 
            src={compass3d} 
            alt="3D Compass Rose" 
            className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
          />
        </motion.div>

        {/* Convex Glass Lens Shine Overlay (Sits in front of dial) */}
        <div 
          className="absolute inset-[18px] rounded-full bg-gradient-to-br from-white/30 via-white/0 to-transparent pointer-events-none z-30" 
          style={{ transform: "translateZ(25px)" }}
        />
        {/* Convex lens glare curve shape */}
        <div 
          className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-b from-white/12 to-transparent rotate-[35deg] rounded-full pointer-events-none z-30"
          style={{ transform: "translateZ(26px)" }}
        />

        {/* Clickable Compass Direction Labels (Float in front of the sphere) */}
        
        {/* ACADEMICS (NORTH) */}
        <button
          onClick={(e) => handlePointClick('N', e)}
          className={`absolute top-0 left-1/2 -translate-x-1/2 group cursor-pointer transition-all duration-300 z-40 ${
            activeDirection === 'N' ? 'scale-110' : 'hover:scale-105'
          }`}
          style={{ transform: "translateZ(30px) translateX(-50%)" }}
          aria-label="Navigate to Academics"
        >
          <span className={`text-[10px] sm:text-xs uppercase font-extrabold tracking-[0.25em] transition-all duration-300 ${
            activeDirection === 'N' 
              ? 'text-maroon text-glow-maroon font-black scale-105' 
              : 'text-slate-700 hover:text-maroon dark:text-slate-300'
          }`}>
            Academics
          </span>
        </button>

        {/* CLUBS (EAST) */}
        <button
          onClick={(e) => handlePointClick('E', e)}
          className={`absolute right-[-15px] top-1/2 -translate-y-1/2 group cursor-pointer transition-all duration-300 z-40 ${
            activeDirection === 'E' ? 'scale-110' : 'hover:scale-105'
          }`}
          style={{ transform: "translateZ(30px) translateY(-50%)" }}
          aria-label="Navigate to Clubs"
        >
          <span className={`text-[10px] sm:text-xs uppercase font-extrabold tracking-[0.25em] transition-all duration-300 ${
            activeDirection === 'E' 
              ? 'text-maroon text-glow-maroon font-black scale-105' 
              : 'text-slate-700 hover:text-maroon dark:text-slate-300'
          }`}>
            Clubs
          </span>
        </button>

        {/* CAMPUS LIFE (SOUTH) */}
        <button
          onClick={(e) => handlePointClick('S', e)}
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 group cursor-pointer transition-all duration-300 z-40 ${
            activeDirection === 'S' ? 'scale-110' : 'hover:scale-105'
          }`}
          style={{ transform: "translateZ(30px) translateX(-50%)" }}
          aria-label="Navigate to Campus Life"
        >
          <span className={`text-[10px] sm:text-xs uppercase font-extrabold tracking-[0.25em] transition-all duration-300 ${
            activeDirection === 'S' 
              ? 'text-maroon text-glow-maroon font-black scale-105' 
              : 'text-slate-700 hover:text-maroon dark:text-slate-300'
          }`}>
            Campus Life
          </span>
        </button>

        {/* CAREERS (WEST) */}
        <button
          onClick={(e) => handlePointClick('W', e)}
          className={`absolute left-[-15px] top-1/2 -translate-y-1/2 group cursor-pointer transition-all duration-300 z-40 ${
            activeDirection === 'W' ? 'scale-110' : 'hover:scale-105'
          }`}
          style={{ transform: "translateZ(30px) translateY(-50%)" }}
          aria-label="Navigate to Careers"
        >
          <span className={`text-[10px] sm:text-xs uppercase font-extrabold tracking-[0.25em] transition-all duration-300 ${
            activeDirection === 'W' 
              ? 'text-maroon text-glow-maroon font-black scale-105' 
              : 'text-slate-700 hover:text-maroon dark:text-slate-300'
          }`}>
            Careers
          </span>
        </button>

        {/* CENTER — YOUR FUTURE ROADMAP BUTTON */}
        <button
          onClick={(e) => handlePointClick('C', e)}
          className={`absolute w-12 h-12 rounded-full flex items-center justify-center group cursor-pointer transition-all duration-300 z-50 ${
            activeDirection === 'C' 
              ? 'bg-gradient-to-tr from-maroon via-maroon to-gold text-white shadow-[0_4px_16px_rgba(139,21,56,0.35)] scale-110 border border-gold/30' 
              : 'bg-white/95 text-slate-400 hover:text-maroon hover:bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-slate-200/50'
          }`}
          style={{ transform: "translateZ(40px)" }}
          aria-label="Navigate to Journey Timeline"
        >
          <CompassIcon className={`w-5 h-5 transition-transform duration-500 ${
            activeDirection === 'C' ? 'rotate-[135deg] text-white' : 'group-hover:rotate-45'
          }`} />
        </button>

      </motion.div>
    </div>
  );
}
