import React from 'react';

interface WaterDropsProps {
  count?: number;
}

export function WaterDrops({ count = 3 }: WaterDropsProps) {
  // Stable pre-calculated aesthetic positions to avoid layout shifts or random placement flickers on re-render.
  // Using percentages allows them to scale smoothly to fit any card aspect ratio or size perfectly.
  const droplets = [
    { top: '12%', left: '82%', size: 'w-3 h-3', delay: '0s' },
    { top: '78%', left: '10%', size: 'w-4.5 h-4.5', delay: '1s' },
    { top: '48%', left: '88%', size: 'w-3.5 h-3.5', delay: '0.5s' },
    { top: '85%', left: '76%', size: 'w-2.5 h-2.5', delay: '1.5s' },
    { top: '8%', left: '16%', size: 'w-4 h-4', delay: '2s' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[inherit] z-[2]">
      {droplets.slice(0, count).map((drop, idx) => (
        <div
          key={idx}
          className={`absolute water-drop ${drop.size} opacity-75 dark:opacity-40 transition-all duration-300`}
          style={{
            top: drop.top,
            left: drop.left,
            animationDelay: drop.delay,
          }}
        />
      ))}
    </div>
  );
}
