import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Building, 
  Users, 
  Layers,
  Target,
  ArrowRight,
  Calendar,
  CheckCircle
} from 'lucide-react';

// Correction : typage explicite pour permettre [projet.secteur]
const secteurStyles: Record<string, string> = {
  'Santé publique':     'bg-orange-500 text-white ring-orange-400/50',
  'Aménagement urbain': 'bg-blue-700 text-white ring-blue-400/50',
  'Agriculture':        'bg-green-700 text-white ring-green-400/50',
  'Industrie':          'bg-purple-700 text-white ring-purple-400/50',
  'Infrastructure':     'bg-orange-400 text-white ring-orange-300/50',
  'Formation':          'bg-yellow-300 text-gray-900 ring-yellow-200/50',
};

const secteurs = [
  { name: 'Santé publique', count: 3, color: 'bg-orange-500 text-white' },
  { name: 'Aménagement urbain', count: 5, color: 'bg-blue-700 text-white' },
  { name: 'Agriculture', count: 8, color: 'bg-green-700 text-white' },
  { name: 'Industrie', count: 4, color: 'bg-purple-700 text-white' },
  { name: 'Infrastructure', count: 6, color: 'bg-orange-400 text-white' },
  { name: 'Formation', count: 12, color: 'bg-yellow-300 text-gray-900' }
];

const projets = [
  {
    title: 'Pulvérisation anti-paludisme dans 6 villes',
    client: 'Ministère de la Santé',
    description: 'Campagne de pulvérisation par drone contre les moustiques vecteurs du paludisme dans 6 villes de Côte d\'Ivoire, couvrant plus de 500 hectares de zones urbaines.',
    image: '/pulv.png',
    secteur: 'Santé publique',
    duree: '3 mois',
    superficie: '500+ hectares',
    icon: Target,
    resultats: [
      'Réduction significative des populations de moustiques',
      'Couverture complète des zones à risque',
      'Formation des équipes locales',
      'Protocoles de suivi établis'
    ]
  },
  {
    title: 'Cartographie du Grand marché d\'Ebimpé',
    client: 'Commune d\'Anyama',
    description: 'Relevé topographique complet et cartographie détaillée du Grand marché d\'Ebimpé sur 140 hectares pour le projet de modernisation.',
    image: '/marche.webp',
    secteur: 'Aménagement urbain',
    duree: '2 mois',
    superficie: '140 hectares',
    icon: MapPin,
    resultats: [
      'Plan topographique à l\'échelle 1/500',
      'Modélisation 3D du site',
      'Identification des réseaux existants',
      'Propositions d\'aménagement'
    ]
  },
  {
    title: 'Formation agents du PNLP',
    client: 'Ministère de la Construction',
    description: 'Programme de formation spécialisée pour les agents du Programme National de Lutte contre le Paludisme sur les techniques de pulvérisation par drone.',
    image: '/form.jpg',
    secteur: 'Formation',
    duree: '1 mois',
    superficie: 'N/A',
    icon: Users,
    resultats: [
      '50+ agents formés et certifiés',
      'Modules de formation standardisés',
      'Matériel pédagogique fourni',
      'Suivi post-formation assuré'
    ]
  },
  {
    title: 'Relevés topographiques sites industriels',
    client: 'Secteur privé',
    description: 'Série de relevés topographiques pour plusieurs sites industriels et lotissements, incluant la cartographie des réseaux et l\'implantation d\'ouvrages.',
    image: '/releve.png',
    secteur: 'Industrie',
    duree: '6 mois',
    superficie: '1000+ hectares',
    icon: Building,
    resultats: [
      'Plans d\'implantation précis',
      'Cubatures de terrassement',
      'Profils en long et en travers',
      'Assistance à la construction'
    ]
  },
  {
    title: 'Cartographie aérienne zones agricoles',
    client: 'Coopératives agricoles',
    description: 'Cartographie par drone de grandes exploitations agricoles pour l\'optimisation des cultures et la gestion des ressources.',
    image: '/carto.png',
    secteur: 'Agriculture',
    duree: '4 mois',
    superficie: '2000+ hectares',
    icon: Layers,
    resultats: [
      'Cartes de productivité des sols',
      'Optimisation de l\'irrigation',
      'Suivi temporel des cultures',
      'Rapports d\'analyse détaillés'
    ]
  },
  {
    title: 'Inspection infrastructure routière',
    client: 'Ministère des Infrastructures',
    description: 'Inspection par drone de l\'état des infrastructures routières sur plusieurs axes nationaux avec production de rapports détaillés.',
    image: '/inspect.png',
    secteur: 'Infrastructure',
    duree: '5 mois',
    superficie: '500 km linéaires',
    icon: Target,
    resultats: [
      'État des lieux exhaustif',
      'Cartographie des dégradations',
      'Priorisation des interventions',
      'Base de données géoréférencée'
    ]
  }
];

const Realisations = () => (
  <div className="pt-20">
    {/* Hero Section */}
    <section className="bg-gradient-to-br from-primary to-primary-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">Nos Réalisations</h1>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
          Découvrez nos projets emblématiques et notre expertise terrain à travers 
          des réalisations concrètes qui ont marqué le secteur de l'ingénierie en Côte d'Ivoire.
        </p>
      </div>
    </section>

    {/* Stats Section */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-gray-600">Projets majeurs</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">5000+</div>
            <div className="text-gray-600">Hectares cartographiés</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">200+</div>
            <div className="text-gray-600">Personnes formées</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">6</div>
            <div className="text-gray-600">Secteurs d'activité</div>
          </div>
        </div>
      </div>
    </section>

    {/* Secteurs Tags */}
    <section className="py-8 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {secteurs.map((secteur, index) => (
            <span 
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-bold shadow ring-2 ring-white/40 ${secteur.color} hover:scale-105 transition-transform cursor-pointer`}
            >
              {secteur.name} ({secteur.count})
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* Projets Grid */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {projets.map((projet, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={projet.image}
                  alt={projet.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <projet.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex flex-col items-start gap-1">
                  <span
                    className={`inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm font-bold shadow ring-2 ${secteurStyles[projet.secteur] || 'bg-accent text-white'}`}
                  >
                    {projet.secteur}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1 drop-shadow-lg">{projet.title}</h3>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Building className="w-4 h-4 mr-2" />
                  {projet.client}
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {projet.description}
                </p>
                
                {/* Détails du projet */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-secondary mr-2" />
                    <span className="text-sm text-gray-600">{projet.duree}</span>
                  </div>
                  {projet.superficie !== 'N/A' && (
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 text-secondary mr-2" />
                      <span className="text-sm text-gray-600">{projet.superficie}</span>
                    </div>
                  )}
                </div>
                
                {/* Résultats */}
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-3">Résultats obtenus :</h4>
                  <ul className="space-y-2">
                    {projet.resultats.map((resultat, resultatIndex) => (
                      <li key={resultatIndex} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {resultat}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center text-secondary hover:text-secondary-600 font-semibold transition-colors group"
                >
                  Projet similaire ?
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Témoignages */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-6">Ce que disent nos clients</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfaction client au cœur de nos préoccupations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              client: 'Ministère de la Santé',
              testimonial: 'IDRONES TECHNOLOGIES a démontré un professionnalisme exemplaire dans la mise en œuvre de notre programme anti-paludisme. Résultats remarquables.',
              rating: 5
            },
            {
              client: 'Commune d\'Anyama',
              testimonial: 'La cartographie du marché d\'Ebimpé a été réalisée avec une précision remarquable. Équipe très compétente et respectueuse des délais.',
              rating: 5
            },
            {
              client: 'Secteur privé industriel',
              testimonial: 'Accompagnement technique de qualité pour nos projets industriels. Une expertise reconnue et une disponibilité appréciée.',
              rating: 5
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <CheckCircle key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.testimonial}"</p>
              <div className="font-semibold text-primary">{testimonial.client}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-white shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6 text-primary">Votre projet sera notre prochaine réalisation</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
          Faites confiance à notre expertise pour mener à bien vos projets d'ingénierie, 
          de topographie et de formation professionnelle.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-8 py-4 bg-primary text-white hover:bg-secondary hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl w-auto max-w-xs mx-auto"
          style={{ minWidth: 250, justifyContent: 'center' }}
        >
          Démarrer votre projet
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </section>
  </div>
);

export default Realisations;
