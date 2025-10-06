import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  isGlow?: boolean;
  // Fix: Add style prop to allow passing inline styles to fix TypeScript error in Roadmap.tsx.
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ children, className = '', isGlow = false, style }) => {
  const cardClasses = `rounded-2xl p-6 sm:p-8 crystalline-card transition-all duration-300 hover:shadow-2xl hover:shadow-arcane-accent/20 hover:-translate-y-1 ${className} ${isGlow ? 'glow-border' : ''}`;
  
  const internalStyle = {'--animation-delay': `${Math.random() * 0.5}s`} as React.CSSProperties;
  
  return (
    <div className={cardClasses} style={{ ...internalStyle, ...style }}>
      {children}
    </div>
  );
};

export default Card;
