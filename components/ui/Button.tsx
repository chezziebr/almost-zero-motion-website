import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'white' | 'ghost';
  size?: 'base' | 'lg' | 'full';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  children,
  variant = 'primary',
  size = 'base',
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const baseStyles = `
    inline-block font-headline font-bold uppercase tracking-wide
    text-center border-none cursor-pointer transition-all duration-200
    no-underline whitespace-nowrap
  `;

  const variantStyles = {
    primary: 'bg-[var(--color-performance-red)] text-white hover:bg-[var(--color-red-hover)] hover:-translate-y-0.5 hover:shadow-md active:bg-[var(--color-red-dark)] active:translate-y-0',
    secondary: 'bg-transparent text-black border-2 border-black hover:bg-black hover:text-white',
    white: 'bg-white text-black hover:bg-[var(--color-couch-gray)]',
    ghost: 'bg-transparent text-black hover:text-[var(--color-performance-red)]',
  };

  const sizeStyles = {
    base: 'px-8 py-4 text-base rounded-sm',
    lg: 'px-12 py-6 text-lg rounded-sm',
    full: 'block w-full px-8 py-4 text-base rounded-sm',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
}
