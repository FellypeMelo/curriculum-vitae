import { EXPERIENCE } from '../../data/profile';
import { Reveal } from '../common/Reveal';

export function Experience() {
  return (
    <section id="experiencia" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-fg md:text-5xl">
            Onde tenho atuado
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-border border-t border-border">
          {EXPERIENCE.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 0.06}>
              <article className="grid grid-cols-1 gap-6 py-10 md:grid-cols-[minmax(0,15rem)_1fr] md:gap-12 md:py-12">
                <div className="md:pt-1">
                  <div className="font-mono text-xs uppercase tracking-[0.14em] text-dim">
                    {exp.period}
                  </div>
                  <div className="mt-3 font-display text-xl font-semibold text-fg">
                    {exp.company}
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-lg font-medium text-accent md:text-xl">
                    {exp.role}
                  </h3>
                  <p className="mt-3 max-w-[62ch] text-base leading-relaxed text-fg/85 md:text-lg">
                    {exp.summary}
                  </p>

                  <ul className="mt-6 grid gap-3">
                    {exp.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm leading-relaxed text-dim md:text-base">
                        <span className="mt-2 h-px w-4 shrink-0 bg-accent/70" aria-hidden="true" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {exp.tags.map((t) => (
                      <li
                        key={t}
                        className="border border-border px-2.5 py-1 font-mono text-[0.7rem] tracking-tight text-dim"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
