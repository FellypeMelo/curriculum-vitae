import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin } from 'lucide-react';
import { PROFILE } from '../../data/profile';
import { Badge } from '../ui/Badge';
import { Scene } from '../3d/Scene';
import { TextReveal } from '../animations/TextReveal';
import { FloatingParticles } from '../animations/FloatingParticles';

/**
 * Hero Section Component.
 * The main landing area of the portfolio, featuring a 3D scene,
 * elegant Anime.js text animations, and social links.
 *
 * @returns {JSX.Element} The rendered Hero section.
 */
export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Subtle floating particles background */}
      <FloatingParticles 
        count={25} 
        colors={['#818cf8', '#a78bfa', '#c4b5fd', '#6366f1']}
        className="z-0 opacity-40"
      />
      
      <Scene />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl mt-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Badge color="indigo">Disponível para Projetos</Badge>
          
          {/* Animated name with character-by-character reveal */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mt-6 mb-4 tracking-tight leading-tight">
            <TextReveal 
              text="Fellype Melo" 
              delay={400}
              duration={800}
              staggerMs={45}
            />
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-slate-500 font-light mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            {PROFILE.role}. {PROFILE.tagline}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-lg hover:border-slate-300 transition-colors">
              <Github size={18} /> GitHub
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400"
        >
          <ChevronDown size={24} />
        </motion.div>
      </div>
    </section>
  );
}


