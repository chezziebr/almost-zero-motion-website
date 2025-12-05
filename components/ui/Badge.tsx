import React from 'react';

interface BadgeProps {
  children?: React.ReactNode;
  text?: string;
  variant?: 'red' | 'black';
  size?: 'sm' | 'base';
}

export function Badge({ children, text = 'REST PERFORMANCE', variant = 'red', size = 'base' }: BadgeProps) {
  const baseStyles = 'inline-block font-bold uppercase tracking-wide rounded-sm';

  const variantStyles = {
    red: 'bg-[var(--color-performance-red)] text-white',
    black: 'bg-black text-white',
  };

  const sizeStyles = {
    sm: 'px-2 py-1 text-xs',
    base: 'px-3 py-1.5 text-xs',
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}>
      {children || text}
    </span>
  );
}
