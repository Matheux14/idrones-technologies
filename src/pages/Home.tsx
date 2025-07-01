import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, Award, Building, Target, Heart, Shield, Star, ArrowRight,
  Wrench, Map, Home as HomeIcon, Mountain, Globe, Wheat, Image as ImageIcon,
  Video, GraduationCap, Phone, FileText
} from 'lucide-react';

const Home = () => {
  const stats = [
    { icon: Users, number: '200+', label: 'personnes formées' },
    { icon: Award, number: '15+', label: 'grands projets menés' },
    { icon: Building, number: '10+', label: 'secteurs d\'intervention' },
  ];

  const values = [
    { icon: Target, title: 'Dévouement', description: 'Engagement total envers nos clients' },
    { icon: Heart, title: 'Intégrité', description: 'Transparence et honnêteté' },
    { icon: Shield, title: 'Excellence', description: 'Qualité irréprochable' },
    { icon: Star, title: 'Unité', description: 'Force de l\'équipe' },
  ];

  const domains = [
    { icon: Wrench, title: 'Génie civil (BTP)' },
    { icon: Map, title: 'Topographie & Cartographie' },
    { icon: HomeIcon, title: 'Foncier, Immobilier et Cadastre' },
    { icon: Mountain, title: 'Mines, carrières & industrie' },
    { icon: Globe, title: 'SIG & Géomatique' },
    { icon: Wheat, title: 'Agriculture' },
    { icon: ImageIcon, title: 'Infographie' },
    { icon: Video, title: 'Audiovisuel' },
    { icon: GraduationCap, title: 'Formation' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-800 to-primary-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                L'expertise <span className="text-secondary">Topographique</span>, 
                <span className="text-accent"> Drone</span> et 
                <span className="text-secondary"> BIM</span> au service de vos projets.
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                IDRONES TECHNOLOGIES SARL (Ingénierie Drones Services) est une entreprise multiservices 
                spécialisée en ingénierie topographique, en technologie des drones, et en formation 
                professionnelle continue, basée à Abidjan.
              </p>
              <p className="text-lg text-gray-300">
                Nous intervenons sur tous types de projets : topographie, cartographie, BTP, 
                aménagement, foncier, VRD, formation et assistance technique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg transition-all duration-300 hover:bg-secondary hover:text-white hover:scale-105 hover:shadow-xl border border-secondary"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contactez-nous
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold rounded-lg transition-all duration-300"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Demander un devis
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img
                src="/btp_idt_logo_montage_centre_nobg.png"
                alt="Équipe IDRONES TECHNOLOGIES sur le terrain"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in text-center group"
              >
                <stat.icon className="w-12 h-12 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">Notre Mission</h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Comprendre les besoins de nos clients et fournir des solutions techniques 
                  adaptées pour développer leur performance.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Nos Valeurs</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                    >
                      <value.icon className="w-8 h-8 text-secondary flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-semibold text-primary mb-1">{value.title}</h4>
                        <p className="text-sm text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/miss.jpg"
                alt="Formation professionnelle"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Domains of Intervention */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Nos domaines d'intervention</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une expertise complète couvrant tous les aspects de l'ingénierie moderne
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {domains.map((domain, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer"
              >
                <domain.icon className="w-10 h-10 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-primary group-hover:text-secondary transition-colors">
                  {domain.title}
                </h3>
              </div>
            ))}
          </div>
          <div className="text-center">
            <img
              src="/drone3.jpg"
              alt="Drone et topographie"
              className="rounded-2xl shadow-2xl mx-auto max-w-4xl w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Découvrez notre expertise</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Une présentation complète de nos services et réalisations
          </p>
          <div className="bg-gray-800 rounded-2xl p-8 max-w-4xl mx-auto">
            <video controls className="rounded-xl w-full h-96 object-cover">
              <source src="/🔔𝐈𝐃𝐑𝐎𝐍𝐄𝐒-𝐓𝐄𝐂𝐇𝐍𝐎𝐋𝐎𝐆𝐈𝐄𝐒-est-un-cabinet-de-géomètre-topographe-et-de-formation-professionnelle-avec-pour-domaines-d-39-expertises-idrones-technologies.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">Prêt à démarrer votre projet ?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-700">
            Contactez nos experts pour une consultation gratuite et un devis personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-white hover:bg-secondary hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contactez-nous
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg transition-all duration-300"
            >
              Découvrir nos services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
