import { useClipboardCopy } from "../../lib/hooks";
import { useLanguage } from "../../context/LanguageContext";
import { PROFILE } from "../../data/profile";

export function ContactSection() {
  const { t, lang } = useLanguage();
  const { copiedKey, copy } = useClipboardCopy();
  const c = t.contact;
  const isEmailCopied = copiedKey === "email";

  return (
    <section
      className="reveal-node w-full px-grid-margin-mobile md:px-grid-margin-tablet lg:px-grid-margin-desktop py-unit-16 bg-surface-container-low"
      id="contact"
    >
      <div className="grid grid-cols-12 gap-gutter-desktop">
        {/* Contact Main Headline & Channels */}
        <div className="col-span-12 lg:col-span-8">
          <span className="font-meta-mono text-meta-mono text-secondary font-bold block mb-unit-2">
            {c.kicker}
          </span>
          <h2 className="font-headline-xl text-headline-xl uppercase text-primary font-bold tracking-tight">
            {c.title}
          </h2>
          <p className="mt-unit-4 font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            {c.lead}
          </p>

          {/* Channels Matrix */}
          <div className="mt-unit-8 grid grid-cols-1 sm:grid-cols-2 gap-unit-4">
            {/* Email Card */}
            <div className="p-unit-4 border border-primary bg-surface flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200">
              <div>
                <span className="font-meta-mono-sm text-meta-mono-sm text-on-surface-variant uppercase">
                  {c.emailCardTitle}
                </span>
                <div className="font-headline-sm text-headline-sm text-primary font-bold mt-unit-1 break-all select-all font-mono">
                  {PROFILE.email}
                </div>
              </div>
              <div className="mt-unit-4 pt-unit-3 border-t border-outline-variant flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => copy(PROFILE.email, "email")}
                  className={`font-meta-mono text-meta-mono-sm uppercase font-bold flex items-center gap-1 cursor-pointer transition-colors ${
                    isEmailCopied ? "text-secondary" : "text-secondary hover:underline"
                  }`}
                >
                  <span>{isEmailCopied ? c.btnEmailCopied : c.btnCopyEmail}</span>
                  <span className="material-symbols-outlined text-[14px]">
                    {isEmailCopied ? "check" : "content_copy"}
                  </span>
                </button>
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
                  mail
                </span>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="p-unit-4 border border-primary bg-surface flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200">
              <div>
                <span className="font-meta-mono-sm text-meta-mono-sm text-on-surface-variant uppercase">
                  {c.githubCardTitle}
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
                  <span>{c.btnOpenProfile}</span>
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
                  code
                </span>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="p-unit-4 border border-primary bg-surface flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200">
              <div>
                <span className="font-meta-mono-sm text-meta-mono-sm text-on-surface-variant uppercase">
                  {c.linkedinCardTitle}
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
                  <span>{c.btnConnect}</span>
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
                  badge
                </span>
              </div>
            </div>

            {/* Base Hub Card */}
            <div className="p-unit-4 border border-primary bg-surface flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200">
              <div>
                <span className="font-meta-mono-sm text-meta-mono-sm text-on-surface-variant uppercase">
                  {c.locationCardTitle}
                </span>
                <div className="font-headline-sm text-headline-sm text-primary font-bold mt-unit-1">
                  {lang === "en" ? "Rio de Janeiro, RJ · Brazil" : PROFILE.location}
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
              <span>{c.colophonTitle}</span>
              <span className="text-secondary">{c.colophonTimestamp}</span>
            </div>

            <div className="mt-unit-4 space-y-unit-3 font-meta-mono-sm text-meta-mono-sm text-on-surface-variant leading-relaxed">
              <div>
                <strong className="text-primary block">
                  {lang === "en" ? "AESTHETIC SPECIFICATION:" : "MOVIMENTO ESTÉTICO:"}
                </strong>
                {c.colophonLead}
              </div>
              <div>
                <strong className="text-primary block">
                  {lang === "en" ? "CORE ENGINE:" : "ENGINE:"}
                </strong>
                {c.colophonEngine}
              </div>
              <div>
                <strong className="text-primary block">
                  {lang === "en" ? "TYPOGRAPHY:" : "TIPOGRAFIA:"}
                </strong>
                {c.colophonTypo}
              </div>
              <div>
                <strong className="text-primary block">
                  {lang === "en" ? "INVARIANTS:" : "INVARIANTE:"}
                </strong>
                {c.colophonRules}
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
