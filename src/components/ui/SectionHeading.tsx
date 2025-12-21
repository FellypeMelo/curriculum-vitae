import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface SectionHeadingProps {
  children: React.ReactNode;
  icon?: LucideIcon;
}

/**
 * SectionHeading Component.
 * Displays a section title with an optional icon.
 *
 * @param {SectionHeadingProps} props - Component props.
 * @returns {JSX.Element} The rendered SectionHeading.
 */
export function SectionHeading({ children, icon: Icon }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
        {Icon && <Icon size={24} />}
      </div>
      <h2 className="text-2xl font-bold text-slate-900 tracking-tight">{children}</h2>
    </div>
  );
}
