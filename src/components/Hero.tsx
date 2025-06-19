import React from 'react';
import { ArrowRight, Shield, Clock, Award, Play, Wrench, Settings, Zap } from 'lucide-react';
import elevadores from './img/elevadores.jpg';


const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={elevadores}
          alt="Elevador moderno"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
          <div className="space-y-8 z-10 text-white">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/30">
                <Shield className="h-4 w-4 mr-2" />
                10 anos de experiência
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Visiontech
                <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  Soluções Completas
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
                Especialistas em <strong>manutenção</strong>, <strong>instalação</strong> e <strong>modernização</strong> de elevadores. 
                Qualidade e segurança garantidas em cada projeto.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contato')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('projetos')}
                className="border-2 border-white/30 hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
              >
                <Play className="mr-2 h-5 w-5" />
                Ver Projetos
              </button>
            </div>

            {/* Services Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="bg-blue-500/20 rounded-2xl p-4 mb-4 mx-auto w-fit">
                  <Settings className="h-8 w-8 text-blue-300 mx-auto" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">Manutenção</h3>
                <p className="text-sm text-blue-200">Preventiva e Corretiva</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="bg-green-500/20 rounded-2xl p-4 mb-4 mx-auto w-fit">
                  <Wrench className="h-8 w-8 text-green-300 mx-auto" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">Instalação</h3>
                <p className="text-sm text-blue-200">Novos Elevadores</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="bg-purple-500/20 rounded-2xl p-4 mb-4 mx-auto w-fit">
                  <Zap className="h-8 w-8 text-purple-300 mx-auto" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">Modernização</h3>
                <p className="text-sm text-blue-200">Upgrade Completo</p>
              </div>
            </div>
          </div>



        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;