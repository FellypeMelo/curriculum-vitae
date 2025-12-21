import React from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Card Component.
 * A styled container with scroll-triggered entrance animation.
 *
 * @param {CardProps} props - Component props.
 * @returns {JSX.Element} The rendered Card.
 */
export function Card({ children, className = "" }: CardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={cn("bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300", className)}
    >
      {children}
    </motion.div>
  );
}
