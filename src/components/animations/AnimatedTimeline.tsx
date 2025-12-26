/**
 * AnimatedTimeline Component.
 * SVG-based timeline with animated line drawing and pulsing dots.
 * Uses Anime.js v4 for scroll-triggered stroke animations.
 * 
 * @module AnimatedTimeline
 */
import { useEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';

interface AnimatedTimelineProps {
  /** Number of items/dots on the timeline */
  itemCount: number;
  /** Height of the timeline container */
  height?: string;
  /** Color of the line and dots */
  color?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Animated timeline with drawing line and pulsing milestone dots.
 * 
 * @param props - Component props
 * @returns SVG timeline element
 */
export function AnimatedTimeline({ 
  itemCount, 
  height = '100%',
  color = '#6366f1',
  className = '' 
}: AnimatedTimelineProps) {
  const lineRef = useRef<SVGLineElement>(null);
  const dotsRef = useRef<(SVGCircleElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for scroll trigger
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  // Trigger animations when visible
  useEffect(() => {
    if (!isVisible || !lineRef.current) return;

    const line = lineRef.current;
    const lineLength = line.getTotalLength();
    
    // Set up the line for drawing animation
    line.style.strokeDasharray = `${lineLength}`;
    line.style.strokeDashoffset = `${lineLength}`;

    // Animate line drawing
    animate(line, {
      strokeDashoffset: [lineLength, 0],
      ease: 'inOutCubic',
      duration: 2000,
    });

    // Animate dots with stagger
    const validDots = dotsRef.current.filter(Boolean) as SVGCircleElement[];
    
    // Initial scale-in for all dots
    animate(validDots, {
      scale: [0, 1],
      opacity: [0, 1],
      ease: 'outElastic(1, .6)',
      duration: 800,
      delay: stagger(300, { start: 200 }),
    });

    // Continuous pulse animation after initial reveal
    const pulseTimeout = setTimeout(() => {
      animate(validDots, {
        scale: [1, 1.3, 1],
        ease: 'inOutQuad',
        duration: 1500,
        loop: true,
        delay: stagger(200),
      });
    }, 1200);

    return () => {
      clearTimeout(pulseTimeout);
    };

  }, [isVisible, itemCount]);

  // Calculate dot positions evenly distributed
  const dotPositions = Array.from({ length: itemCount }, (_, i) => 
    itemCount > 1 ? (i / (itemCount - 1)) * 100 : 50
  );

  return (
    <div 
      ref={containerRef}
      className={`absolute left-0 top-0 w-8 ${className}`}
      style={{ height }}
    >
      <svg 
        width="32" 
        height="100%" 
        className="overflow-visible"
        preserveAspectRatio="none"
      >
        {/* Main timeline line */}
        <line
          ref={lineRef}
          x1="16"
          y1="24"
          x2="16"
          y2="calc(100% - 24px)"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.3"
        />
        
        {/* Animated dots */}
        {dotPositions.map((pos, index) => (
          <g key={index}>
            {/* Outer glow ring */}
            <circle
              cx="16"
              cy={`${pos}%`}
              r="12"
              fill={`${color}10`}
              className="animate-ping"
              style={{ animationDelay: `${index * 0.2}s`, animationDuration: '2s' }}
            />
            {/* Main dot */}
            <circle
              ref={(el) => { dotsRef.current[index] = el; }}
              cx="16"
              cy={`${pos}%`}
              r="8"
              fill="white"
              stroke={color}
              strokeWidth="3"
              style={{ 
                opacity: 0, 
                transformOrigin: 'center',
                filter: `drop-shadow(0 0 6px ${color}60)`
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

export default AnimatedTimeline;
