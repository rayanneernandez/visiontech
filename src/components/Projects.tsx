import React from 'react';
import producao from './img/produção.mp4';

const Projects = () => {
  return (
    <section id="producao" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Vídeo institucional */}
          <div className="rounded-2xl overflow-hidden shadow-xl max-w-md w-full mx-auto">
            <video
              src={producao}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-xl"
            >
              Seu navegador não suporta vídeos.
            </video>
          </div>

          {/* Texto institucional */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Qualidade e Inovação na Produção
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Atuamos com excelência produção, modernização e manutenção de elevadores, 
              sempre utilizando tecnologia de ponta, equipe especializada e materiais de alta durabilidade.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nosso compromisso é garantir segurança, eficiência e confiança em cada projeto entregue, 
              oferecendo soluções sob medida para residências, comércios e grandes empreendimentos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
