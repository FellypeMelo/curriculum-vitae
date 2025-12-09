import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';
import { PROFILE } from '../../data/profile';

// Icone auxiliar para SVG inline simples se Lucide falhar (fallback) ou para customização
const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
)

export function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
      
      {/* SOBRE */}
      <motion.div className="md:col-span-8 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm"
         initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <div className="flex items-center gap-2 mb-4 text-indigo-600">
          <BrainCircuit size={20} />
          <span className="font-semibold uppercase tracking-wider text-xs">Objetivo Profissional</span>
        </div>
        <p className="text-lg text-slate-700 leading-relaxed">
          {PROFILE.summary}
        </p>
        

      </motion.div>

      {/* IDIOMAS */}
      <motion.div className="md:col-span-4 bg-indigo-600 text-white p-8 rounded-2xl shadow-lg shadow-indigo-200"
        initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
         <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
            <GlobeIcon /> Idiomas
         </h3>
         <div className="space-y-4">
           <div>
             <div className="flex justify-between text-sm mb-1 opacity-90">Português</div>
             <div className="h-2 bg-indigo-800/50 rounded-full overflow-hidden">
               <div className="h-full bg-white w-full"></div>
             </div>
             <span className="text-xs opacity-75 mt-1 block">Nativo</span>
           </div>
           <div>
             <div className="flex justify-between text-sm mb-1 opacity-90">Inglês</div>
             <div className="h-2 bg-indigo-800/50 rounded-full overflow-hidden">
               <div className="h-full bg-white w-[75%]"></div>
             </div>
             <span className="text-xs opacity-75 mt-1 block">Avançado-Intermediário (B2)</span>
           </div>
         </div>
      </motion.div>
    </div>
  );
}
