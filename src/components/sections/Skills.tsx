import { SKILL_GROUPS, LANGUAGES } from '../../data/profile';
import { Reveal } from '../common/Reveal';

export function Skills() {
  return (
    <section id="stack" className="relative border-b border-border py-24 md:py-36">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-fg md:text-5xl">
            Stack &amp; práticas
          </h2>
          <p className="mt-4 max-w-[58ch] text-base leading-relaxed text-dim md:text-lg">
            Ferramentas e princípios que uso para levar uma ideia de requisito a
            sistema em produção.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {SKILL_GROUPS.map((g, i) => {
            const Icon = g.icon;
            const flagship = i < 2;
            return (
              <Reveal key={g.label} delay={i * 0.05}>
                <div
                  className={`depth-layer group relative h-full border border-border/80 p-7 md:p-8 backdrop-blur-md transition-all hover:border-accent/40 ${
                    flagship ? 'bg-surface/75' : 'bg-surface/50'
                  }`}
                >
                  {flagship && (
                    <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
                  )}
                  <div className="relative flex items-center gap-3">
                    <span className="grid h-8 w-8 place-items-center border border-border text-accent transition-transform group-hover:scale-110">
                      <Icon size={16} />
                    </span>
                    <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-fg">
                      {g.label}
                    </h3>
                  </div>
                  <ul className="relative mt-6 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className="border border-border/80 bg-bg/80 px-3 py-1.5 font-mono text-[0.78rem] tracking-tight text-fg/85 transition-all hover:border-accent/50 hover:text-accent active:scale-[0.97]"
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
          <div className="depth-layer mt-6 flex flex-col gap-4 border border-border/80 bg-surface/50 p-7 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between md:p-8">
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
