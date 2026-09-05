import { ArrowUpRight, FileText } from 'lucide-react';
import { PUBLICATIONS } from '../../data/profile';
import { Reveal } from '../common/Reveal';

export function Publications() {
  const published = PUBLICATIONS.filter((p) => p.status === 'published');
  const inPrep = PUBLICATIONS.filter((p) => p.status === 'in-prep');

  return (
    <section id="publicacoes" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-fg md:text-5xl">
            Publicações
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5">
          {published.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <article className="depth-layer relative overflow-hidden border border-accent/40 bg-surface/40 p-8 md:p-12">
                <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
                <div className="relative">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 accent-soft px-3 py-1 font-mono text-[0.72rem] uppercase tracking-wider text-accent">
                      <FileText size={13} />
                      {p.statusLabel}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-dim">
                      {p.venue} · {p.year}
                    </span>
                  </div>

                  <h3 className="mt-6 max-w-[40ch] font-display text-2xl font-semibold leading-[1.14] tracking-tight text-fg text-balance md:text-4xl">
                    {p.title}
                  </h3>

                  <p className="mt-5 font-mono text-sm text-dim">
                    {p.citation} <span className="text-fg/70">{p.venue}</span>, {p.year}.
                  </p>

                  {p.doiHref && (
                    <a
                      href={p.doiHref}
                      target="_blank"
                      rel="noreferrer"
                      className="group mt-7 inline-flex items-center gap-2 border border-fg/80 bg-fg px-5 py-3 font-mono text-xs uppercase tracking-wider text-bg transition-all hover:border-accent hover:bg-accent hover:text-accent-fg active:scale-[0.98]"
                    >
                      DOI {p.doi}
                      <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}

          {inPrep.map((p, i) => (
            <Reveal key={p.title} delay={0.1 + i * 0.06}>
              <article className="flex flex-col gap-4 border border-border bg-surface/20 p-7 md:flex-row md:items-center md:justify-between md:gap-8 md:p-8">
                <div>
                  <span className="font-mono text-[0.72rem] uppercase tracking-wider text-dim">
                    {p.statusLabel}
                  </span>
                  <h3 className="mt-2 max-w-[52ch] font-display text-lg font-medium leading-snug text-fg md:text-xl">
                    {p.title}
                  </h3>
                </div>
                <span className="shrink-0 border border-border px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-dim">
                  {p.venue} · {p.year}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
