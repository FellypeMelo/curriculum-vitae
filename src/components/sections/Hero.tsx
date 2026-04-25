import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import { PROFILE } from '../../data/profile';
import { Scene } from '../3d/Scene';
import { TextReveal } from '../animations/TextReveal';

/**
 * Hero Section Component - Terminal Studio Style.
 */
export function Hero() {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center py-8 overflow-hidden">
      {/* 3D Scene as Background */}
      <div className="absolute inset-0 z-0 opacity-30 mix-blend-screen">
        <Scene />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-2 py-0.5 mb-4 border border-accent/30 bg-accent/5 rounded text-[9px] uppercase tracking-widest text-accent font-mono">
            // STATUS: AVAILABLE_FOR_PROJECTS
          </div>
          
          <h1 
            id="hero-name"
            className="text-4xl md:text-6xl font-bold text-fg mt-1 mb-4 tracking-tighter leading-none glitch"
            data-text="Fellype Samuel"
            data-target="hero-title"
          >
            <TextReveal 
              text="Fellype Samuel" 
              delay={200}
              duration={800}
              staggerMs={30}
            />
          </h1>
          
          <motion.div 
            className="font-mono text-xs md:text-sm text-dim/90 mb-8 max-w-lg mx-auto uppercase tracking-[0.15em] leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {PROFILE.role} <br />
            <span className="text-accent/70 mt-1.5 block italic normal-case tracking-normal font-sans text-sm md:text-base">
              {PROFILE.tagline}
            </span>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <a 
              href={PROFILE.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="group flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-fg hover:text-accent transition-colors"
            >
              <div className="p-1.5 border border-border group-hover:border-accent transition-colors rounded-full">
                <Linkedin size={12} /> 
              </div>
              LinkedIn
            </a>
            <a 
              href={PROFILE.github} 
              target="_blank" 
              rel="noreferrer" 
              className="group flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-fg hover:text-accent transition-colors"
            >
              <div className="p-1.5 border border-border group-hover:border-accent transition-colors rounded-full">
                <Github size={12} /> 
              </div>
              GitHub
            </a>
            <button className="group flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-fg hover:text-accent transition-colors opacity-50 cursor-not-allowed">
              <div className="p-1.5 border border-border rounded-full">
                <ExternalLink size={12} /> 
              </div>
              Resume.pdf
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
