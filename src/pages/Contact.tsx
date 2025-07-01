import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  Linkedin,
  Facebook,
  MessageCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(false);
    setError(null);
    try {
      const response = await fetch('http://localhost:4000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du message");
      }
      setIsSubmitted(true);
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        sujet: '',
        message: ''
      });
      setTimeout(() => setIsSubmitted(false), 3500);
    } catch (err) {
      setError("Erreur lors de l'envoi du message. Merci de réessayer.");
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Abidjan, Riviera Faya\nDerrière Bon Prix (BONPRIX FAYA)',
      link: 'https://www.google.com/maps/place/BONPRIX+FAYA/@5.3631084,-3.9392413,17z/data=!3m1!4b1!4m6!3m5!1s0xfc1ed30cbb555dd:0x630b9e4818be25e5!8m2!3d5.3631084!4d-3.9366664!16s%2Fg%2F11fq8jrx8r?entry=ttu'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@idronestechnologies.com',
      link: 'mailto:contact@idronestechnologies.com'
    },
    {
      icon: Phone,
      title: 'Téléphones',
      content: '+225 05 56 78 22 54\n+225 07 49 28 74 78\n+225 01 51 41 81 17',
      link: 'tel:+22505567822554'
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Lun - Ven: 8h00 - 18h00\nSam: 8h00 - 13h00',
      link: null
    }
  ];

  const sujets = [
    'Demande de devis',
    'Information formations',
    'Partenariat',
    'Service topographie',
    'Service drone',
    'Inspection aérienne',
    'Autre'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Une question, un projet, une formation ? Notre équipe d'experts est à votre disposition 
            pour vous accompagner dans tous vos besoins en ingénierie et formation professionnelle.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-primary mb-4">Envoyez-nous un message</h2>
              
              {isSubmitted && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center animate-fade-in">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-green-800 text-sm">Votre message a été envoyé avec succès !</span>
                </div>
              )}
              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center animate-fade-in">
                  <span className="text-red-800 text-sm">{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-semibold text-gray-700 mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      required
                      value={formData.nom}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-sm"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-sm"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="telephone" className="block text-sm font-semibold text-gray-700 mb-1">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-sm"
                      placeholder="+225 XX XX XX XX XX"
                    />
                  </div>
                  <div>
                    <label htmlFor="sujet" className="block text-sm font-semibold text-gray-700 mb-1">
                      Sujet *
                    </label>
                    <select
                      id="sujet"
                      name="sujet"
                      required
                      value={formData.sujet}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-sm"
                    >
                      <option value="">Choisir un sujet</option>
                      {sujets.map((sujet, index) => (
                        <option key={index} value={sujet}>{sujet}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none text-sm"
                    placeholder="Décrivez votre projet ou votre demande en détail..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center text-sm"
                  disabled={isSubmitted}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Informations de contact */}
            <div className="space-y-6 flex flex-col justify-center">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Nos coordonnées</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index}
                      className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                          <info.icon className="w-5 h-5 text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary mb-1">{info.title}</h3>
                          {info.link ? (
                            <a 
                              href={info.link}
                              className="text-gray-600 hover:text-secondary transition-colors whitespace-pre-line text-sm"
                              target="_blank" rel="noopener noreferrer"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-gray-600 whitespace-pre-line text-sm">{info.content}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <h3 className="font-semibold text-primary mb-2 text-sm">Suivez-nous</h3>
                <div className="flex space-x-3">
                  <a 
                    href="https://www.linkedin.com/company/idrones-technologies/posts/?feedView=all" 
                    className="w-10 h-10 bg-[#0077B5] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://web.facebook.com/ingenieriedronesservices/?locale=az_AZ&_rdc=1&_rdr#" 
                    className="w-10 h-10 bg-[#1877F2] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Image d’équipe */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/acceuil1.png"
                  alt="Équipe IDRONES TECHNOLOGIES"
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <h4 className="text-lg font-bold mb-1">Notre équipe à votre service</h4>
                  <p className="text-xs text-gray-200">Expertise, professionnalisme et disponibilité</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary mb-2">Où nous trouver</h2>
            <p className="text-base text-gray-600">
              Situés au cœur d'Abidjan, nous sommes facilement accessibles
            </p>
          </div>
          
          <div className="w-full aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg">
            <iframe
                title="Plan d'accès IDRONES TECHNOLOGIES"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.2878032107034!2d-3.9392413!3d5.3631084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ed30cbb555dd%3A0x630b9e4818be25e5!2sBONPRIX%20FAYA!5e0!3m2!1sfr!2sci!4v1719850118736!5m2!1sfr!2sci"
                width="100%"
                height="100%"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
                style={{ minHeight: 350, minWidth: '100%' }}
              ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-secondary to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Besoin d'une réponse rapide ?</h2>
          <p className="text-base mb-4 max-w-2xl mx-auto">
            N'hésitez pas à nous appeler directement pour une réponse immédiate à vos questions.
          </p>
          <a
            href="tel:+22505567822554"
            className="inline-flex items-center px-8 py-3 bg-white text-secondary hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <Phone className="w-5 h-5 mr-2" />
            Appeler maintenant
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
