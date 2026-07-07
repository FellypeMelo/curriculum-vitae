import { Nav } from './components/layout/Nav';
import { Hero, HeroFacts } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Publications } from './components/sections/Publications';
import { Skills } from './components/sections/Skills';
import { Education } from './components/sections/Education';
import { Certifications } from './components/sections/Certifications';
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

      <main>
        <Hero />
        <HeroFacts />
        <About />
        <Experience />
        <Projects />
        <Publications />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}
