import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

export function EngineeringSection() {
  const { t } = useLanguage();
  const [activeStage, setActiveStage] = useState<number>(1);
  const [archPulse, setArchPulse] = useState<"driver" | "core" | "driven" | null>(null);

  const currentStageInfo =
    t.engineering.stages.find((s) => s.id === activeStage) || t.engineering.stages[0];

  return (
    <section
      className="reveal-node w-full px-grid-margin-mobile md:px-grid-margin-tablet lg:px-grid-margin-desktop py-unit-16 border-b border-primary bg-surface-container-lowest"
      id="methodology"
    >
      <div className="grid grid-cols-12 gap-gutter-desktop">
        {/* Left Rail */}
        <div className="col-span-12 lg:col-span-3">
          <span className="font-meta-mono text-meta-mono text-secondary font-bold block mb-unit-1">
            {t.engineering.sec}
          </span>
          <h2 className="font-headline-lg text-headline-lg uppercase text-primary tracking-tight">
            {t.engineering.title}
          </h2>
          <span className="font-meta-mono-sm text-meta-mono-sm text-on-surface-variant uppercase block mt-unit-1">
            {t.engineering.subtitle}
          </span>

          <div className="mt-unit-6 text-meta-mono-sm text-on-surface-variant border border-outline-variant p-3 bg-surface hidden lg:block">
            <span className="text-secondary font-bold">{t.engineering.interactionHintTitle}</span>
            <p className="mt-1">{t.engineering.interactionHint}</p>
          </div>
        </div>

        {/* Right Content */}
        <div className="col-span-12 lg:col-span-9">
          {/* Manifesto Quote Callout */}
          <div className="p-unit-6 border-l-4 border-secondary bg-surface-container-low mb-unit-8 shadow-sm">
            <p className="font-headline-md text-headline-md text-primary font-semibold leading-snug">
              {t.engineering.manifestoLead}
            </p>
            <span className="font-meta-mono text-meta-mono text-secondary block mt-unit-3 uppercase">
              {t.engineering.manifestoAuthor}
            </span>
          </div>

          {/* Interactive Hexapartite Lifecycle Pipeline */}
          <div className="border border-primary bg-surface overflow-hidden">
            <div className="bg-primary text-on-primary font-meta-mono text-meta-mono uppercase p-unit-2 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary"></span>
                <span>{t.engineering.pipelineTitle}</span>
              </div>
              <span className="text-secondary-fixed text-meta-mono-sm font-bold">
                {currentStageInfo.description}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-outline-variant bg-surface">
              {t.engineering.stages.map((s) => {
                const isSelected = activeStage === s.id;
                return (
                  <div
                    key={s.id}
                    onClick={() => setActiveStage(s.id)}
                    onMouseEnter={() => setActiveStage(s.id)}
                    className="p-unit-4 cursor-pointer transition-all duration-200 hover:bg-surface-container-high relative group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-meta-mono-sm text-meta-mono-sm text-secondary font-bold">
                        {s.stage}
                      </span>
                      <span
                        className={`w-1.5 h-1.5 rounded-full border transition-colors ${
                          isSelected
                            ? "bg-secondary border-secondary"
                            : "bg-transparent border-outline"
                        }`}
                      ></span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-primary uppercase font-bold mt-unit-1 group-hover:text-secondary transition-colors">
                      {s.name}
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-unit-2 leading-relaxed">
                      {s.summary}
                    </p>
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-[3px] bg-secondary transition-opacity ${
                        isSelected ? "opacity-100" : "opacity-0"
                      }`}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* FIG. 01 // ARCHITECTURE BOUNDARIES (Interactive Diagram) */}
          <div className="mt-unit-8 border border-primary relative overflow-hidden" id="architecture-diagram">
            <div className="px-unit-4 py-unit-2 bg-surface-container border-b border-primary flex items-center justify-between font-meta-mono text-meta-mono">
              <span className="text-secondary font-bold flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary telemetry-pulse"></span>
                {t.engineering.diagramTitle}
              </span>
              <span className="text-on-surface-variant text-meta-mono-sm">
                {t.engineering.diagramAudit}
              </span>
            </div>

            <div className="p-unit-6 bg-surface">
              <div className="grid grid-cols-12 gap-unit-4 items-center">
                {/* External Drivers */}
                <div className="col-span-12 md:col-span-3 space-y-unit-3">
                  <div
                    onMouseEnter={() => setArchPulse("driver")}
                    onMouseLeave={() => setArchPulse(null)}
                    className="p-unit-3 border border-outline bg-surface-container font-meta-mono text-meta-mono transition-all duration-200 hover:border-secondary hover:shadow-sm cursor-pointer group"
                  >
                    <div className="text-secondary font-bold text-meta-mono-sm group-hover:underline flex justify-between">
                      <span>DRIVERS / ADAPTERS</span>
                      <span className="text-[10px] font-normal opacity-70">[INBOUND]</span>
                    </div>
                    <div className="font-bold text-primary mt-unit-1">REST API / UI</div>
                    <div className="text-on-surface-variant text-meta-mono-sm">React / Fastify / HTTP</div>
                  </div>

                  <div
                    onMouseEnter={() => setArchPulse("driver")}
                    onMouseLeave={() => setArchPulse(null)}
                    className="p-unit-3 border border-outline bg-surface-container font-meta-mono text-meta-mono transition-all duration-200 hover:border-secondary hover:shadow-sm cursor-pointer group"
                  >
                    <div className="text-secondary font-bold text-meta-mono-sm group-hover:underline flex justify-between">
                      <span>INPUT CONSUMER</span>
                      <span className="text-[10px] font-normal opacity-70">[HARDWARE]</span>
                    </div>
                    <div className="font-bold text-primary mt-unit-1">NotificationListener</div>
                    <div className="text-on-surface-variant text-meta-mono-sm">Android OS Events</div>
                  </div>
                </div>

                {/* Flow Indicator 1 */}
                <div className="col-span-12 md:col-span-1 text-center py-unit-2 md:py-0 flex flex-col items-center justify-center">
                  <div
                    className={`font-meta-mono font-bold text-headline-md transition-all duration-300 ${
                      archPulse === "driver" || archPulse === "core"
                        ? "text-secondary scale-125"
                        : "text-primary scale-100"
                    }`}
                  >
                    →
                  </div>
                  <span className="font-meta-mono-sm text-[9px] text-secondary uppercase font-bold tracking-widest">
                    PORTS IN
                  </span>
                </div>

                {/* Hexagonal Core (Domain + Ports) */}
                <div
                  onMouseEnter={() => setArchPulse("core")}
                  onMouseLeave={() => setArchPulse(null)}
                  className={`col-span-12 md:col-span-4 p-unit-4 border-2 bg-surface-container-lowest transition-all duration-300 shadow-sm cursor-pointer ${
                    archPulse === "core" ? "border-secondary" : "border-primary"
                  }`}
                >
                  <div className="text-center font-meta-mono-sm text-meta-mono-sm text-secondary font-bold pb-unit-2 border-b border-outline-variant uppercase flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary telemetry-pulse"></span>
                    <span>{t.engineering.coreTitle}</span>
                  </div>
                  <div className="my-unit-4 p-unit-3 bg-primary text-on-primary text-center transition-transform hover:scale-[1.02] duration-200">
                    <div className="font-headline-sm text-headline-sm uppercase font-bold text-white">
                      DOMAIN &amp; AGGREGATES
                    </div>
                    <div className="font-meta-mono-sm text-meta-mono-sm text-inverse-on-surface mt-unit-1">
                      {t.engineering.coreSummary}
                    </div>
                  </div>
                  <div className="p-unit-2 border border-dashed border-primary text-center font-meta-mono text-meta-mono-sm bg-surface-container-low transition-colors hover:bg-surface-container">
                    <div className="font-bold text-primary">OUTPUT PORTS (INTERFACES)</div>
                    <div className="text-on-surface-variant">Dependency Inversion Principle (DIP)</div>
                  </div>
                </div>

                {/* Flow Indicator 2 */}
                <div className="col-span-12 md:col-span-1 text-center py-unit-2 md:py-0 flex flex-col items-center justify-center">
                  <div
                    className={`font-meta-mono font-bold text-headline-md transition-all duration-300 ${
                      archPulse === "driven" || archPulse === "core"
                        ? "text-secondary scale-125"
                        : "text-primary scale-100"
                    }`}
                  >
                    →
                  </div>
                  <span className="font-meta-mono-sm text-[9px] text-secondary uppercase font-bold tracking-widest">
                    DRIVEN OUT
                  </span>
                </div>

                {/* External Driven */}
                <div className="col-span-12 md:col-span-3 space-y-unit-3">
                  <div
                    onMouseEnter={() => setArchPulse("driven")}
                    onMouseLeave={() => setArchPulse(null)}
                    className="p-unit-3 border border-outline bg-surface-container font-meta-mono text-meta-mono transition-all duration-200 hover:border-secondary hover:shadow-sm cursor-pointer group"
                  >
                    <div className="text-secondary font-bold text-meta-mono-sm group-hover:underline flex justify-between">
                      <span>DRIVEN ADAPTER</span>
                      <span className="text-[10px] font-normal opacity-70">[STORAGE]</span>
                    </div>
                    <div className="font-bold text-primary mt-unit-1">SQLCipher / SQLite</div>
                    <div className="text-on-surface-variant text-meta-mono-sm">Double-Entry Ledger Invariant</div>
                  </div>

                  <div
                    onMouseEnter={() => setArchPulse("driven")}
                    onMouseLeave={() => setArchPulse(null)}
                    className="p-unit-3 border border-outline bg-surface-container font-meta-mono text-meta-mono transition-all duration-200 hover:border-secondary hover:shadow-sm cursor-pointer group"
                  >
                    <div className="text-secondary font-bold text-meta-mono-sm group-hover:underline flex justify-between">
                      <span>COMPUTE ENGINE</span>
                      <span className="text-[10px] font-normal opacity-70">[KERNEL]</span>
                    </div>
                    <div className="font-bold text-primary mt-unit-1">SYCL / PyTorch Native</div>
                    <div className="text-on-surface-variant text-meta-mono-sm">Intel Arc B580 Kernel</div>
                  </div>
                </div>
              </div>

              {/* Scientific Provenance Legend */}
              <div className="mt-unit-6 pt-unit-3 border-t border-outline-variant flex flex-col sm:flex-row sm:items-center justify-between font-meta-mono-sm text-meta-mono-sm text-on-surface-variant gap-unit-2">
                <div>
                  <span>PROVENANCE: Clean Architecture (Martin, 2017) + Domain-Driven Design (Evans, 2003)</span>
                </div>
                <div className="text-secondary font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-secondary telemetry-pulse"></span>
                  GARANTIA: INVARIANT PRESERVATION = 100%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
