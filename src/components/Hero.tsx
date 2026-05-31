import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Compass } from './Compass';
import { WeatherWidget } from './WeatherWidget';

interface HeroProps {
  activeDirection: 'N' | 'E' | 'S' | 'W' | 'C';
  onDirectionClick: (direction: 'N' | 'E' | 'S' | 'W' | 'C') => void;
}

export function Hero({ activeDirection, onDirectionClick }: HeroProps) {
  return (
    <div className="relative overflow-hidden pt-20 sm:pt-28 pb-20 lg:pt-24 lg:pb-32 bg-transparent">
      
      {/* Background soft light beams */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-maroon/5 rounded-full blur-[100px] pointer-events-none animate-blob" />

      <div className="relative max-w-[94%] xl:max-w-[90%] 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Class badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-maroon/5 border border-maroon/10 text-maroon text-xs font-bold tracking-wider mb-6"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>CLASS OF 2026</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl text-slate-900 dark:text-white"
        >
          🧭 <span className="text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-maroon dark:via-gold dark:to-blue-600">Campus Compass</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-maroon via-gold to-blue-600">2026</span>
        </motion.h1>

        {/* Subheadline & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto"
        >
          <p className="text-base sm:text-lg font-bold text-maroon italic tracking-wide">
            "Every great journey begins with a direction."
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Welcome to Amrita Amaravati. Whether you're excited, nervous, or curious, this magical compass will guide you through everything you need to know before your first day on campus.
          </p>
        </motion.div>

        {/* Big Spinning Center Compass */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 70, delay: 0.3 }}
          className="mt-12 mb-10"
        >
          <Compass 
            activeDirection={activeDirection} 
            onDirectionClick={onDirectionClick} 
            size={330} 
          />
        </motion.div>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => onDirectionClick('N')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-transparent text-base font-extrabold rounded-full text-white bg-maroon hover:bg-[#720E2C] shadow-lg hover:shadow-maroon/20 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            🚀 Start Exploring
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <a
            href="#survival-kit"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-800 rounded-full border border-slate-200 bg-white/70 backdrop-blur-md hover:bg-slate-50 transition-all duration-300 shadow-sm hover:shadow"
          >
            Survival Kit
          </a>
        </motion.div>

        {/* Active Direction Hint banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5 text-xs font-semibold text-slate-500 shadow-sm select-none"
        >
          <span className="w-2 h-2 rounded-full bg-maroon animate-ping" />
          <span>Click on the compass points (N, E, S, W, Center) to navigate.</span>
        </motion.div>

        <WeatherWidget />

      </div>
    </div>
  );
}
