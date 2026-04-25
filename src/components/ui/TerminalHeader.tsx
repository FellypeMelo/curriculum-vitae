import { Terminal as TerminalIcon, Cpu, Shield, Globe } from 'lucide-react';

/**
 * Terminal Header Component.
 */
export function TerminalHeader() {
  return (
    <header className="h-16 border-b border-border/50 bg-bg/80 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/50 shadow-[0_0_8px_rgba(239,68,68,0.3)]" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50 shadow-[0_0_8px_rgba(245,158,11,0.3)]" />
          <div className="w-3 h-3 rounded-full bg-green-500/50 shadow-[0_0_8px_rgba(34,197,94,0.3)]" />
        </div>
        <div className="h-4 w-px bg-border/50 mx-1" />
        <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-dim uppercase">
          <TerminalIcon size={14} className="text-accent" />
          <span>Fellype_Samuel // Terminal</span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.15em]">
        <div className="flex items-center gap-1.5 text-accent/60">
          <Cpu size={12} />
          <span>CPU: OPTIMIZED</span>
        </div>
        <div className="flex items-center gap-1.5 text-green-500/60">
          <Shield size={12} />
          <span>SEC: ACTIVE</span>
        </div>
        <div className="flex items-center gap-1.5 text-blue-500/60">
          <Globe size={12} />
          <span>LATENCY: 12ms</span>
        </div>
      </div>
    </header>
  );
}
