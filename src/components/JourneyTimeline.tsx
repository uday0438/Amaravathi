import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, Code, Trophy, Rocket, GraduationCap, MapPin 
} from 'lucide-react';

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  badge: string;
}

export function JourneyTimeline() {
  const milestones: Milestone[] = [
    {
      year: '2026',
      title: 'First Day & Arrival',
      badge: 'The Spark',
      description: 'Step onto the beautiful, green Amrita Amaravati campus. Attend the induction ceremonies, join your hostel block, meet your roommate, and unlock your first college friends.',
      icon: <MapPin className="w-5 h-5" />,
      color: 'bg-maroon text-white border-maroon'
    },
    {
      year: '2027',
      title: 'Learning & Core Growth',
      badge: 'Deep Exploration',
      description: 'Dive deep into database systems, hardware architecture, and programming paradigms. Select your favorite student clubs like Chakravyuha or GDSC and build foundational tools.',
      icon: <Code className="w-5 h-5" />,
      color: 'bg-gold text-dark-slate border-gold'
    },
    {
      year: '2028',
      title: 'Building Projects',
      badge: 'Creation Mode',
      description: 'Form teams for hackathons, build web applications and smart IoT models in research labs. The CIA exams become second nature as your repository list grows.',
      icon: <Trophy className="w-5 h-5" />,
      color: 'bg-blue-600 text-white border-blue-600'
    },
    {
      year: '2029',
      title: 'Leadership & Research',
      badge: 'Guiding Others',
      description: 'Lead student chapters, organize technical fests, author research publications, and pitch entrepreneurial models to the Amrita Technology Business Incubator.',
      icon: <Rocket className="w-5 h-5" />,
      color: 'bg-maroon text-white border-maroon'
    },
    {
      year: '2030',
      title: 'Graduation & Career Launch',
      badge: 'The Ascent',
      description: 'Conclude your journey wearing the graduation cap. Move into corporate offices at Microsoft/Intel, or pursue research degrees at top global graduate schools.',
      icon: <GraduationCap className="w-5 h-5" />,
      color: 'bg-gradient-to-tr from-maroon to-gold text-white border-gold'
    }
  ];

  return (
    <section id="journey" className="scroll-mt-24 py-16 bg-gradient-to-b from-transparent via-slate-50 to-transparent relative overflow-hidden">
      
      {/* Background Decorative Rings */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] border border-slate-200/50 rounded-full pointer-events-none -z-10" />
      <div className="absolute top-2/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] border border-slate-200/30 rounded-full pointer-events-none -z-10" />

      <div className="max-w-[94%] xl:max-w-[90%] 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-maroon/5 border border-maroon/10 mb-4 animate-float">
            <Sparkles className="w-4 h-4 text-maroon" />
            <span className="text-xs uppercase font-extrabold tracking-wider text-maroon">Your Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Your Future <span className="text-transparent bg-clip-text bg-gradient-to-r from-maroon via-gold to-blue-600">Starts Here</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            "Today you arrive as a fresher. In a few years, you will leave as an engineer, a creator, a problem solver, and a leader."
          </p>
        </div>

        {/* Timeline roadmap layout */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical central path line */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 -translate-x-1/2" />
          
          {/* Timeline List */}
          <div className="space-y-16">
            {milestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx} 
                  className={`flex flex-col md:flex-row relative items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Badge Point */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 shadow-lg ${milestone.color}`}
                    >
                      {milestone.icon}
                    </motion.div>
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card Panel */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="w-full md:w-[44%] pl-16 md:pl-0"
                  >
                    <div className="glass-card p-6 border border-white/50 relative overflow-hidden group hover:border-maroon/20">
                      
                      {/* Subtle hover gradient light */}
                      <div className="absolute inset-0 bg-gradient-to-r from-maroon/0 to-gold/0 group-hover:from-maroon/5 group-hover:to-gold/5 transition-all duration-500 pointer-events-none -z-10" />

                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[10px] uppercase font-black tracking-widest text-slate-400">
                          {milestone.badge}
                        </span>
                        <span className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-br from-maroon to-gold">
                          {milestone.year}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-maroon transition-colors duration-300">
                        {milestone.title}
                      </h3>
                      
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Emotion End Message & Interactive Call To Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-28 text-center max-w-2xl mx-auto glass-card p-8 border-gold/20 shadow-xl shadow-gold/5 relative overflow-hidden flex flex-col items-center"
        >
          {/* Gold Glowing Corner Background */}
          <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gold/10 rounded-full blur-xl animate-pulse-glow" />

          <p className="text-slate-700 font-medium mb-8 leading-relaxed max-w-lg">
            Every semester is an open notebook waiting for you to draft your future. Let’s make these next four years the most creative, high-performing years of your life!
          </p>

          <a
            href="#academics"
            className="inline-flex items-center gap-2.5 px-10 py-4 font-extrabold text-white rounded-full bg-gradient-to-r from-maroon via-[#9E1B42] to-gold shadow-lg hover:shadow-xl hover:shadow-maroon/20 hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer text-lg"
          >
            🎓 Begin My Journey
            <Sparkles className="w-5 h-5 text-white group-hover:animate-spin" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
