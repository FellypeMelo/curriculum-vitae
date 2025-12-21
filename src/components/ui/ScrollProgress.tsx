import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * ScrollProgress Component.
 * Displays a progress bar at the top of the viewport indicating the scroll position.
 *
 * @returns {JSX.Element} The rendered ScrollProgress bar.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 bg-indigo-600 origin-left z-50"
      style={{ scaleX }}
    />
  );
}
