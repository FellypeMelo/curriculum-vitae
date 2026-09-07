import { useState } from 'react';
import { useScrollProgress, useActiveSectionTracker } from '../../lib/hooks';
import { SECTIONS, PROFILE } from '../../data/profile';

export function Nav() {
  const scrollProgress = useScrollProgress();
  const activeSection = useActiveSectionTracker(
    SECTIONS.map((s) => ({ id: s.id, num: s.num }))
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-primary transition-all duration-300"
      id="main-header"
    >
      <div className="h-20 w-full px-grid-margin-mobile md:px-grid-margin-tablet lg:px-grid-margin-desktop flex items-stretch justify-between relative">
        {/* Left identity rail */}
        <div className="flex items-center gap-unit-6 pr-unit-4 lg:pr-unit-8 border-r border-outline-variant">
          <div className="flex flex-col justify-center">
            <a
              className="font-headline-sm text-headline-sm uppercase text-primary tracking-tight transition-colors hover:text-secondary"
              href="#top"
            >
              {PROFILE.name}
            </a>
            <span className="font-meta-mono-sm text-meta-mono-sm text-on-surface-variant mt-unit-1">
              {PROFILE.title} // {PROFILE.degree}
            </span>
          </div>

          <div className="hidden xl:flex items-center border border-outline px-unit-2 py-unit-1 font-meta-mono-sm text-meta-mono-sm bg-surface-container select-none cursor-default transition-transform hover:-translate-y-0.5">
            <span className="text-secondary mr-unit-1">[SPEC]</span>
            <span>ISO-7816 // {PROFILE.locationCoords}</span>
          </div>
        </div>

        {/* Center Desktop Navigation */}
        <div className="hidden lg:flex items-center flex-1 justify-center px-unit-6">
          <div className="flex items-center gap-unit-6">
            <nav className="flex items-center border border-primary p-unit-1 bg-surface-container-low" id="nav-container">
              {SECTIONS.map((s) => {
                const isActive = activeSection.id === s.id;
                return (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className={`nav-link px-unit-3 py-unit-1 font-meta-mono text-meta-mono transition-all duration-200 ${
                      isActive
                        ? 'bg-primary text-on-primary font-bold'
                        : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                    }`}
                  >
                    {s.label}
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-unit-2 font-meta-mono-sm text-meta-mono-sm text-on-surface-variant pl-unit-2 border-l border-outline-variant">
              <span className="w-1.5 h-1.5 bg-secondary telemetry-pulse"></span>
              <span className="tracking-wider">PAGE {activeSection.num} / 06</span>
            </div>
          </div>
        </div>

        {/* Right Status & Actions */}
        <div className="flex items-center gap-unit-3 lg:gap-unit-4 pl-unit-4 lg:pl-unit-8 border-l border-outline-variant">
          <div className="hidden sm:flex flex-col text-right">
            <div className="flex items-center justify-end gap-unit-2 font-meta-mono-sm text-meta-mono-sm text-on-surface">
              <span className="w-2 h-2 rounded-full bg-emerald-600 telemetry-pulse"></span>
              <span>LIVE STATUS // 200 OK</span>
            </div>
            <span className="font-meta-mono-sm text-meta-mono-sm text-on-surface-variant">
              {PROFILE.location.toUpperCase()} · DISPONÍVEL P/ PROJETOS
            </span>
          </div>

          <a
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-secondary transition-colors"
            href="#contact"
            title="Ir para Contato"
            aria-label="Ir para Contato"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((o) => !o)}
            aria-label="Abrir menu de navegação"
            className="lg:hidden flex items-center justify-center w-8 h-8 border border-primary bg-surface-container text-primary hover:bg-secondary hover:text-on-secondary transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-primary bg-surface-container p-unit-4">
          <nav className="flex flex-col gap-unit-2">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-unit-3 py-unit-2 font-meta-mono text-meta-mono flex justify-between items-center border border-outline-variant ${
                  activeSection.id === s.id
                    ? 'bg-primary text-on-primary font-bold'
                    : 'bg-surface text-on-surface hover:bg-surface-container-high'
                }`}
              >
                <span>{s.label}</span>
                <span className="text-secondary font-bold">PAGE {s.num}</span>
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
