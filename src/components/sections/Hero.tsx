import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, GraduationCap } from 'lucide-react';
import { PROFILE, FACTS } from '../../data/profile';

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden pt-28 pb-16"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 md:px-8">
        <div className="max-w-4xl">
          {/* Degree & Location Badge */}
          <motion.div {...rise(0)} className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 border border-accent/40 bg-surface/70 px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider text-accent depth-layer">
              <GraduationCap size={15} />
              ADS · Graduado (FAETERJ-Rio)
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-dim">
              Rio de Janeiro · Software Engineer & IA
            </span>
          </motion.div>

          <motion.h1
            {...rise(0.08)}
            className="mt-6 font-display text-4xl font-bold leading-[0.95] tracking-tight text-fg text-balance sm:text-6xl md:text-7xl lg:text-[5.6rem]"
          >
            Fellype Samuel<br />de Melo
          </motion.h1>

          <motion.p
            {...rise(0.18)}
            className="mt-8 max-w-[54ch] text-lg leading-relaxed text-dim md:text-2xl"
          >
            <span className="text-fg font-medium">Um bom software começa antes da implementação.</span>{' '}
            Engenharia de software fundamentada, Clean Architecture e inteligência artificial aplicada à pesquisa científica.
          </motion.p>

          <motion.div {...rise(0.28)} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#perfil"
              className="group inline-flex items-center gap-2.5 border border-fg/90 bg-fg px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-bg transition-all hover:border-accent hover:bg-accent hover:text-accent-fg active:scale-[0.98] depth-layer"
            >
              Explorar Sistemas
              <ArrowDown size={15} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center border border-border bg-surface/40 px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-fg transition-all hover:border-accent hover:text-accent active:scale-[0.98] depth-layer"
            >
              Iniciar Contato
            </a>
            <div className="ml-2 flex items-center gap-2">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-12 w-12 place-items-center border border-border bg-surface/30 text-dim transition-all hover:border-accent hover:text-accent active:scale-[0.96]"
              >
                <Github size={18} />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-12 w-12 place-items-center border border-border bg-surface/30 text-dim transition-all hover:border-accent hover:text-accent active:scale-[0.96]"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function HeroFacts() {
  return (
    <div className="relative z-10 border-y border-border bg-surface/60 backdrop-blur-md">
      <dl className="mx-auto grid max-w-[1240px] grid-cols-2 divide-x divide-border px-5 md:grid-cols-4 md:px-8">
        {FACTS.map((f) => (
          <div key={f.label} className="px-4 py-6 first:pl-0 md:px-6">
            <dt className="kicker">{f.label}</dt>
            <dd className="mt-2 font-display text-base font-semibold leading-snug text-fg md:text-lg">
              {f.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
