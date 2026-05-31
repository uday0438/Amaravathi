import { motion } from 'motion/react';
import { Users, Code, Target, Sparkles } from 'lucide-react';
import { WaterDrops } from '../WaterDrops';

export function Clubs() {
  return (
    <section id="clubs" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl text-shadow-sm">Clubs & Extracurriculars</h2>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">Build your resume, find your friend group, and gain practical engineering skills.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Card: Chakravyuha Technical Club */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 glass-heavy !bg-slate-900/60 dark:!bg-slate-900/80 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border-slate-700/50"
          >
            <WaterDrops count={3} />
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-64 h-64 bg-rose-500/30 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
            
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-sm font-medium mb-6 backdrop-blur-md border border-rose-500/30">
                  <StarIcon /> Featured Club
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold mb-4 drop-shadow-md">Chakravyuha Technical Club ⚙️</h3>
                <p className="text-slate-200 text-lg leading-relaxed max-w-2xl text-shadow-sm font-medium">
                  With 350+ members, **Chakravyuha** is building the next generation of tech leaders at Amrita Amaravati. They host flagship campus hackathons, open-source sprints, competitive coding jams, and specialized AI/ML and robotics workshops. Joining Chakravyuha is highly recommended for all B.Tech freshers!
                </p>
              </div>
              
              <div className="mt-10 grid grid-cols-2 gap-4 sm:flex sm:gap-8">
                <div className="glass-panel p-4 rounded-2xl bg-white/10 dark:bg-black/20 border-white/10">
                  <div className="text-3xl font-bold text-rose-400">350+</div>
                  <div className="text-sm text-slate-300 mt-1">Active Developers</div>
                </div>
                <div className="glass-panel p-4 rounded-2xl bg-white/10 dark:bg-black/20 border-white/10">
                  <div className="text-3xl font-bold text-rose-400">Tech</div>
                  <div className="text-sm text-slate-300 mt-1">Hackathons & Coding Jams</div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-4 space-y-8">
            {/* Card: Other Clubs & Opportunities */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 relative overflow-hidden"
            >
              <WaterDrops count={3} />
              <div className="w-12 h-12 bg-white/50 dark:bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mb-6 shadow-sm relative z-10">
                <Users className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">Other Opportunities</h4>
              <p className="text-slate-700 dark:text-slate-300 relative z-10 leading-relaxed text-sm">
                Explore the **Google Developer Student Clubs (GDSC)** for Web & Cloud, the **IEEE student chapter** for hardware and publication opportunities, and vibrant **Cultural Clubs** for music, dance, and fine arts! Joining multiple platforms broadens your leadership and portfolio-building skills.
              </p>
            </motion.div>

            {/* Card: How to Join */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass p-8 relative overflow-hidden"
            >
              <WaterDrops count={3} />
              <div className="w-12 h-12 bg-white/50 dark:bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mb-6 shadow-sm relative z-10">
                <Target className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">How to Join</h4>
              <p className="text-slate-700 dark:text-slate-300 relative z-10 leading-relaxed text-sm">
                Club inductions, quizzes, and auditions happen in the **first month** on campus. Getting active in clubs boosts your networking, soft skills, peer learning, and future placement opportunities. Keep an eye on the official notice boards and WhatsApp channels!
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
