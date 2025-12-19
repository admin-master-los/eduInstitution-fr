import { Calendar, Clock, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { newsEvents } from '../../data/siteContent';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function NewsEvents() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const translateType = (type: string) => type === 'event' ? 'Événement' : 'Actualité';

  return (
    <Section id="news" title="Actualités et Événements" subtitle="Restez Connecté" background="gradient">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsEvents.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="h-full flex flex-col overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${
                      item.type === 'event'
                        ? 'bg-purple-600 text-white'
                        : 'bg-burgundy-600 text-white'
                    }`}
                  >
                    {translateType(item.type)}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{formatDate(item.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <Tag className="h-4 w-4 mr-1" />
                    <span>{item.category}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{item.title}</h3>

                <p className="text-gray-600 mb-6 flex-1 line-clamp-3">{item.excerpt}</p>

                <Button variant="secondary" size="sm" className="w-full">
                  {item.type === 'event' ? 'En Savoir Plus' : 'Lire l\'Histoire Complète'}
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Button variant="outline" size="md" className="!text-gray-700 !border-gray-300 hover:!border-burgundy-700 hover:!text-burgundy-700">
          Voir Tous les Actualités et Événements
        </Button>
      </motion.div>
    </Section>
  );
}
