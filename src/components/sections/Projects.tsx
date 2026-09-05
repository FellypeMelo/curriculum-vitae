import { PROJECTS } from '../../data/profile';
import { Reveal } from '../common/Reveal';
import { TiltCard } from '../common/TiltCard';

export function Projects() {
  return (
    <section id="projetos" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-fg md:text-5xl">
            Projetos
          </h2>
          <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-dim md:text-lg">
            Sistemas conduzidos da arquitetura à entrega, aplicando as práticas
            de engenharia que defendo.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          {PROJECTS.map((p, i) => {
            const featured = i === 0;
            const Icon = p.icon;
            return (
              <Reveal key={p.name} delay={i * 0.08}>
                <TiltCard
                  featured={featured}
                  className={`group relative flex h-full flex-col overflow-hidden border border-border p-7 md:p-9 ${
                    featured ? 'bg-surface/50 hover:border-accent/60' : 'bg-surface/20 hover:border-accent/40'
                  }`}
                >
                  <article className="flex h-full flex-col">
                    {featured && (
                      <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
                    )}

                    <div className="relative flex items-center justify-between gap-4">
                      <span className="grid h-11 w-11 place-items-center border border-border text-accent transition-colors group-hover:border-accent/60">
                        <Icon size={20} />
                      </span>
                      <span className="border border-accent/40 accent-soft px-3 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-accent">
                        {p.status}
                      </span>
                    </div>

                    <div className="relative mt-7">
                      <h3 className="font-display text-2xl font-semibold tracking-tight text-fg md:text-3xl">
                        {p.name}
                      </h3>
                      <p className="mt-1.5 font-mono text-xs uppercase tracking-wider text-dim">
                        {p.kind} · {p.role}
                      </p>
                    </div>

                    <p className="relative mt-5 text-base leading-relaxed text-fg/85">
                      {p.description}
                    </p>

                    <ul className="relative mt-5 grid gap-2.5">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex gap-3 text-sm leading-relaxed text-dim">
                          <span className="mt-2 h-px w-4 shrink-0 bg-accent/70" aria-hidden="true" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    <ul className="relative mt-auto flex flex-wrap gap-2 pt-7">
                      {p.stack.map((s) => (
                        <li
                          key={s}
                          className="border border-border bg-bg/60 px-2.5 py-1 font-mono text-[0.7rem] tracking-tight text-dim transition-colors group-hover:border-accent/30"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </article>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
