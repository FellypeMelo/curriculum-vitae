import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { EXPERIENCE } from '../../data/profile';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export function Experience() {
  return (
    <div>
      <SectionHeading icon={Briefcase}>Experiência Profissional</SectionHeading>
      <motion.div 
        className="space-y-6 border-l-2 border-slate-200 ml-3 pl-8 relative"
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
        {EXPERIENCE.map((job, idx) => (
          <motion.div 
            key={idx} 
            className="relative group"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            {/* Timeline dot */}
            <span className="absolute -left-[41px] top-6 h-5 w-5 rounded-full border-4 border-white bg-indigo-600 shadow-sm z-10 transition-transform group-hover:scale-125" />
            
            <Card className="hover:border-indigo-200 transition-all hover:shadow-lg cursor-default hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-2 gap-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{job.role}</h3>
                  <div className="text-indigo-600 font-medium text-sm">{job.company}</div>
                </div>
                <Badge color="slate">{job.period}</Badge>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {job.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {job.tags.map(tag => (
                  <span key={tag} className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
