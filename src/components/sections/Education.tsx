import { GraduationCap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';
import { EDUCATION } from '../../data/profile';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

/**
 * Education Section Component.
 * Displays educational background cards with Anime.js animated reveals.
 *
 * @returns {JSX.Element} The rendered Education section.
 */
export function Education() {
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

  // Animate cards when visible
  useEffect(() => {
    if (!isVisible || !containerRef.current) return;

    const cards = containerRef.current.querySelectorAll('.edu-card');

    animate(cards, {
      opacity: [0, 1],
      translateX: [30, 0],
      ease: 'outExpo',
      duration: 800,
      delay: stagger(120),
    });

  }, [isVisible]);

  return (
    <div ref={containerRef}>
      <SectionHeading icon={GraduationCap}>Educação</SectionHeading>
      <div className="space-y-6">
        {EDUCATION.map((edu, idx) => (
          <div
            key={idx}
            className="edu-card opacity-0"
          >
            <Card className="hover:border-indigo-200 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-slate-900">{edu.institution}</h3>
                <Badge color="green">{edu.status}</Badge>
              </div>
              <div className="text-indigo-600 font-medium text-sm mb-2">{edu.course}</div>
              <p className="text-sm text-slate-500">{edu.details}</p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

