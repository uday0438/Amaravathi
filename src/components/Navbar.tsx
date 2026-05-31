import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { Moon, Sun, ArrowUpRight, Menu, X } from 'lucide-react';

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Academics', href: '#academics' },
    { name: 'Clubs', href: '#clubs' },
    { name: 'Campus Life', href: '#campus-life' },
    { name: 'Careers', href: '#opportunities' },
  ];

  // Scroll spy to highlight current active link in the liquid glass navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      
      // Determine if at the top (Home)
      if (window.scrollY < 200) {
        setActiveSection('home');
        return;
      }

      // Check sections
      const sections = [
        { id: 'academics', name: 'academics' },
        { id: 'clubs', name: 'clubs' },
        { id: 'campus-life', name: 'campus life' },
        { id: 'opportunities', name: 'careers' },
      ];

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-5 left-0 w-full z-[999] px-4 select-none">
      
      {/* Liquid Glass Pill Navbar Container */}
      <nav className="relative liquid-glass max-w-6xl mx-auto rounded-full px-3 py-2 flex items-center justify-between transition-all duration-300">
        
        {/* Brand/Logo Title (Visible on all sizes) */}
        <div className="flex items-center pl-3 select-none">
          <span className="text-xs uppercase font-black tracking-widest text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
            🧭 <span className="hidden sm:inline">Campus Compass</span>
          </span>
        </div>

        {/* Navigation Links (Desktop - Absolute Centered) */}
        <div className="hidden md:flex items-center gap-1.5 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const isLinkActive = activeSection === link.name.toLowerCase();
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(link.href, e)}
                className={`text-xs uppercase font-extrabold tracking-wider transition-all duration-300 px-5 py-2.5 rounded-full flex items-center justify-center ${
                  isLinkActive
                    ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/20 font-black'
                    : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-gold hover:bg-white/10 dark:hover:bg-slate-800/10'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Right side utilities (Pills & Theme Toggle) */}
        <div className="flex items-center gap-3.5 pr-1">
          {/* Action button pointing to official college website */}
          <a
            href="https://www.amrita.edu/campus/amaravati/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex bg-slate-900/5 dark:bg-white/5 hover:bg-slate-900/10 dark:hover:bg-white/10 border border-slate-950/10 dark:border-white/10 rounded-full px-5 py-2.5 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-slate-800 dark:text-slate-200 transition-all duration-300 flex items-center gap-1 cursor-pointer"
          >
            College Website
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
          </a>

          {/* Theme Toggler (Circle) */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-10 h-10 rounded-full border border-slate-950/10 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-950/5 dark:hover:bg-white/5 transition-all duration-300 cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
          </button>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-full border border-slate-950/10 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-950/5 dark:hover:bg-white/5 transition-all cursor-pointer"
            aria-label="Open navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </nav>

      {/* Mobile Drawer (Glass panel) */}
      {isOpen && (
        <div className="md:hidden mt-3 px-2">
          <div className="liquid-glass rounded-3xl p-5 flex flex-col gap-2.5">
            {navLinks.map((link) => {
              const isLinkActive = activeSection === link.name.toLowerCase();
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className={`text-xs uppercase font-extrabold tracking-wider transition-all duration-300 px-4 py-3 rounded-2xl flex items-center ${
                    isLinkActive
                      ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow font-black'
                      : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-gold'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            {/* College Website Redirection Link in Mobile Drawer */}
            <a
              href="https://www.amrita.edu/campus/amaravati/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="text-xs uppercase font-extrabold tracking-wider transition-all duration-300 px-4 py-3 rounded-2xl flex items-center justify-between bg-gold/10 text-maroon dark:text-gold border border-gold/20"
            >
              <span>College Website</span>
              <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </a>
          </div>
        </div>
      )}

    </header>
  );
}
