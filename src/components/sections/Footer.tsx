import { Github, Linkedin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';
import { PROFILE } from '../../data/profile';

/**
 * Footer Component.
 * Displays the footer section with Anime.js animated social links.
 *
 * @returns {JSX.Element} The rendered Footer.
 */
export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for scroll trigger
  useEffect(() => {
    if (!footerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  // Animate footer elements when visible
  useEffect(() => {
    if (!isVisible || !footerRef.current) return;

    const elements = footerRef.current.querySelectorAll('.footer-anim');

    animate(elements, {
      opacity: [0, 1],
      translateY: [20, 0],
      ease: 'outExpo',
      duration: 1000,
      delay: stagger(100),
    });

  }, [isVisible]);

  return (
    <footer className="bg-white border-t border-slate-200 py-12" ref={footerRef}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="footer-anim opacity-0 text-2xl font-bold text-slate-900 mb-6">Vamos trabalhar juntos?</h2>
        <div className="flex justify-center gap-6 mb-8">
          <a href={PROFILE.linkedin} className="footer-anim opacity-0 text-slate-500 hover:text-indigo-600 transition-colors transform hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href={PROFILE.github} className="footer-anim opacity-0 text-slate-500 hover:text-indigo-600 transition-colors transform hover:scale-110">
            <Github size={24} />
          </a>
        </div>
        <p className="footer-anim opacity-0 text-slate-400 text-sm">
          © {new Date().getFullYear()} Fellype Samuel. Feito com React, TailwindCSS & Three.js.
        </p>
      </div>
    </footer>
  );
}
