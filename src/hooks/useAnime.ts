/**
 * Custom React hook for Anime.js v4 integration.
 * Provides a clean API for triggering animations with proper cleanup.
 * @module useAnime
 */
import { useRef, useEffect, useCallback } from 'react';
import { animate, stagger, createTimeline } from 'animejs';
import type { JSAnimation, Timeline } from 'animejs';

/**
 * Hook that provides Anime.js v4 integration for React components.
 * Handles animation lifecycle and cleanup automatically.
 * 
 * @returns Object containing animation utilities
 */
export function useAnime() {
  const animationsRef = useRef<(JSAnimation | Timeline)[]>([]);

  // Cleanup all animations on unmount
  useEffect(() => {
    return () => {
      animationsRef.current.forEach(anim => anim.pause());
      animationsRef.current = [];
    };
  }, []);

  /**
   * Creates and starts an animation.
   * @param targets - Elements to animate
   * @param params - Animation parameters
   * @returns The Animation instance
   */
  const animateFn = useCallback((targets: Parameters<typeof animate>[0], params: Parameters<typeof animate>[1]): JSAnimation => {
    const instance = animate(targets, params);
    animationsRef.current.push(instance);
    return instance;
  }, []);

  /**
   * Creates an animation timeline.
   * @returns The Timeline instance
   */
  const timelineFn = useCallback((): Timeline => {
    const tl = createTimeline();
    animationsRef.current.push(tl);
    return tl;
  }, []);

  /**
   * Built-in easing functions
   */
  const easings = {
    elastic: 'outElastic(1, .6)',
    bounce: 'outBounce',
    expo: 'outExpo',
    smooth: 'inOutQuad',
    spring: 'outElastic(1, 0.5)',
  };

  return { 
    animate: animateFn, 
    timeline: timelineFn, 
    stagger, 
    easings 
  };
}

export { animate, stagger, createTimeline };
export default useAnime;
