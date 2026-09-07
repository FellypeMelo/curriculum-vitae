import { useClipboardCopy } from "../../lib/hooks";
import { useLanguage } from "../../context/LanguageContext";
import { PROFILE } from "../../data/profile";

export function ResearchSection() {
  const { t } = useLanguage();
  const { copiedKey, copy } = useClipboardCopy();
  const r = t.research;
  const isDoiCopied = copiedKey === "doi-research";

  return (
    <section
      className="reveal-node w-full px-grid-margin-mobile md:px-grid-margin-tablet lg:px-grid-margin-desktop py-unit-16 border-b border-primary"
      id="research"
    >
      <div className="grid grid-cols-12 gap-gutter-desktop">
        {/* Left Rail */}
        <div className="col-span-12 lg:col-span-3">
          <span className="font-meta-mono text-meta-mono text-secondary font-bold block mb-unit-1">
            {r.sec}
          </span>
          <h2 className="font-headline-lg text-headline-lg uppercase text-primary tracking-tight">
            {r.title}
          </h2>
          <span className="font-meta-mono-sm text-meta-mono-sm text-on-surface-variant uppercase block mt-unit-1">
            {r.subtitle}
          </span>
        </div>

        {/* Right Content */}
        <div className="col-span-12 lg:col-span-9 space-y-unit-12">
          {/* Publicação 01: Primeiro Autor Revista Tópicos */}
          <div
            className="border-2 border-primary bg-surface p-unit-6 relative shadow-sm hover:shadow-md transition-all duration-300"
            id="paper-doi"
          >
            <div className="flex flex-wrap items-center justify-between gap-unit-2 pb-unit-3 border-b border-outline-variant font-meta-mono text-meta-mono">
              <div className="flex items-center gap-unit-2">
                <span className="w-2 h-2 bg-secondary inline-block telemetry-pulse"></span>
                <span className="text-secondary font-bold">{r.pub1Status}</span>
              </div>
              <span className="bg-primary text-on-primary px-unit-2 py-0.5 text-meta-mono-sm">
                {r.pub1Venue.toUpperCase()} · {r.pub1Year}
              </span>
            </div>

            <div className="mt-unit-4">
              <h3 className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight">
                {r.pub1Title}
              </h3>

              <div className="mt-unit-3 font-meta-mono text-meta-mono text-on-surface-variant flex flex-wrap gap-x-unit-4 gap-y-unit-1">
                <span>
                  <strong>{r.pub1AuthorLabel}</strong> {r.pub1Author}
                </span>
                <span>·</span>
                <span>
                  <strong>{r.pub1VenueLabel}</strong> {r.pub1Venue} ({r.pub1Year})
                </span>
                <span>·</span>
                <span>
                  <strong>{r.pub1AreaLabel}</strong> {r.pub1Area}
                </span>
              </div>

              <p className="mt-unit-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {r.pub1Abstract}
              </p>

              <div className="mt-unit-6 p-unit-3 bg-surface-container border border-outline-variant flex flex-col sm:flex-row items-start sm:items-center justify-between gap-unit-3 font-meta-mono text-meta-mono">
                <div className="flex items-center gap-unit-2">
                  <span className="text-secondary font-bold">DOI:</span>
                  <a
                    href={PROFILE.doiHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-bold hover:text-secondary selection:bg-secondary font-mono transition-colors"
                  >
                    {PROFILE.doi}
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => copy(PROFILE.doi, "doi-research")}
                  className={`px-unit-4 py-unit-2 text-meta-mono-sm uppercase transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer shadow-sm ${
                    isDoiCopied
                      ? "bg-secondary text-on-secondary"
                      : "bg-primary text-on-primary hover:bg-secondary"
                  }`}
                >
                  <span className="material-symbols-outlined text-[14px]">
                    {isDoiCopied ? "check" : "content_copy"}
                  </span>
                  <span>{isDoiCopied ? r.btnDoiCopied : r.btnCopyDoi}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Em Preparação: Latin.Science */}
          <div className="border border-outline-variant bg-surface p-unit-6 hover:border-primary transition-colors">
            <div className="flex justify-between items-center pb-unit-2 border-b border-outline-variant font-meta-mono text-meta-mono">
              <span className="text-secondary font-bold">{r.pub2Status}</span>
              <span className="text-on-surface-variant text-meta-mono-sm">{r.pub2Venue}</span>
            </div>
            <h4 className="font-headline-md text-headline-md text-primary font-bold mt-unit-3">
              {r.pub2Title}
            </h4>
            <div className="mt-unit-2 font-meta-mono text-meta-mono-sm text-on-surface-variant flex gap-unit-3">
              <span><strong>{r.pub2AuthorLabel}</strong> {r.pub2Author}</span>
              <span>·</span>
              <span><strong>{r.pub2AreaLabel}</strong> {r.pub2Area}</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mt-unit-2 leading-relaxed">
              {r.pub2Abstract}
            </p>
          </div>

          {/* Formação Acadêmica & Certificações */}
          <div>
            <div className="font-meta-mono text-meta-mono text-primary font-bold uppercase pb-unit-2 border-b border-primary mb-unit-4 flex justify-between">
              <span>{r.educationTitle}</span>
              <span className="text-secondary">ACADEMIC AUDIT</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-unit-4 font-meta-mono text-meta-mono">
              {r.educationItems.map((edu) => (
                <div
                  key={edu.course}
                  className="p-unit-4 border border-outline bg-surface hover:border-secondary transition-colors"
                >
                  <span className="text-secondary font-bold text-meta-mono-sm block">
                    {edu.type}
                  </span>
                  <div className="font-bold text-primary text-headline-sm mt-unit-1">
                    {edu.course}
                  </div>
                  <div className="text-on-surface-variant text-meta-mono mt-unit-1">
                    {edu.institution} · {edu.period}
                  </div>
                  <div className="text-on-surface-variant text-meta-mono-sm mt-unit-2 pt-unit-2 border-t border-outline-variant leading-relaxed">
                    {edu.details}
                  </div>
                </div>
              ))}
            </div>

            {/* Certificações de Indústria */}
            <div className="mt-unit-4 border border-outline-variant bg-surface-container-low p-unit-4">
              <span className="font-meta-mono-sm text-meta-mono-sm text-on-surface-variant uppercase block mb-unit-3">
                {r.certificationsTitle}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-unit-3 font-meta-mono text-meta-mono-sm">
                {r.certificationsItems.map((cert) => (
                  <div
                    key={cert.title + cert.issuer}
                    className="p-unit-3 border border-outline-variant bg-surface hover:border-primary transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-secondary font-bold block">{cert.issuer}</span>
                      <div className="text-primary font-bold mt-1">{cert.title}</div>
                    </div>
                    <div className="text-on-surface-variant text-xs mt-2 pt-2 border-t border-outline-variant">
                      {cert.topics}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* STACK TÉCNICA CATEGORIZADA (6 Colunas Editoriais Suíças) */}
          <div id="stack">
            <div className="font-meta-mono text-meta-mono text-primary font-bold uppercase pb-unit-2 border-b border-primary mb-unit-4 flex justify-between">
              <span>{r.stackTitle}</span>
              <span className="text-secondary">TAXONOMIA DE ENGENHARIA</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-gutter-desktop font-meta-mono text-meta-mono">
              {r.stackTaxonomy.map((col) => (
                <div
                  key={col.index}
                  className="p-2 border border-transparent hover:border-outline-variant hover:bg-surface-container transition-all"
                >
                  <div className="text-secondary font-bold text-meta-mono-sm pb-unit-1 border-b border-primary uppercase">
                    {col.index}
                  </div>
                  <ul className="mt-unit-2 space-y-unit-1 text-on-surface text-body-sm">
                    {col.skills.map((skill) => (
                      <li key={skill} className="hover:text-secondary transition-colors cursor-default">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
