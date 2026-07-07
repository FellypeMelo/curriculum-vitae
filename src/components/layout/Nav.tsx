import { Moon, Sun, ArrowUpRight } from 'lucide-react';
import { useTheme, useActiveSection } from '../../lib/hooks';

const LINKS = [
  { id: 'perfil', label: 'Perfil' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'publicacoes', label: 'Publicações' },
  { id: 'stack', label: 'Stack' },
  { id: 'formacao', label: 'Formação' },
];

export function Nav() {
  const { theme, toggle } = useTheme();
  const active = useActiveSection([
    'inicio',
    ...LINKS.map((l) => l.id),
    'contato',
  ]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-4 px-5 md:px-8">
        <a
          href="#inicio"
          className="group flex items-center gap-3"
          aria-label="Início"
        >
          <span className="grid h-9 w-9 place-items-center border border-fg/70 font-display text-sm font-bold text-fg transition-colors group-hover:border-accent group-hover:text-accent">
            FM
          </span>
          <span className="hidden font-mono text-xs tracking-tight text-dim sm:block">
            Fellype&nbsp;S.&nbsp;de&nbsp;Melo
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="relative py-1 font-mono text-xs uppercase tracking-wider text-dim transition-colors hover:text-fg data-[on=true]:text-fg"
              data-on={active === l.id}
            >
              {l.label}
              <span
                className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 data-[on=true]:scale-x-100"
                data-on={active === l.id}
              />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
            className="grid h-9 w-9 place-items-center border border-border text-dim transition-colors hover:border-accent hover:text-accent"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="#contato"
            className="group flex items-center gap-1.5 border border-fg/80 bg-fg px-4 py-2 font-mono text-xs uppercase tracking-wider text-bg transition-colors hover:border-accent hover:bg-accent hover:text-accent-fg"
          >
            Contato
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
