import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { animate } from 'animejs';
import { PROFILE } from '../../data/profile';

// Globe icon SVG component
const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
)

/**
 * About Section Component.
 * Displays professional objective and animated language skills.
 * Uses Anime.js for scroll-triggered bar animations.
 *
 * @returns {JSX.Element} The rendered About section.
 */
export function About() {
  const languagesRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for scroll trigger
  useEffect(() => {
    if (!languagesRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(languagesRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  // Animate language bars when visible
  useEffect(() => {
    if (!isVisible || !languagesRef.current) return;

    const bars = languagesRef.current.querySelectorAll('.lang-bar');
    
    // Animate each bar individually to avoid type issues
    bars.forEach((bar, index) => {
      const targetWidth = bar.getAttribute('data-width') || '0%';
      animate(bar, {
        width: targetWidth,
        ease: 'outExpo',
        duration: 1500,
        delay: 300 + index * 200,
      });
    });
  }, [isVisible]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
      
      {/* ABOUT */}
      <motion.div className="md:col-span-8 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm"
         initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <div className="flex items-center gap-2 mb-4 text-indigo-600">
          <BrainCircuit size={20} />
          <span className="font-semibold uppercase tracking-wider text-xs">Objetivo Profissional</span>
        </div>
        <p className="text-lg text-slate-700 leading-relaxed">
          {PROFILE.summary}
        </p>
      </motion.div>

      {/* LANGUAGES with Anime.js animated bars */}
      <motion.div 
        ref={languagesRef}
        className="md:col-span-4 bg-indigo-600 text-white p-8 rounded-2xl shadow-lg shadow-indigo-200"
        initial={{ opacity: 0, x: 20 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: true }}
      >
         <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
            <GlobeIcon /> Idiomas
         </h3>
         <div className="space-y-4">
           <div>
             <div className="flex justify-between text-sm mb-1 opacity-90">Português</div>
             <div className="h-2 bg-indigo-800/50 rounded-full overflow-hidden">
               <div 
                 className="lang-bar h-full bg-white rounded-full" 
                 data-width="100%"
                 style={{ width: '0%' }}
               />
             </div>
             <span className="text-xs opacity-75 mt-1 block">Nativo</span>
           </div>
           <div>
             <div className="flex justify-between text-sm mb-1 opacity-90">Inglês</div>
             <div className="h-2 bg-indigo-800/50 rounded-full overflow-hidden">
               <div 
                 className="lang-bar h-full bg-white rounded-full" 
                 data-width="75%"
                 style={{ width: '0%' }}
               />
             </div>
             <span className="text-xs opacity-75 mt-1 block">Avançado-Intermediário (B2)</span>
           </div>
         </div>
      </motion.div>
    </div>
  );
}

