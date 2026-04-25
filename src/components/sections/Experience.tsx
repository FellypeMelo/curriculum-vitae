import { motion } from 'framer-motion';
import { EXPERIENCE } from '../../data/profile';

/**
 * Experience Section Component.
 * Displays professional history in a terminal log format.
 */
export function Experience() {
  return (
    <section className="py-8 md:py-12 max-w-5xl">
      <h2 
        id="experience-header"
        className="text-3xl md:text-4xl font-bold text-fg mb-10 tracking-tighter"
      >
        Experiência <span className="text-accent">Profissional</span>
      </h2>

      <div className="space-y-6">
        {EXPERIENCE.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${index}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-6 pb-6 border-l border-border/50 last:border-0 last:pb-0"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-4px] top-0 w-2 h-2 bg-accent rounded-full border border-bg shadow-[0_0_8px_rgba(var(--accent-rgb),0.5)]" />
            
            <div className="bg-surface/30 p-5 md:p-6 rounded-lg border border-border hover:border-accent/30 transition-all group">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-fg group-hover:text-accent transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-xs md:text-sm text-accent/80 font-mono mt-0.5">
                    {exp.company}
                  </p>
                </div>
                <div className="px-2.5 py-0.5 bg-accent/5 border border-accent/20 rounded-full text-[10px] text-accent font-mono w-fit">
                  {exp.period}
                </div>
              </div>

              <p className="text-sm md:text-base text-fg/80 leading-relaxed mb-5">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-2 py-0.5 bg-surface border border-border rounded text-[0.65rem] font-mono text-dim group-hover:border-accent/20 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
