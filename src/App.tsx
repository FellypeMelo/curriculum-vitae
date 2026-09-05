import { Nav } from './components/layout/Nav';
import { Hero, HeroFacts } from './components/sections/Hero';
import { Manifesto } from './components/sections/Manifesto';
import { Experience } from './components/sections/Experience';
import { ProjectsStack } from './components/sections/ProjectsStack';
import { ResearchEducation } from './components/sections/ResearchEducation';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <>
      <a
        href="#perfil"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:border focus:border-accent focus:bg-bg focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-accent"
      >
        Pular para o conteúdo
      </a>

      <Nav />

      <main className="overflow-x-hidden w-full max-w-full">
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
