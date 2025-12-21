import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind classes.
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BadgeProps {
  children: React.ReactNode;
  color?: 'indigo' | 'slate' | 'green';
  className?: string;
}

/**
 * Badge Component.
 * Displays a small status label with configurable colors.
 *
 * @param {BadgeProps} props - Component props.
 * @returns {JSX.Element} The rendered Badge.
 */
export function Badge({ children, color = "indigo", className }: BadgeProps) {
  const colors = {
    indigo: "bg-indigo-50 text-indigo-700 border-indigo-200",
    slate: "bg-slate-100 text-slate-700 border-slate-200",
    green: "bg-emerald-50 text-emerald-700 border-emerald-200",
  };
  
  return (
    <span className={cn(`px-3 py-1 rounded-full text-xs font-medium border`, colors[color], className)}>
      {children}
    </span>
  );
}
