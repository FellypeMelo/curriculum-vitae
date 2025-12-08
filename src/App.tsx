import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Education } from './components/sections/Education';
import { Certifications } from './components/sections/Certifications';
import { Footer } from './components/sections/Footer';

import { ScrollProgress } from './components/ui/ScrollProgress';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-600 selection:bg-indigo-100 selection:text-indigo-900">
      <ScrollProgress />
      
      {/* --- HERO SECTION --- */}
      <Hero />

      <div className="container mx-auto px-4 py-32 md:px-8 max-w-7xl">
        
        {/* --- SOBRE & IDIOMAS --- */}
        <About />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 my-24">
          
          {/* --- EXPERIÊNCIA --- */}
          <Experience />

          {/* --- EDUCAÇÃO --- */}
          <Education />

        </div>

        {/* --- HABILIDADES & TECNOLOGIAS --- */}
        <Skills />

        {/* --- CERTIFICAÇÕES --- */}
        <Certifications />

      </div>

      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
}
