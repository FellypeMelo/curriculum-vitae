import { Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE } from '../../data/profile';

/**
 * Footer Component.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 border-t border-border/30">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-fg mb-2">
            Vamos construir algo <span className="text-accent">juntos?</span>
          </h2>
          <p className="text-sm text-dim font-mono uppercase tracking-widest">
            {PROFILE.name} &copy; {currentYear}
          </p>
        </div>

        <div className="flex gap-6">
          <a 
            href={PROFILE.linkedin} 
            target="_blank" 
            rel="noreferrer" 
            className="p-3 border border-border rounded-full text-dim hover:text-accent hover:border-accent transition-all hover:scale-110"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href={PROFILE.github} 
            target="_blank" 
            rel="noreferrer" 
            className="p-3 border border-border rounded-full text-dim hover:text-accent hover:border-accent transition-all hover:scale-110"
          >
            <Github size={20} />
          </a>
          <a 
            href="mailto:contato@fellypemelo.com" 
            className="p-3 border border-border rounded-full text-dim hover:text-accent hover:border-accent transition-all hover:scale-110"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-xs text-dim font-mono opacity-40">
          HEAVILY MODIFIED TERMINAL SYSTEM // BUILD_v2.0.4 // REACT + THREE.JS + TAILWIND
        </p>
      </div>
    </footer>
  );
}
