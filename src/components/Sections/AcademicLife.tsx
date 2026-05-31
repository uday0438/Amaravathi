import { motion } from 'motion/react';
import { BookOpen, Clock, FileText, CheckCircle, Calculator, AlertCircle } from 'lucide-react';

export function AcademicLife() {
  return (
    <section id="academics" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl text-shadow-sm">Academic Life</h2>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">Everything you need to know to survive and thrive in classes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="glass p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/50 dark:bg-white/10 text-blue-600 dark:text-blue-400 rounded-2xl shadow-sm border border-white/20">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">B.Tech Branches</h3>
              </div>
              <p className="text-slate-700 dark:text-slate-300">
                Amrita Amaravati offers cutting-edge B.Tech programs:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Computer Science and Engineering (CSE)
                </li>
                <li className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Computer & Communication Engineering (CCE)
                </li>
                <li className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Artificial Intelligence & Data Science (AIDS)
                </li>
              </ul>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="glass p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/50 dark:bg-white/10 text-amber-600 dark:text-amber-400 rounded-2xl shadow-sm border border-white/20">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Class & Lab Structure</h3>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                The standard working hours are <strong className="text-slate-900 dark:text-white">9:00 AM to 5:00 PM</strong>. Expect a mix of intensive theory classes and hands-on practical labs equipped with modern design tools.
              </p>
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="glass !bg-rose-400/20 dark:!bg-rose-900/40 p-8 border-rose-200/50 dark:border-rose-800/50"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/50 dark:bg-white/10 text-rose-700 dark:text-rose-400 rounded-2xl shadow-sm border border-white/20">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Attendance Rules</h3>
              </div>
              <p className="text-slate-800 dark:text-slate-200">
                Amrita takes attendance very seriously! You must maintain a strict minimum of <strong className="text-rose-700 dark:text-rose-400 font-bold">75% attendance</strong> to be permitted to write the final exams. Do not skip classes lightly.
              </p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="glass p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/50 dark:bg-white/10 text-emerald-600 dark:text-emerald-400 rounded-2xl shadow-sm border border-white/20">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Exam Pattern</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-white/30 dark:bg-slate-800/40 rounded-xl border border-white/20">
                  <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    CIA (Continuous Internal Assessment)
                  </h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">Periodical tests, quizzes, and lab assignments spread throughout the semester.</p>
                </div>
                <div className="p-4 bg-white/30 dark:bg-slate-800/40 rounded-xl border border-white/20">
                  <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    ESE (End Semester Exam)
                  </h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">The final comprehensive paper at the end of the term.</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-300/30 dark:border-slate-700/50">
                <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                  <Calculator className="w-5 h-5 text-indigo-500" />
                  CGPA Tips
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">A high CGPA starts on Day 1. Focus heavily on your CIA—scoring high in internals takes the pressure off the final ESE. Never miss lab submissions.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
