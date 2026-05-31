import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { ThemeProvider } from './components/ThemeProvider';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Ticker } from './components/Ticker';
import { BentoSections } from './components/BentoSections';
import { JourneyTimeline } from './components/JourneyTimeline';
import { SurvivalKit } from './components/Sections/SurvivalKit';
import { Resources } from './components/Sections/Resources';
import { FAQ } from './components/FAQ';
import { ConnectWithSeniors } from './components/Sections/ConnectWithSeniors';
import { Footer } from './components/Footer';
import { ShareButton } from './components/ShareButton';
import { SplashLoader } from './components/SplashLoader';
import { AudioPlayer } from './components/AudioPlayer';

export default function App() {
  const [activeDirection, setActiveDirection] = useState<'N' | 'E' | 'S' | 'W' | 'C'>('N');
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2600);
    return () => clearTimeout(timer);
  }, []);

  // Handle clicking compass directions to smoothly scroll to targets
  const handleDirectionClick = (direction: 'N' | 'E' | 'S' | 'W' | 'C') => {
    setActiveDirection(direction);
    
    const sectionIds = {
      N: 'academics',
      E: 'clubs',
      S: 'campus-life',
      W: 'opportunities',
      C: 'journey',
    };

    const targetId = sectionIds[direction];
    const element = document.getElementById(targetId);
    
    if (element) {
      // Calculate scroll offset for the sticky navbar
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Scroll spy logic using IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // Active when section is within middle viewport bounds
      threshold: 0.05,
    };

    const sections = [
      { id: 'academics', dir: 'N' },
      { id: 'clubs', dir: 'E' },
      { id: 'campus-life', dir: 'S' },
      { id: 'opportunities', dir: 'W' },
      { id: 'journey', dir: 'C' },
    ];

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const match = sections.find((s) => s.id === entry.target.id);
          if (match) {
            setActiveDirection(match.dir as any);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <ThemeProvider defaultTheme="light">
      <AnimatePresence>
        {showSplash && <SplashLoader />}
      </AnimatePresence>
      
      {/* Animated Light-Theme Soft Radial Blobs */}
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#F8FAFC] dark:bg-slate-950 transition-colors duration-500">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-maroon/8 dark:bg-maroon/15 blur-[100px] animate-blob" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-gold/8 dark:bg-gold/15 blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[40%] rounded-full bg-blue-500/8 dark:bg-blue-900/15 blur-[100px] animate-blob animation-delay-4000" />
      </div>

      <div className="min-h-screen font-sans text-slate-900 dark:text-slate-50 selection:bg-gold/30 selection:text-maroon">
        
        {/* Sticky Glass Navbar */}
        <Navbar />
        
        <main>
          {/* Hero Hub with Spinning Active Compass */}
          <Hero 
            activeDirection={activeDirection} 
            onDirectionClick={handleDirectionClick} 
          />
          
          {/* Dynamic Campus Announcements Ticker */}
          <Ticker />
          
          {/* Bento Hub: Academics (N), Clubs (E), Campus (S), Opportunities (W) */}
          <BentoSections />
          
          {/* Dynamic Future Stepper Journey (C) */}
          <JourneyTimeline />
          
          {/* Survival Kit Section (DO's & DON'Ts) */}
          <SurvivalKit />
          
          {/* Quick Digitized Resources & Portals Links */}
          <Resources />
          
          {/* Fresher FAQs Accordion */}
          <FAQ />
          
          {/* Senior Networking panel */}
          <ConnectWithSeniors />

          {/* 🎥 College Intro Video Section */}
          <section id="intro-video" className="py-20 bg-transparent relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl text-shadow-sm mb-4">
                Amrita Amaravati Campus Tour & Insights
              </h2>
              <p className="mt-2 text-base text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
                Watch this official video to get a sense of Amrita's high-tech ecosystem, global programs, and campus lifestyle.
              </p>
              
              <div className="relative aspect-video rounded-3xl overflow-hidden glass p-3 border-gold/30 shadow-2xl">
                <iframe
                  className="w-full h-full rounded-2xl"
                  src="https://www.youtube.com/embed/TZGWNH-iaHk"
                  title="Amrita Amaravati Campus Tour Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </section>
        </main>
        
        {/* Footer info and copyrights */}
        <Footer />
        
        {/* Floating sharing widgets */}
        <ShareButton />
        
        {/* Floating college-nostalgia audio player widget */}
        <AudioPlayer />
        
      </div>
    </ThemeProvider>
  );
}
