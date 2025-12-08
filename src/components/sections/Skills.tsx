import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import { SKILLS } from '../../data/profile';
import { SectionHeading } from '../ui/SectionHeading';

export function Skills() {
  return (
    <div className="mt-24">
      <SectionHeading icon={Cpu}>Stack Tecnológico</SectionHeading>
      
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {SKILLS.map((skill, idx) => (
          <motion.div 
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
            className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col items-start gap-2 shadow-sm transition-colors hover:border-indigo-200"
          >
            <div className="flex justify-between w-full items-center">
              <span className="font-semibold text-slate-800">{skill.name}</span>
              <span className="text-xs text-slate-400 font-mono">{skill.category}</span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-2">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className="bg-indigo-600 h-full rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="mt-6 flex flex-wrap gap-2 text-sm text-slate-500">
         <span className="font-semibold mr-2">Outras Habilidades:</span>
         <span>C (Avançado) • PHP • Análise de Dados • Watson Studio • NLP • Ethical Hacking (Pentest) • Segurança de Redes</span>
      </div>
    </div>
  );
}
