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
      if (!cards.length) return;

      cards.forEach((card, i) => {
        if (i === cards.length - 1) return; // Last card stays active

        const nextCard = cards[i + 1];

        // Pin current card comfortably below the fixed navbar
        ScrollTrigger.create({
          trigger: card,
          start: 'top 12%',
          endTrigger: cards[cards.length - 1],
          end: 'top 12%',
          pin: true,
          pinSpacing: false,
          invalidateOnRefresh: true,
        });

        // Depth perspective transition: shrink, blur, and dim as next card docks
        gsap.to(card, {
          scale: 0.93 - i * 0.015,
          y: -14 * (cards.length - 1 - i),
          opacity: 0.38,
          filter: 'blur(2px)',
          ease: 'none',
          scrollTrigger: {
            trigger: nextCard,
            start: 'top 75%',
            end: 'top 12%',
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section id="projetos" ref={containerRef} className="relative border-b border-border py-24 md:py-36">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="mb-14 md:mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Engenharia & Sistemas
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-fg md:text-5xl">
            Projetos Selecionados
          </h2>
          <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-dim md:text-lg">
            Sistemas conduzidos da concepção e isolamento de domínio à entrega em produção.
            O baralho interativo empilha as soluções com análise de requisitos e desafios superados.
          </p>
        </div>

        {/* Stack Deck Container */}
        <div className="relative pb-24">
          {PROJECTS.map((p, idx) => {
            const Icon = p.icon;
            const isFeatured = idx === 0;
            const indexStr = `0${idx + 1}`;

            return (
              <div
                key={p.name}
                className="stack-card-item mb-20 w-full md:mb-32 last:mb-0"
              >
                <TiltCard
                  featured={isFeatured}
                  className={`group relative flex flex-col overflow-hidden border p-7 md:p-12 backdrop-blur-md depth-layer transition-shadow ${
                    isFeatured
                      ? 'border-accent/60 bg-surface/85 shadow-lg'
                      : 'border-border/80 bg-surface/75 hover:border-accent/40'
                  }`}
                >
                  {isFeatured && (
                    <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
                  )}

                  <div className="relative flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-6">
                    <div className="flex items-center gap-4">
                      <span className="grid h-12 w-12 place-items-center border border-border text-accent transition-all group-hover:border-accent group-hover:scale-105">
                        <Icon size={24} />
                      </span>
                      <div>
                        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-dim">
                          <span>PROJ.{indexStr}</span>
                          <span>·</span>
                          <span>{p.kind}</span>
                        </div>
                        <div className="font-mono text-[11px] text-accent font-medium">
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

                  <ul className="relative mt-8 flex flex-wrap gap-2 pt-6 border-t border-border/60">
                    {p.stack.map((s) => (
                      <li
                        key={s}
                        className="border border-border/80 bg-bg/80 px-3 py-1 font-mono text-xs tracking-tight text-dim transition-colors group-hover:border-accent/40 group-hover:text-fg"
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
