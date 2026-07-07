import { PROFILE } from '../../data/profile';
import { Reveal } from '../common/Reveal';

export function About() {
  return (
    <section id="perfil" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <Reveal>
          <h2 className="max-w-[22ch] font-display text-3xl font-semibold leading-[1.08] tracking-tight text-fg text-balance md:text-5xl">
            Compreender o problema,{' '}
            <span className="text-accent">modelar a solução</span> e desenhar a
            arquitetura que sustenta a evolução do sistema.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <Reveal delay={0.05}>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-dim">
              Resumo
            </h3>
            <p className="text-base leading-relaxed text-fg/85 md:text-lg">
              {PROFILE.summary}
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-dim">
              Como trabalho
            </h3>
            <p className="text-base leading-relaxed text-fg/85 md:text-lg">
              {PROFILE.practices}
            </p>
            <p className="mt-5 text-base leading-relaxed text-dim md:text-lg">
              Uso Inteligência Artificial como ferramenta de engenharia para
              acelerar análise, documentação, implementação e validação, sempre
              com foco em qualidade e boas práticas.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
