import { Briefcase } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';
import { EXPERIENCE } from '../../data/profile';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

/**
 * Experience Section Component.
 * Displays professional experience timeline with Anime.js animated reveals.
 *
 * @returns {JSX.Element} The rendered Experience section.
 */
export function Experience() {
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

  // Animate cards and dots when visible
  useEffect(() => {
    if (!isVisible || !containerRef.current) return;

    const cards = containerRef.current.querySelectorAll('.exp-card');
    const dots = containerRef.current.querySelectorAll('.timeline-dot');

    // Animate cards with slide and fade
    animate(cards, {
      opacity: [0, 1],
      translateX: [-30, 0],
      ease: 'outExpo',
      duration: 800,
      delay: stagger(150),
    });

    // Animate dots with scale and pulse
    animate(dots, {
      scale: [0, 1.2, 1],
      opacity: [0, 1],
      ease: 'outElastic(1, .5)',
      duration: 600,
      delay: stagger(150),
    });

  }, [isVisible]);

  return (
    <div ref={containerRef}>
      <SectionHeading icon={Briefcase}>Experiência Profissional</SectionHeading>
      <div className="space-y-6 border-l-2 border-slate-200 ml-3 pl-8 relative">
        {EXPERIENCE.map((job, idx) => (
          <div key={idx} className="relative group exp-card opacity-0">
            {/* Timeline dot with Anime.js animation */}
            <span className="timeline-dot absolute -left-[41px] top-6 h-5 w-5 rounded-full border-4 border-white bg-indigo-600 shadow-sm z-10 transition-transform group-hover:scale-125" style={{ opacity: 0 }} />
            
            <Card className="hover:border-indigo-200 transition-all hover:shadow-lg cursor-default hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-2 gap-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{job.role}</h3>
                  <div className="text-indigo-600 font-medium text-sm">{job.company}</div>
                </div>
                <Badge color="slate">{job.period}</Badge>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {job.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {job.tags.map(tag => (
                  <span key={tag} className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

