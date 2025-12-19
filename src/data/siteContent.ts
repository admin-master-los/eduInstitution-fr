export interface Institution {
  name: string;
  tagline: string;
  description: string;
  established: string;
  accreditation: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  cta: {
    primary: { text: string; href: string };
    secondary: { text: string; href: string };
  };
  backgroundImage: string;
}

export interface Statistic {
  value: string;
  label: string;
  icon: string;
}

export interface Program {
  id: string;
  title: string;
  degree: string;
  duration: string;
  description: string;
  highlights: string[];
  category: 'undergraduate' | 'graduate' | 'doctorate' | 'professional';
}

export interface AdmissionStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface AdmissionRequirement {
  category: string;
  items: string[];
}

export interface NewsEvent {
  id: string;
  type: 'news' | 'event';
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
}

export interface Document {
  id: string;
  title: string;
  description: string;
  category: string;
  fileSize: string;
  icon: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface FooterSection {
  title: string;
  links: Array<{ label: string; href: string }>;
}

export const institution: Institution = {
  name: 'EduInstitution',
  tagline: 'Excellence en Éducation, Innovation en Apprentissage',
  description: 'Une institution de prestige engagée envers l\'excellence académique, l\'innovation en recherche et la formation des leaders de demain par une éducation transformatrice.',
  established: '1965',
  accreditation: 'Accrédité par la Commission d\'Accréditation de l\'Enseignement Supérieur',
};

export const navigation: NavigationItem[] = [
  { label: 'Accueil', href: '#home' },
  { label: 'Programmes', href: '#programs' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Actualités & Événements', href: '#news' },
  { label: 'Ressources', href: '#documents' },
  { label: 'Contact', href: '#contact' },
];

export const heroContent: HeroContent = {
  title: 'Construisez Votre Avenir avec Excellence',
  subtitle: 'Où la Rigueur Académique Rencontre l\'Innovation',
  description: 'Rejoignez une communauté de chercheurs, d\'innovateurs et de leaders. Vivez une éducation qui transforme les vies et façonne l\'avenir.',
  cta: {
    primary: { text: 'Candidater Maintenant', href: '#admissions' },
    secondary: { text: 'Découvrir les Programmes', href: '#programs' },
  },
  backgroundImage: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1920',
};

export const statistics: Statistic[] = [
  { value: '15,000+', label: 'Étudiants Inscrits', icon: 'Users' },
  { value: '250+', label: 'Programmes de Diplôme', icon: 'GraduationCap' },
  { value: '95%', label: 'Insertion Professionnelle', icon: 'TrendingUp' },
  { value: '60+', label: 'Pays Représentés', icon: 'Globe' },
];

export const programs: Program[] = [
  {
    id: 'prog-1',
    title: 'Administration des Affaires',
    degree: 'Licence en Administration des Affaires',
    duration: '4 Ans',
    description: 'Formation complète en gestion préparant les leaders au marché mondial, avec un accent sur la pensée stratégique et l\'innovation.',
    highlights: ['Perspectives Commerciales Mondiales', 'Parcours Entrepreneuriat', 'Partenariats Industriels', 'Opportunités de Stage'],
    category: 'undergraduate',
  },
  {
    id: 'prog-2',
    title: 'Informatique',
    degree: 'Licence en Informatique',
    duration: '4 Ans',
    description: 'Curriculum de pointe en génie logiciel, intelligence artificielle, cybersécurité et science des données avec expérience pratique de projets.',
    highlights: ['IA et Apprentissage Automatique', 'Développement Full-Stack', 'Opportunités de Recherche', 'Connexions avec l\'Industrie Technologique'],
    category: 'undergraduate',
  },
  {
    id: 'prog-3',
    title: 'Master de Santé Publique',
    degree: 'Master en Santé Publique',
    duration: '2 Ans',
    description: 'Études avancées en politique de santé publique, épidémiologie et santé communautaire avec expérience pratique de terrain.',
    highlights: ['Pratique de Terrain', 'Projets de Recherche', 'Focus Santé Mondiale', 'Leadership en Santé'],
    category: 'graduate',
  },
  {
    id: 'prog-4',
    title: 'Génie',
    degree: 'Licence en Génie',
    duration: '4 Ans',
    description: 'Formation rigoureuse en génie avec spécialisations en génie mécanique, électrique, civil et chimique.',
    highlights: ['Accrédité ABET', 'Projets de Conception', 'Collaboration Industrielle', 'Installations Modernes de Laboratoire'],
    category: 'undergraduate',
  },
  {
    id: 'prog-5',
    title: 'Leadership en Éducation',
    degree: 'Doctorat en Éducation',
    duration: '3-5 Ans',
    description: 'Programme doctoral pour les administrateurs scolaires et décideurs politiques, centré sur le leadership transformateur.',
    highlights: ['Recherche Dissertative', 'Analyse Politique', 'Développement du Leadership', 'Modèle de Cohorte'],
    category: 'doctorate',
  },
  {
    id: 'prog-6',
    title: 'Relations Internationales',
    degree: 'Master en Arts',
    duration: '2 Ans',
    description: 'Études supérieures en politique mondiale, diplomatie et développement international avec immersion à Washington D.C.',
    highlights: ['Options d\'Étude à l\'Étranger', 'Simulations ONU', 'Recherche Politique', 'Formation Linguistique'],
    category: 'graduate',
  },
];

export const admissionSteps: AdmissionStep[] = [
  {
    step: 1,
    title: 'Soumettre une Candidature',
    description: 'Remplissez notre formulaire de candidature en ligne avec vos informations personnelles et votre historique académique.',
    icon: 'FileText',
  },
  {
    step: 2,
    title: 'Documents Requis',
    description: 'Téléchargez vos relevés de notes, résultats de tests, lettres de recommandation et lettre de motivation.',
    icon: 'Upload',
  },
  {
    step: 3,
    title: 'Examen de la Candidature',
    description: 'Notre commission des admissions examine attentivement tous les documents et peut demander des informations supplémentaires.',
    icon: 'Search',
  },
  {
    step: 4,
    title: 'Notification de Décision',
    description: 'Recevez votre décision d\'admission par courrier électronique et accédez à votre portail d\'inscription personnalisé.',
    icon: 'CheckCircle',
  },
];

export const admissionRequirements: AdmissionRequirement[] = [
  {
    category: 'Licence',
    items: [
      'Diplôme d\'études secondaires ou équivalent',
      'Moyenne minimale de 3,0',
      'Résultats SAT ou ACT',
      'Deux lettres de recommandation',
      'Lettre de motivation (500-750 mots)',
      'Relevés de notes officiels',
    ],
  },
  {
    category: 'Master',
    items: [
      'Licence d\'un établissement accrédité',
      'Moyenne minimale de 3,2',
      'Résultats GRE ou GMAT (selon le programme)',
      'Trois lettres de recommandation',
      'Déclaration d\'intention',
      'Curriculum vitae',
    ],
  },
  {
    category: 'Candidats Internationaux',
    items: [
      'Résultats TOEFL ou IELTS',
      'Rapport d\'évaluation des diplômes',
      'Documentation financière',
      'Copie du passeport valide',
      'Exigences du visa étudiant',
      'Preuve de maîtrise de l\'anglais',
    ],
  },
];

export const newsEvents: NewsEvent[] = [
  {
    id: 'news-1',
    type: 'news',
    title: 'EduInstitution Classée Parmi les 50 Meilleures Universités Nationales',
    date: '2025-01-15',
    excerpt: 'Notre engagement envers l\'excellence académique et la réussite des étudiants a été reconnu dans les derniers classements nationaux.',
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Réalisations',
  },
  {
    id: 'event-1',
    type: 'event',
    title: 'Portes Ouvertes Annuelles : Découvrez Votre Avenir',
    date: '2025-02-10',
    excerpt: 'Rejoignez-nous pour des visites du campus, rencontrez nos professeurs, assistez à des cours d\'exemple et découvrez nos programmes.',
    image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Événements du Campus',
  },
  {
    id: 'news-2',
    type: 'news',
    title: 'Ouverture d\'un Nouveau Centre de Recherche en Technologie Durable',
    date: '2025-01-08',
    excerpt: 'Une installation ultramoderne pour avancer la recherche en énergies renouvelables, technologies vertes et durabilité environnementale.',
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Recherche',
  },
  {
    id: 'event-2',
    type: 'event',
    title: 'Semaine d\'Accueil des Étudiants Internationaux',
    date: '2025-02-20',
    excerpt: 'Programme d\'orientation spécial pour les étudiants internationaux avec activités culturelles, ressources du campus et réseautage.',
    image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Vie Étudiante',
  },
  {
    id: 'news-3',
    type: 'news',
    title: 'La Dotation des Anciens Finance 100 Nouvelles Bourses',
    date: '2024-12-20',
    excerpt: 'Une généreuse donation d\'anciens distingués permettra d\'offrir des bourses d\'études complètes aux étudiants méritants.',
    image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Aide Financière',
  },
  {
    id: 'event-3',
    type: 'event',
    title: 'Salon des Études Supérieures',
    date: '2025-03-05',
    excerpt: 'Explorez les programmes d\'études supérieures de tous les départements du campus. Rencontrez les responsables de programmes et les étudiants.',
    image: 'https://images.pexels.com/photos/1152500/pexels-photo-1152500.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Académique',
  },
];

export const documents: Document[] = [
  {
    id: 'doc-1',
    title: 'Catalogue des Licences 2024-2025',
    description: 'Programmes académiques complets, descriptions de cours et exigences de diplôme',
    category: 'Catalogues Académiques',
    fileSize: '12.5 MB',
    icon: 'BookOpen',
  },
  {
    id: 'doc-2',
    title: 'Guide des Programmes de Master',
    description: 'Guide complet de tous les programmes d\'études supérieures et spécialisations',
    category: 'Catalogues Académiques',
    fileSize: '8.2 MB',
    icon: 'GraduationCap',
  },
  {
    id: 'doc-3',
    title: 'Liste de Vérification de Candidature',
    description: 'Guide étape par étape pour compléter votre candidature avec succès',
    category: 'Admissions',
    fileSize: '1.1 MB',
    icon: 'CheckSquare',
  },
  {
    id: 'doc-4',
    title: 'Information sur l\'Aide Financière',
    description: 'Bourses, subventions, prêts et options de plans de paiement',
    category: 'Aide Financière',
    fileSize: '3.4 MB',
    icon: 'DollarSign',
  },
  {
    id: 'doc-5',
    title: 'Rapport de Sécurité du Campus',
    description: 'Rapport annuel sur la sécurité et la prévention des incendies conforme aux lois fédérales',
    category: 'Vie du Campus',
    fileSize: '2.8 MB',
    icon: 'Shield',
  },
  {
    id: 'doc-6',
    title: 'Manuel de l\'Étudiant',
    description: 'Politiques, procédures et ressources pour les étudiants actuels',
    category: 'Vie du Campus',
    fileSize: '5.6 MB',
    icon: 'Book',
  },
  {
    id: 'doc-7',
    title: 'Guide pour Étudiants Internationaux',
    description: 'Informations essentielles pour les candidats et étudiants internationaux',
    category: 'Admissions',
    fileSize: '4.2 MB',
    icon: 'Globe',
  },
  {
    id: 'doc-8',
    title: 'Politique de Transfert de Crédits',
    description: 'Directives pour le transfert de crédits d\'autres établissements',
    category: 'Admissions',
    fileSize: '1.8 MB',
    icon: 'ArrowRightLeft',
  },
];

export const contactInfo: ContactInfo = {
  address: '1234 Avenue Universitaire, Cité de l\'Éducation, CE 12345',
  phone: '+1 (555) 123-4567',
  email: 'admissions@eduinstitution.edu',
  hours: 'Lundi à Vendredi : 8h00 - 18h00',
};

export const socialLinks: SocialLink[] = [
  { platform: 'Facebook', url: 'https://facebook.com/eduinstitution', icon: 'Facebook' },
  { platform: 'Twitter', url: 'https://twitter.com/eduinstitution', icon: 'Twitter' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/school/eduinstitution', icon: 'Linkedin' },
  { platform: 'Instagram', url: 'https://instagram.com/eduinstitution', icon: 'Instagram' },
  { platform: 'YouTube', url: 'https://youtube.com/eduinstitution', icon: 'Youtube' },
];

export const footerSections: FooterSection[] = [
  {
    title: 'Académiques',
    links: [
      { label: 'Programmes de Licence', href: '#programs' },
      { label: 'Programmes de Master', href: '#programs' },
      { label: 'Apprentissage en Ligne', href: '#programs' },
      { label: 'Calendrier Académique', href: '#documents' },
      { label: 'Catalogue des Cours', href: '#documents' },
    ],
  },
  {
    title: 'Admissions',
    links: [
      { label: 'Comment Postuler', href: '#admissions' },
      { label: 'Visiter le Campus', href: '#contact' },
      { label: 'Frais de Scolarité et Aide', href: '#admissions' },
      { label: 'Étudiants Internationaux', href: '#admissions' },
      { label: 'Étudiants Transférés', href: '#admissions' },
    ],
  },
  {
    title: 'Vie du Campus',
    links: [
      { label: 'Services aux Étudiants', href: '#contact' },
      { label: 'Logement et Alimentation', href: '#contact' },
      { label: 'Clubs et Organisations', href: '#news' },
      { label: 'Sports', href: '#news' },
      { label: 'Arts et Culture', href: '#news' },
    ],
  },
  {
    title: 'Ressources',
    links: [
      { label: 'Bibliothèque', href: '#documents' },
      { label: 'Services aux Carrières', href: '#contact' },
      { label: 'Support Informatique', href: '#contact' },
      { label: 'Réseau des Anciens', href: '#contact' },
      { label: 'Actualités et Médias', href: '#news' },
    ],
  },
];
