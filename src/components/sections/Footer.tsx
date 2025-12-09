import { Github, Linkedin } from 'lucide-react';
import { PROFILE } from '../../data/profile';

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Vamos trabalhar juntos?</h2>
        <div className="flex justify-center gap-6 mb-8">

          <a href={PROFILE.linkedin} className="text-slate-500 hover:text-indigo-600 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href={PROFILE.github} className="text-slate-500 hover:text-indigo-600 transition-colors">
            <Github size={24} />
          </a>
        </div>
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Fellype Samuel. Feito com React, TailwindCSS & Three.js.
        </p>
      </div>
    </footer>
  );
}
