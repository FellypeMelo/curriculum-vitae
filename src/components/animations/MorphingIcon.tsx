/**
 * MorphingIcon Animation Component.
 * SVG path morphing animation that cycles through different tech-related icons.
 * Uses Anime.js v4 for smooth bezier path interpolation.
 * 
 * @module MorphingIcon
 */
import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

interface MorphingIconProps {
  /** Size of the icon in pixels */
  size?: number;
  /** Color of the icon */
  color?: string;
  /** Additional CSS classes */
  className?: string;
}

// SVG paths for different icons (simplified for morphing compatibility)
const ICON_PATHS = [
  // Code brackets
  'M8 3L3 12L8 21M16 3L21 12L16 21',
  // Brain/AI circuit
  'M12 3C7 3 3 7 3 12C3 17 7 21 12 21C17 21 21 17 21 12M12 3V12M12 12L18 6M12 12L6 18',
  // Database
  'M12 3C17 3 21 5 21 8C21 11 17 13 12 13C7 13 3 11 3 8C3 5 7 3 12 3M3 8V16C3 19 7 21 12 21C17 21 21 19 21 16V8',
  // Terminal
  'M4 6L10 12L4 18M12 18H20M4 4H20V20H4V4',
  // Network/Cloud
  'M12 6C9 6 6 8 6 12C6 16 9 18 12 18C15 18 18 16 18 12C18 8 15 6 12 6M3 12H6M18 12H21M12 3V6M12 18V21',
];

/**
 * Animated morphing icon that cycles through tech-related shapes.
 * 
 * @param props - Component props
 * @returns SVG element with morphing path animation
 */
export function MorphingIcon({ 
  size = 80, 
  color = '#6366f1',
  className = '' 
}: MorphingIconProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const currentIndex = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const pathElement = pathRef.current;
    if (!pathElement) return;

    const morphToNext = () => {
      currentIndex.current = (currentIndex.current + 1) % ICON_PATHS.length;
      
      animate(pathElement, {
        d: ICON_PATHS[currentIndex.current],
        ease: 'inOutQuad',
        duration: 800,
        onComplete: () => {
          timeoutRef.current = setTimeout(morphToNext, 2000);
        }
      });
    };

    // Initial morph after delay
    timeoutRef.current = setTimeout(morphToNext, 2000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`morphing-icon ${className}`}
    >
      <path 
        ref={pathRef} 
        d={ICON_PATHS[0]}
        style={{ 
          filter: `drop-shadow(0 0 8px ${color}40)` 
        }}
      />
    </svg>
  );
}

export default MorphingIcon;
