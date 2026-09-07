import { PROFILE, CORE_DIRECTIVES, FACTS } from '../../data/profile';

export function ProfileSection() {
  return (
    <section
      className="reveal-node w-full px-grid-margin-mobile md:px-grid-margin-tablet lg:px-grid-margin-desktop py-unit-16 border-b border-primary relative"
      id="profile"
    >
      <div className="grid grid-cols-12 gap-gutter-desktop">
        {/* Left Marginal Rail */}
        <div className="col-span-12 lg:col-span-3">
          <div className="sticky top-28">
            <span className="font-meta-mono text-meta-mono text-secondary font-bold block mb-unit-1">
              // SEC 01
            </span>
            <h2 className="font-headline-lg text-headline-lg uppercase text-primary tracking-tight">
              PROFILE
            </h2>
            <span className="font-meta-mono-sm text-meta-mono-sm text-on-surface-variant uppercase block mt-unit-1">
              TRAJETÓRIA &amp; IDENTIDADE
            </span>

            <div className="mt-unit-8 p-unit-3 border border-outline-variant bg-surface-container font-meta-mono-sm text-meta-mono-sm space-y-unit-2 shadow-sm transition-all hover:border-primary">
              <div>
                <span className="text-on-surface-variant">IDIOMAS:</span>
              </div>
              <div className="flex justify-between text-primary">
                <span>PORTUGUÊS</span> <span className="font-bold">NATIVO</span>
              </div>
              <div className="flex justify-between text-primary">
                <span>INGLÊS</span> <span className="font-bold">B2 (PROFICIENTE)</span>
              </div>
              <div className="pt-unit-2 border-t border-outline-variant text-on-surface-variant">
                <span>FORMAÇÃO SECUNDÁRIA:</span>
                <div className="text-primary mt-unit-1 font-semibold">
                  Técnico em Informática Industrial (2020–2023)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Central Editorial Content & Metadata */}
        <div className="col-span-12 lg:col-span-9">
          <div className="grid grid-cols-12 gap-gutter-desktop pb-unit-8 border-b border-outline-variant">
            <div className="col-span-12 lg:col-span-8">
              <h3 className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight mb-unit-4">
                Engenharia de software fundamentada, com rigor conceitual e precisão analítica.
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-unit-4">
                <strong className="text-primary">{PROFILE.fullName}</strong> é graduado em Análise e Desenvolvimento de Sistemas pela <strong>FAETERJ-Rio</strong>. Atua como <strong>Tech Lead</strong> e pesquisador em Inteligência Artificial aplicada, com foco no desenvolvimento de sistemas distribuídos robustos, pipelines de Deep Learning médico e arquitetura orientada ao isolamento de domínio.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-unit-3">
                Sua metodologia descarta abordagens empíricas superficiais em favor de projetos orientados a contratos matematicamente defensáveis, separação estrita de camadas e verificabilidade automatizada de ponta a ponta.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Aplica Clean Architecture, SOLID, Domain-Driven Design, Design Patterns, TDD e Extreme Programming na condução de sistemas escaláveis, utilizando Inteligência Artificial como ferramenta de engenharia para acelerar análise de requisitos, documentação e validação formal.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-4 bg-surface-container-low border border-primary p-unit-4 flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <div className="font-meta-mono text-meta-mono text-primary font-bold uppercase pb-unit-2 border-b border-primary flex justify-between items-center">
                  <span>CORE DIRECTIVES</span>
                  <span className="w-2 h-2 bg-secondary"></span>
                </div>
                <ul className="font-meta-mono text-meta-mono text-on-surface space-y-unit-3 mt-unit-4">
                  {CORE_DIRECTIVES.map((d) => (
                    <li
                      key={d.num}
                      className="flex items-start gap-unit-2 p-1 hover:bg-surface transition-colors cursor-default"
                    >
                      <span className="text-secondary font-bold">{d.num}</span>
                      <span>{d.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-unit-6 pt-unit-3 border-t border-outline-variant font-meta-mono-sm text-meta-mono-sm text-on-surface-variant">
                FAETERJ-RIO INSTITUTIONAL CODE: 2022-2025
              </div>
            </div>
          </div>

          {/* 4-Column Metric Grid with Interactive Hover */}
          <div className="grid grid-cols-12 gap-gutter-desktop pt-unit-8">
            {FACTS.map((f, i) => (
              <div
                key={i}
                className="col-span-6 sm:col-span-3 p-2 hover:bg-surface-container transition-colors border border-transparent hover:border-outline-variant"
              >
                <span className="font-meta-mono-sm text-meta-mono-sm text-on-surface-variant block uppercase">
                  {f.label}
                </span>
                <span
                  className={`font-headline-sm text-headline-sm block mt-unit-1 ${
                    f.highlight ? 'text-secondary flex items-center gap-1.5' : 'text-primary'
                  }`}
                >
                  {f.highlight && <span className="w-2 h-2 rounded-full bg-secondary telemetry-pulse"></span>}
                  {f.value}
                </span>
                <span className="font-meta-mono-sm text-meta-mono-sm text-on-surface-variant">
                  {f.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
