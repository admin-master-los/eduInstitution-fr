import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { contactInfo } from '../../data/siteContent';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function Contact() {
  return (
    <Section id="contact" title="Nous Contacter" subtitle="Restez en Contact" background="gray">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Formulaire de Pré-Inscription</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prénom
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent transition-all"
                    placeholder="Jean"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom de Famille</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent transition-all"
                    placeholder="Dupont"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Courrier Électronique</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent transition-all"
                  placeholder="jean.dupont@exemple.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent transition-all"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Programme d\'Intérêt
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent transition-all">
                  <option value="">Sélectionner un programme</option>
                  <option value="undergraduate">Licence</option>
                  <option value="graduate">Master</option>
                  <option value="doctorate">Doctorat</option>
                  <option value="professional">Professionnel</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent transition-all resize-none"
                  placeholder="Parlez-nous de vous et de vos objectifs éducatifs..."
                />
              </div>

              <Button variant="primary" size="lg" className="w-full">
                Soumettre la Pré-Inscription
              </Button>
            </form>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Informations de Contact</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-burgundy-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-burgundy-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Adresse</h4>
                  <p className="text-gray-600">{contactInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-burgundy-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-burgundy-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Téléphone</h4>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-burgundy-600 hover:text-burgundy-700"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-burgundy-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-burgundy-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Courrier Électronique</h4>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-burgundy-600 hover:text-burgundy-700"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-burgundy-100 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-burgundy-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Heures de Bureau</h4>
                  <p className="text-gray-600">{contactInfo.hours}</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-burgundy-700 to-purple-800 text-white">
            <h3 className="text-2xl font-bold mb-4">Planifier une Visite du Campus</h3>
            <p className="mb-6 text-burgundy-50">
              Expérimentez notre campus en personne. Planifiez une visite personnalisée et rencontrez notre
              équipe des admissions.
            </p>
            <Button variant="outline" size="md" className="w-full">
              Réserver une Visite
            </Button>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
