"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 neon-glow",
    secondary: "bg-gray-800 text-white border border-gray-600 hover:bg-gray-700 hover:border-blue-500",
    outline: "border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const ButtonContent = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={classes}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {ButtonContent}
      </a>
    );
  }

  return (
    <motion.button
      type={type}
      className="focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.0 }}
      whileTap={{ scale: 1.0 }}
    >
      {ButtonContent}
    </motion.button>
  );
}