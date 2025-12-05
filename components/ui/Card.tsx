import React from 'react';

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  padding?: 'none' | 'base';
  className?: string;
}

export function Card({ children, hover = false, padding = 'base', className = '' }: CardProps) {
  const baseStyles = 'bg-white border border-[var(--color-border)] rounded overflow-hidden transition-all duration-200';
  const hoverStyles = hover ? 'cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:border-black' : '';
  const paddingStyles = padding === 'base' ? 'p-4' : '';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${paddingStyles} ${className}`}>
      {children}
    </div>
  );
}
