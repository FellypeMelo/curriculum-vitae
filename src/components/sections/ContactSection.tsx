import { useClipboardCopy } from '../../lib/hooks';
import { PROFILE } from '../../data/profile';

export function ContactSection() {
  const { copiedKey, copy } = useClipboardCopy();
  const isEmailCopied = copiedKey === 'email';

  return (
    <section
      className="reveal-node w-full px-grid-margin-mobile md:px-grid-margin-tablet lg:px-grid-margin-desktop py-unit-16 bg-surface-container-low"
      id="contact"
    >
      <div className="grid grid-cols-12 gap-gutter-desktop">
        {/* Contact Main Headline & Channels */}
        <div className="col-span-12 lg:col-span-8">
          <span className="font-meta-mono text-meta-mono text-secondary font-bold block mb-unit-2">
            // INITIATE ENGAGEMENT
          </span>
          <h2 className="font-headline-xl text-headline-xl uppercase text-primary font-bold tracking-tight">
            VAMOS CONSTRUIR ALGO BEM ARQUITETADO.
          </h2>
          <p className="mt-unit-4 font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Disponível para posições como Software Engineer / Tech Lead, consultoria em Clean Architecture, pipelines de Inteligência Artificial aplicada ou pesquisas científicas em cooperação institucional.
          </p>

          {/* Channels Matrix */}
          <div className="mt-unit-8 grid grid-cols-1 sm:grid-cols-2 gap-unit-4">
            {/* Email Card */}
            <div className="p-unit-4 border border-primary bg-surface flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200">
              <div>
                <span className="font-meta-mono-sm text-meta-mono-sm text-on-surface-variant uppercase">
                  CANAL PRIMÁRIO // EMAIL
                </span>
                <div className="font-headline-sm text-headline-sm text-primary font-bold mt-unit-1 break-all select-all font-mono">
                  {PROFILE.email}
                </div>
              </div>
              <div className="mt-unit-4 pt-unit-3 border-t border-outline-variant flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => copy(PROFILE.email, 'email')}
                  className={`font-meta-mono text-meta-mono-sm uppercase font-bold flex items-center gap-1 cursor-pointer transition-colors ${
                    isEmailCopied ? 'text-secondary' : 'text-secondary hover:underline'
                  }`}
                >
                  <span>{isEmailCopied ? 'EMAIL COPIADO ✓' : 'COPIAR EMAIL'}</span>
                  <span className="material-symbols-outlined text-[14px]">
                    {isEmailCopied ? 'check' : 'content_copy'}
                  </span>
                </button>
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant">mail</span>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="p-unit-4 border border-primary bg-surface flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200">
              <div>
                <span className="font-meta-mono-sm text-meta-mono-sm text-on-surface-variant uppercase">
                  CODE ARCHIVE // GITHUB
                </span>
                <div className="font-headline-sm text-headline-sm text-primary font-bold mt-unit-1 font-mono">
                  {PROFILE.githubLabel}
                </div>
              </div>
              <div className="mt-unit-4 pt-unit-3 border-t border-outline-variant flex justify-between items-center">
                <a
                  className="font-meta-mono text-meta-mono-sm uppercase text-secondary font-bold hover:underline flex items-center gap-unit-1"
                  href={PROFILE.github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>ABRIR PERFIL</span>
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant">code</span>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="p-unit-4 border border-primary bg-surface flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200">
              <div>
                <span className="font-meta-mono-sm text-meta-mono-sm text-on-surface-variant uppercase">
                  NETWORK // LINKEDIN
                </span>
                <div className="font-headline-sm text-headline-sm text-primary font-bold mt-unit-1 font-mono">
                  {PROFILE.linkedinLabel}
                </div>
              </div>
              <div className="mt-unit-4 pt-unit-3 border-t border-outline-variant flex justify-between items-center">
                <a
                  className="font-meta-mono text-meta-mono-sm uppercase text-secondary font-bold hover:underline flex items-center gap-unit-1"
                  href={PROFILE.linkedin}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>CONECTAR</span>
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant">badge</span>
              </div>
            </div>

            {/* Base Hub Card */}
            <div className="p-unit-4 border border-primary bg-surface flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200">
              <div>
                <span className="font-meta-mono-sm text-meta-mono-sm text-on-surface-variant uppercase">
                  HUB DE OPERAÇÃO // BASE
                </span>
                <div className="font-headline-sm text-headline-sm text-primary font-bold mt-unit-1">
                  {PROFILE.location}
                </div>
              </div>
              <div className="mt-unit-4 pt-unit-3 border-t border-outline-variant flex justify-between items-center font-meta-mono text-meta-mono-sm text-on-surface-variant">
                <span>TIMEZONE: UTC-03 (BRT)</span>
                <span className="w-2 h-2 bg-secondary inline-block telemetry-pulse"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Colophon & Editorial Document Specification */}
        <div className="col-span-12 lg:col-span-4 border-t lg:border-t-0 lg:border-l border-primary pt-unit-8 lg:pt-0 lg:pl-unit-8 flex flex-col justify-between">
          <div>
            <div className="font-meta-mono text-meta-mono text-primary font-bold uppercase pb-unit-2 border-b border-primary flex justify-between">
              <span>SPEC DO DOCUMENTO // COLOPHON</span>
              <span className="text-secondary">ARCH-SPEC</span>
            </div>

            <div className="mt-unit-4 space-y-unit-3 font-meta-mono-sm text-meta-mono-sm text-on-surface-variant leading-relaxed">
              <div>
                <strong className="text-primary block">MOVIMENTO ESTÉTICO:</strong>
                Die Neue Typographie / Swiss International Typographic Style adaptado à engenharia de documentos digitais com zero abstrações supérfluas.
              </div>
              <div>
                <strong className="text-primary block">TIPOGRAFIA:</strong>
                Hanken Grotesk (Display &amp; Body Editorial) + JetBrains Mono (Metadados Técnicos, Fórmulas &amp; Tabelas).
              </div>
              <div>
                <strong className="text-primary block">GRID MATEMÁTICO:</strong>
                12 colunas simétricas, calhas de 24px (1.5rem), margens horizontais de 48px (3.0rem), regras de 1px Hairline Black Ink (#111110).
              </div>
              <div>
                <strong className="text-primary block">PALETA FUNDAMENTAL:</strong>
                Off-White Paper (#FBF9F5), Ink Black (#111110), Vermilion Accent (#C8371E).
              </div>
            </div>
          </div>

          <div className="mt-unit-8 pt-unit-4 border-t border-outline-variant">
            <div className="font-meta-mono-sm text-meta-mono-sm text-on-surface-variant">
              <span>DOC ID: FM-2026-ADS-FAETERJ</span>
              <div className="text-primary font-bold mt-unit-1">
                {PROFILE.fullName.toUpperCase()} © 2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
