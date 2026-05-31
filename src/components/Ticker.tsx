import { AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

const tips = [
  "Always carry your physical ID card everywhere you go!",
  "Maintain a minimum of 75% attendance — it's non-negotiable.",
  "Check AUMS and Amrita email daily for official announcements.",
  "Don't miss out on club inductions in the first month.",
  "Focus heavily on CIA internals; they make ESE exams much less stressful."
];

export function Ticker() {
  return (
    <div className="bg-rose-600 text-rose-50 py-3 overflow-hidden flex items-center relative border-y border-rose-700">
      <div className="absolute left-0 z-10 bg-gradient-to-r from-rose-600 to-transparent w-20 h-full flex items-center pl-4">
        <span className="flex items-center text-white font-semibold text-sm uppercase tracking-wider">
          <AlertCircle className="w-4 h-4 mr-2" />
          Quick Tips
        </span>
      </div>
      
      <div className="flex flex-nowrap pl-40">
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex flex-nowrap space-x-12 whitespace-nowrap"
        >
          {[...tips, ...tips, ...tips].map((tip, index) => (
            <span key={index} className="text-sm font-medium">
              • {tip}
            </span>
          ))}
        </motion.div>
      </div>
      
      <div className="absolute right-0 z-10 bg-gradient-to-l from-rose-600 to-transparent w-20 h-full"></div>
    </div>
  );
}
