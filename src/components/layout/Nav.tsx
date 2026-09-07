import { useState } from "react";
import { useScrollProgress, useActiveSectionTracker, useTheme, scrollToSection } from "../../lib/hooks";
import { useLanguage } from "../../context/LanguageContext";
import { PROFILE } from "../../data/profile";

export function Nav() {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggle } = useTheme();
  const scrollProgress = useScrollProgress();
  const activeSection = useActiveSectionTracker(
    t.nav.sections.map((s) => ({ id: s.id, num: s.num }))
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    scrollToSection(e, id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-primary transition-all duration-300"
      id="main-header"
    >
      <div className="h-20 w-full px-grid-margin-mobile md:px-grid-margin-tablet lg:px-grid-margin-desktop flex items-stretch justify-between relative">
        {/* Left identity rail */}
        <div className="flex items-center gap-unit-4 lg:gap-unit-6 pr-unit-3 lg:pr-unit-6 border-r border-outline-variant">
          <div className="flex flex-col justify-center">
            <a
              className="font-headline-sm text-headline-sm uppercase text-primary tracking-tight transition-colors hover:text-secondary"
              href="#top"
              onClick={(e) => handleNavClick(e, "top")}
            >
              {PROFILE.name}
            </a>
            <span className="font-meta-mono-sm text-meta-mono-sm text-on-surface-variant mt-unit-1">
              {lang === "en" ? "Software Engineer & AI" : PROFILE.title} // {PROFILE.degree}
            </span>
          </div>

          <div className="hidden 2xl:flex items-center border border-outline px-unit-2 py-unit-1 font-meta-mono-sm text-meta-mono-sm bg-surface-container select-none cursor-default">
            <span className="text-secondary mr-unit-1">[SPEC]</span>
            <span>ISO-7816 // {PROFILE.locationCoords}</span>
          </div>
        </div>

        {/* Center Desktop Navigation */}
        <div className="hidden xl:flex items-center flex-1 justify-center px-unit-4">
          <div className="flex items-center gap-unit-4">
            <nav
              className="flex items-center border border-primary p-unit-1 bg-surface-container-low"
              id="nav-container"
            >
              {t.nav.sections.map((s) => {
                const isActive = activeSection.id === s.id;
                return (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={(e) => handleNavClick(e, s.id)}
                    className={`nav-link px-unit-3 py-unit-1 font-meta-mono text-meta-mono transition-all duration-200 ${
                      isActive
                        ? "bg-primary text-on-primary font-bold"
                        : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                    }`}
                  >
                    {s.label}
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-unit-2 font-meta-mono-sm text-meta-mono-sm text-on-surface-variant pl-unit-2 border-l border-outline-variant">
              <span className="w-1.5 h-1.5 bg-secondary telemetry-pulse"></span>
              <span className="tracking-wider">
                {t.nav.pageIndicator} {activeSection.num} / 06
              </span>
            </div>
          </div>
        </div>

        {/* Right Status, Theme & Language Actions */}
        <div className="flex items-center gap-unit-3 lg:gap-unit-4 pl-unit-3 lg:pl-unit-6 border-l border-outline-variant">
          {/* Language Switcher [ PT | EN ] */}
          <div className="flex items-center border border-primary bg-surface-container font-meta-mono text-meta-mono-sm">
            <button
              type="button"
              onClick={() => setLang("pt")}
              className={`px-2 py-1 transition-colors cursor-pointer ${
                lang === "pt"
                  ? "bg-primary text-on-primary font-bold"
                  : "text-on-surface-variant hover:text-primary hover:bg-surface"
              }`}
              title="Português (Brasil)"
            >
              PT
            </button>
            <span className="text-outline-variant select-none">|</span>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`px-2 py-1 transition-colors cursor-pointer ${
                lang === "en"
                  ? "bg-primary text-on-primary font-bold"
                  : "text-on-surface-variant hover:text-primary hover:bg-surface"
              }`}
              title="English"
            >
              EN
            </button>
          </div>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggle}
            className="flex items-center gap-1.5 border border-primary px-2.5 py-1 font-meta-mono text-meta-mono-sm bg-surface-container hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"
            title={`Alternar tema (atual: ${theme})`}
            aria-label={`Alternar tema para ${theme === "dark" ? "claro" : "escuro"}`}
          >
            <span className="text-secondary font-bold text-xs">
              {theme === "dark" ? "☼" : "☾"}
            </span>
            <span className="hidden sm:inline">
              {theme === "dark" ? t.nav.lightMode : t.nav.darkMode}
            </span>
          </button>

          {/* Live Status indicator */}
          <div className="hidden lg:flex flex-col text-right">
            <div className="flex items-center justify-end gap-unit-2 font-meta-mono-sm text-meta-mono-sm text-on-surface">
              <span className="w-2 h-2 rounded-full bg-emerald-600 telemetry-pulse"></span>
              <span>{t.nav.liveStatus}</span>
            </div>
            <span className="font-meta-mono-sm text-meta-mono-sm text-on-surface-variant">
              {t.nav.statusAvailability}
            </span>
          </div>

          {/* Contact Direct Link */}
          <a
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-secondary transition-colors"
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            title={t.nav.contactTooltip}
            aria-label={t.nav.contactTooltip}
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((o) => !o)}
            aria-label={t.nav.menuAria}
            className="xl:hidden flex items-center justify-center w-8 h-8 border border-primary bg-surface-container text-primary hover:bg-secondary hover:text-on-secondary transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-primary bg-surface-container p-unit-4 space-y-unit-3">
          <div className="flex items-center justify-between pb-unit-3 border-b border-outline-variant font-meta-mono text-meta-mono-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 telemetry-pulse"></span>
              <span>{t.nav.liveStatus}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-secondary font-bold">[{lang.toUpperCase()}]</span>
              <span>{t.nav.status}</span>
            </div>
          </div>

          <nav className="flex flex-col gap-unit-2">
            {t.nav.sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={(e) => handleNavClick(e, s.id)}
                className={`px-unit-3 py-unit-2 font-meta-mono text-meta-mono flex justify-between items-center border border-outline-variant ${
                  activeSection.id === s.id
                    ? "bg-primary text-on-primary font-bold"
                    : "bg-surface text-on-surface hover:bg-surface-container-high"
                }`}
              >
                <span>{s.label}</span>
                <span className="text-secondary font-bold">{t.nav.pageIndicator} {s.num}</span>
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Top Reading Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-secondary transition-all duration-150 ease-out z-50 pointer-events-none"
        id="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />
    </header>
  );
}
