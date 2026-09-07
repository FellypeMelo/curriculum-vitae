import { useClipboardCopy, scrollToSection } from "../../lib/hooks";
import { useLanguage } from "../../context/LanguageContext";
import { PROFILE } from "../../data/profile";

export function Hero() {
  const { t } = useLanguage();
  const { copiedKey, copy } = useClipboardCopy();
  const isDoiCopied = copiedKey === "doi-hero";

  return (
    <section
      className="w-full px-grid-margin-mobile md:px-grid-margin-tablet lg:px-grid-margin-desktop pt-unit-8 pb-unit-16 border-b border-primary relative"
      id="hero"
    >
      {/* Top Metadata / Technical Registration Bar */}
      <div className="hero-anim-1 grid grid-cols-12 gap-y-unit-2 gap-x-gutter-desktop pb-unit-4 border-b border-outline-variant font-meta-mono text-meta-mono text-on-surface-variant uppercase">
        <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex items-center gap-unit-2">
          <span className="w-2 h-2 bg-secondary inline-block"></span>
          <span className="text-primary font-bold">{t.hero.docRef}</span>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-3">{t.hero.vol}</div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-3">{t.hero.classification}</div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-3 sm:text-right flex items-center sm:justify-end gap-2">
          <span>{t.hero.geo}</span>
          <span className="w-1.5 h-1.5 bg-secondary telemetry-pulse"></span>
        </div>
      </div>

      {/* Monumental Wordmark */}
      <div className="hero-anim-2 pt-unit-8 pb-unit-4 border-b border-primary group">
        <h1 className="font-display-hero text-display-hero uppercase tracking-tighter leading-none text-primary m-0 select-none transition-transform duration-300 group-hover:translate-x-1">
          FELLYPE MELO
        </h1>
        <div className="mt-unit-3 flex flex-wrap items-center gap-x-unit-4 gap-y-unit-1 font-meta-mono text-meta-mono text-on-surface-variant uppercase tracking-wider">
          <span className="text-secondary font-bold">{t.hero.fullName}</span>
          <span>—</span>
          <span>{t.hero.titleBadge}</span>
        </div>
      </div>

      {/* Editorial Grid: Main Thesis + Structured Swiss Matrix */}
      <div className="grid grid-cols-12 gap-gutter-desktop pt-unit-8">
        {/* Main Column (Thesis, Manifesto & CTAs) */}
        <div className="hero-anim-3 col-span-12 lg:col-span-8 flex flex-col justify-between pr-0 lg:pr-unit-8">
          <div>
            <span className="font-meta-mono-sm text-meta-mono-sm text-secondary font-bold tracking-widest uppercase block mb-unit-2">
              {t.hero.thesisKicker}
            </span>
            <p className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight mb-unit-4 transition-colors">
              {t.hero.thesisLead}
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
              {t.hero.thesisBody}
            </p>
          </div>

          {/* Terminal Manifesto / Invariants */}
          <div className="hero-anim-4 mt-unit-8 p-unit-4 bg-surface-container border border-primary font-meta-mono text-meta-mono shadow-sm transition-all duration-300 hover:border-secondary hover:bg-surface-container-high">
            <div className="flex items-center justify-between border-b border-outline-variant pb-unit-2 mb-unit-2 text-on-surface-variant">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary telemetry-pulse"></span>
                <span>{t.hero.manifestoEnv}</span>
              </div>
              <span className="text-secondary font-bold">{t.hero.manifestoSha}</span>
            </div>
            <div className="space-y-unit-1 text-primary">
              <div className="hover:text-secondary transition-colors cursor-default">
                <span className="text-secondary font-bold">&gt;</span>{" "}
                <span className="text-on-surface-variant">thesis.statement</span> ={" "}
                <span className="font-bold">{t.hero.manifestoThesis}</span>
              </div>
              <div className="hover:text-secondary transition-colors cursor-default">
                <span className="text-secondary font-bold">&gt;</span>{" "}
                <span className="text-on-surface-variant">core.foundations</span> = [
                {t.hero.manifestoFoundations.map((f, i) => (
                  <span key={f}>
                    &quot;{f}&quot;{i < t.hero.manifestoFoundations.length - 1 ? ", " : ""}
                  </span>
                ))}
                ]
              </div>
              <div className="hover:text-secondary transition-colors cursor-default">
                <span className="text-secondary font-bold">&gt;</span>{" "}
                <span className="text-on-surface-variant">system.invariants</span> ={" "}
                {t.hero.manifestoInvariants}
              </div>
            </div>
          </div>

          {/* Editorial Actions / Navigation Links */}
          <div className="hero-anim-5 mt-unit-8 flex flex-wrap items-center gap-unit-4">
            <a
              className="px-unit-6 py-unit-3 bg-primary text-on-primary font-meta-mono text-meta-mono uppercase font-bold hover:bg-secondary hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 flex items-center gap-unit-2 shadow-sm cursor-pointer group"
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects")}
            >
              <span>{t.hero.btnExplore}</span>
              <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-y-0.5">
                arrow_downward
              </span>
            </a>

            <a
              className="px-unit-6 py-unit-3 border border-primary text-primary font-meta-mono text-meta-mono uppercase font-bold hover:bg-primary hover:text-on-primary transition-all duration-150 flex items-center gap-unit-2 cursor-pointer"
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
            >
              <span>{t.hero.btnContact}</span>
              <span className="material-symbols-outlined text-[16px]">north_east</span>
            </a>

            <div className="relative group">
              <button
                type="button"
                className={`px-unit-4 py-unit-3 font-meta-mono text-meta-mono flex items-center gap-unit-1 border transition-all duration-150 cursor-pointer ${
                  isDoiCopied
                    ? "bg-secondary text-on-secondary border-secondary font-bold"
                    : "text-on-surface-variant border-outline-variant bg-surface hover:text-secondary hover:border-secondary"
                }`}
                onClick={() => copy(PROFILE.doi, "doi-hero")}
                title="Copiar DOI"
              >
                <span className={isDoiCopied ? "text-on-secondary font-bold" : "text-secondary font-bold"}>
                  [DOI]
                </span>
                <span>{PROFILE.doi}</span>
                <span className="material-symbols-outlined text-[14px] ml-1">
                  {isDoiCopied ? "check" : "content_copy"}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Side Column (Structured Swiss Data Matrix) */}
        <div className="hero-anim-4 col-span-12 lg:col-span-4 border-t lg:border-t-0 lg:border-l border-primary pt-unit-6 lg:pt-0 lg:pl-unit-8 flex flex-col justify-between">
          <div>
            <div className="font-meta-mono text-meta-mono text-primary font-bold uppercase tracking-wider pb-unit-2 border-b border-primary flex justify-between">
              <span>{t.hero.matrixTitle}</span>
              <span className="text-secondary">{t.hero.matrixSpec}</span>
            </div>

            <div className="divide-y divide-outline-variant font-meta-mono text-meta-mono">
              {t.hero.matrixRows.map((r, idx) => (
                <div
                  key={idx}
                  className="py-unit-3 group hover:bg-surface-container-low transition-colors px-1"
                >
                  <span className="text-on-surface-variant text-meta-mono-sm block mb-unit-1">
                    {r.tag}
                  </span>
                  <span className="font-bold text-primary block group-hover:text-secondary transition-colors">
                    {r.title}
                  </span>
                  {r.sub && (
                    <span className="text-on-surface-variant text-meta-mono-sm block mt-0.5">
                      {r.sub}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-unit-6 pt-unit-4 border-t border-outline-variant">
            <div className="font-meta-mono-sm text-meta-mono-sm text-on-surface-variant flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> {t.hero.indexRun}
              </span>
              <span className="text-secondary font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-secondary telemetry-pulse"></span>{" "}
                {t.hero.statusOperational}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
