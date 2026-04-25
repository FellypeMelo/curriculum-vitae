import { motion } from 'framer-motion';
import { EDUCATION } from '../../data/profile';

/**
 * Education Section Component.
 */
export function Education() {
  return (
    <section className="py-12 md:py-20 max-w-6xl mx-auto">
      <h2 
        id="education-header"
        className="text-4xl md:text-5xl font-bold text-fg mb-12 tracking-tighter"
      >
        Formação <span className="text-accent">Acadêmica</span>
      </h2>

      <div className="grid grid-cols-1 gap-6 md:gap-8">
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={`${edu.institution}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group p-8 md:p-10 bg-surface/30 border border-border rounded-2xl hover:border-accent/30 transition-all flex flex-col md:flex-row md:items-start gap-6 md:gap-8"
          >
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-fg group-hover:text-accent transition-colors">
                    {edu.course}
                  </h3>
                  <p className="text-base md:text-lg text-accent/80 font-mono mt-0.5">
                    {edu.institution}
                  </p>
                </div>
                <div className="px-3 py-1 bg-surface border border-border rounded-full text-xs text-dim font-mono w-fit">
                  {edu.status}
                </div>
              </div>
              <p className="text-base md:text-lg lg:text-xl text-fg/70 leading-relaxed italic">
                {edu.details}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
