/**
 * FloatingParticles Animation Component.
 * Creates animated SVG particles that float organically in the background.
 * Uses Anime.js v4 for smooth, continuous animations with random trajectories.
 * 
 * @module FloatingParticles
 */
import { useEffect, useRef, useMemo } from 'react';
import { animate } from 'animejs';

interface Particle {
  id: number;
  cx: number;
  cy: number;
  r: number;
  color: string;
  opacity: number;
}

interface FloatingParticlesProps {
  /** Number of particles to render */
  count?: number;
  /** Color palette for particles */
  colors?: string[];
  /** Additional CSS classes */
  className?: string;
}

/**
 * Generates random particles with varied properties.
 */
function generateParticles(count: number, colors: string[]): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    cx: Math.random() * 100,
    cy: Math.random() * 100,
    r: Math.random() * 3 + 1,
    color: colors[Math.floor(Math.random() * colors.length)],
    opacity: Math.random() * 0.5 + 0.1,
  }));
}

/**
 * Random number generator helper
 */
function random(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

/**
 * Animated floating particles background.
 * Creates an organic, living feel with smooth bezier animations.
 * 
 * @param props - Component props
 * @returns SVG element with animated particles
 */
export function FloatingParticles({ 
  count = 30,
  colors = ['#818cf8', '#a78bfa', '#c4b5fd', '#6366f1', '#4f46e5'],
  className = ''
}: FloatingParticlesProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  
  // Generate particles once using useMemo instead of ref
  const particles = useMemo(() => generateParticles(count, colors), [count, colors]);

  useEffect(() => {
    if (!svgRef.current) return;

    const circles = svgRef.current.querySelectorAll('circle');
    const animations: ReturnType<typeof animate>[] = [];
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    
    circles.forEach((circle) => {
      // Random animation for each particle
      const animateParticle = () => {
        const anim = animate(circle, {
          translateX: random(-50, 50),
          translateY: random(-50, 50),
          scale: random(0.8, 1.5),
          opacity: random(0.1, 0.5),
          ease: 'inOutQuad',
          duration: random(4000, 8000),
          onComplete: () => {
            const timeout = setTimeout(animateParticle, 100);
            timeouts.push(timeout);
          },
        });
        animations.push(anim);
      };

      // Start with random delay
      const timeout = setTimeout(animateParticle, random(0, 2000));
      timeouts.push(timeout);
    });

    return () => {
      animations.forEach(anim => anim.pause());
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      {particles.map((particle) => (
        <circle
          key={particle.id}
          cx={particle.cx}
          cy={particle.cy}
          r={particle.r}
          fill={particle.color}
          opacity={particle.opacity}
          data-opacity={particle.opacity}
          filter="url(#glow)"
        />
      ))}
    </svg>
  );
}

export default FloatingParticles;
