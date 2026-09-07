import { useLanguage } from "../../context/LanguageContext";

export function ProjectsSection() {
  const { t } = useLanguage();
  const p = t.projects;

  return (
    <section
      className="reveal-node w-full px-grid-margin-mobile md:px-grid-margin-tablet lg:px-grid-margin-desktop py-unit-16 border-b border-primary bg-surface-container-lowest"
      id="projects"
    >
      <div className="grid grid-cols-12 gap-gutter-desktop mb-unit-8">
        <div className="col-span-12 lg:col-span-3">
          <span className="font-meta-mono text-meta-mono text-secondary font-bold block mb-unit-1">
            {p.sec}
          </span>
          <h2 className="font-headline-lg text-headline-lg uppercase text-primary tracking-tight">
            {p.title}
          </h2>
          <span className="font-meta-mono-sm text-meta-mono-sm text-on-surface-variant uppercase block mt-unit-1">
            {p.subtitle}
          </span>
        </div>
        <div className="col-span-12 lg:col-span-9 flex items-end">
          <p className="font-body-md text-body-md text-on-surface-variant">
            {p.lead}
          </p>
        </div>
      </div>

      <div className="space-y-unit-12">
        {/* ===================================================================
            PROJETO 01: llama-cpp-turboquant-SYCL
            =================================================================== */}
        <article
          className="border border-primary bg-surface shadow-sm transition-all duration-300 hover:shadow-md"
          id="turboquant-card"
        >
          <div className="px-unit-4 py-unit-3 bg-surface-container border-b border-primary flex flex-wrap justify-between items-center gap-unit-2 font-meta-mono text-meta-mono">
            <div className="flex items-center gap-unit-2">
              <span className="text-secondary font-bold">{p.turboquant.num}</span>
              <span className="text-primary font-bold">{p.turboquant.name}</span>
            </div>
            <div className="flex items-center gap-unit-3 text-meta-mono-sm">
              <span className="text-secondary font-bold">{p.turboquant.badgeAcc}</span>
              <span className="bg-primary text-on-primary px-unit-2 py-0.5">
                {p.turboquant.badgeCosine}
              </span>
            </div>
          </div>

          <div className="p-unit-6 grid grid-cols-12 gap-gutter-desktop">
            <div className="col-span-12 lg:col-span-7 space-y-unit-4">
              <h3 className="font-headline-md text-headline-md text-primary font-bold">
                {p.turboquant.headline}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {p.turboquant.description}
              </p>
              <div className="pt-unit-2 font-meta-mono text-meta-mono text-primary flex flex-wrap gap-unit-2">
                {p.turboquant.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-outline px-unit-2 py-unit-1 bg-surface-container hover:border-secondary transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5 bg-surface-container-low border border-outline-variant p-unit-4 font-meta-mono text-meta-mono flex flex-col justify-between">
              <div>
                <div className="text-secondary font-bold text-meta-mono-sm pb-unit-2 border-b border-outline-variant uppercase flex justify-between items-center">
                  <span>{p.turboquant.benchmarkTitle}</span>
                  <span className="text-secondary font-bold">+102.8%</span>
                </div>

                <div className="mt-unit-4 space-y-unit-3">
                  <div>
                    <div className="flex justify-between text-meta-mono-sm mb-unit-1">
                      <span className="text-on-surface-variant">{p.turboquant.baselineLabel}</span>
                      <span className="text-primary font-bold">1246 tok/s</span>
                    </div>
                    <div className="w-full h-3 bg-surface-container border border-outline overflow-hidden">
                      <div
                        className="h-full bg-outline transition-all duration-1000 ease-out"
                        style={{ width: "49.3%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-meta-mono-sm mb-unit-1">
                      <span className="text-secondary font-bold">{p.turboquant.syclLabel}</span>
                      <span className="text-secondary font-bold">2528 tok/s (+102.8%)</span>
                    </div>
                    <div className="w-full h-3 bg-surface-container border border-outline overflow-hidden">
                      <div
                        className="h-full bg-secondary transition-all duration-1000 ease-out hover:brightness-110"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="pt-unit-2 text-meta-mono-sm text-on-surface-variant flex justify-between border-t border-outline-variant">
                    <span>{p.turboquant.cosineLabel}</span>
                    <span className="text-primary font-bold font-mono">
                      {p.turboquant.cosineVal}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-unit-6 pt-unit-3 border-t border-outline-variant flex justify-between items-center text-meta-mono-sm">
                <span className="text-on-surface-variant">{p.turboquant.targetArch}</span>
                <span className="text-secondary font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-secondary telemetry-pulse"></span>{" "}
                  {p.turboquant.optimizedBadge}
                </span>
              </div>
            </div>
          </div>
        </article>

        {/* ===================================================================
            PROJETO 02: Embryo Trainer & Leakage Eliminator
            =================================================================== */}
        <article className="border border-primary bg-surface shadow-sm transition-all duration-300 hover:shadow-md">
          <div className="px-unit-4 py-unit-3 bg-surface-container border-b border-primary flex flex-wrap justify-between items-center gap-unit-2 font-meta-mono text-meta-mono">
            <div className="flex items-center gap-unit-2">
              <span className="text-secondary font-bold">{p.embryo.num}</span>
              <span className="text-primary font-bold">{p.embryo.name}</span>
            </div>
            <div className="flex items-center gap-unit-3 text-meta-mono-sm">
              <span>{p.embryo.badgeDataset}</span>
              <span className="text-secondary font-bold">{p.embryo.badgeZeroLeak}</span>
              <span className="bg-primary text-on-primary px-unit-2 py-0.5">
                {p.embryo.badgeMap}
              </span>
            </div>
          </div>

          <div className="p-unit-6 grid grid-cols-12 gap-gutter-desktop">
            <div className="col-span-12 lg:col-span-7 space-y-unit-4">
              <h3 className="font-headline-md text-headline-md text-primary font-bold">
                {p.embryo.headline}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {p.embryo.description}
              </p>
              <div className="pt-unit-2 font-meta-mono text-meta-mono text-primary flex flex-wrap gap-unit-2">
                {p.embryo.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-outline px-unit-2 py-unit-1 bg-surface-container hover:border-secondary transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Comparison: FIG 02 */}
            <div className="col-span-12 lg:col-span-5 bg-surface-container-low border border-outline-variant p-unit-4 font-meta-mono text-meta-mono">
              <div className="text-secondary font-bold text-meta-mono-sm pb-unit-2 border-b border-outline-variant uppercase flex justify-between">
                <span>{p.embryo.figTitle}</span>
                <span className="text-primary font-bold">{p.embryo.figAuditBadge}</span>
              </div>
              <div className="mt-unit-4 space-y-unit-4">
                {/* Naive Split */}
                <div className="p-unit-3 border border-secondary/60 bg-surface transition-all duration-200 hover:border-secondary hover:bg-surface-container">
                  <div className="flex items-center justify-between text-secondary font-bold text-meta-mono-sm">
                    <span>{p.embryo.naiveTitle}</span>
                    <span className="text-xs bg-red-100 text-secondary px-1.5 py-0.5 border border-secondary">
                      {p.embryo.naiveBadge}
                    </span>
                  </div>
                  <div className="text-body-sm text-on-surface-variant mt-unit-1">
                    {p.embryo.naiveDesc}
                  </div>
                </div>

                {/* Strict Patient Split */}
                <div className="p-unit-3 border-2 border-primary bg-surface-container-lowest transition-all duration-200 hover:border-secondary hover:shadow-sm">
                  <div className="flex items-center justify-between text-primary font-bold text-meta-mono-sm">
                    <span>{p.embryo.strictTitle}</span>
                    <span className="text-xs bg-emerald-100 text-emerald-800 px-1.5 py-0.5 border border-emerald-600 font-bold">
                      {p.embryo.strictBadge}
                    </span>
                  </div>
                  <div className="text-body-sm text-on-surface mt-unit-1">
                    {p.embryo.strictDesc}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* ===================================================================
            PROJETO 03: tino & PROJETO 04: fecho (Grid Lado a Lado)
            =================================================================== */}
        <div className="grid grid-cols-12 gap-gutter-desktop">
          {/* PROJETO 03: tino */}
          <article className="col-span-12 lg:col-span-6 border border-primary bg-surface flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200">
            <div>
              <div className="px-unit-4 py-unit-3 bg-surface-container border-b border-primary flex justify-between items-center font-meta-mono text-meta-mono">
                <span className="text-secondary font-bold">{p.tino.num}</span>
                <span className="text-meta-mono-sm font-bold bg-surface px-2 py-0.5 border border-outline-variant">
                  {p.tino.badgeSuites}
                </span>
              </div>
              <div className="p-unit-6">
                <div className="flex items-baseline justify-between mb-unit-2">
                  <h3 className="font-headline-md text-headline-md text-primary font-bold">
                    {p.tino.name}
                  </h3>
                  <span className="font-meta-mono text-meta-mono text-on-surface-variant">
                    {p.tino.sub}
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-unit-4">
                  {p.tino.description}
                </p>
                <div className="p-unit-3 bg-surface-container border border-outline-variant font-meta-mono-sm text-meta-mono-sm space-y-unit-1">
                  <div className="flex justify-between hover:bg-surface-container-high p-0.5 transition-colors">
                    <span>{p.tino.cryptoLabel}</span>{" "}
                    <span className="font-bold text-primary">{p.tino.cryptoVal}</span>
                  </div>
                  <div className="flex justify-between hover:bg-surface-container-high p-0.5 transition-colors">
                    <span>{p.tino.dedupLabel}</span>{" "}
                    <span className="font-bold text-primary">{p.tino.dedupVal}</span>
                  </div>
                  <div className="flex justify-between hover:bg-surface-container-high p-0.5 transition-colors">
                    <span>{p.tino.rigLabel}</span>{" "}
                    <span className="font-bold text-secondary">{p.tino.rigVal}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-unit-6 py-unit-3 border-t border-outline-variant bg-surface-container-low font-meta-mono text-meta-mono-sm flex justify-between items-center">
              <span className="text-on-surface-variant flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>{" "}
                {p.tino.invariantStatus}
              </span>
              <span className="text-primary font-bold hover:text-secondary cursor-default">
                {p.tino.verifiedBadge}
              </span>
            </div>
          </article>

          {/* PROJETO 04: fecho */}
          <article className="col-span-12 lg:col-span-6 border border-primary bg-surface flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200">
            <div>
              <div className="px-unit-4 py-unit-3 bg-surface-container border-b border-primary flex justify-between items-center font-meta-mono text-meta-mono">
                <span className="text-secondary font-bold">{p.fecho.num}</span>
                <span className="text-meta-mono-sm font-bold bg-surface px-2 py-0.5 border border-outline-variant">
                  {p.fecho.badgeMigrations}
                </span>
              </div>
              <div className="p-unit-6">
                <div className="flex items-baseline justify-between mb-unit-2">
                  <h3 className="font-headline-md text-headline-md text-primary font-bold">
                    {p.fecho.name}
                  </h3>
                  <span className="font-meta-mono text-meta-mono text-on-surface-variant">
                    {p.fecho.sub}
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-unit-4">
                  {p.fecho.description}
                </p>
                <div className="p-unit-3 bg-surface-container border border-outline-variant font-meta-mono-sm text-meta-mono-sm space-y-unit-1">
                  <div className="flex justify-between hover:bg-surface-container-high p-0.5 transition-colors">
                    <span>{p.fecho.invariantLabel}</span>{" "}
                    <span className="font-bold text-secondary">{p.fecho.invariantVal}</span>
                  </div>
                  <div className="flex justify-between hover:bg-surface-container-high p-0.5 transition-colors">
                    <span>{p.fecho.patternLabel}</span>{" "}
                    <span className="font-bold text-primary">{p.fecho.patternVal}</span>
                  </div>
                  <div className="flex justify-between hover:bg-surface-container-high p-0.5 transition-colors">
                    <span>{p.fecho.schemaLabel}</span>{" "}
                    <span className="font-bold text-primary">{p.fecho.schemaVal}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-unit-6 py-unit-3 border-t border-outline-variant bg-surface-container-low font-meta-mono text-meta-mono-sm flex justify-between items-center">
              <span className="text-on-surface-variant flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>{" "}
                {p.fecho.precisionStatus}
              </span>
              <span className="text-primary font-bold hover:text-secondary cursor-default">
                {p.fecho.verifiedBadge}
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
