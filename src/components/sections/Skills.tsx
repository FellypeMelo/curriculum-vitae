import { motion } from 'framer-motion';
import { SKILLS } from '../../data/profile';

/**
 * Skills Section Component.
 * Visualizing technical expertise with progress bars.
 */
export function Skills() {
  // Group skills by category
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section className="py-8 md:py-12 max-w-5xl">
      <h2 
        id="skills-header"
        className="text-3xl md:text-4xl font-bold text-fg mb-10 md:mb-12 tracking-tighter"
      >
        Stack <span className="text-accent">Tecnológico</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {categories.map((category, catIndex) => (
          <div key={category} className="space-y-5">
            <h3 className="text-xs md:text-sm font-mono text-accent uppercase tracking-[0.1em] mb-4 flex items-center gap-2">
              <span className="h-px w-4 bg-accent/30" />
              {category}
            </h3>
            
            <div className="space-y-5">
              {SKILLS.filter(s => s.category === category).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (catIndex * 0.2) + (index * 0.05) }}
                  className="group"
                >
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm md:text-base font-bold text-fg group-hover:text-accent transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-xs font-mono text-dim">
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="h-1.5 w-full bg-surface border border-border rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-accent/40 to-accent shadow-[0_0_5px_rgba(var(--accent-rgb),0.3)]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Habilities */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 p-6 md:p-8 border border-border bg-surface/20 rounded-xl text-center"
      >
        <h3 className="text-base font-bold text-fg mb-4">Outras Habilidades</h3>
        <p className="text-sm md:text-base text-dim leading-relaxed">
          C (Avançado) • PHP • Análise de Dados • Watson Studio • NLP • Ethical Hacking (Pentest) • Segurança de Redes
        </p>
      </motion.div>
    </section>
  );
}
