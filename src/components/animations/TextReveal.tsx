/**
 * TextReveal Animation Component.
 * Displays text with a sophisticated character-by-character reveal animation
 * using Anime.js v4 for elastic easing and 3D rotation effects.
 * 
 * @module TextReveal
 */
import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

interface TextRevealProps {
  /** The text content to animate */
  text: string;
  /** Additional CSS classes */
  className?: string;
  /** Delay before animation starts (ms) */
  delay?: number;
  /** Animation duration per character (ms) */
  duration?: number;
  /** Stagger delay between characters (ms) */
  staggerMs?: number;
  /** HTML tag to render */
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

/**
 * Animated text reveal with character-by-character animation.
 * 
 * @param props - Component props
 * @returns The animated text element
 */
export function TextReveal({ 
  text, 
  className = '', 
  delay = 300,
  duration = 1200,
  staggerMs = 50,
  as: Tag = 'span'
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!containerRef.current || hasAnimated.current) return;
    hasAnimated.current = true;

    const chars = containerRef.current.querySelectorAll('.char');

    animate(chars, {
      opacity: [0, 1],
      translateY: [40, 0],
      rotateX: [90, 0],
      scale: [0.5, 1],
      ease: 'outElastic(1, .6)',
      duration: duration,
      delay: stagger(staggerMs, { start: delay }),
    });
  }, [delay, duration, staggerMs]);

  // Split text into words and characters for animation
  const words = text.split(' ');

  return (
    <Tag 
      ref={containerRef as React.RefObject<HTMLHeadingElement>} 
      className={`inline-block ${className}`}
      style={{ perspective: '1000px' }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split('').map((char, charIndex) => (
            <span
              key={`${wordIndex}-${charIndex}`}
              className="char inline-block opacity-0"
              style={{ 
                transformStyle: 'preserve-3d',
                display: 'inline-block',
              }}
            >
              {char}
            </span>
          ))}
          {wordIndex < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </Tag>
  );
}

export default TextReveal;
