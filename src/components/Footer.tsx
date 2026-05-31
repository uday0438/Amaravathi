import { Compass } from 'lucide-react';

export function Footer() {
  return (
    <footer className="glass-navbar py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xl tracking-tight">
            <div className="bg-rose-500/20 backdrop-blur-md text-rose-600 dark:text-rose-400 p-2 rounded-lg border border-rose-500/30">
               <Compass className="w-6 h-6" />
            </div>
            <span>Campus Compass</span>
          </div>
          
          <p className="max-w-md text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
             An unofficial survival guide crafted for the incoming batch of 2026. Built for the Chakravyuha Technical Club Build with AI Challenge.
          </p>

          <div className="w-full h-px bg-slate-200 dark:bg-slate-800 my-4" />

          <p className="text-slate-500 text-sm">
             © 2026 Amrita Vishwa Vidyapeetham, Amaravati Students.
          </p>
        </div>
      </div>
    </footer>
  );
}
