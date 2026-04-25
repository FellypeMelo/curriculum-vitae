import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../../data/profile';

/**
 * Certifications Section Component.
 */
export function Certifications() {
  return (
    <section className="py-12 md:py-20 max-w-6xl mx-auto">
      <h2 
        id="certifications-header"
        className="text-4xl md:text-5xl font-bold text-fg mb-12 tracking-tighter"
      >
        Certificações <span className="text-accent">& Conquistas</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group p-8 md:p-10 bg-surface/30 border border-border rounded-2xl hover:border-accent/30 transition-all flex items-start gap-6 md:gap-8"
          >
            <div className="p-4 md:p-5 bg-accent/5 rounded-xl group-hover:bg-accent/10 transition-colors">
              <cert.icon className="text-accent" size={28} />
            </div>
            
            <div className="flex-1">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-fg mb-2 leading-tight group-hover:text-accent transition-colors">
                {cert.name}
              </h3>
              <p className="text-sm md:text-base font-mono uppercase tracking-widest text-dim">
                {cert.issuer}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
