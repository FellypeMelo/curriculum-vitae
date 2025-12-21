import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { EDUCATION } from '../../data/profile';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

/**
 * Education Section Component.
 * Displays educational background cards with institution details.
 *
 * @returns {JSX.Element} The rendered Education section.
 */
export function Education() {
  return (
    <div>
      <SectionHeading icon={GraduationCap}>Educação</SectionHeading>
      <motion.div 
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {EDUCATION.map((edu, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <Card className="hover:border-indigo-200 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-slate-900">{edu.institution}</h3>
                <Badge color="green">{edu.status}</Badge>
              </div>
              <div className="text-indigo-600 font-medium text-sm mb-2">{edu.course}</div>
              <p className="text-sm text-slate-500">{edu.details}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
