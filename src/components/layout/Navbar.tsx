import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { institution, navigation } from '../../data/siteContent';
import Button from '../ui/Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState<'fr' | 'en'>(() => {
    // Détecter la langue depuis l'URL actuelle
    const currentUrl = window.location.hostname;
    return currentUrl.includes('-en.') ? 'en' : 'fr';
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    const newLang = language === 'fr' ? 'en' : 'fr';
    const targetUrl = newLang === 'fr' 
      ? 'https://eduinstitution-fr.leonceouattarastudiogroup.site/'
      : 'https://eduinstitution-en.leonceouattarastudiogroup.site/';
    window.location.href = targetUrl;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            className="flex items-center space-x-2"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            whileHover={{ scale: 1.02 }}
          >
            <GraduationCap className="h-8 w-8 text-burgundy-700" />
            <span className="font-serif font-bold text-xl md:text-2xl text-gray-900">
              {institution.name}
            </span>
          </motion.a>

          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-gray-700 hover:text-burgundy-700 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-700 hover:text-burgundy-700 font-medium transition-colors"
              aria-label="Changer de langue"
            >
              <Languages className="h-5 w-5" />
              <span className="text-sm">{language.toUpperCase()}</span>
            </button>
            <Button variant="primary" size="sm" href="#admissions">
              Candidater
            </Button>
          </div>

          <button
            className="lg:hidden text-gray-700 hover:text-burgundy-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-4 pt-4 pb-6">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="text-gray-700 hover:text-burgundy-700 font-medium transition-colors py-2"
                  >
                    {item.label}
                  </a>
                ))}
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 text-gray-700 hover:text-burgundy-700 font-medium transition-colors py-2"
                  aria-label="Changer de langue"
                >
                  <Languages className="h-5 w-5" />
                  <span>{language === 'fr' ? 'Français' : 'English'}</span>
                </button>
                <Button variant="primary" size="sm" href="#admissions" className="w-full">
                  Candidater
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
