import { motion } from 'motion/react';
import { MonitorPlay, LayoutDashboard, Briefcase, ExternalLink, ShieldCheck } from 'lucide-react';
import { WaterDrops } from '../WaterDrops';

export function Resources() {
  return (
    <section id="resources" className="py-20 bg-transparent relative">
      <div className="max-w-[94%] xl:max-w-[90%] 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl text-shadow-sm">Must-Have Tools & Resources</h2>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">The digital armory every CSE fresher needs to excel.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: College Portals */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 relative overflow-hidden"
          >
            <WaterDrops count={3} />
            <div className="w-12 h-12 glass-panel bg-white/50 dark:bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/20 shadow-sm relative z-10">
              <LayoutDashboard className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">College Portals</h3>
            
            <div className="space-y-4 relative z-10">
              <a 
                href="https://www.amrita.edu/campus/amaravati/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group block p-4 glass-panel bg-white/30 dark:bg-slate-800/40 rounded-xl hover:bg-white/50 dark:hover:bg-slate-700/50 transition-all border border-white/20 hover:scale-[1.02]"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    Amrita Website <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-gold/20 text-maroon border border-gold/30">Official</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-400">Official campus portal for admissions, notifications, circulars, and departmental updates.</p>
              </a>

              <div className="p-4 glass-panel bg-white/10 dark:bg-slate-800/20 rounded-xl border border-white/10">
                <span className="font-bold text-xs text-slate-800 dark:text-slate-200 block mb-1">Freshers Hub Tip</span>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-normal">Notice boards in AB1 and official email circulars are the most secure ways to track timetables and early academic activities.</p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Learning Platforms */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass p-8 relative overflow-hidden"
          >
            <WaterDrops count={3} />
            <div className="w-12 h-12 glass-panel bg-white/50 dark:bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/20 shadow-sm relative z-10">
              <MonitorPlay className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">Learning Platforms</h3>
            
            <ul className="space-y-4 text-slate-700 dark:text-slate-300 relative z-10 text-sm">
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                <div>
                  <span className="font-semibold text-slate-900 dark:text-slate-200 block">NPTEL / SWAYAM</span>
                  Core government-approved engineering curriculum courses. Highly valuable for credit transfers.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                <div>
                  <span className="font-semibold text-slate-900 dark:text-slate-200 block">GeeksforGeeks & LeetCode</span>
                  Start practicing basic algorithms and programming logic early to ace tech interviews!
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Card 3: Productivity & Apps */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass p-8 relative overflow-hidden"
          >
            <WaterDrops count={3} />
            <div className="w-12 h-12 glass-panel bg-white/50 dark:bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/20 shadow-sm relative z-10">
              <Briefcase className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">Productivity & CSE Tools</h3>
            
            <ul className="space-y-4 text-slate-700 dark:text-slate-300 relative z-10 text-sm">
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                <div>
                  <span className="font-semibold text-slate-900 dark:text-slate-200 block">Notion / Obsidian / VS Code</span>
                  The gold standard apps to structure your class notes, code snippets, and semester goals.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                <div>
                  <span className="font-semibold text-slate-900 dark:text-slate-200 block">GitHub & Student Pack</span>
                  Set up your Git account on Day 1 to back up projects and unlock free premium developer bundles.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                <div>
                  <span className="font-semibold text-slate-900 dark:text-slate-200 block">Canva</span>
                  Design stunning presentations for classes and eye-catching club posters.
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
