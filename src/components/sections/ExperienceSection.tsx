import { EXPERIENCE, LAB_EXPERIMENTS } from '../../data/profile';

export function ExperienceSection() {
  const fuzzy = EXPERIENCE[0];
  const freelance = EXPERIENCE[1];

  return (
    <section
      className="reveal-node w-full px-grid-margin-mobile md:px-grid-margin-tablet lg:px-grid-margin-desktop py-unit-16 border-b border-primary"
      id="experience"
    >
      <div className="grid grid-cols-12 gap-gutter-desktop">
        {/* Left Rail */}
        <div className="col-span-12 lg:col-span-3">
          <span className="font-meta-mono text-meta-mono text-secondary font-bold block mb-unit-1">
            // SEC 03
          </span>
          <h2 className="font-headline-lg text-headline-lg uppercase text-primary tracking-tight">
            EXPERIÊNCIA
          </h2>
          <span className="font-meta-mono-sm text-meta-mono-sm text-on-surface-variant uppercase block mt-unit-1">
            LAB &amp; ATUAÇÃO PROFISSIONAL
          </span>
        </div>

        {/* Right Content */}
        <div className="col-span-12 lg:col-span-9 space-y-unit-8">
          {/* Position 01: Laboratório Fuzzy */}
          {fuzzy && (
            <div className="border border-primary bg-surface shadow-sm transition-all duration-200 hover:shadow-md">
              <div className="px-unit-4 py-unit-3 bg-surface-container border-b border-primary flex flex-wrap justify-between items-center gap-unit-2">
                <div>
                  <span className="font-meta-mono-sm text-meta-mono-sm text-secondary font-bold mr-unit-2">
                    [{fuzzy.period}]
                  </span>
                  <span className="font-headline-sm text-headline-sm text-primary uppercase font-bold">
                    {fuzzy.company}
                  </span>
                </div>
                <span className="font-meta-mono text-meta-mono bg-primary text-on-primary px-unit-2 py-unit-1">
                  {fuzzy.role}
                </span>
              </div>

              <div className="p-unit-6">
                <div className="mb-unit-4 text-on-surface-variant font-body-md text-body-md leading-relaxed">
                  {fuzzy.summary}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-unit-4 pt-unit-4 border-t border-outline-variant font-meta-mono text-meta-mono">
                  {fuzzy.achievements.map((ach) => (
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
          )}

          {/* Position 02: Full Stack Freelancer */}
          {freelance && (
            <div className="border border-primary bg-surface shadow-sm transition-all duration-200 hover:shadow-md">
              <div className="px-unit-4 py-unit-3 bg-surface-container border-b border-primary flex flex-wrap justify-between items-center gap-unit-2">
                <div>
                  <span className="font-meta-mono-sm text-meta-mono-sm text-secondary font-bold mr-unit-2">
                    [{freelance.period}]
                  </span>
                  <span className="font-headline-sm text-headline-sm text-primary uppercase font-bold">
                    {freelance.company}
                  </span>
                </div>
                <span className="font-meta-mono text-meta-mono border border-primary text-primary px-unit-2 py-unit-1">
                  {freelance.role}
                </span>
              </div>

              <div className="p-unit-6">
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {freelance.summary}
                </p>
              </div>
            </div>
          )}

          {/* Technical Experiments Benchmark Table (LAB 001 - 004) */}
          <div>
            <div className="font-meta-mono text-meta-mono text-primary font-bold uppercase pb-unit-2 border-b border-primary flex justify-between">
              <span>LAB BENCHMARK // EXPERIMENTOS REGISTRADOS</span>
              <span className="text-secondary">INDEX: EXP-001..004</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left font-meta-mono text-meta-mono border-collapse">
                <thead>
                  <tr className="bg-primary text-on-primary">
                    <th className="p-unit-3 font-normal">ID</th>
                    <th className="p-unit-3 font-normal">DOMÍNIO</th>
                    <th className="p-unit-3 font-normal">HIPÓTESE / EXPERIMENTO</th>
                    <th className="p-unit-3 font-normal">MÉTRICA CHAVE</th>
                    <th className="p-unit-3 font-normal text-right">ESTADO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant bg-surface">
                  {LAB_EXPERIMENTS.map((exp) => (
                    <tr
                      key={exp.id}
                      className="hover:bg-surface-container transition-all cursor-pointer group"
                    >
                      <td className="p-unit-3 text-secondary font-bold group-hover:translate-x-0.5 transition-transform">
                        {exp.id}
                      </td>
                      <td className="p-unit-3 text-primary font-bold">{exp.domain}</td>
                      <td className="p-unit-3 text-on-surface-variant leading-relaxed">{exp.hypothesis}</td>
                      <td className="p-unit-3 font-bold text-primary font-mono">{exp.metric}</td>
                      <td className="p-unit-3 text-right text-secondary font-bold">{exp.status}</td>
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
