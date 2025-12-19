import { Download, BookOpen, GraduationCap, CheckSquare, DollarSign, Shield, Book, Globe, ArrowRightLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { documents } from '../../data/siteContent';
import Section from '../ui/Section';
import Card from '../ui/Card';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  GraduationCap,
  CheckSquare,
  DollarSign,
  Shield,
  Book,
  Globe,
  ArrowRightLeft,
};

export default function Documents() {
  const categories = Array.from(new Set(documents.map((doc) => doc.category)));

  return (
    <Section id="documents" title="Ressources et Documents" subtitle="Centre de Téléchargement" background="white">
      <div className="space-y-12">
        {categories.map((category, catIndex) => {
          const categoryDocs = documents.filter((doc) => doc.category === category);
          return (
            <div key={category}>
              <motion.h3
                className="text-2xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              >
                {category}
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryDocs.map((doc, index) => {
                  const Icon = iconMap[doc.icon];
                  return (
                    <motion.div
                      key={doc.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.5 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-all cursor-pointer">
                        <div className="p-6 flex items-start space-x-4">
                          <div className="bg-burgundy-100 p-3 rounded-lg flex-shrink-0">
                            <Icon className="h-6 w-6 text-burgundy-700" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-gray-900 mb-1 line-clamp-2">{doc.title}</h4>
                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                              {doc.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-gray-500">{doc.fileSize}</span>
                              <button className="flex items-center text-sm font-semibold text-burgundy-700 hover:text-burgundy-800 transition-colors">
                                <Download className="h-4 w-4 mr-1" />
                                Télécharger
                              </button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
