import { useEffect } from 'react';
import { Nav } from './components/layout/Nav';
import { Hero } from './components/sections/Hero';
import { ProfileSection } from './components/sections/ProfileSection';
import { EngineeringSection } from './components/sections/EngineeringSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ResearchSection } from './components/sections/ResearchSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';

export default function App() {
  useEffect(() => {
    // Scroll reveal observer for Swiss nodes
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const nodes = document.querySelectorAll('.reveal-node');
    nodes.forEach((el) => revealObserver.observe(el));

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:border focus:border-secondary focus:bg-background focus:px-4 focus:py-2 focus:font-meta-mono focus:text-xs focus:text-secondary"
      >
        Pular para o conteúdo
      </a>

      {/* Fixed Swiss Gazette Header */}
      <Nav />

      {/* Main Document Body */}
      <main className="w-full pt-20 bg-background min-h-screen" id="top">
        <div className="flex flex-col w-full text-on-surface">
          <Hero />
          <ProfileSection />
          <EngineeringSection />
          <ExperienceSection />
          <ProjectsSection />
          <ResearchSection />
          <ContactSection />
        </div>
      </main>

      {/* Swiss Specification Footer */}
      <Footer />
    </>
  );
}
