import { Award } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';
import { CERTIFICATIONS } from '../../data/profile';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';

/**
 * Certifications Section Component.
 * Displays a grid of certifications with Anime.js animated reveals.
 *
 * @returns {JSX.Element} The rendered Certifications section.
 */
export function Certifications() {
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

  // Animate cards and icons when visible
  useEffect(() => {
    if (!isVisible || !containerRef.current) return;

    const cards = containerRef.current.querySelectorAll('.cert-card');
    const icons = containerRef.current.querySelectorAll('.cert-icon');

    // Animate cards with scale effect
    animate(cards, {
      opacity: [0, 1],
      scale: [0.8, 1],
      translateY: [20, 0],
      ease: 'outElastic(1, .6)',
      duration: 800,
      delay: stagger(100),
    });

    // Animate icons with bounce
    animate(icons, {
      opacity: [0, 1],
      scale: [0, 1.1, 1],
      rotate: [0, 10, 0],
      ease: 'outElastic(1, .5)',
      duration: 600,
      delay: stagger(100, { start: 200 }),
    });

  }, [isVisible]);

  return (
    <div className="mt-24 mb-12" ref={containerRef}>
      <SectionHeading icon={Award}>Certificações</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert, idx) => (
          <div
            key={idx}
            className="cert-card opacity-0"
          >
            <Card className="flex flex-col items-center text-center p-8 bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="cert-icon w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 transition-transform hover:scale-110 duration-300" style={{ opacity: 0 }}>
                <cert.icon size={32} />
              </div>
              <h4 className="font-bold text-slate-900 text-lg mb-2">{cert.name}</h4>
              <p className="text-slate-500">{cert.issuer}</p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

