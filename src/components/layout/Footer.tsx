import { PROFILE } from '../../data/profile';

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-low border-t border-primary mt-unit-16">
      <div className="w-full px-grid-margin-mobile md:px-grid-margin-tablet lg:px-grid-margin-desktop py-unit-6 flex flex-col md:flex-row items-center justify-between gap-unit-4 border-b border-outline-variant">
        <div className="flex items-center gap-unit-4 flex-wrap">
          <span className="font-meta-mono text-meta-mono text-primary font-bold">
            {PROFILE.name.toUpperCase()} ARCHIVE
          </span>
          <span className="font-meta-mono-sm text-meta-mono-sm text-on-surface-variant">//</span>
          <span className="font-meta-mono-sm text-meta-mono-sm text-on-surface-variant">
            REV. 2026.04 // SWISS PRESS SPEC
          </span>
          <span className="font-meta-mono-sm text-meta-mono-sm text-on-surface-variant">//</span>
          <span className="font-meta-mono-sm text-meta-mono-sm text-on-surface-variant">
            GRID: 12-COL 48PX MARGIN
          </span>
        </div>

        <div className="flex items-center gap-unit-4 font-meta-mono-sm text-meta-mono-sm text-on-surface-variant flex-wrap">
          <span className="border border-outline px-unit-2 py-unit-1">LAT 22.9068° S</span>
          <span className="border border-outline px-unit-2 py-unit-1">LON 43.1729° W</span>
          <span className="border border-outline px-unit-2 py-unit-1 text-secondary font-bold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-secondary telemetry-pulse"></span> STATUS: OPERATIONAL
          </span>
        </div>
      </div>

      <div className="w-full px-grid-margin-mobile md:px-grid-margin-tablet lg:px-grid-margin-desktop py-unit-4 flex flex-col sm:flex-row items-center justify-between gap-unit-2 text-on-surface-variant font-meta-mono-sm text-meta-mono-sm">
        <div>© 2026 {PROFILE.fullName.toUpperCase()}. ALL RIGHTS RESERVED.</div>
        <div className="flex items-center gap-unit-6">
          <a className="hover:text-primary transition-colors" href="#top">
            COLOPHON
          </a>
          <a className="hover:text-primary transition-colors" href="#paper-doi">
            LEGAL NOTICE
          </a>
          <a className="hover:text-primary transition-colors" href="#contact">
            PGP KEY
          </a>
        </div>
      </div>
    </footer>
  );
}
