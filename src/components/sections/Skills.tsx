import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';
import { SKILLS } from '../../data/profile';
import { SectionHeading } from '../ui/SectionHeading';

/**
 * Skills Section Component.
 * Displays a list of technical skills with Anime.js animated progress bars
 * and counting percentage effect.
 *
 * @returns {JSX.Element} The rendered Skills section.
 */
export function Skills() {
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

  // Trigger Anime.js animations when visible
  useEffect(() => {
    if (!isVisible || !containerRef.current) return;

    const cards = containerRef.current.querySelectorAll('.skill-card');
    const bars = containerRef.current.querySelectorAll('.skill-bar-fill');
    const percentages = containerRef.current.querySelectorAll('.skill-percentage');

    // Animate cards entrance with 3D effect
    animate(cards, {
      opacity: [0, 1],
      translateY: [30, 0],
      rotateX: [15, 0],
      ease: 'outExpo',
      duration: 800,
      delay: stagger(80),
    });

    // Animate skill bar widths
    bars.forEach((bar, index) => {
      const targetWidth = SKILLS[index]?.level || 0;
      animate(bar, {
        width: [`0%`, `${targetWidth}%`],
        ease: 'outExpo',
        duration: 1500,
        delay: 300 + index * 100,
      });
    });

    // Animate percentage counters
    percentages.forEach((el, index) => {
      const target = SKILLS[index]?.level || 0;
      const obj = { value: 0 };
      animate(obj, {
        value: target,
        ease: 'outExpo',
        duration: 1500,
        delay: 300 + index * 100,
        onUpdate: () => {
          el.textContent = `${Math.round(obj.value)}%`;
        },
      });
    });

  }, [isVisible]);

  return (
    <div className="mt-24" ref={containerRef}>
      <SectionHeading icon={Cpu}>Stack Tecnológico</SectionHeading>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {SKILLS.map((skill, idx) => (
          <div 
            key={idx}
            className="skill-card bg-white p-4 rounded-xl border border-slate-200 flex flex-col items-start gap-2 shadow-sm transition-all hover:border-indigo-200 hover:shadow-lg hover:-translate-y-1 opacity-0"
            style={{ 
              perspective: '1000px',
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="flex justify-between w-full items-center">
              <span className="font-semibold text-slate-800">{skill.name}</span>
              <span className="skill-percentage text-xs text-indigo-600 font-mono font-bold">0%</span>
            </div>
            <span className="text-xs text-slate-400 font-mono">{skill.category}</span>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mt-2">
              <div 
                className="skill-bar-fill bg-gradient-to-r from-indigo-500 to-indigo-600 h-full rounded-full"
                style={{ width: '0%' }}
              />
            </div>
          </div>
        ))}
      </div>
      
      <motion.div 
        className="mt-6 flex flex-wrap gap-2 text-sm text-slate-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
      >
         <span className="font-semibold mr-2">Outras Habilidades:</span>
         <span>C (Avançado) • PHP • Análise de Dados • Watson Studio • NLP • Ethical Hacking (Pentest) • Segurança de Redes</span>
      </motion.div>
    </div>
  );
}

