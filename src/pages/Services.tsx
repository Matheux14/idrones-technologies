import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin, Camera, SprayCan as Spray, Eye, Building2, BarChart3, ArrowRight, Wrench
} from 'lucide-react';

const services = [
  {
    icon: MapPin,
    title: 'Topographie classique & par drone',
    description: 'Relevés topographiques précis utilisant les technologies traditionnelles et les drones pour une cartographie complète et détaillée de vos terrains.',
    image: '/topo.jpg',
    features: ['Relevés GPS/GNSS', 'Nivellement', 'Implantation', 'Plans topographiques']
  },
  {
    icon: Camera,
    title: 'Cartographie & télédétection',
    description: 'Services de cartographie avancée et télédétection par drone pour l\'analyse territoriale et le suivi environnemental.',
    image: '/pic-1.jpg',
    features: ['Orthophotos', 'Modèles 3D', 'Analyse multispectrale', 'SIG']
  },
  {
    icon: Spray,
    title: 'Pulvérisation par drone',
    description: 'Solutions de pulvérisation agricole et sanitaire par drone pour une application précise et efficace des traitements.',
    image: '/pulverisation.jpg',
    features: ['Traitement agricole', 'Désinfection', 'Anti-moustique', 'Précision GPS']
  },
  {
    icon: Eye,
    title: 'Suivi de chantier par drone',
    description: 'Surveillance et documentation continue de vos chantiers avec des rapports détaillés et des analyses d\'avancement.',
    image: '/terrain.jpg',
    features: ['Suivi temporel', 'Rapports d\'avancement', 'Sécurité chantier', 'Documentation']
  },
  {
    icon: Eye,
    title: 'Inspection aérienne',
    description: 'Inspections techniques par drone pour les infrastructures, bâtiments et installations industrielles.',
    image: '/inspect_aer.png',
    features: ['Inspection toiture', 'Lignes électriques', 'Ponts et ouvrages', 'Éoliennes']
  },
  {
    icon: Camera,
    title: 'Couverture événementielle',
    description: 'Captation aérienne professionnelle pour vos événements avec des prises de vue spectaculaires.',
    image: '/event.jpg',
    features: ['Vidéo 4K', 'Photos aériennes', 'Live streaming', 'Post-production']
  },
  {
    icon: Building2,
    title: 'Bâtiment & ingénierie',
    description: 'Services complets d\'ingénierie du bâtiment et de conception architecturale avec modélisation 3D.',
    image: '/batiment_ing.jpg',
    features: ['Conception BIM', 'Calcul structures', 'Plans d\'exécution', 'Suivi de projet']
  },
  {
    icon: BarChart3,
    title: 'Cubatures de stocks par drone',
    description: 'Calcul précis des volumes de stocks et matériaux par photogrammétrie drone avec rapports détaillés.',
    image: '/cuba.jpg',
    features: ['Mesure volumétrique', 'Calcul automatisé', 'Rapports périodiques', 'Suivi d\'évolution']
  }
];

const Services = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Nos Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Des solutions techniques complètes et innovantes pour tous vos projets 
            d'ingénierie, de topographie et de formation professionnelle.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3">Points forts :</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-secondary rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-secondary hover:text-secondary-600 font-semibold transition-colors group"
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Notre méthode de travail</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche structurée et professionnelle pour garantir la réussite de vos projets
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Analyse', description: 'Étude détaillée de vos besoins et contraintes' },
              { step: '02', title: 'Proposition', description: 'Solution technique adaptée et devis détaillé' },
              { step: '03', title: 'Réalisation', description: 'Exécution professionnelle avec suivi constant' },
              { step: '04', title: 'Livraison', description: 'Remise des livrables et accompagnement' }
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:scale-110 transition-transform">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{phase.title}</h3>
                <p className="text-gray-600 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Wrench className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6 text-primary">Besoin d'un service spécifique ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
            Nos experts sont à votre disposition pour étudier vos besoins particuliers 
            et vous proposer des solutions sur mesure.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-white hover:bg-secondary hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl w-auto max-w-xs mx-auto"
            style={{ minWidth: 250, justifyContent: 'center' }}
          >
            Demander un devis personnalisé
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
