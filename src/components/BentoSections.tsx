import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Award, Percent, Cpu, Terminal, Sparkles, Trophy, Users, 
  Code, Calendar, Home, Coffee, Library, Activity, Rocket, 
  Briefcase, FileCheck, Globe, Landmark, MapPin, CheckCircle, HelpCircle, BookOpen
} from 'lucide-react';
import { ThreeDCard } from './ThreeDCard';
import { WaterDrops } from './WaterDrops';

interface BentoSectionProps {
  id: string;
  title: string;
  direction: 'North' | 'East' | 'South' | 'West';
  icon: React.ReactNode;
  tagline: string;
  quote: string;
  bgLight: string;
  accentColor: string;
}

// Fade in up animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  })
};

// Local CGPA Grade & Success Simulator Component
function CGPASimulator() {
  const [cia, setCia] = useState(40);
  const [ese, setEse] = useState(42);
  
  const total = cia + ese;
  let grade = 'F';
  let gp = 0;
  let color = 'text-rose-500';
  let desc = 'Keep studying! CIA marks are key to passing.';

  if (total >= 90) {
    grade = 'O (Outstanding)';
    gp = 10;
    color = 'text-gold';
    desc = 'Legendary score! You are on track for a perfect 10 CGPA!';
  } else if (total >= 80) {
    grade = 'A+ (Excellent)';
    gp = 9;
    color = 'text-maroon dark:text-gold';
    desc = 'Superb performance! Easily keeps your CGPA in the 9+ zone.';
  } else if (total >= 70) {
    grade = 'A (Very Good)';
    gp = 8;
    color = 'text-emerald-500';
    desc = 'Great job! Strong foundations, well within the top tier.';
  } else if (total >= 60) {
    grade = 'B+ (Good)';
    gp = 7;
    color = 'text-blue-500';
    desc = 'Solid passing score. Bump up the CIA marks slightly to hit an A!';
  } else if (total >= 50) {
    grade = 'B (Above Average)';
    gp = 6;
    color = 'text-slate-600 dark:text-slate-300';
    desc = 'Cleared! Focus on quizzes and mid-semester exams to improve grade.';
  }

  return (
    <div className="glass-card p-6 border-gold/30 relative overflow-hidden">
      <WaterDrops count={3} />
      <h4 className="text-sm uppercase font-extrabold text-gold tracking-widest mb-4 flex items-center gap-1.5">
        <Award className="w-4.5 h-4.5 text-gold" /> CGPA Grade Simulator
      </h4>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            <span>Continuous Internal Assessment (CIA): {cia} / 50</span>
          </div>
          <input 
            type="range" min="0" max="50" value={cia} 
            onChange={(e) => setCia(parseInt(e.target.value))}
            className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 accent-maroon cursor-pointer appearance-none"
            style={{
              background: `linear-gradient(to right, #8B1538 0%, #8B1538 ${(cia/50)*100}%, #CBD5E1 ${(cia/50)*100}%, #CBD5E1 100%)`
            }}
          />
        </div>
        <div>
          <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            <span>End Semester Exams (ESE): {ese} / 50</span>
          </div>
          <input 
            type="range" min="0" max="50" value={ese} 
            onChange={(e) => setEse(parseInt(e.target.value))}
            className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 accent-gold cursor-pointer appearance-none"
            style={{
              background: `linear-gradient(to right, #F5C451 0%, #F5C451 ${(ese/50)*100}%, #CBD5E1 ${(ese/50)*100}%, #CBD5E1 100%)`
            }}
          />
        </div>

        <div className="mt-6 border-t border-slate-100 dark:border-white/10 pt-4 flex flex-col items-center text-center">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">PROJECTED SEMESTER MARKS</div>
          <div className="text-3xl font-black mt-1 text-slate-800 dark:text-white">
            {total} <span className="text-sm font-normal text-slate-400">/ 100</span>
          </div>
          <div className={`text-sm font-extrabold mt-1 uppercase ${color}`}>
            Grade: {grade} (GP: {gp})
          </div>
          <p className="text-[10px] text-slate-500 max-w-xs mt-2.5 italic">
            "{desc}"
          </p>
        </div>
      </div>
    </div>
  );
}

// Local Campus Map Tour Blueprint Component
function CampusMapTour() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>('ab1');

  const hotspots = [
    {
      id: 'ab1',
      title: 'Academic Block 1 (AB1)',
      top: '42%',
      left: '32%',
      desc: 'The central hub for all CSE and ECE lectures and labs. Check out the High-Performance Computing (HPC) research cluster on the 3rd floor!',
      tip: '🔥 Senior Tip: The first-floor lobby has the fastest Wi-Fi and quiet cozy seating between classes.'
    },
    {
      id: 'hostels',
      title: 'Vyas & Patanjali Hostels',
      top: '25%',
      left: '72%',
      desc: 'Your comfortable residential blocks. Vyas (Boys) and Patanjali (Girls) host double-sharing rooms with modern laundry, study, and play zones.',
      tip: '🔥 Senior Tip: Curfew is strictly 9:00 PM, make sure to scan your ID card before the deadline!'
    },
    {
      id: 'dining',
      title: 'Central Mess & Cafeteria',
      top: '62%',
      left: '60%',
      desc: 'Serves multi-cuisine pure vegetarian dining options prepared hygienically. The cafeteria next door serves fresh juices and snacks late into the evening.',
      tip: '🔥 Senior Tip: Paneer Butter Masala on Wednesday dinner is the campus crowd favorite!'
    },
    {
      id: 'sports',
      title: 'Athletic Arena & Gym',
      top: '76%',
      left: '42%',
      desc: 'Standard sports courts for basketball, tennis, indoor synthetic badminton arenas, and football fields. The multi-station gymnasium is equipped with trainers.',
      tip: '🔥 Senior Tip: Gym is least crowded in the early mornings (6:30 AM) and is free to use!'
    }
  ];

  const activeSpot = hotspots.find(h => h.id === activeHotspot) || hotspots[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
      {/* Visual stylized interactive map grid */}
      <div className="relative aspect-[4/3] bg-slate-950 rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center p-4 select-none">
        {/* Abstract blueprint grid layout */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] opacity-60" />
        {/* Soft glowing ambient circle */}
        <div className="absolute w-[200px] h-[200px] bg-maroon/10 rounded-full blur-3xl pointer-events-none" />

        {/* Dynamic Vector Lines linking items */}
        <div className="absolute inset-0 pointer-events-none opacity-20 border-2 border-dashed border-gold/30 rounded-2xl m-8" />

        {/* Hotspot buttons floating over coordinate map */}
        {hotspots.map((spot) => (
          <button
            key={spot.id}
            onClick={() => setActiveHotspot(spot.id)}
            className="absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none group cursor-pointer z-10"
            style={{ top: spot.top, left: spot.left }}
          >
            <span className="relative flex h-8 w-8 items-center justify-center">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                activeHotspot === spot.id ? 'bg-gold' : 'bg-white/40'
              }`}></span>
              <span className={`relative inline-flex rounded-full h-5.5 w-5.5 items-center justify-center shadow-lg transition-all border border-white/20 ${
                activeHotspot === spot.id ? 'bg-gold text-slate-950 scale-110' : 'bg-slate-800 text-white group-hover:bg-slate-700'
              }`}>
                <MapPin className="w-3.5 h-3.5" />
              </span>
            </span>
            {/* Tiny text label */}
            <span className={`absolute top-9 left-1/2 -translate-x-1/2 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded shadow border whitespace-nowrap transition-all ${
              activeHotspot === spot.id 
                ? 'bg-gold text-slate-950 border-gold' 
                : 'bg-slate-950/80 text-white border-white/10 group-hover:bg-slate-800'
            }`}>
              {spot.id === 'ab1' ? 'AB1 block' : spot.id === 'hostels' ? 'Hostels' : spot.id === 'dining' ? 'Dining' : 'Sports'}
            </span>
          </button>
        ))}
      </div>

      {/* Hotspot details glass display */}
      <div className="glass-card p-6 flex flex-col justify-between min-h-[220px] relative overflow-hidden">
        <WaterDrops count={3} />
        {/* Decorative subtle pulse */}
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-maroon/5 rounded-full blur-xl pointer-events-none" />
        
        <div>
          <h4 className="text-base font-black text-slate-800 dark:text-white flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
            {activeSpot.title}
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-3.5">
            {activeSpot.desc}
          </p>
        </div>
        
        <div className="mt-6 bg-gold/10 dark:bg-gold/5 p-4 rounded-2xl border border-gold/20">
          <p className="text-[10px] font-bold text-maroon dark:text-gold italic leading-normal">
            {activeSpot.tip}
          </p>
        </div>
      </div>
    </div>
  );
}

export function BentoSections() {
  const [activeDrawer, setActiveDrawer] = useState<'academics' | 'clubs' | 'hostel' | 'opportunities' | null>(null);

  return (
    <div className="space-y-32 py-16 max-w-[94%] xl:max-w-[90%] 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 🧭 NORTH — ACADEMIC EXCELLENCE */}
      <section id="academics" className="scroll-mt-24">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2.5 rounded-2xl bg-maroon/10 text-maroon shadow-sm border border-maroon/10">
              <BookOpen className="w-6 h-6 animate-pulse" />
            </span>
            <span className="text-xs uppercase font-extrabold tracking-widest text-maroon">🧭 North Direction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Academic Excellence <span className="text-transparent bg-clip-text bg-gradient-to-r from-maroon to-gold">& Programs</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl text-base">
            Amrita Amaravati offers a high-caliber academic environment. Click on cards to open interactive details and grade calculators!
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Programs & Branches */}
          <ThreeDCard className="md:col-span-1 flex">
            <motion.div 
              custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              onClick={() => setActiveDrawer('academics')}
              className="glass-card p-6 w-full flex flex-col justify-between group overflow-hidden relative cursor-pointer"
            >
              <div className="shine-overlay" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-maroon/5 rounded-full -mr-8 -mt-8 transition-transform group-hover:scale-120 duration-500" />
              <div>
                <div className="p-3 w-fit rounded-xl bg-maroon/5 text-maroon mb-4">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Branches & Programs</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Explore pathways in Computer Science (CSE), Electronics (ECE), Mechanical, and emerging specializations in AI/ML, Cyber Security, and Cloud Computing.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-maroon/10 text-maroon">CSE</span>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">ECE</span>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">AI / DS</span>
              </div>
            </motion.div>
          </ThreeDCard>

          {/* Card 2: Classroom & Lab Experience (Large) */}
          <ThreeDCard className="md:col-span-2 flex">
            <motion.div 
              custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              onClick={() => setActiveDrawer('academics')}
              className="glass-card p-6 w-full flex flex-col justify-between group overflow-hidden relative cursor-pointer"
            >
              <div className="shine-overlay" />
              {/* Abstract Background Visual elements */}
              <div className="absolute right-6 bottom-6 w-48 h-32 opacity-20 pointer-events-none group-hover:opacity-30 transition-opacity duration-500">
                <div className="w-full h-full border border-dashed border-maroon rounded-2xl flex items-center justify-center p-2">
                  <div className="w-full h-full bg-gradient-to-br from-maroon to-gold rounded-xl animate-spin-slow opacity-30" />
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-3 rounded-xl bg-gold/10 text-gold-hover">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <span className="text-xs uppercase font-extrabold tracking-wider text-slate-400">Advanced Facilities</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Classroom & Laboratory Hub</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                  Step into lecture theaters designed for active learning and laboratories powered by industry-standard setups. From IoT and Embedded Systems labs to advanced high-performance computing clusters.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-100 dark:border-white/10 pt-6">
                <div>
                  <span className="block text-xl font-extrabold text-maroon">100%</span>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Practical Focus</span>
                </div>
                <div>
                  <span className="block text-xl font-extrabold text-maroon">24/7</span>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Server Access</span>
                </div>
                <div>
                  <span className="block text-xl font-extrabold text-maroon">1:1</span>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Lab Mentorship</span>
                </div>
                <div>
                  <span className="block text-xl font-extrabold text-maroon">Smart</span>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Digital Boards</span>
                </div>
              </div>
            </motion.div>
          </ThreeDCard>

          {/* Card 3: Attendance Requirements */}
          <ThreeDCard className="md:col-span-1 flex">
            <motion.div 
              custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              onClick={() => setActiveDrawer('academics')}
              className="glass-card p-6 w-full flex flex-col justify-between group overflow-hidden relative cursor-pointer"
            >
              <div className="shine-overlay" />
              <div>
                <div className="p-3 w-fit rounded-xl bg-blue-500/10 text-blue-600 mb-4">
                  <Percent className="w-6 h-6 animate-bounce" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Attendance Policy</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Amrita enforces a strict **75% attendance rule**. Keep a track of your classes early on to avoid last-minute run-arounds or missing out on ESE exams.
                </p>
              </div>
              <div className="mt-6 bg-slate-50 dark:bg-slate-900/50 p-3.5 rounded-xl border border-slate-100 dark:border-white/5">
                <div className="flex justify-between text-xs mb-1 font-semibold text-slate-500">
                  <span>Minimum Required</span>
                  <span className="text-maroon font-bold">75%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-maroon h-full w-[75%]" />
                </div>
              </div>
            </motion.div>
          </ThreeDCard>

          {/* Card 4: Exams & CGPA Success (Medium) */}
          <ThreeDCard className="md:col-span-2 flex">
            <motion.div 
              custom={3} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              onClick={() => setActiveDrawer('academics')}
              className="glass-card p-6 w-full flex flex-col justify-between group overflow-hidden relative cursor-pointer"
            >
              <div className="shine-overlay" />
              <div>
                <div className="p-3 w-fit rounded-xl bg-gold/10 text-gold-hover mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">CIA, ESE & CGPA Strategies</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Assessments are divided into **Continuous Internal Assessment (CIA)** (assignments, quizzes, lab vivas, mid-terms) and **End Semester Exams (ESE)**. Click to calculate your GPA!
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-white/5 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-gold" />
                  <div>
                    <span className="block text-xs font-bold text-slate-700 dark:text-slate-300">Internals: 50%</span>
                    <span className="text-[10px] text-slate-400">Assignments + Quizzes</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-white/5 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-maroon" />
                  <div>
                    <span className="block text-xs font-bold text-slate-700 dark:text-slate-300">End Sem: 50%</span>
                    <span className="text-[10px] text-slate-400">Written Theory + Lab</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </ThreeDCard>
        </div>

        {/* Quote Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mt-8 bg-gradient-to-r from-maroon/5 via-gold/5 to-transparent border-l-4 border-maroon p-5 rounded-r-2xl"
        >
          <p className="text-sm italic font-medium text-maroon">
            "Small efforts repeated every day become extraordinary achievements."
          </p>
        </motion.div>
      </section>

      {/* 🧭 EAST — CLUBS & INNOVATION */}
      <section id="clubs" className="scroll-mt-24">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2.5 rounded-2xl bg-gold/10 text-gold-hover shadow-sm border border-gold/10">
              <Sparkles className="w-6 h-6 animate-spin-slow" />
            </span>
            <span className="text-xs uppercase font-extrabold tracking-widest text-gold-hover">🧭 East Direction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Clubs, Communities <span className="text-transparent bg-clip-text bg-gradient-to-r from-maroon to-gold">& Innovation</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl text-base">
            Your growth happens as much outside the classroom as inside. Get involved, build, compete, and make lifelong friends in student clubs.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Chakravyuha Technical Club */}
          <ThreeDCard className="md:col-span-2 flex">
            <motion.div 
              custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              onClick={() => setActiveDrawer('clubs')}
              className="glass-card p-6 w-full flex flex-col justify-between group overflow-hidden relative cursor-pointer"
            >
              <div className="shine-overlay" />
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold/5 rounded-full blur-xl group-hover:bg-gold/10 transition-colors" />
              <div>
                <div className="p-3 w-fit rounded-xl bg-gold/10 text-gold-hover mb-4">
                  <Trophy className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Chakravyuha Technical Club</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                  The flagship technical hub of the campus. Chakravyuha coordinates major robotics, competitive coding, machine learning, and cybersecurity projects.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-gold/10 text-gold-hover">Robotics</span>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-gold/10 text-gold-hover">IoT</span>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">Competitive Coding</span>
              </div>
            </motion.div>
          </ThreeDCard>

          {/* Card 2: Professional Bodies (IEEE, GDSC) */}
          <ThreeDCard className="md:col-span-1 flex">
            <motion.div 
              custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              onClick={() => setActiveDrawer('clubs')}
              className="glass-card p-6 w-full flex flex-col justify-between group overflow-hidden relative cursor-pointer"
            >
              <div className="shine-overlay" />
              <div>
                <div className="p-3 w-fit rounded-xl bg-blue-500/10 text-blue-600 mb-4">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">GDSC & IEEE Chapters</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Participate in Google Developer Student Clubs (GDSC) and the IEEE student chapter. Access global resources, workshops on cloud, web, and research.
                </p>
              </div>
              <div className="mt-6 border-t border-slate-100 dark:border-white/10 pt-4 flex justify-between items-center text-xs text-slate-400 font-medium">
                <span>Weekly meetups</span>
                <span className="text-blue-600">Join chapters →</span>
              </div>
            </motion.div>
          </ThreeDCard>

          {/* Card 3: Hackathons & Workshops */}
          <ThreeDCard className="md:col-span-1 flex">
            <motion.div 
              custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              onClick={() => setActiveDrawer('clubs')}
              className="glass-card p-6 w-full flex flex-col justify-between group overflow-hidden relative cursor-pointer"
            >
              <div className="shine-overlay" />
              <div>
                <div className="p-3 w-fit rounded-xl bg-maroon/5 text-maroon mb-4">
                  <Calendar className="w-6 h-6 animate-pulse" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Hackathons & Workshops</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Compete in national hackathons and inter-college tech fests. Amrita hosts regular coding challenges and building bootcamps where you build projects.
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between text-xs bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded-lg border border-slate-100 dark:border-white/5">
                <span className="font-semibold text-slate-500">Next TechFest</span>
                <span className="font-bold text-maroon uppercase">October 2026</span>
              </div>
            </motion.div>
          </ThreeDCard>

          {/* Card 4: Student Communities & Arts (Medium) */}
          <ThreeDCard className="md:col-span-2 flex">
            <motion.div 
              custom={3} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              onClick={() => setActiveDrawer('clubs')}
              className="glass-card p-6 w-full flex flex-col justify-between group overflow-hidden relative cursor-pointer"
            >
              <div className="shine-overlay" />
              <div>
                <div className="p-3 w-fit rounded-xl bg-maroon/5 text-maroon mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Creative & Cultural Communities</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  It’s not just about technology. Express yourself through active clubs in literature, music, drama, fine arts, photography, and social service.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-2">
                <div className="text-center p-2 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-100 dark:border-white/5">
                  <span className="block text-xs font-bold text-slate-800 dark:text-white">Sanskriti</span>
                  <span className="text-[9px] text-slate-400">Cultural</span>
                </div>
                <div className="text-center p-2 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-100 dark:border-white/5">
                  <span className="block text-xs font-bold text-slate-800 dark:text-white">Rhythm</span>
                  <span className="text-[9px] text-slate-400">Music Band</span>
                </div>
                <div className="text-center p-2 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-100 dark:border-white/5">
                  <span className="block text-xs font-bold text-slate-800 dark:text-white">Pratibha</span>
                  <span className="text-[9px] text-slate-400">Arts Club</span>
                </div>
              </div>
            </motion.div>
          </ThreeDCard>
        </div>

        {/* Quote Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mt-8 bg-gradient-to-r from-gold/5 via-maroon/5 to-transparent border-l-4 border-gold p-5 rounded-r-2xl"
        >
          <p className="text-sm italic font-medium text-maroon">
            "The friends you meet and the teams you build may become your greatest college achievement."
          </p>
        </motion.div>
      </section>

      {/* 🧭 SOUTH — HOSTEL & CAMPUS LIFE */}
      <section id="campus-life" className="scroll-mt-24">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2.5 rounded-2xl bg-blue-500/10 text-blue-600 shadow-sm border border-blue-500/10">
              <Home className="w-6 h-6" />
            </span>
            <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600">🧭 South Direction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Hostel Life, Dining <span className="text-transparent bg-clip-text bg-gradient-to-r from-maroon to-gold">& Campus Hubs</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl text-base">
            This green, sustainable campus is designed to be your home away from home. Click to take an interactive campus hotspot tour!
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Hostel Facilities & Daily Routine */}
          <ThreeDCard className="md:col-span-2 flex">
            <motion.div 
              custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              onClick={() => setActiveDrawer('hostel')}
              className="glass-card p-6 w-full flex flex-col justify-between group overflow-hidden relative cursor-pointer"
            >
              <div className="shine-overlay" />
              <div>
                <div className="p-3 w-fit rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 mb-4">
                  <Home className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Hostel Comforts & Daily Routine</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Enjoy fully furnished rooms with 24/7 security, high-speed Wi-Fi, laundry facilities, and responsive support. Wardens ensure safety while allowing a healthy amount of personal space.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-slate-100 dark:border-white/10">
                <span className="text-xs text-slate-500 flex items-center gap-1.5">🔑 Curfew 9 PM</span>
                <span className="text-xs text-slate-500 flex items-center gap-1.5">🛜 High Speed Wi-Fi</span>
                <span className="text-xs text-slate-500 flex items-center gap-1.5">🧹 Laundry Assist</span>
                <span className="text-xs text-slate-500 flex items-center gap-1.5">🚿 Hot Water 24/7</span>
              </div>
            </motion.div>
          </ThreeDCard>

          {/* Card 2: Mess & Dining */}
          <ThreeDCard className="md:col-span-1 flex">
            <motion.div 
              custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              onClick={() => setActiveDrawer('hostel')}
              className="glass-card p-6 w-full flex flex-col justify-between group overflow-hidden relative cursor-pointer"
            >
              <div className="shine-overlay" />
              <div>
                <div className="p-3 w-fit rounded-xl bg-gold/10 text-gold-hover mb-4">
                  <Coffee className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Healthy Dining</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Enjoy nutritious, multi-cuisine vegetarian food served at clean dining halls. The mess serves breakfast, lunch, tea-time snacks, and dinner. 
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-1.5">
                <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">Pure Veg</span>
                <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">4 Meals/Day</span>
              </div>
            </motion.div>
          </ThreeDCard>

          {/* Card 3: Central Library */}
          <ThreeDCard className="md:col-span-1 flex">
            <motion.div 
              custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              onClick={() => setActiveDrawer('hostel')}
              className="glass-card p-6 w-full flex flex-col justify-between group overflow-hidden relative cursor-pointer"
            >
              <div className="shine-overlay" />
              <div>
                <div className="p-3 w-fit rounded-xl bg-maroon/5 text-maroon mb-4">
                  <Library className="w-6 h-6 animate-pulse" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">The Central Library</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  A massive multi-floor library that houses thousands of physical and digital research journals. Features comfortable group discussion rooms.
                </p>
              </div>
              <div className="mt-6 border-t border-slate-100 dark:border-white/10 pt-4 flex justify-between items-center text-xs text-slate-400">
                <span>Open till late night</span>
                <span className="text-maroon font-semibold">Explore Catalog →</span>
              </div>
            </motion.div>
          </ThreeDCard>

          {/* Card 4: Central Sports & Recreation */}
          <ThreeDCard className="md:col-span-2 flex">
            <motion.div 
              custom={3} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              onClick={() => setActiveDrawer('hostel')}
              className="glass-card p-6 w-full flex flex-col justify-between group overflow-hidden relative cursor-pointer"
            >
              <div className="shine-overlay" />
              <div>
                <div className="p-3 w-fit rounded-xl bg-blue-500/10 text-blue-600 mb-4">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Sports & Recreation</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Stay fit with standard sports fields. Football, synthetic basketball, badminton arena, gymnasiums with fitness trainers to guide your health.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-2 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-white/5">
                  <span className="block text-xs font-bold text-slate-700 dark:text-white">Gymnasium</span>
                  <span className="text-[9px] text-slate-400">Equipped</span>
                </div>
                <div className="p-2 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-white/5">
                  <span className="block text-xs font-bold text-slate-700 dark:text-white">Basketball</span>
                  <span className="text-[9px] text-slate-400">Synthetic</span>
                </div>
                <div className="p-2 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-white/5">
                  <span className="block text-xs font-bold text-slate-700 dark:text-white">Badminton</span>
                  <span className="text-[9px] text-slate-400">Indoor Arena</span>
                </div>
                <div className="p-2 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-white/5">
                  <span className="block text-xs font-bold text-slate-700 dark:text-white">Cricket Nets</span>
                  <span className="text-[9px] text-slate-400">Practice</span>
                </div>
              </div>
            </motion.div>
          </ThreeDCard>
        </div>

        {/* Quote Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mt-8 bg-gradient-to-r from-blue-500/5 via-maroon/5 to-transparent border-l-4 border-blue-500 p-5 rounded-r-2xl"
        >
          <p className="text-sm italic font-medium text-maroon">
            "One day this campus will stop feeling like a place and start feeling like home."
          </p>
        </motion.div>
      </section>

      {/* 🧭 WEST — OPPORTUNITIES & CAREERS */}
      <section id="opportunities" className="scroll-mt-24">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2.5 rounded-2xl bg-maroon/10 text-maroon shadow-sm border border-maroon/10">
              <Rocket className="w-6 h-6 animate-bounce" />
            </span>
            <span className="text-xs uppercase font-extrabold tracking-widest text-maroon">🧭 West Direction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Careers, Internships <span className="text-transparent bg-clip-text bg-gradient-to-r from-maroon to-gold">& Global Placements</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl text-base">
            Amrita is highly reputed for placements and research output. Discover your pathways into premium corporations, early internships, and startup mentoring.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Placements & Industry Exposure (Large) */}
          <ThreeDCard className="md:col-span-2 flex">
            <motion.div 
              custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              onClick={() => setActiveDrawer('opportunities')}
              className="glass-card p-6 w-full flex flex-col justify-between group overflow-hidden relative cursor-pointer"
            >
              <div className="shine-overlay" />
              <div className="absolute right-0 top-0 w-36 h-36 bg-maroon/5 rounded-bl-3xl" />
              <div>
                <div className="p-3 w-fit rounded-xl bg-maroon/5 text-maroon mb-4">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Corporate Placements & Preparedness</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                  The **Corporate & Industry Relations (CIR)** department works intensively with students from their second year. Amrita’s placement record features active recruiting from top-tier organizations.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-100 dark:border-white/10 pt-6">
                <div>
                  <span className="block text-2xl font-black text-maroon">95%+</span>
                  <span className="text-[9px] text-slate-400 uppercase font-semibold">Consistent Placements</span>
                </div>
                <div>
                  <span className="block text-2xl font-black text-maroon">₹50+ LPA</span>
                  <span className="text-[9px] text-slate-400 uppercase font-semibold">Highest Package Offer</span>
                </div>
                <div>
                  <span className="block text-2xl font-black text-maroon">250+</span>
                  <span className="text-[9px] text-slate-400 uppercase font-semibold">Recruiting Partners</span>
                </div>
              </div>
            </motion.div>
          </ThreeDCard>

          {/* Card 2: Internships */}
          <ThreeDCard className="md:col-span-1 flex">
            <motion.div 
              custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              onClick={() => setActiveDrawer('opportunities')}
              className="glass-card p-6 w-full flex flex-col justify-between group overflow-hidden relative cursor-pointer"
            >
              <div className="shine-overlay" />
              <div>
                <div className="p-3 w-fit rounded-xl bg-gold/10 text-gold-hover mb-4">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Early Internships</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Build professional skills with early summer internships. The faculty provides support to students to secure research internships or project-based internships in IT companies.
                </p>
              </div>
              <div className="mt-6 border-t border-slate-100 dark:border-white/10 pt-4 flex justify-between items-center text-xs text-slate-400">
                <span>Full semester options</span>
                <span className="text-gold-hover font-semibold">Learn requirements →</span>
              </div>
            </motion.div>
          </ThreeDCard>

          {/* Card 3: Research & Innovation */}
          <ThreeDCard className="md:col-span-1 flex">
            <motion.div 
              custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              onClick={() => setActiveDrawer('opportunities')}
              className="glass-card p-6 w-full flex flex-col justify-between group overflow-hidden relative cursor-pointer"
            >
              <div className="shine-overlay" />
              <div>
                <div className="p-3 w-fit rounded-xl bg-blue-500/10 text-blue-600 mb-4">
                  <Globe className="w-6 h-6 animate-pulse" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Research Focus</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Amrita is recognized globally as a leading research-driven institution. You will have opportunities to work with professors on actual research projects and patent designs.
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between text-xs bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded-lg border border-slate-100 dark:border-white/5">
                <span className="font-semibold text-slate-500">IEEE Paper support</span>
                <span className="font-bold text-blue-600">Funded</span>
              </div>
            </motion.div>
          </ThreeDCard>

          {/* Card 4: Incubation & Startups */}
          <ThreeDCard className="md:col-span-2 flex">
            <motion.div 
              custom={3} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              onClick={() => setActiveDrawer('opportunities')}
              className="glass-card p-6 w-full flex flex-col justify-between group overflow-hidden relative cursor-pointer"
            >
              <div className="shine-overlay" />
              <div>
                <div className="p-3 w-fit rounded-xl bg-gold/10 text-gold-hover mb-4">
                  <Landmark className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Startup Incubator & Entrepreneurship</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Have a vision for a startup? The **Amrita Technology Business Incubator (TBI)** supports student creators. Pitch your models to access dedicated incubation spaces.
                </p>
              </div>
              <div className="mt-6 flex gap-4 text-xs font-semibold text-slate-500">
                <span>🚀 Ideation labs</span>
                <span>💰 Seed grant support</span>
                <span>🏢 Incubation office</span>
              </div>
            </motion.div>
          </ThreeDCard>
        </div>

        {/* Quote Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mt-8 bg-gradient-to-r from-maroon/5 via-gold/5 to-transparent border-l-4 border-maroon p-5 rounded-r-2xl"
        >
          <p className="text-sm italic font-medium text-maroon">
            "Opportunities rarely arrive fully formed. They grow when you choose to participate."
          </p>
        </motion.div>
      </section>

      {/* Spatial Fullscreen Drawer Modal Overlay */}
      <AnimatePresence>
        {activeDrawer && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10 select-none">
            {/* Blurred dark backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveDrawer(null)}
              className="absolute inset-0 bg-slate-950/65 backdrop-blur-[16px] transition-opacity duration-300"
            />
            
            {/* Glass Drawer Panel */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 120, damping: 15 }}
              className="relative liquid-glass rounded-3xl w-full max-w-4xl max-h-[85vh] overflow-y-auto p-5 sm:p-8 md:p-10 border border-white/20 dark:border-white/10 shadow-2xl z-50 flex flex-col gap-6"
            >
              {/* Close Circle FAB */}
              <button
                onClick={() => setActiveDrawer(null)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full border border-slate-950/10 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-950/5 dark:hover:bg-white/5 transition-all cursor-pointer z-50"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Drawer Contents depending on active category */}
              {activeDrawer === 'academics' && (
                <div className="flex flex-col gap-6">
                  <div className="pr-12">
                    <span className="text-[10px] uppercase font-black tracking-widest text-maroon dark:text-gold">Compass Direction: North</span>
                    <h3 className="text-2xl font-black text-slate-800 dark:text-white mt-1">Academic Guidelines & SGPA success</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    <div className="space-y-4">
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        To score high in Amrita, your **Continuous Internal Assessments (CIA)** are absolutely vital. Doing well in weekly quizzes, mid-semester exams, and lab assignments accounts for **50% of your grade**, making the End Semesters stress-free!
                      </p>
                      
                      <div className="bg-maroon/5 dark:bg-white/5 p-4 rounded-2xl border border-maroon/10">
                        <h5 className="text-xs font-bold text-slate-800 dark:text-white mb-2">📋 Core Curriculum Survival Tips:</h5>
                        <ul className="space-y-2 text-[10px] text-slate-600 dark:text-slate-300 font-semibold leading-relaxed">
                          <li className="flex gap-2">
                            <span className="text-gold">✔</span> Maintain a clean GitHub portfolio for lab assignments.
                          </li>
                          <li className="flex gap-2">
                            <span className="text-gold">✔</span> Never miss quizzes — they account for 10% of internal marks.
                          </li>
                          <li className="flex gap-2">
                            <span className="text-gold">✔</span> Solve previous year ESE question papers inside the library catalog.
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    {/* Embedded interactive CGPA grade calculator */}
                    <CGPASimulator />
                  </div>
                </div>
              )}

              {activeDrawer === 'clubs' && (
                <div className="flex flex-col gap-6">
                  <div className="pr-12">
                    <span className="text-[10px] uppercase font-black tracking-widest text-gold-hover">Compass Direction: East</span>
                    <h3 className="text-2xl font-black text-slate-800 dark:text-white mt-1">Clubs, Communities & orientations</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Your growth at Amrita Amaravati is powered heavily by student-led organizations. Induction events are coordinated during the first 3-4 weeks. Talk to seniors, register for orientations, and find your passion project!
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                      <div className="glass-card p-5">
                        <h4 className="text-xs font-black text-slate-800 dark:text-white mb-3">🛠️ Chakravyuha Technical Hub</h4>
                        <p className="text-[11px] text-slate-500 leading-relaxed">
                          Hosts massive IoT hacking and robotics bootcamps. Recruitment occurs in September, featuring basic coding tests and micro-project builders.
                        </p>
                      </div>
                      <div className="glass-card p-5">
                        <h4 className="text-xs font-black text-slate-800 dark:text-white mb-3">🎨 Rhythm Music & Sanskriti Cultural Bands</h4>
                        <p className="text-[11px] text-slate-500 leading-relaxed">
                          Handles all major campus celebrations, open mic events, and jamming sessions. Recruits students with dynamic auditions on weekend evenings.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeDrawer === 'hostel' && (
                <div className="flex flex-col gap-6">
                  <div className="pr-12">
                    <span className="text-[10px] uppercase font-black tracking-widest text-blue-600">Compass Direction: South</span>
                    <h3 className="text-2xl font-black text-slate-800 dark:text-white mt-1">Hostel, Dining & Interactive blueprint</h3>
                  </div>
                  
                  {/* Interactive localized Campus Hotspot Map tour */}
                  <CampusMapTour />
                </div>
              )}

              {activeDrawer === 'opportunities' && (
                <div className="flex flex-col gap-6">
                  <div className="pr-12">
                    <span className="text-[10px] uppercase font-black tracking-widest text-maroon dark:text-gold">Compass Direction: West</span>
                    <h3 className="text-2xl font-black text-slate-800 dark:text-white mt-1">Careers, Internships & corporate recruitments</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      The **Corporate & Industry Relations (CIR)** department guides your career prep from Day 1. To qualify for elite placements (&gt;15 LPA), maintaining a clean CGPA (&gt;8.5) and a solid building portfolio is key.
                    </p>
                    <div className="bg-slate-900 text-gold font-mono p-5 rounded-2xl border border-white/10 text-xs space-y-2 leading-relaxed">
                      <div className="text-[10px] uppercase text-slate-400 font-bold mb-2">// Placement Success Checklist:</div>
                      <div>[x] GPA &gt;= 8.0 (Unlocks 90% of recruiter applications)</div>
                      <div>[ ] Complete 3 major full-stack / deep-learning projects</div>
                      <div>[ ] Solve 300+ LeetCode logic challenges (highly optimized)</div>
                      <div>[ ] Secure 1 technical recommendation from faculty members</div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
