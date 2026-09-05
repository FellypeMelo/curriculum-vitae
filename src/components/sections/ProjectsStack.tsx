import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from 'framer-motion';
import { PROJECTS } from '../../data/profile';
import { TiltCard } from '../common/TiltCard';

gsap.registerPlugin(ScrollTrigger);

export function ProjectsStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.stack-card-item');

      cards.forEach((card, i) => {
        if (i === cards.length - 1) return; // Last card does not scale down

        const nextCard = cards[i + 1];

        // Pin current card when it hits top
        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          endTrigger: cards[cards.length - 1],
          end: 'top top',
          pin: true,
          pinSpacing: false,
        });

        // Scale down and dim when the next card arrives
        gsap.to(card, {
          scale: 0.92,
          opacity: 0.45,
          ease: 'none',
          scrollTrigger: {
            trigger: nextCard,
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section id="projetos" ref={containerRef} className="relative border-b border-border bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Engenharia & Sistemas
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-fg md:text-5xl">
            Projetos Selecionados
          </h2>
          <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-dim md:text-lg">
            Sistemas conduzidos da concepção e isolamento à entrega em produção.
            Passe pelo baralho de projetos para examinar a arquitetura e os desafios superados.
          </p>
        </div>

        <div className="relative space-y-16 md:space-y-24">
          {PROJECTS.map((p, idx) => {
            const Icon = p.icon;
            const isFeatured = idx === 0;

            return (
              <div
                key={p.name}
                className="stack-card-item sticky top-24 min-h-[580px] w-full"
              >
                <TiltCard
                  featured={isFeatured}
                  className={`group relative flex h-full flex-col overflow-hidden border border-border p-8 md:p-12 ${
                    isFeatured ? 'bg-surface/90 border-accent/60' : 'bg-surface/80 hover:border-accent/40'
                  }`}
                >
                  {isFeatured && (
                    <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
                  )}

                  <div className="relative flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
                    <div className="flex items-center gap-4">
                      <span className="grid h-12 w-12 place-items-center border border-border text-accent transition-all group-hover:border-accent group-hover:scale-105">
                        <Icon size={24} />
                      </span>
                      <div>
                        <span className="font-mono text-xs uppercase tracking-wider text-dim">
                          {p.kind}
                        </span>
                        <div className="font-mono text-[11px] text-accent">
                          {p.role}
                        </div>
                      </div>
                    </div>

                    <span className="border border-accent/40 accent-soft px-3.5 py-1 font-mono text-xs uppercase tracking-wider text-accent">
                      {p.status}
                    </span>
                  </div>

                  <div className="relative mt-7">
                    <h3 className="font-display text-2xl font-bold tracking-tight text-fg sm:text-3xl md:text-4xl">
                      {p.name}
                    </h3>
                    <p className="mt-4 max-w-[75ch] text-base leading-relaxed text-fg/85 md:text-lg">
                      {p.description}
                    </p>
                  </div>

                  <div className="relative mt-8">
                    <h4 className="font-mono text-xs uppercase tracking-[0.16em] text-dim">
                      Desafios & Soluções Técnicas
                    </h4>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex gap-3 text-sm leading-relaxed text-dim">
                          <span className="mt-2 h-px w-4 shrink-0 bg-accent/70" aria-hidden="true" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <ul className="relative mt-auto flex flex-wrap gap-2 pt-8">
                    {p.stack.map((s) => (
                      <li
                        key={s}
                        className="border border-border bg-bg/80 px-3 py-1 font-mono text-xs tracking-tight text-dim transition-colors group-hover:border-accent/40 group-hover:text-fg"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
