import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Nav } from './components/layout/Nav';
import { Hero, HeroFacts } from './components/sections/Hero';
import { Manifesto } from './components/sections/Manifesto';
import { Experience } from './components/sections/Experience';
import { ProjectsStack } from './components/sections/ProjectsStack';
import { ResearchEducation } from './components/sections/ResearchEducation';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';
import { WorldCanvas3D } from './components/visual/WorldCanvas3D';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Initialize buttery smooth virtual scrolling
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Recalculate ScrollTrigger offsets once the layout and fonts settle
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timer);
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <a
        href="#perfil"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:border focus:border-accent focus:bg-bg focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-accent"
      >
        Pular para o conteúdo
      </a>

      {/* Global High-Contrast Continuous 3D Spatial Canvas */}
      <WorldCanvas3D />

      <Nav />

      <main className="relative z-10 overflow-x-hidden w-full max-w-full">
        <Hero />
        <HeroFacts />
        <Manifesto />
        <Experience />
        <ProjectsStack />
        <ResearchEducation />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
