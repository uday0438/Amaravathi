import { motion } from 'motion/react';
import { Calendar, Users, BookOpen, Star, AlertCircle } from 'lucide-react';

const timelineEvents = [
  {
    week: "Week 1",
    title: "Orientation & Exploration",
    description: "Get familiar with the 100-acre campus, find your classes, and attend the fresher orientation programs. Explore the library and locate your hostel.",
    icon: Calendar,
    color: "bg-blue-500",
  },
  {
    week: "Week 2",
    title: "Classes & Rhythm",
    description: "Academic schedules stabilize. Get used to the 9-to-5 routine, understand the syllabus, and start tracking your attendance to ensure it stays above 75%.",
    icon: BookOpen,
    color: "bg-emerald-500",
  },
  {
    week: "Week 3",
    title: "Club Inductions",
    description: "Explore various clubs like Chakravyuha Technical Club, GDSC, and IEEE. Attend auditions, inductions, and start networking with seniors.",
    icon: Users,
    color: "bg-rose-500",
  },
  {
    week: "Week 4",
    title: "First CIA Prep",
    description: "Prepare for your first Continuous Internal Assessment (CIA). Start reviewing class notes, practice on learning platforms, and prepare your lab assignments.",
    icon: Star,
    color: "bg-amber-500",
  }
];

export function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl text-shadow-sm">First Month at College</h2>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">Week-by-week timeline of what to expect when you arrive.</p>
        </div>
        
        <div className="relative border-l-2 border-slate-300/50 dark:border-slate-700/50 ml-4 sm:ml-6 md:ml-8">
          {timelineEvents.map((event, index) => {
            const Icon = event.icon;
            return (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={index}
                className="mb-12 ml-8 sm:ml-10 relative"
              >
                <div className={`absolute -ml-12 sm:-ml-14 mt-1.5 w-8 h-8 rounded-full flex items-center justify-center ring-4 ring-slate-100 dark:ring-slate-900 ${event.color} shadow-lg`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <div className="glass p-6 sm:p-8 hover:shadow-lg transition-all duration-300">
                  <span className="inline-block py-1 px-3 rounded-full bg-white/50 dark:bg-black/20 text-slate-800 dark:text-slate-200 text-xs font-bold uppercase tracking-wider mb-3 block w-fit border border-white/20">{event.week}</span>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{event.title}</h4>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{event.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
