import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              {/* Utilise ton logo SVG pour une meilleure qualité si possible */}
              <img 
                src="/idrones_technologies_logo.jpg" //
                alt="IDRONES TECHNOLOGIES" 
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <div className="text-xl font-bold">IDRONES</div>
                {/* Mets le mot TECHNOLOGIES en orange */}
                <div className="text-sm font-semibold" style={{color: "#fe530a"}}>TECHNOLOGIES</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              L'expertise, topographie, drone et BIM au service de vos projets d'ingénierie.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-secondary transition-colors text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-secondary transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/formations" className="text-gray-300 hover:text-secondary transition-colors text-sm">
                  Formations
                </Link>
              </li>
              <li>
                <Link to="/realisations" className="text-gray-300 hover:text-secondary transition-colors text-sm">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-secondary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Abidjan, Riviera Faya<br />
                  Derrière Bon Prix
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a 
                  href="mailto:contact@idronestechnologies.com"
                  className="text-gray-300 hover:text-secondary transition-colors text-sm"
                >
                  contact@idronestechnologies.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <div>+225 05 56 78 22 54</div>
                  <div>+225 07 49 28 74 78</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/idrones-technologies/posts/?feedView=all" 
                className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                target="_blank" rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://web.facebook.com/ingenieriedronesservices/?locale=az_AZ&_rdc=1&_rdr#" 
                className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                target="_blank" rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </a>
              {/* Instagram supprimé */}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-12 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2025 IDRONES TECHNOLOGIES SARL. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
