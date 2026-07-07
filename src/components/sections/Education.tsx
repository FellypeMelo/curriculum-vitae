import { EDUCATION } from '../../data/profile';
import { Reveal } from '../common/Reveal';

export function Education() {
  return (
    <section id="formacao" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-fg md:text-5xl">
            Formação
          </h2>
        </Reveal>

        <ol className="mt-14 max-w-3xl border-l border-border pl-8 md:pl-12">
          {EDUCATION.map((edu, i) => (
            <Reveal key={edu.institution} delay={i * 0.06}>
              <li className="relative pb-12 last:pb-0">
                <span
                  className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 border border-accent bg-bg md:-left-[calc(3rem+5px)]"
                  aria-hidden="true"
                />
                <div className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                  {edu.period}
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold text-fg md:text-2xl">
                  {edu.course}
                </h3>
                <div className="mt-0.5 font-mono text-sm text-dim">{edu.institution}</div>
                <p className="mt-3 max-w-[58ch] text-base leading-relaxed text-fg/75">
                  {edu.details}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
