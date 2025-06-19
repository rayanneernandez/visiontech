import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoColor from './img/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg text-gray-900'
          : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo com filtro para ficar branca */}
          <div className="flex items-center space-x-3">
            <img
              src={logoColor}
              alt="Visiontech Elevadores"
              className={`h-16 w-auto transition-all duration-300 ${
                isScrolled ? 'filter-none' : 'filter brightness-0 invert'
              }`}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className={`font-medium transition-colors duration-300 hover:text-blue-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className={`font-medium transition-colors duration-300 hover:text-blue-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('projetos')}
              className={`font-medium transition-colors duration-300 hover:text-blue-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('resultados')}
              className={`font-medium transition-colors duration-300 hover:text-blue-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Resultados
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden p-2 rounded-md transition-colors duration-300 ${
              isScrolled ? 'hover:bg-gray-100 text-gray-700' : 'hover:bg-blue-100 text-white'
            }`}
          >
            {isMenuOpen ? (
              <X className={isScrolled ? 'h-6 w-6 text-gray-700' : 'h-6 w-6 text-white'} />
            ) : (
              <Menu className={isScrolled ? 'h-6 w-6 text-gray-700' : 'h-6 w-6 text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2 bg-white rounded-lg shadow-lg p-4 mt-2">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-left py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-200 font-medium"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-left py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-200 font-medium"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('projetos')}
                className="text-left py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-200 font-medium"
              >
                Projetos
              </button>
              <button
                onClick={() => scrollToSection('resultados')}
                className="text-left py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-200 font-medium"
              >
                Resultados
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-left py-3 px-4 bg-blue-600 text-white hover:bg-blue-700 rounded-md transition-colors duration-200 font-medium"
              >
                Contato
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
