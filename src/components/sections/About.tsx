import { motion } from 'framer-motion';
import { PROFILE, PROJECT_TYPES } from '../../data/profile';

/**
 * About Section Component.
 * Highlighting the professional summary and P&D focus.
 */
export function About() {
  return (
    <section className="py-8 md:py-12 max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Sticky Header Side */}
        <div className="md:col-span-4">
          <div className="sticky top-20">
            <h2 
              id="about-header"
              className="text-3xl md:text-4xl font-bold text-fg mb-4 tracking-tighter"
            >
              Objetivo <br />
              <span className="text-accent">Profissional</span>
            </h2>
            <div className="h-1 w-12 bg-accent/40 rounded-full mb-6" />
            
            <div className="space-y-4">
              <p className="text-[10px] text-dim font-mono uppercase tracking-widest">
                // DISPONIBILIDADE
              </p>
              <p className="text-xs md:text-sm text-fg/80 leading-relaxed border-l border-accent/20 pl-4 py-1 italic">
                {PROFILE.availability}
              </p>
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="md:col-span-8 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-base md:text-lg lg:text-xl text-fg leading-relaxed font-light">
              {PROFILE.summary}
            </p>
          </motion.div>

          {/* Project Types / Focus Areas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {PROJECT_TYPES.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 border border-border bg-surface/30 rounded-lg hover:border-accent/40 transition-all group"
              >
                <div className="p-2.5 bg-accent/5 rounded-md w-fit mb-4 group-hover:bg-accent/10 transition-colors">
                  <type.icon className="text-accent" size={20} />
                </div>
                <h3 className="text-base font-bold text-fg mb-2">{type.title}</h3>
                <p className="text-xs md:text-sm text-dim leading-relaxed">{type.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 border border-dashed border-accent/20 rounded-xl bg-accent/5"
          >
            <h3 className="text-[10px] md:text-xs font-mono text-accent mb-3 uppercase tracking-widest">// COPY FINAL</h3>
            <blockquote className="text-base md:text-lg lg:text-xl text-fg/90 italic font-serif leading-relaxed">
              “Enquanto muitos juniores esperam escopo pronto, eu ajudo a construir a arquitetura – e entrego soluções completas como o Audio Lab.”
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
