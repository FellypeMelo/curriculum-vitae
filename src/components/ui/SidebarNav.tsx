import { User, Briefcase, GraduationCap, Award, Code2, Home } from 'lucide-react';

interface SidebarNavProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

/**
 * Sidebar Navigation Component.
 */
export function SidebarNav({ activeView, onViewChange }: SidebarNavProps) {
  const navItems = [
    { id: 'hero', icon: Home, label: 'Início' },
    { id: 'about', icon: User, label: 'Sobre' },
    { id: 'experience', icon: Briefcase, label: 'Experiência' },
    { id: 'skills', icon: Code2, label: 'Habilidades' },
    { id: 'education', icon: GraduationCap, label: 'Educação' },
    { id: 'certifications', icon: Award, label: 'Certificações' },
  ];

  return (
    <nav className="w-20 md:w-24 border-r border-border/50 bg-bg flex flex-col items-center py-8 gap-8">
      <div className="mb-4">
        <div className="w-10 h-10 md:w-12 md:h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-bold text-lg">
          FM
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-6 w-full px-3">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={`group relative flex flex-col items-center gap-1.5 p-2.5 rounded-lg transition-all ${
              activeView === item.id 
                ? 'bg-accent/10 text-accent shadow-[0_0_15px_rgba(var(--accent-rgb),0.1)]' 
                : 'text-dim hover:text-fg hover:bg-surface/50'
            }`}
          >
            <item.icon size={22} />
            <span className="text-[9px] uppercase tracking-tighter font-mono opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-5 whitespace-nowrap bg-bg border border-border px-1.5 py-0.5 rounded pointer-events-none z-50">
              {item.label}
            </span>
            
            {activeView === item.id && (
              <div className="absolute right-0 top-1/4 bottom-1/4 w-0.5 bg-accent rounded-full" />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}
