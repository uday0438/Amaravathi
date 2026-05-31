import { useState } from 'react';
import { Share2, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 max-sm:bottom-24 z-50">
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute bottom-16 right-0 mb-2 whitespace-nowrap bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium px-4 py-2 rounded-lg shadow-lg"
          >
            Copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={handleShare}
        className="flex items-center justify-center w-14 h-14 bg-rose-600 hover:bg-rose-700 text-white rounded-full shadow-xl transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-rose-300 dark:focus:ring-rose-800"
        aria-label="Share website"
      >
        {copied ? <Check className="w-6 h-6" /> : <Share2 className="w-6 h-6" />}
      </button>
    </div>
  );
}
