import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Eye, X } from 'lucide-react';

const galleryImages = [
  {
    title: "Central Library Hub",
    description: "The knowledge epicentre of Amrita Amaravati campus, housing a massive digital catalogue, active study lounges, and quiet cabins.",
    url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    title: "Synthetics Sports Complex",
    description: "Modern indoor synthetic badminton courts, multi-station fitness gymnasiums, basketball arenas, and outdoor sports fields.",
    url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    colSpan: "col-span-1",
  },
  {
    title: "Secure Hostel Blocks",
    description: "Secure, state-of-the-art residential blocks Vyas (Boys) & Patanjali (Girls) with spacious double-sharing rooms, washing infrastructure, and recreation zones.",
    url: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    colSpan: "col-span-1",
  },
  {
    title: "Academic Block 1 (AB1)",
    description: "A world-class engineering education block housing interactive classrooms, advanced computing labs, and IoT research centers.",
    url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    colSpan: "col-span-1 md:col-span-2",
  }
];

function TiltCard({ image, viewCount, onClick, index }: { image: any, viewCount: number, onClick: () => void, index: number, key?: React.Key }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      style={{ perspective: 1000 }}
      className={`relative h-80 cursor-pointer ${image.colSpan}`}
      onClick={onClick}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group absolute inset-0 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-300"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${image.url})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80" />
        
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 text-white/90 transform translate-z-[20px]" style={{ transform: "translateZ(20px)" }}>
          <Eye className="w-4 h-4" />
          <span className="text-xs font-semibold">{viewCount.toLocaleString()}</span>
        </div>

        <div className="absolute bottom-0 left-0 p-8 w-full" style={{ transform: "translateZ(30px)" }}>
          <h3 className="text-2xl font-bold text-white mb-2 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">{image.title}</h3>
          <p className="text-slate-200 text-sm transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
            {image.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function CampusGallery() {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [viewCounts, setViewCounts] = useState<number[]>([]);

  useEffect(() => {
    // Simulate initial engagement view counts and increment them on mount
    const initialCounts = galleryImages.map(() => Math.floor(Math.random() * 500) + 150);
    setViewCounts(initialCounts);
    
    const incrementInterval = setInterval(() => {
      setViewCounts(prev => prev.map(count => count + Math.floor(Math.random() * 3)));
    }, 5000);

    return () => clearInterval(incrementInterval);
  }, []);

  return (
    <section id="gallery" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl text-shadow-sm">Explore Campus</h2>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">Sneak a peek at the key landmarks of our 100-acre green campus.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transform-gpu">
          {galleryImages.map((image, index) => (
            <TiltCard 
              key={index} 
              index={index}
              image={image} 
              viewCount={viewCounts[index] || 0}
              onClick={() => setSelectedImage(image)} 
            />
          ))}
        </div>

        {/* Caption linking to official gallery */}
        <div className="mt-12 text-center relative z-10">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            📸 Want to see more real-time snapshots? Explore the official{' '}
            <a 
              href="https://www.amrita.edu/campus/amaravati/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-maroon dark:text-gold font-bold hover:underline inline-flex items-center gap-1"
            >
              Amrita Amaravati Website Gallery
            </a>
          </p>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-slate-900/40 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl rounded-3xl max-h-[90vh] overflow-y-auto glass-heavy shadow-2xl"
            >
              <button 
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="relative aspect-video">
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">{selectedImage.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
