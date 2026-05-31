import { motion } from 'motion/react';
import { Mail, MessageCircle, Instagram } from 'lucide-react';

export function ConnectWithSeniors() {
  return (
    <section id="connect" className="py-20 glass !bg-rose-400/10 dark:!bg-rose-900/20 border-t border-rose-200/50 dark:border-rose-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 text-shadow-sm">Connect With Seniors</h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-10">Have more questions? We are here to help you settle in.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <motion.a 
            href="mailto:support.amaravati@amrita.edu"
            whileHover={{ y: -5 }}
            className="flex flex-col items-center p-6 glass hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 glass-panel bg-white/50 dark:bg-white/10 text-rose-600 dark:text-rose-400 border border-white/20 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white">Email Us</h3>
            <span className="text-sm text-slate-600 dark:text-slate-400 mt-1">support.amaravati@amrita.edu</span>
          </motion.a>

          <motion.a 
            href="#"
            whileHover={{ y: -5 }}
            className="flex flex-col items-center p-6 glass hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 glass-panel bg-white/50 dark:bg-white/10 text-indigo-600 dark:text-indigo-400 border border-white/20 rounded-full flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white">Discord Community</h3>
            <span className="text-sm text-slate-600 dark:text-slate-400 mt-1">Join the Fresher Server</span>
          </motion.a>

          <motion.a 
            href="#"
            whileHover={{ y: -5 }}
            className="flex flex-col items-center p-6 glass hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 glass-panel bg-white/50 dark:bg-white/10 text-pink-600 dark:text-pink-400 border border-white/20 rounded-full flex items-center justify-center mb-4">
              <Instagram className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white">Student Council</h3>
            <span className="text-sm text-slate-600 dark:text-slate-400 mt-1">@amrita_amaravati</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
