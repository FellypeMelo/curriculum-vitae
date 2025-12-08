import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { CERTIFICATIONS } from '../../data/profile';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';

export function Certifications() {
  return (
    <div className="mt-24 mb-12">
      <SectionHeading icon={Award}>Certificações</SectionHeading>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
      >
        {CERTIFICATIONS.map((cert, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 }
            }}
          >
            <Card className="flex flex-col items-center text-center p-8 bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 transition-transform hover:scale-110 duration-300">
                <cert.icon size={32} />
              </div>
              <h4 className="font-bold text-slate-900 text-lg mb-2">{cert.name}</h4>
              <p className="text-slate-500">{cert.issuer}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
