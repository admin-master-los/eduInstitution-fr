import { GraduationCap, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { institution, footerSections, contactInfo, socialLinks } from '../../data/siteContent';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-burgundy-400" />
              <span className="font-serif font-bold text-xl text-white">{institution.name}</span>
            </div>
            <p className="text-sm mb-4 max-w-sm">{institution.tagline}</p>
            <p className="text-xs text-gray-400 mb-6">{institution.accreditation}</p>

            <div className="space-y-2 text-sm">
              <p>{contactInfo.address}</p>
              <p>
                <a href={`tel:${contactInfo.phone}`} className="hover:text-burgundy-400 transition-colors">
                  {contactInfo.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-burgundy-400 transition-colors"
                >
                  {contactInfo.email}
                </a>
              </p>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-burgundy-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} {institution.name}. Tous les droits réservés.
            </p>

            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-burgundy-400 transition-colors"
                    aria-label={social.platform}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            <div className="flex space-x-4 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-burgundy-400 transition-colors">
                Politique de Confidentialité
              </a>
              <span className="text-gray-600">|</span>
              <a href="#terms" className="text-gray-400 hover:text-burgundy-400 transition-colors">
                Conditions d\'Utilisation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
