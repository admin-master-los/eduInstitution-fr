import { useState } from 'react';
import { Clock, Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { programs } from '../../data/siteContent';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function Programs() {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'Tous les Programmes' },
    { value: 'undergraduate', label: 'Licence' },
    { value: 'graduate', label: 'Master' },
    { value: 'doctorate', label: 'Doctorat' },
  ];

  const filteredPrograms =
    filter === 'all' ? programs : programs.filter((p) => p.category === filter);

  return (
    <Section id="programs" title="Programmes Académiques" subtitle="Découvrez Votre Parcours" background="gray">
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setFilter(cat.value)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === cat.value
                ? 'bg-burgundy-700 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPrograms.map((program, index) => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="h-full flex flex-col">
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-burgundy-100 px-3 py-1 rounded-full">
                    <span className="text-xs font-semibold text-burgundy-700 uppercase">
                      {program.category}
                    </span>
                  </div>
                  <Award className="h-5 w-5 text-burgundy-600" />
                </div>

                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  {program.title}
                </h3>
                <p className="text-sm text-burgundy-600 font-medium mb-3">{program.degree}</p>

                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{program.duration}</span>
                </div>

                <p className="text-gray-600 mb-6 flex-1">{program.description}</p>

                <div className="space-y-2 mb-6">
                  {program.highlights.slice(0, 3).map((highlight) => (
                    <div key={highlight} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-burgundy-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>

                <Button variant="secondary" size="sm" className="w-full">
                  En Savoir Plus
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
