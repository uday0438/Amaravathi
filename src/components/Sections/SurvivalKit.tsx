import { motion } from 'motion/react';
import { CheckCircle2, XCircle, Heart, Clock } from 'lucide-react';
import { WaterDrops } from '../WaterDrops';

export function SurvivalKit() {
  return (
    <section id="survival-kit" className="py-20 bg-transparent">
      <div className="max-w-[94%] xl:max-w-[90%] 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl text-shadow-sm">Survival Kit</h2>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">Crucial tips to navigate your first semester successfully.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Card 1: DO's */}
            <div className="glass !bg-emerald-400/20 dark:!bg-emerald-900/40 p-8 border-emerald-200/50 dark:border-emerald-800/50 relative overflow-hidden">
               <WaterDrops count={3} />
               <h3 className="relative z-10 text-xl font-bold text-emerald-800 dark:text-emerald-400 mb-6 flex items-center gap-2">
                 <CheckCircle2 className="w-6 h-6" /> The DO's
               </h3>
               <ul className="relative z-10 space-y-4">
                 <li className="flex gap-3">
                   <div className="mt-1 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                   <span className="text-slate-800 dark:text-slate-200">Respect the college dress code and wear your ID card at all times.</span>
                 </li>
                 <li className="flex gap-3">
                   <div className="mt-1 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                   <span className="text-slate-800 dark:text-slate-200">Explore the library and find your dedicated study spot early.</span>
                 </li>
                 <li className="flex gap-3">
                   <div className="mt-1 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                   <span className="text-slate-800 dark:text-slate-200">Network! Talk to your seniors—we are here to help you.</span>
                 </li>
               </ul>
            </div>

            {/* Card 2: DON'Ts */}
            <div className="glass !bg-rose-400/20 dark:!bg-rose-900/40 p-8 border-rose-200/50 dark:border-rose-800/50 relative overflow-hidden">
               <WaterDrops count={3} />
               <h3 className="relative z-10 text-xl font-bold text-rose-800 dark:text-rose-400 mb-6 flex items-center gap-2">
                 <XCircle className="w-6 h-6" /> The DON'Ts (Common Mistakes)
               </h3>
               <ul className="relative z-10 space-y-4">
                 <li className="flex gap-3">
                   <div className="mt-1 w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                   <span className="text-slate-800 dark:text-slate-200"><strong>Don't ignore internal marks (CIA).</strong> Thinking you can easily make it up in the finals is the biggest trap!</span>
                 </li>
                 <li className="flex gap-3">
                   <div className="mt-1 w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                   <span className="text-slate-800 dark:text-slate-200"><strong>Don't stick only to your room.</strong> Go out and experience the campus culture.</span>
                 </li>
                 <li className="flex gap-3">
                   <div className="mt-1 w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                   <span className="text-slate-800 dark:text-slate-200"><strong>Don't pull unnecessary all-nighters</strong> in the first month. Build a sustainable routine.</span>
                 </li>
               </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Card 3: Time Management */}
            <div className="glass-heavy !bg-slate-900/60 dark:!bg-slate-900/80 p-8 text-white shadow-2xl relative overflow-hidden">
               <WaterDrops count={3} />
               <div className="absolute top-0 right-0 -mr-8 -mt-8 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl" />
               <h3 className="relative z-10 text-xl font-bold text-white mb-6 flex items-center gap-2">
                 <Clock className="w-6 h-6 text-indigo-400" /> Time Management
               </h3>
               <div className="relative z-10 p-6 glass-panel rounded-2xl bg-white/10 border-white/10 text-center mb-6">
                  <span className="block text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300 mb-2">The 8-8-8 Rule</span>
                  <p className="text-slate-300 text-sm">A balanced approach to your daily college life.</p>
               </div>
               <div className="relative z-10 space-y-4">
                 <div className="flex items-center justify-between p-4 glass-panel bg-white/5 border-white/10 rounded-xl">
                   <span className="font-semibold text-slate-200">Sleep</span>
                   <span className="text-indigo-300 font-bold">8 Hours</span>
                 </div>
                 <div className="flex items-center justify-between p-4 glass-panel bg-white/5 border-white/10 rounded-xl">
                   <span className="font-semibold text-slate-200">Academics</span>
                   <span className="text-indigo-300 font-bold">8 Hours</span>
                 </div>
                 <div className="flex items-center justify-between p-4 glass-panel bg-white/5 border-white/10 rounded-xl">
                   <span className="font-semibold text-slate-200">Self-dev / Extras</span>
                   <span className="text-indigo-300 font-bold">8 Hours</span>
                 </div>
               </div>
            </div>

            {/* Card 4: Mental Health */}
            <div className="glass p-8 relative overflow-hidden">
               <WaterDrops count={3} />
               <h3 className="relative z-10 text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                 <Heart className="w-6 h-6 text-rose-500" /> Mental Health & Stress Management
               </h3>
               <p className="relative z-10 text-slate-700 dark:text-slate-300 leading-relaxed">
                 College can be stressful. Take a walk by the green lawns, talk to your academic advisors, and don't hesitate to reach out to campus counselors. Setting a sustainable schedule and talking to seniors are the best ways to keep stress away!
               </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
