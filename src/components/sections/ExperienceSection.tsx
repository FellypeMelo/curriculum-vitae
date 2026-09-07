import { useLanguage } from "../../context/LanguageContext";

export function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section
      className="reveal-node w-full px-grid-margin-mobile md:px-grid-margin-tablet lg:px-grid-margin-desktop py-unit-16 border-b border-primary"
      id="experience"
    >
      <div className="grid grid-cols-12 gap-gutter-desktop">
        {/* Left Rail */}
        <div className="col-span-12 lg:col-span-3">
          <span className="font-meta-mono text-meta-mono text-secondary font-bold block mb-unit-1">
            {t.experience.sec}
          </span>
          <h2 className="font-headline-lg text-headline-lg uppercase text-primary tracking-tight">
            {t.experience.title}
          </h2>
          <span className="font-meta-mono-sm text-meta-mono-sm text-on-surface-variant uppercase block mt-unit-1">
            {t.experience.subtitle}
          </span>
        </div>

        {/* Right Content */}
        <div className="col-span-12 lg:col-span-9 space-y-unit-8">
          {/* Position 01: Laboratório Fuzzy */}
          <div className="border border-primary bg-surface shadow-sm transition-all duration-200 hover:shadow-md">
            <div className="px-unit-4 py-unit-3 bg-surface-container border-b border-primary flex flex-wrap justify-between items-center gap-unit-2">
              <div>
                <span className="font-meta-mono-sm text-meta-mono-sm text-secondary font-bold mr-unit-2">
                  [{t.experience.fuzzyPeriod}]
                </span>
                <span className="font-headline-sm text-headline-sm text-primary uppercase font-bold">
                  {t.experience.fuzzyCompany}
                </span>
              </div>
              <span className="font-meta-mono text-meta-mono bg-primary text-on-primary px-unit-2 py-unit-1">
                {t.experience.fuzzyRole}
              </span>
            </div>

            <div className="p-unit-6">
              <div className="mb-unit-4 text-on-surface-variant font-body-md text-body-md leading-relaxed">
                {t.experience.fuzzySummary}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-unit-4 pt-unit-4 border-t border-outline-variant font-meta-mono text-meta-mono">
                {t.experience.fuzzyAchievements.map((ach) => (
                  <div
                    key={ach.title}
                    className="p-unit-3 bg-surface-container-low border border-outline-variant hover:border-secondary transition-colors"
                  >
                    <span className="text-secondary font-bold text-meta-mono-sm block">
                      {ach.title}
                    </span>
                    <span className="text-primary font-bold block mt-unit-1">
                      {ach.subtitle}
                    </span>
                    <p className="text-on-surface-variant text-body-sm mt-unit-1 leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Position 02: Full Stack Freelancer */}
          <div className="border border-primary bg-surface shadow-sm transition-all duration-200 hover:shadow-md">
            <div className="px-unit-4 py-unit-3 bg-surface-container border-b border-primary flex flex-wrap justify-between items-center gap-unit-2">
              <div>
                <span className="font-meta-mono-sm text-meta-mono-sm text-secondary font-bold mr-unit-2">
                  [{t.experience.freelancePeriod}]
                </span>
                <span className="font-headline-sm text-headline-sm text-primary uppercase font-bold">
                  {t.experience.freelanceCompany}
                </span>
              </div>
              <span className="font-meta-mono text-meta-mono border border-primary text-primary px-unit-2 py-unit-1">
                {t.experience.freelanceRole}
              </span>
            </div>

            <div className="p-unit-6">
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {t.experience.freelanceSummary}
              </p>
            </div>
          </div>

          {/* Technical Experiments Benchmark Table (LAB 001 - 004) */}
          <div>
            <div className="font-meta-mono text-meta-mono text-primary font-bold uppercase pb-unit-2 border-b border-primary flex justify-between">
              <span>{t.experience.benchmarkTitle}</span>
              <span className="text-secondary">[N=4 EXPERIMENTS]</span>
            </div>

            <div className="overflow-x-auto border-x border-b border-outline-variant">
              <table className="w-full text-left font-meta-mono text-meta-mono-sm border-collapse">
                <thead>
                  <tr className="bg-surface-container text-on-surface-variant border-b border-outline-variant uppercase">
                    <th className="p-unit-3 font-semibold">{t.experience.colId}</th>
                    <th className="p-unit-3 font-semibold">{t.experience.colDomain}</th>
                    <th className="p-unit-3 font-semibold">{t.experience.colHypothesis}</th>
                    <th className="p-unit-3 font-semibold">{t.experience.colMetric}</th>
                    <th className="p-unit-3 font-semibold text-right">{t.experience.colStatus}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant bg-surface">
                  {t.experience.benchmarks.map((exp) => (
                    <tr
                      key={exp.id}
                      className="hover:bg-surface-container-low transition-colors group cursor-default"
                    >
                      <td className="p-unit-3 text-secondary font-bold">{exp.id}</td>
                      <td className="p-unit-3 font-bold text-primary">{exp.domain}</td>
                      <td className="p-unit-3 text-on-surface-variant group-hover:text-on-surface transition-colors">
                        {exp.hypothesis}
                      </td>
                      <td className="p-unit-3 font-mono font-bold text-primary">{exp.metric}</td>
                      <td className="p-unit-3 text-right">
                        <span className="text-secondary font-bold">{exp.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
