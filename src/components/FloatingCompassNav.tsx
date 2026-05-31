import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass as CompassIcon, ChevronUp } from 'lucide-react';

interface FloatingCompassNavProps {
  activeDirection: 'N' | 'E' | 'S' | 'W' | 'C';
  onDirectionClick: (direction: 'N' | 'E' | 'S' | 'W' | 'C') => void;
}

export function FloatingCompassNav({ activeDirection, onDirectionClick }: FloatingCompassNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const directionAngles = {
    N: 0,
    E: 90,
    S: 180,
    W: 270,
    C: 360 + 45,
  };

  const currentAngle = directionAngles[activeDirection] || 0;

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleNav = (dir: 'N' | 'E' | 'S' | 'W' | 'C') => {
    onDirectionClick(dir);
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none">
      
      {/* Scroll to Top Small Button */}
      <AnimatePresence>
        {activeDirection !== 'N' && activeDirection !== 'C' && (
          <motion.button
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white/90 backdrop-blur shadow-md hover:bg-slate-50 border border-slate-200 text-slate-500 hover:text-maroon transition-all cursor-pointer"
            title="Scroll to Top"
          >
            <ChevronUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Menu Wrapper */}
      <div className="relative flex items-center justify-center">
        
        {/* Navigation Ring (Poles) */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay Backdrop to close */}
              <div 
                className="fixed inset-0 z-[-1] cursor-default bg-transparent"
                onClick={() => setIsOpen(false)}
              />

              {/* Polar Coordinates Buttons */}
              
              {/* North Button */}
              <motion.button
                initial={{ opacity: 0, y: 0, scale: 0.5 }}
                animate={{ opacity: 1, y: -72, scale: 1 }}
                exit={{ opacity: 0, y: 0, scale: 0.5 }}
                onClick={() => handleNav('N')}
                className={`absolute w-10 h-10 rounded-full flex items-center justify-center border font-bold text-xs shadow-md transition-all cursor-pointer ${
                  activeDirection === 'N' 
                    ? 'bg-maroon text-white border-maroon' 
                    : 'bg-white/95 text-slate-600 border-slate-200 hover:text-maroon'
                }`}
                title="North - Academics"
              >
                N
              </motion.button>

              {/* East Button */}
              <motion.button
                initial={{ opacity: 0, x: 0, scale: 0.5 }}
                animate={{ opacity: 1, x: 72, scale: 1 }}
                exit={{ opacity: 0, x: 0, scale: 0.5 }}
                onClick={() => handleNav('E')}
                className={`absolute w-10 h-10 rounded-full flex items-center justify-center border font-bold text-xs shadow-md transition-all cursor-pointer ${
                  activeDirection === 'E' 
                    ? 'bg-maroon text-white border-maroon' 
                    : 'bg-white/95 text-slate-600 border-slate-200 hover:text-maroon'
                }`}
                title="East - Clubs"
              >
                E
              </motion.button>

              {/* South Button */}
              <motion.button
                initial={{ opacity: 0, y: 0, scale: 0.5 }}
                animate={{ opacity: 1, y: 72, scale: 1 }}
                exit={{ opacity: 0, y: 0, scale: 0.5 }}
                onClick={() => handleNav('S')}
                className={`absolute w-10 h-10 rounded-full flex items-center justify-center border font-bold text-xs shadow-md transition-all cursor-pointer ${
                  activeDirection === 'S' 
                    ? 'bg-maroon text-white border-maroon' 
                    : 'bg-white/95 text-slate-600 border-slate-200 hover:text-maroon'
                }`}
                title="South - Campus Life"
              >
                S
              </motion.button>

              {/* West Button */}
              <motion.button
                initial={{ opacity: 0, x: 0, scale: 0.5 }}
                animate={{ opacity: 1, x: -72, scale: 1 }}
                exit={{ opacity: 0, x: 0, scale: 0.5 }}
                onClick={() => handleNav('W')}
                className={`absolute w-10 h-10 rounded-full flex items-center justify-center border font-bold text-xs shadow-md transition-all cursor-pointer ${
                  activeDirection === 'W' 
                    ? 'bg-maroon text-white border-maroon' 
                    : 'bg-white/95 text-slate-600 border-slate-200 hover:text-maroon'
                }`}
                title="West - Career & Opportunities"
              >
                W
              </motion.button>

              {/* Center Roadmap Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1, x: -50, y: -50 }}
                exit={{ opacity: 0, scale: 0.5 }}
                onClick={() => handleNav('C')}
                className={`absolute w-10 h-10 rounded-full flex items-center justify-center border shadow-md transition-all cursor-pointer ${
                  activeDirection === 'C' 
                    ? 'bg-gradient-to-tr from-maroon to-gold text-white border-gold' 
                    : 'bg-white/95 text-slate-600 border-slate-200 hover:text-maroon'
                }`}
                title="Center - Your Future Roadmap"
              >
                <CompassIcon className="w-4 h-4" />
              </motion.button>
            </>
          )}
        </AnimatePresence>

        {/* Master Floating Compass Trigger Button */}
        <motion.button
          onClick={toggleOpen}
          className={`w-14 h-14 rounded-full flex items-center justify-center border backdrop-blur-md shadow-xl transition-all cursor-pointer relative overflow-hidden group ${
            isOpen 
              ? 'bg-slate-50 border-slate-200 text-maroon scale-95' 
              : 'bg-white/90 border-slate-200/60 text-maroon hover:border-gold/30'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="Campus Compass Quick Menu"
        >
          {/* Internal rotating compass background dial */}
          <div className="absolute inset-1 rounded-full border border-slate-100 flex items-center justify-center">
            
            {/* Spinning Needle SVG inside FAB */}
            <svg 
              viewBox="0 0 100 100" 
              className="w-full h-full p-2.5 text-slate-200 group-hover:text-slate-300 transition-colors"
            >
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
              <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" />
              <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.5" />

              {/* Spin Needle */}
              <motion.g
                animate={{ rotate: currentAngle }}
                transition={{ type: 'spring', stiffness: 90, damping: 12 }}
                className="origin-center"
                style={{ transformOrigin: '50px 50px' }}
              >
                {/* North Pole Pointer (Red) */}
                <polygon points="50,15 54,50 50,46" fill="#8B1538" />
                <polygon points="50,15 46,50 50,46" fill="#B02550" />
                {/* South Pole Pointer (Gold) */}
                <polygon points="50,85 46,50 50,54" fill="#D4A017" />
                <polygon points="50,85 54,50 50,54" fill="#F5C451" />
                <circle cx="50" cy="50" r="3" fill="#F5C451" stroke="#8B1538" strokeWidth="0.75" />
              </motion.g>
            </svg>
          </div>

          {/* Compass Icon indicator overlay when active */}
          <div className={`absolute bottom-1 right-1 p-0.5 rounded-full bg-gold text-dark-slate shadow-sm transition-transform duration-300 ${
            isOpen ? 'scale-0' : 'scale-100 group-hover:rotate-45'
          }`}>
            <CompassIcon className="w-2.5 h-2.5" />
          </div>
        </motion.button>

      </div>
    </div>
  );
}
