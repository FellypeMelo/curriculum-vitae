import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INSIGHTS } from '../../data/profile';

interface InsightNote {
  id: string;
  text: string;
  x: number;
  y: number;
}

export const InsightLayer: React.FC<{ visible: boolean }> = ({ visible }) => {
  const [notes, setNotes] = useState<InsightNote[]>([]);

  const updatePositions = useCallback(() => {
    const newNotes: InsightNote[] = [];
    
    Object.entries(INSIGHTS).forEach(([targetId, text]) => {
      const el = document.querySelector(`[data-target="${targetId}"]`);
      if (el) {
        const rect = el.getBoundingClientRect();
        newNotes.push({
          id: targetId,
          text,
          // Position relative to viewport since layer is fixed
          x: rect.right + 20,
          y: rect.top + (rect.height / 2),
        });
      }
    });
    
    setNotes(newNotes);
  }, []);

  useEffect(() => {
    if (visible) {
      updatePositions();
      window.addEventListener('resize', updatePositions);
      window.addEventListener('scroll', updatePositions, true);
    }
    return () => {
      window.removeEventListener('resize', updatePositions);
      window.removeEventListener('scroll', updatePositions, true);
    };
  }, [visible, updatePositions]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100]">
      <AnimatePresence>
        {visible && notes.map((note) => (
          <motion.div
            key={note.id}
            initial={{ opacity: 0, scale: 0.9, x: note.x - 10, y: note.y }}
            animate={{ opacity: 1, scale: 1, x: note.x, y: note.y }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute -translate-y-1/2 flex items-center gap-3"
          >
            {/* Dotted Connection Line */}
            <div className="w-8 h-[1px] border-t border-dotted border-accent/40"></div>
            
            {/* Note Content */}
            <div className="bg-surface border border-accent/30 p-3 rounded shadow-2xl shadow-black/50 max-w-[200px]">
              <div className="font-mono text-[9px] text-accent uppercase tracking-widest mb-1 opacity-50">
                [ Insight_{note.id} ]
              </div>
              <p className="font-mono text-[10px] text-fg/90 leading-tight">
                {note.text}
              </p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
