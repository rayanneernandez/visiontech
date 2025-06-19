import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import logo from './img/logo.png'; 

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="Visiontech Elevadores"
                className="h-14 w-auto"
                style={{ filter: 'invert(100%) brightness(200%) contrast(150%)' }}
              />
              <div>
                <h3 className="text-2xl font-bold">Visiontech</h3>
                <p className="text-sm text-blue-200">Elevadores</p>
              </div>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Especialistas em elevadores com mais de 15 anos de experiência, 
              oferecendo soluções completas para residências e empresas.
            </p>
            
            {/* Redes Sociais */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-blue-800 p-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/visiontech_elevadores/"
                className="bg-blue-800 p-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-blue-800 p-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-blue-200 hover:text-white transition-colors duration-200"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className="text-blue-200 hover:text-white transition-colors duration-200"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projetos')}
                  className="text-blue-200 hover:text-white transition-colors duration-200"
                >
                  Projetos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('resultados')}
                  className="text-blue-200 hover:text-white transition-colors duration-200"
                >
                  Resultados
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contato')}
                  className="text-blue-200 hover:text-white transition-colors duration-200"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nossos Serviços</h4>
            <ul className="space-y-2 text-blue-200">
              <li>Instalação de Elevadores</li>
              <li>Modernização</li>
              <li>Manutenção Preventiva</li>
              <li>Suporte 24h</li>
              <li>Consultoria Técnica</li>
              <li>Projetos Personalizados</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-300" />
                <div>
                  <p className="text-blue-200">(21) 99839-1488</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-300" />
                <div>
                  <p className="text-blue-200">visiontechelevadores@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-300 mt-0.5" />
                <div>
                  <p className="text-blue-200">
                    Rio de Janeiro, RJ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-blue-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm">
            © 2025 Visiontech. Todos os direitos reservados.
          </p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 py-2 px-6 rounded-lg font-semibold text-white transition-colors duration-200"
          >
            Voltar ao Topo
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
