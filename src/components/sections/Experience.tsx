import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from 'framer-motion';
import { EXPERIENCE } from '../../data/profile';

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !containerRef.current || !railRef.current) return;

    const ctx = gsap.context(() => {
      // Animate vertical timeline rail illuminating on scroll
      gsap.fromTo(
        railRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'bottom 80%',
            scrub: true,
          },
        }
      );

      // Staggered reveal for experience articles
      const articles = gsap.utils.toArray<HTMLElement>('.experience-card');
      articles.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0.3, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 45%',
              scrub: 0.5,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section id="experiencia" ref={containerRef} className="relative border-b border-border py-24 md:py-36">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="mb-14 md:mb-16">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-fg md:text-5xl">
            Onde tenho atuado
          </h2>
          <p className="mt-4 max-w-[58ch] text-base leading-relaxed text-dim md:text-lg">
            Histórico prático em engenharia de software, modelagem de processos e arquitetura de sistemas.
          </p>
        </div>

        {/* Timeline Container with animated rail */}
        <div className="relative pl-6 md:pl-10">
          {/* Static Track */}
          <div className="absolute left-0 top-3 bottom-3 w-px bg-border" aria-hidden="true" />

          {/* Active Glowing Rail */}
          <div
            ref={railRef}
            className="absolute left-0 top-3 bottom-3 w-[2px] origin-top bg-gradient-to-b from-accent via-accent to-accent/20"
            aria-hidden="true"
          />

          <div className="space-y-12 md:space-y-16">
            {EXPERIENCE.map((exp) => (
              <article
                key={exp.company}
                className="experience-card group depth-layer relative border border-border/70 bg-surface/50 p-6 md:p-10 backdrop-blur-sm transition-all hover:border-accent/40"
              >
                {/* Node pin on timeline */}
                <div
                  className="absolute -left-[31px] md:-left-[47px] top-8 grid h-4 w-4 place-items-center border border-accent bg-bg text-accent transition-transform group-hover:scale-125"
                  aria-hidden="true"
                >
                  <div className="h-1.5 w-1.5 bg-accent" />
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,16rem)_1fr] md:gap-10">
                  <div>
                    <div className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                      {exp.period}
                    </div>
                    <div className="mt-2 font-display text-xl font-bold text-fg md:text-2xl">
                      {exp.company}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-semibold text-fg md:text-xl">
                      {exp.role}
                    </h3>
                    <p className="mt-3 max-w-[62ch] text-base leading-relaxed text-fg/85 md:text-lg">
                      {exp.summary}
                    </p>

                    <ul className="mt-6 grid gap-3">
                      {exp.points.map((p) => (
                        <li key={p} className="flex gap-3 text-sm leading-relaxed text-dim md:text-base">
                          <span className="mt-2.5 h-px w-4 shrink-0 bg-accent/70" aria-hidden="true" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-7 flex flex-wrap gap-2 pt-4 border-t border-border/60">
                      {exp.tags.map((t) => (
                        <li
                          key={t}
                          className="border border-border/80 bg-bg/80 px-3 py-1 font-mono text-xs tracking-tight text-dim transition-colors group-hover:border-accent/30 group-hover:text-fg"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
