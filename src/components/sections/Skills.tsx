import { SKILL_GROUPS, LANGUAGES } from '../../data/profile';
import { Reveal } from '../common/Reveal';

export function Skills() {
  return (
    <section id="stack" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-fg md:text-5xl">
            Stack &amp; práticas
          </h2>
          <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-dim md:text-lg">
            Ferramentas e princípios que uso para levar uma ideia de requisito a
            sistema em produção.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
          {SKILL_GROUPS.map((g, i) => {
            const Icon = g.icon;
            const flagship = i < 2;
            return (
              <Reveal key={g.label} delay={i * 0.05}>
                <div
                  className={`relative h-full p-7 md:p-8 ${
                    flagship ? 'bg-surface/60' : 'bg-bg'
                  }`}
                >
                  {flagship && (
                    <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
                  )}
                  <div className="relative flex items-center gap-3">
                    <Icon size={18} className="text-accent" />
                    <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-fg">
                      {g.label}
                    </h3>
                  </div>
                  <ul className="relative mt-5 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className="border border-border bg-bg/70 px-3 py-1.5 font-mono text-[0.78rem] tracking-tight text-fg/85 transition-colors hover:border-accent/50 hover:text-accent"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-5 flex flex-col gap-4 border border-border bg-surface/20 p-7 sm:flex-row sm:items-center sm:justify-between md:p-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-dim">
              Idiomas
            </h3>
            <ul className="flex flex-wrap gap-x-10 gap-y-3">
              {LANGUAGES.map((l) => (
                <li key={l.name} className="flex items-baseline gap-3">
                  <span className="font-display text-lg font-medium text-fg">{l.name}</span>
                  <span className="font-mono text-xs uppercase tracking-wider text-accent">
                    {l.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
