import { ArrowUpRight, Award, BookOpen, FileText, GraduationCap } from 'lucide-react';
import { PUBLICATIONS, EDUCATION, CERTIFICATIONS } from '../../data/profile';
import { Reveal } from '../common/Reveal';

export function ResearchEducation() {
  const published = PUBLICATIONS.filter((p) => p.status === 'published');
  const inPrep = PUBLICATIONS.filter((p) => p.status === 'in-prep');

  return (
    <section id="publicacoes" className="relative border-b border-border py-24 md:py-36">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Left Column: Fixed / Sticky Academic Stance & Degree Milestone */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Pesquisa & Credenciais
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-fg md:text-5xl text-balance">
              Rigor científico e formação em engenharia.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-dim md:text-lg">
              Atuação que conecta investigação formal em Inteligência Artificial,
              publicações como primeiro autor e entrega de software em conformidade técnica.
            </p>

            {/* Prominent Graduation Milestone Box */}
            <div className="depth-layer mt-10 border border-accent/40 bg-surface/60 p-7">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center border border-accent text-accent">
                  <GraduationCap size={20} />
                </span>
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-accent">
                    Grau Acadêmico Concluído
                  </div>
                  <div className="font-display text-lg font-bold text-fg">
                    FAETERJ-Rio · Graduado
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-dim">
                Análise e Desenvolvimento de Sistemas: formação com ênfase em engenharia de software,
                banco de dados, levantamento de requisitos e arquitetura de aplicações full stack.
              </p>
            </div>

            {/* Certifications mini-grid */}
            <div className="mt-10">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-dim">
                <Award size={14} className="text-accent" />
                <span>Certificações Industriais</span>
              </div>
              <ul className="mt-4 divide-y divide-border border-y border-border">
                {CERTIFICATIONS.map((c) => (
                  <li key={c.name} className="flex items-center justify-between py-3">
                    <span className="font-display text-sm font-medium text-fg">{c.name}</span>
                    <span className="font-mono text-[11px] text-accent">{c.issuer}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Research Papers & Scholarly Publications */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-dim">
                <BookOpen size={14} className="text-accent" />
                <span>Artigos Científicos</span>
              </div>
              <h3 className="mt-2 font-display text-2xl font-bold text-fg md:text-3xl">
                Publicações Acadêmicas
              </h3>
            </div>

            {/* Flagship First-Author Paper */}
            {published.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <article className="depth-layer relative overflow-hidden border border-accent/60 bg-surface/50 p-8 md:p-10">
                  <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
                  
                  <div className="relative flex flex-wrap items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 accent-soft px-3 py-1 font-mono text-xs uppercase tracking-wider text-accent border border-accent/40">
                      <FileText size={14} />
                      {p.statusLabel}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-dim">
                      {p.venue} · {p.year}
                    </span>
                  </div>

                  <h4 className="relative mt-6 font-display text-xl font-bold leading-snug tracking-tight text-fg md:text-2xl">
                    {p.title}
                  </h4>

                  <p className="relative mt-4 font-mono text-sm text-dim">
                    {p.citation} <span className="text-fg/80">{p.venue}</span>, {p.year}.
                  </p>

                  <p className="relative mt-4 text-sm leading-relaxed text-fg/75">
                    Pesquisa sobre mecanismos de proteção atencional contra sobrecarga cognitiva,
                    modelando algoritmos e restrições arquiteturais para plataformas contemporâneas.
                  </p>

                  {p.doiHref && (
                    <a
                      href={p.doiHref}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative mt-8 inline-flex items-center gap-2 border border-fg/80 bg-fg px-5 py-3 font-mono text-xs uppercase tracking-wider text-bg transition-all hover:border-accent hover:bg-accent hover:text-accent-fg active:scale-[0.98]"
                    >
                      Acessar Publicação (DOI {p.doi})
                      <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                </article>
              </Reveal>
            ))}

            {/* In Preparation Papers */}
            {inPrep.map((p, i) => (
              <Reveal key={p.title} delay={0.15 + i * 0.08}>
                <article className="depth-layer border border-border bg-surface/20 p-7 md:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-dim">
                      {p.statusLabel}
                    </span>
                    <span className="border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-dim">
                      {p.venue} · {p.year}
                    </span>
                  </div>
                  <h4 className="mt-3 font-display text-lg font-semibold text-fg md:text-xl">
                    {p.title}
                  </h4>
                  <p className="mt-2 text-sm text-dim">
                    Pesquisa conduzida no {p.citation} com pipeline de Deep Learning para time-lapse de FIV.
                  </p>
                </article>
              </Reveal>
            ))}

            {/* Other Education entries */}
            <div className="pt-6">
              <h4 className="font-mono text-xs uppercase tracking-[0.16em] text-dim">
                Histórico Técnico Complementar
              </h4>
              <ol className="mt-4 space-y-4">
                {EDUCATION.slice(1).map((edu) => (
                  <li key={edu.institution} className="border border-border bg-surface/10 p-5">
                    <div className="flex justify-between items-baseline font-mono text-xs text-dim">
                      <span className="font-display font-medium text-fg">{edu.course}</span>
                      <span>{edu.period}</span>
                    </div>
                    <div className="font-mono text-xs text-dim mt-0.5">{edu.institution}</div>
                    <p className="mt-2 text-xs text-fg/70">{edu.details}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
