import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../../data/profile';
import { Reveal } from '../common/Reveal';

const CHANNELS = [
  { icon: Mail, label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { icon: Github, label: 'GitHub', value: PROFILE.githubLabel, href: PROFILE.github },
  { icon: Linkedin, label: 'LinkedIn', value: PROFILE.linkedinLabel, href: PROFILE.linkedin },
];

export function Contact() {
  return (
    <section id="contato" className="relative overflow-hidden py-24 md:py-36">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Contato
            </p>
            <h2 className="mt-6 max-w-[16ch] font-display text-4xl font-bold leading-[1.02] tracking-tight text-fg text-balance md:text-6xl">
              Vamos construir algo bem arquitetado.
            </h2>
            <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-dim md:text-lg">
              Interesse em projetos que exijam pensamento arquitetural, decisões
              técnicas e soluções escaláveis para problemas reais.
            </p>
            <a
              href={`mailto:${PROFILE.email}`}
              className="group mt-9 inline-flex items-center gap-2 border border-fg/80 bg-fg px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-bg transition-colors hover:border-accent hover:bg-accent hover:text-accent-fg"
            >
              Enviar email
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <div className="mt-8 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-dim">
              <MapPin size={14} className="text-accent" />
              {PROFILE.location}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ul className="divide-y divide-border border-y border-border">
              {CHANNELS.map((c) => {
                const Icon = c.icon;
                const external = c.href.startsWith('http');
                return (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noreferrer' : undefined}
                      className="group flex items-center gap-4 py-5 transition-colors"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center border border-border text-dim transition-colors group-hover:border-accent group-hover:text-accent">
                        <Icon size={17} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-mono text-[0.7rem] uppercase tracking-wider text-dim">
                          {c.label}
                        </span>
                        <span className="block truncate font-display text-base font-medium text-fg transition-colors group-hover:text-accent md:text-lg">
                          {c.value}
                        </span>
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="shrink-0 text-dim transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col gap-2 border-t border-border pt-8 font-mono text-xs text-dim sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 {PROFILE.fullName}</span>
          <span>Construído com React, Vite e Tailwind.</span>
        </div>
      </div>
    </section>
  );
}
