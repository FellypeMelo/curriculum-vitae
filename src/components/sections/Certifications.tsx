import { CERTIFICATIONS } from '../../data/profile';
import { Reveal } from '../common/Reveal';

export function Certifications() {
  return (
    <section id="certificacoes" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-fg md:text-5xl">
            Certificações
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-border border-y border-border">
          {CERTIFICATIONS.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.name} delay={i * 0.05}>
                <article className="grid grid-cols-[auto_1fr] items-start gap-5 py-7 md:grid-cols-[auto_1fr_minmax(0,32ch)] md:items-center md:gap-8">
                  <span className="grid h-11 w-11 place-items-center border border-border text-accent">
                    <Icon size={19} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-medium leading-snug text-fg md:text-xl">
                      {c.name}
                    </h3>
                    <div className="mt-1 font-mono text-xs uppercase tracking-wider text-dim">
                      {c.issuer}
                    </div>
                  </div>
                  <p className="col-span-2 text-sm leading-relaxed text-dim md:col-span-1 md:text-right">
                    {c.topics}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
