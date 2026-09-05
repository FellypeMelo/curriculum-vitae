import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { PROFILE, FACTS } from '../../data/profile';
import { ArchGraph } from '../visual/ArchGraph';

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100dvh] items-center overflow-hidden"
    >
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-10 px-5 pt-28 pb-16 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-24">
        {/* Left: type */}
        <div className="relative z-10">
          <motion.p {...rise(0)} className="kicker">
            Rio de Janeiro · Software Engineer
          </motion.p>

          <motion.h1
            {...rise(0.08)}
            className="mt-5 font-display text-4xl font-bold leading-[0.95] tracking-tight text-fg text-balance sm:text-6xl md:text-7xl lg:text-[5.4rem]"
          >
            Fellype Samuel<br />de Melo
          </motion.h1>

          <motion.p
            {...rise(0.18)}
            className="mt-7 max-w-[46ch] text-lg leading-relaxed text-dim md:text-xl"
          >
            <span className="text-fg">Um bom software começa antes da implementação.</span>{' '}
            Foco em arquitetura, engenharia de software e IA aplicada.
          </motion.p>

          <motion.div {...rise(0.28)} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projetos"
              className="group inline-flex items-center gap-2 border border-fg/80 bg-fg px-5 py-3 font-mono text-xs uppercase tracking-wider text-bg transition-all hover:border-accent hover:bg-accent hover:text-accent-fg active:scale-[0.98]"
            >
              Ver projetos
              <ArrowDown size={15} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center border border-border px-5 py-3 font-mono text-xs uppercase tracking-wider text-fg transition-all hover:border-accent hover:text-accent active:scale-[0.98]"
            >
              Contato
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-11 w-11 place-items-center border border-border text-dim transition-all hover:border-accent hover:text-accent active:scale-[0.96]"
              >
                <Github size={17} />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-11 w-11 place-items-center border border-border text-dim transition-all hover:border-accent hover:text-accent active:scale-[0.96]"
              >
                <Linkedin size={17} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: 3D interactive architecture cluster inside a drafting frame */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative perspective-container"
        >
          <div className="depth-layer relative h-[280px] w-full border border-border bg-surface/40 sm:h-[360px] lg:h-[520px]">
            <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
            <ArchGraph className="absolute inset-0 h-full w-full" />
            {/* Drafting corner ticks */}
            <Corner className="left-[-1px] top-[-1px]" />
            <Corner className="right-[-1px] top-[-1px] rotate-90" />
            <Corner className="right-[-1px] bottom-[-1px] rotate-180" />
            <Corner className="left-[-1px] bottom-[-1px] -rotate-90" />
            <div className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
              <span className="inline-block h-1.5 w-1.5 bg-accent" />
              <span>spatial.system.graph</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Corner({ className }: { className?: string }) {
  return (
    <span
      className={`pointer-events-none absolute h-4 w-4 border-l border-t border-accent ${className ?? ''}`}
      aria-hidden="true"
    />
  );
}

export function HeroFacts() {
  return (
    <div className="border-y border-border bg-surface/30">
      <dl className="mx-auto grid max-w-[1240px] grid-cols-2 divide-x divide-border px-5 md:grid-cols-4 md:px-8">
        {FACTS.map((f) => (
          <div key={f.label} className="px-4 py-6 first:pl-0 md:px-6">
            <dt className="kicker">{f.label}</dt>
            <dd className="mt-2 font-display text-base font-medium leading-snug text-fg md:text-lg">
              {f.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
