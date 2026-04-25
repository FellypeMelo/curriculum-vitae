import React, { useState, useRef, useEffect } from 'react';

interface CommandBarProps {
  onCommand: (cmd: string) => void;
  insightsVisible: boolean;
}

export const CommandBar: React.FC<CommandBarProps> = ({ onCommand, insightsVisible }) => {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (cmd) {
      onCommand(cmd);
      setInput('');
    }
  };

  useEffect(() => {
    // Focus input when clicking anywhere on the bar
    const handleFocus = () => inputRef.current?.focus();
    window.addEventListener('click', (e) => {
      if ((e.target as HTMLElement).closest('.command-bar')) {
        handleFocus();
      }
    });
  }, []);

  return (
    <footer className="command-bar h-10 bg-surface border-t border-border flex items-center px-4 font-mono text-xs select-none">
      <form onSubmit={handleSubmit} className="flex-1 flex items-center gap-2 text-accent">
        <span className="opacity-70">fellype@studio:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="type 'help' or press 'i' for insights..."
          className="flex-1 bg-transparent border-none outline-none text-fg placeholder:text-dim/40"
          spellCheck={false}
          autoComplete="off"
        />
      </form>
      
      <div className="flex items-center gap-4 text-[10px] text-dim border-l border-border ml-4 pl-4">
        <div className="flex items-center gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full ${insightsVisible ? 'bg-accent' : 'bg-dim/30'}`}></span>
          <span>INSIGHTS [I]</span>
        </div>
        <div className="opacity-40">UTF-8</div>
        <div className="opacity-40">master*</div>
      </div>
    </footer>
  );
};
