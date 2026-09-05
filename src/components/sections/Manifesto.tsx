import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from 'framer-motion';
import { PROFILE } from '../../data/profile';

gsap.registerPlugin(ScrollTrigger);

export function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
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

      gsap.fromTo(
        wordElements,
        { opacity: 0.12, filter: 'blur(2px)', y: 4 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          stagger: 0.1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=130%',
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section
      id="perfil"
      ref={containerRef}
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden border-b border-border bg-surface/30 px-5 py-24 md:px-8 md:py-32"
    >
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      
      {/* Decorative architectural coordinates */}
      <div className="pointer-events-none absolute left-6 top-8 font-mono text-[10px] uppercase tracking-[0.22em] text-dim">
        thesis.statement // core.foundations
      </div>
      <div className="pointer-events-none absolute bottom-8 right-6 font-mono text-[10px] uppercase tracking-[0.22em] text-dim">
        system.invariants // 2026
      </div>

      <div className="relative mx-auto max-w-[1100px] text-center md:text-left">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Arquitetura & Engenharia
        </span>

        <p
          ref={textRef}
          className="mt-8 font-display text-3xl font-semibold leading-[1.25] tracking-tight text-fg sm:text-4xl md:text-5xl lg:text-[3.8rem] text-balance"
        >
          {words.map((word, idx) => {
            const isHighlight = highlights.has(word);
            return (
              <span
                key={idx}
                className={`scrub-word inline-block mr-[0.3em] transition-colors ${
                  isHighlight ? 'text-accent' : 'text-fg'
                }`}
                style={{ opacity: reduce ? 1 : 0.15 }}
              >
                {word}
              </span>
            );
          })}
        </p>

        <div className="mt-14 grid grid-cols-1 gap-8 border-t border-border pt-10 sm:grid-cols-2 md:gap-16">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-dim">
              Resumo & Formação
            </h3>
            <p className="mt-3 text-base leading-relaxed text-fg/85 md:text-lg">
              {PROFILE.summary}
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-dim">
              Como trabalho
            </h3>
            <p className="mt-3 text-base leading-relaxed text-fg/85 md:text-lg">
              {PROFILE.practices}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
