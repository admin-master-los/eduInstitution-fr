import { FileText, Upload, Search, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { admissionSteps, admissionRequirements } from '../../data/siteContent';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText,
  Upload,
  Search,
  CheckCircle,
};

export default function Admissions() {
  return (
    <Section id="admissions" title="Admissions" subtitle="Rejoignez Notre Communauté" background="white">
      <div className="mb-16">
        <h3 className="text-2xl font-serif font-bold text-center mb-12 text-gray-900">
          Processus de Candidature
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {admissionSteps.map((step, index) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full p-6 text-center relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-burgundy-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                  <div className="mt-6 mb-4 flex justify-center">
                    <div className="bg-burgundy-100 p-4 rounded-full">
                      <Icon className="h-8 w-8 text-burgundy-700" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-serif font-bold text-center mb-12 text-gray-900">
          Exigences par Niveau de Programme
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {admissionRequirements.map((req, index) => (
            <motion.div
              key={req.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full p-6">
                <h4 className="text-xl font-bold text-burgundy-700 mb-6 text-center">
                  {req.category}
                </h4>
                <ul className="space-y-3">
                  {req.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-burgundy-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Button variant="primary" size="lg" href="#contact">
          Commencer Votre Candidature
        </Button>
      </motion.div>
    </Section>
  );
}
