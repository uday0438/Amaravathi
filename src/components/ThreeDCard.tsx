import React, { useState, useRef } from 'react';
import { WaterDrops } from './WaterDrops';

interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // max tilt angle in degrees
}

export function ThreeDCard({ children, className = '', maxTilt = 8 }: ThreeDCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Position of cursor relative to card's top-left corner
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalized position from -1 to 1 relative to center
    const normalizedX = (x / rect.width) * 2 - 1;
    const normalizedY = (y / rect.height) * 2 - 1;
    
    // Calculate rotation angles
    const rotateX = -normalizedY * maxTilt;
    const rotateY = normalizedX * maxTilt;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)' // snappy and responsive while tracking mouse
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' // smooth return to center
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
      className={`preserve-3d relative ${className}`}
    >
      <WaterDrops count={4} />
      {children}
    </div>
  );
}
