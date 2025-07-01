import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Globe, 
  Camera, 
  Calculator, 
  PenTool, 
  GraduationCap,
  Clock,
  Users,
  Award,
  BookOpen,
  ArrowRight
} from 'lucide-react';

const Formations = () => {
  const formations = [
    {
      icon: MapPin,
      title: 'Topographie pratique',
      description: 'Formation complète aux techniques de topographie moderne avec apprentissage des outils GPS/GNSS et des logiciels de traitement.',
      image: '/formation1.jpg',
      duration: '5 jours',
      modules: [
        'Principes de base de la topographie',
        'Manipulation des instruments GPS/GNSS',
        'Techniques de nivellement',
        'Traitement des données avec logiciels spécialisés'
      ],
      objectif: 'Maîtriser les techniques modernes de topographie pour réaliser des relevés précis et produire des plans topographiques professionnels.'
    },
    {
      icon: Globe,
      title: 'Cartographie & SIG',
      description: 'Apprentissage des systèmes d\'information géographique et des techniques de cartographie numérique pour la gestion territoriale.',
      image: '/carto_sig.png',
      duration: '4 jours',
      modules: [
        'Introduction aux SIG',
        'Collecte et structuration de données',
        'Analyse spatiale avancée',
        'Production de cartes thématiques'
      ],
      objectif: 'Acquérir les compétences nécessaires pour créer, gérer et analyser des données géospatiales dans un environnement SIG professionnel.'
    },
    {
      icon: Camera,
      title: 'Drone et photogrammétrie',
      description: 'Formation spécialisée en pilotage de drones professionnels et techniques de photogrammétrie pour la cartographie aérienne.',
      image: '/photogr.png',
      duration: '6 jours',
      modules: [
        'Réglementation du pilotage de drones',
        'Techniques de vol et de prise de vues',
        'Photogrammétrie et traitement d\'images',
        'Production d\'orthophotos et modèles 3D'
      ],
      objectif: 'Devenir autonome dans l\'utilisation professionnelle des drones pour la cartographie et acquérir une certification de pilotage.'
    },
    {
      icon: Calculator,
      title: 'Calcul des structures du bâtiment',
      description: 'Formation technique sur le calcul et la conception des structures en béton armé et métalliques selon les normes en vigueur.',
      image: '/formation3.jpg',
      duration: '7 jours',
      modules: [
        'Résistance des matériaux',
        'Calcul béton armé',
        'Structures métalliques',
        'Logiciels de calcul structure'
      ],
      objectif: 'Maîtriser les méthodes de calcul des structures pour concevoir des ouvrages sûrs et conformes aux normes techniques.'
    },
    {
      icon: PenTool,
      title: 'Conception architecturale & Infographie',
      description: 'Apprentissage des outils de CAO/DAO et des techniques de modélisation 3D pour la conception architecturale moderne.',
      image: '/formation4.jpg',
      duration: '5 jours',
      modules: [
        'AutoCAD et DAO 2D',
        'Modélisation 3D avec SketchUp/Revit',
        'Rendu photoréaliste',
        'Présentation de projets'
      ],
      objectif: 'Acquérir une maîtrise complète des outils de conception assistée par ordinateur pour la réalisation de projets architecturaux.'
    },
    {
      icon: GraduationCap,
      title: 'Formations complémentaires',
      description: 'Modules de formation en gestion de projet, comptabilité, conception routière et systèmes d\'assainissement.',
      image: '/realisation.jpg',
      duration: 'Variable',
      modules: [
        'Comptabilité et gestion financière',
        'Gestion de projet et planning',
        'Conception routière et VRD',
        'Systèmes d\'adduction d\'eau'
      ],
      objectif: 'Développer des compétences transversales essentielles pour une carrière complète dans l\'ingénierie et la construction.'
    }
  ];

  const advantages = [
    {
      icon: Users,
      title: 'Formateurs experts',
      description: 'Ingénieurs expérimentés avec une pratique terrain'
    },
    {
      icon: Award,
      title: 'Certification reconnue',
      description: 'Attestations et certificats de compétences'
    },
    {
      icon: BookOpen,
      title: 'Support pédagogique',
      description: 'Manuels et ressources numériques inclus'
    },
    {
      icon: Clock,
      title: 'Horaires flexibles',
      description: 'Formations adaptées aux professionnels'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GraduationCap className="w-16 h-16 text-secondary mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Nos Formations</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Développez vos compétences techniques avec nos formations professionnelles 
            dispensées par des experts du terrain. Plus de 200 personnes déjà formées !
          </p>
        </div>
      </section>

      {/* Formations Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {formations.map((formation, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={formation.image}
                    alt={formation.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <formation.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  {/* Badge durée corrigé */}
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white/90 text-secondary font-bold px-4 py-1 rounded-full text-base flex items-center shadow-md border border-secondary">
                      <Clock className="w-4 h-4 mr-1" />
                      {formation.duration}
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                    {formation.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {formation.description}
                  </p>
                  
                  {/* Objectif */}
                  <div className="mb-6 p-4 bg-secondary/10 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Objectif :</h4>
                    <p className="text-sm text-gray-700">{formation.objectif}</p>
                  </div>
                  
                  {/* Modules */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3">Modules de formation :</h4>
                    <ul className="space-y-2">
                      {formation.modules.map((module, moduleIndex) => (
                        <li key={moduleIndex} className="flex items-start text-sm text-gray-600">
                          <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {module}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-secondary hover:text-secondary-600 font-semibold transition-colors group"
                  >
                    S'inscrire à cette formation
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Pourquoi choisir nos formations ?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche pédagogique éprouvée pour un apprentissage efficace et durable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <advantage.icon className="w-12 h-12 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-primary mb-3">{advantage.title}</h3>
                <p className="text-gray-600 text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">200+</div>
              <div className="text-lg">Professionnels formés</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">15+</div>
              <div className="text-lg">Modules disponibles</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">95%</div>
              <div className="text-lg">Taux de satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à développer vos compétences ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous pour connaître notre calendrier de formations et bénéficier 
            de tarifs préférentiels pour les inscriptions groupées.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-secondary hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Demander des informations
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:+22505567822554"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary font-semibold rounded-lg transition-all duration-300"
            >
              Appeler maintenant
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Formations;
