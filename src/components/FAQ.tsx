import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { WaterDrops } from './WaterDrops';

const faqs = [
  {
    question: "Do I really need 75% attendance?",
    answer: "Yes, it is strictly enforced across Amrita campuses. Falling below 75% without valid medical reasons can result in you not being allowed to write your End Semester Exams."
  },
  {
    question: "What is the food like in the hostel mess?",
    answer: "The mess serves pure vegetarian food with fixed timings for breakfast, lunch, snacks, and dinner. It is hygienic and the menu rotates weekly."
  },
  {
    question: "How do I choose which club to join?",
    answer: "Attend the inductions during your first month! Most clubs hold orientation sessions where they explain their activities. You can join multiple clubs, but try to focus on 1-2 to balance with academics."
  },
  {
    question: "Is there a specific dress code?",
    answer: "Yes, Amrita follows a modest, formal/semi-formal dress code for classes. ID cards must be worn visibly at all times within the academic blocks."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index} 
              className="glass-card rounded-2xl overflow-hidden relative"
            >
              <WaterDrops count={2} />
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-semibold text-slate-900 dark:text-white pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 dark:text-slate-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
