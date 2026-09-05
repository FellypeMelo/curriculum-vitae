import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from 'framer-motion';
import { PROFILE } from '../../data/profile';

gsap.registerPlugin(ScrollTrigger);

export function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const words = [
    'Compreender', 'o', 'problema', 'a', 'fundo,',
    'levantar', 'requisitos', 'reais', 'e',
    'modelar', 'a', 'solução', 'antes', 'de', 'escrever', 'código.',
    'A', 'arquitetura', 'de', 'software', 'sustentável', 'define',
    'invariantes,', 'isole', 'o', 'domínio', 'e', 'permite',
    'que', 'o', 'sistema', 'evolua', 'com', 'segurança', 'e', 'escala.'
  ];

  const highlights = new Set(['problema', 'modelar', 'arquitetura', 'sustentável', 'invariantes,', 'escala.']);

  useEffect(() => {
    if (reduce || !containerRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      const wordElements = textRef.current?.querySelectorAll('.scrub-word');
      if (!wordElements || wordElements.length === 0) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=100%',
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        wordElements,
        { opacity: 0.15, y: 3 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          ease: 'none',
        },
        0
      );

      if (panelsRef.current) {
        tl.fromTo(
          panelsRef.current,
          { opacity: 0.25, y: 16 },
          { opacity: 1, y: 0, ease: 'power2.out' },
          0.5
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section
      id="perfil"
      ref={containerRef}
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden border-b border-border bg-surface/30 backdrop-blur-xs px-5 py-20 md:px-8 md:py-28"
    >
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      
      {/* Architectural boundary coordinates */}
      <div className="pointer-events-none absolute left-6 top-8 font-mono text-[10px] uppercase tracking-[0.22em] text-dim">
        thesis.statement // core.foundations
      </div>
      <div className="pointer-events-none absolute bottom-8 right-6 font-mono text-[10px] uppercase tracking-[0.22em] text-dim">
        system.invariants // 2026
      </div>

      <div className="relative mx-auto w-full max-w-[1140px]">
        <div className="mb-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Arquitetura & Engenharia
          </span>
        </div>

        <p
          ref={textRef}
          className="font-display text-2xl font-semibold leading-[1.28] tracking-tight text-fg sm:text-3xl md:text-4xl lg:text-[3.4rem]"
        >
          {words.map((word, idx) => {
            const isHighlight = highlights.has(word);
            return (
              <span
                key={idx}
                className={`scrub-word inline-block mr-[0.28em] transition-colors ${
                  isHighlight ? 'text-accent' : 'text-fg'
                }`}
                style={{ opacity: reduce ? 1 : 0.15 }}
              >
                {word}
              </span>
            );
          })}
        </p>

        <div
          ref={panelsRef}
          className="mt-10 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-2 md:gap-12"
          style={{ opacity: reduce ? 1 : 0.4 }}
        >
          <div className="depth-layer border border-border/80 bg-surface/60 p-6 md:p-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              Resumo & Formação
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-fg/85 md:text-base">
              {PROFILE.summary}
            </p>
          </div>

          <div className="depth-layer border border-border/80 bg-surface/60 p-6 md:p-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-dim">
              Como trabalho
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-fg/85 md:text-base">
              {PROFILE.practices}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
