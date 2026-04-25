import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TerminalHeader } from './components/ui/TerminalHeader';
import { SidebarNav } from './components/ui/SidebarNav';
import { CommandBar } from './components/ui/CommandBar';
import { InsightLayer } from './components/ui/InsightLayer';

// Views (Existing sections repurposed)
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Education } from './components/sections/Education';
import { Certifications } from './components/sections/Certifications';

/**
 * Main Application Component - TERMINAL.STUDIO Edition.
 * Orchestrates the OS-inspired layout and state.
 */
export default function App() {
  const [activeView, setActiveView] = useState('hero');
  const [insightsVisible, setInsightsVisible] = useState(false);
  const [lastCommand, setLastCommand] = useState<string | null>(null);

  // Command parser for the footer CLI
  const handleCommand = (cmd: string) => {
    const command = cmd.trim().toLowerCase();
    setLastCommand(command);
    
    // Clear feedback after 3 seconds
    setTimeout(() => setLastCommand(null), 3000);

    switch (command) {
      case 'help':
        alert('Available commands: hero, about, experience, skills, education, certifications, clear, i');
        break;
      case 'hero':
      case 'welcome':
      case 'home':
        setActiveView('hero');
        break;
      case 'about':
      case 'profile':
        setActiveView('about');
        break;
      case 'experience':
      case 'work':
        setActiveView('experience');
        break;
      case 'skills':
      case 'tech':
        setActiveView('skills');
        break;
      case 'education':
      case 'study':
        setActiveView('education');
        break;
      case 'certifications':
      case 'awards':
        setActiveView('certifications');
        break;
      case 'i':
      case 'insight':
      case 'insights':
        setInsightsVisible(prev => !prev);
        break;
      default:
        console.warn(`Command not recognized: ${command}`);
    }
  };

  // Render the active view
  const renderView = () => {
    switch (activeView) {
      case 'hero': return <Hero />;
      case 'about': return <About />;
      case 'experience': return <Experience />;
      case 'skills': return <Skills />;
      case 'education': return <Education />;
      case 'certifications': return <Certifications />;
      default: return <Hero />;
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-bg text-fg overflow-hidden selection:bg-accent/30 selection:text-accent">
      {/* --- TOP: OS HEADER --- */}
      <TerminalHeader />

      <div className="flex-1 flex overflow-hidden">
        {/* --- LEFT: SIDEBAR NAVIGATION --- */}
        <SidebarNav activeView={activeView} onViewChange={setActiveView} />

        {/* --- MAIN CONTENT AREA --- */}
        <main className="flex-1 overflow-y-auto bg-surface/50 relative">
          <div className="max-w-full h-full mx-auto pl-12 md:pl-24 pr-8 md:pr-16 py-12 animate-fade-in">
            {renderView()}
          </div>
        </main>
      </div>

      {/* --- INSIGHT LAYER (Fixed Overlay) --- */}
      <InsightLayer visible={insightsVisible} />

      {/* --- BOTTOM: COMMAND BAR --- */}
      <div className="relative">
        <AnimatePresence>
          {lastCommand && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-full left-4 mb-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded text-[10px] font-mono text-accent"
            >
              EXECUTING: {lastCommand}...
            </motion.div>
          )}
        </AnimatePresence>
        <CommandBar onCommand={handleCommand} insightsVisible={insightsVisible} />
      </div>
    </div>
  );
}
