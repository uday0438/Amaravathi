import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import amritaLogo from '@/assets/logo.png';
import amritaCap from '@/assets/cap.png';
import { Compass } from 'lucide-react';

export function SplashLoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F8FAFC] dark:bg-slate-950 transition-colors duration-500 overflow-hidden"
    >
      {/* Background Soft Ambient Light Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-maroon/5 rounded-full blur-[80px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-gold/5 rounded-full blur-[60px] animate-pulse" />

      {/* Main Logo Container */}
      <div className="relative flex flex-col items-center text-center max-w-sm px-6">
        
        {/* Animated Logo Wrapper */}
        <div className="relative">
          {/* Logo Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 65, damping: 15, delay: 0.2 }}
            className="relative w-44 h-44 flex items-center justify-center z-10"
          >
            <img 
              src={amritaLogo} 
              alt="Amrita University Logo" 
              className="w-full h-full object-contain filter drop-shadow-[0_12px_32px_rgba(139,21,56,0.15)] dark:brightness-95"
            />
            {/* Pulsing Gold Halo Ring */}
            <div className="absolute -inset-1 rounded-full border-2 border-gold/20 animate-ping opacity-45 pointer-events-none" />
          </motion.div>

          {/* Animated Falling Graduation Cap */}
          <motion.div
            initial={{ opacity: 0, y: -159, x: "-55%", rotate: -36 }}
            animate={{ opacity: 1, y: -78, x: "-60%", rotate: -18 }}
            transition={{ 
              type: 'spring', 
              stiffness: 95, 
              damping: 9, 
              delay: 0.85 
            }}
            className="absolute top-0 left-1/2 z-20 w-60 pointer-events-none drop-shadow-[0_16px_32px_rgba(0,0,0,0.18)]"
          >
            <img 
              src={amritaCap} 
              alt="Graduation Cap" 
              className="w-full object-contain"
            />
          </motion.div>
        </div>

        {/* Institution Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8"
        >
          <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-maroon text-glow-maroon">
            Amrita Vishwa Vidyapeetham
          </span>
          <h1 className="text-xl font-black text-slate-800 dark:text-slate-100 tracking-tight mt-1">
            Campus Compass <span className="text-transparent bg-clip-text bg-gradient-to-r from-maroon to-gold">2026</span>
          </h1>
        </motion.div>

        {/* Dynamic Premium Loading Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="w-48 h-1 bg-slate-200/60 dark:bg-slate-800 rounded-full mt-10 overflow-hidden relative"
        >
          <motion.div 
            className="h-full bg-gradient-to-r from-maroon via-gold to-blue-500 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </motion.div>

        {/* Subtle subtext */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1 }}
          className="mt-6 flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest"
        >
          <Compass className="w-3 h-3 animate-spin-slow" />
          <span>Setting coordinates...</span>
        </motion.div>

      </div>
    </motion.div>
  );
}
