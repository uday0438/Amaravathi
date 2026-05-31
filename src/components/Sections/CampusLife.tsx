import { motion } from 'motion/react';
import { Home, Compass, Coffee, Navigation } from 'lucide-react';
import { WaterDrops } from '../WaterDrops';

function MapPin({ x, y, title, description }: { x: string; y: string; title: string; description: string }) {
  return (
    <div className="absolute group/pin z-10" style={{ left: x, top: y }}>
      <div className="relative -translate-x-1/2 -translate-y-1/2 cursor-pointer">
        <div className="w-6 h-6 bg-rose-600 rounded-full border-2 border-white shadow-lg flex items-center justify-center relative z-10">
           <div className="w-2 h-2 bg-white rounded-full animate-ping absolute"></div>
           <div className="w-2 h-2 bg-white rounded-full relative z-10"></div>
        </div>
        
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 opacity-0 translate-y-2 group-hover/pin:opacity-100 group-hover/pin:translate-y-0 transition-all duration-300 pointer-events-none">
          <div className="bg-white dark:bg-slate-900 p-3 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 relative">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">{title}</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{description}</p>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-white dark:border-t-slate-900 drop-shadow-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CampusLife() {
  return (
    <section id="campus-life" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl text-shadow-sm">Campus & Hostel Life</h2>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">Discover your new home on the banks of the Krishna River.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 relative overflow-hidden rounded-3xl min-h-[400px] glass shadow-lg p-1"
          >
            <WaterDrops count={3} />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center mix-blend-overlay opacity-60 dark:opacity-40"></div>
            <div className="absolute inset-0 bg-slate-900/20"></div>
            
            <div className="absolute inset-0">
               <MapPin x="35%" y="45%" title="Academic Block 1" description="Where engineering theory and laboratory sessions happen." />
               <MapPin x="65%" y="60%" title="Central Library" description="The 24/7 quiet study hub for all semester preparations." />
               <MapPin x="80%" y="35%" title="Hostels & Mess" description="Vyas (Boys) & Patanjali (Girls) secure modern halls." />
            </div>

            <div className="absolute bottom-0 left-0 p-8 pointer-events-none">
              <div className="inline-flex items-center gap-2 px-3 py-1 glass-panel rounded-full text-slate-900 dark:text-white text-sm font-semibold mb-4">
                <Compass className="w-4 h-4" /> Interactive Map
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 text-shadow-sm">100-Acre Lush Green Campus</h3>
              <p className="text-slate-800 dark:text-slate-200 max-w-xl text-shadow-sm font-semibold">
                Hover over map pins to explore Central Mess, AB1 block, Gyms, and recreation areas near Mangalagiri, Andhra Pradesh.
              </p>
            </div>
          </motion.div>

          {/* Card: Daily Routine */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass p-8 relative overflow-hidden"
          >
            <WaterDrops count={3} />
            <div className="w-12 h-12 bg-white/50 dark:bg-white/10 border border-white/20 text-orange-600 dark:text-orange-400 rounded-full flex items-center justify-center mb-6 shadow-sm relative z-10">
              <Coffee className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">Daily Routine</h3>
            <p className="text-slate-700 dark:text-slate-300 relative z-10 leading-relaxed text-sm">
              Attending morning lectures starts at 9:00 AM, leading to hands-on programming labs in the afternoon. Evenings are dedicated to synthetic badminton arenas, standard gymnasium workouts, tech club sprints, and a quick biometric scan before the strict curfew check!
            </p>
          </motion.div>

          {/* Card: Hostel & Food */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass p-8 relative overflow-hidden"
          >
            <WaterDrops count={3} />
            <div className="w-12 h-12 bg-white/50 dark:bg-white/10 border border-white/20 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-6 shadow-sm relative z-10">
              <Home className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">Hostel, Food & Timings</h3>
            <div className="text-slate-700 dark:text-slate-300 relative z-10 text-sm space-y-2">
              <p>Vyas (Boys) & Patanjali (Girls) double-sharing rooms feature laundry setups. Pure vegetarian, hygienic, and multi-cuisine dining options are served. Wednesday Paneer dinner is a crowd favorite!</p>
              <div className="pt-2 border-t border-slate-200/50 dark:border-white/5 text-[11px] font-bold text-maroon dark:text-gold space-y-1">
                <div>🍳 Breakfast: 7:30 AM - 8:45 AM</div>
                <div>🍱 Lunch: 12:15 PM - 1:45 PM</div>
                <div>☕ Tea & Snacks: 4:30 PM - 5:30 PM</div>
                <div>🍛 Dinner: 7:30 PM - 8:45 PM</div>
              </div>
            </div>
          </motion.div>

          {/* Card: Settling-in Tips & Transport */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-1 md:col-span-2 glass !bg-indigo-400/20 dark:!bg-indigo-900/40 p-8 border-indigo-200/50 dark:border-indigo-800/50 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left shadow-lg relative overflow-hidden"
          >
            <WaterDrops count={3} />
            <div className="p-4 bg-white/50 dark:bg-white/10 border border-white/20 rounded-2xl shrink-0 shadow-sm relative z-10">
              <Navigation className="w-8 h-8 text-indigo-700 dark:text-indigo-400" />
            </div>
            <div className="relative z-10 text-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Transport & Settle-in Guide</h3>
              <p className="text-slate-800 dark:text-slate-200 font-semibold leading-relaxed">
                Quick transportation links the campus near Mangalagiri to Vijayawada and Guntur railway terminals. In your first week: explore layout routes, scan your ID cards securely at entry portals, make friends during orientation, and don't hesitate to ask senior mentors for quick guidance!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
