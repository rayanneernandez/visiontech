import React, { useState } from 'react';
import {
  ExternalLink,
  MapPin,
  Calendar,
  CheckCircle,
  Wrench,
  Zap,
  X,
  Eye
} from 'lucide-react';
import elevadorfora from './img/elevadorfora.png';
import elevadorcondominio from './img/elevadorcondominio.png';
import elevadoor from './img/elevadoor.png';
import elevadorcasa from './img/elevadorcasa.png';

const Results = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageModal, setImageModal] = useState(null);

  const completedProjects = [
    {
      id: 1,
      title: 'Instalação Residencial',
      location: 'Rio de Janeiro, RJ',
      year: '2025',
      type: 'Instalação',
      floors: '2 andares',
      elevators: '5 pessoas',
      image: elevadorfora,
      description: 'Projeto completo com elevador de alta velocidade e tecnologia inteligente para uma residência.',
      technologies: ['Sistema Inteligente', 'Velocidade 8m/s', 'Acabamento premium']
    },
    {
      id: 2,
      title: 'Elevador Empresarial',
      location: 'Praça Afonso Pena - Tijuca, RJ',
      year: '2024',
      type: 'Modernização',
      floors: '14 andares',
      elevators: '12 pessoas',
      image: elevadoor,
      description: 'Modernização completa de elevadores com foco em eficiência energética e conforto.',
      technologies: ['Portas Modernizadas', 'Cabines Renovadas', 'Redução de ruídos e consumo']
    },
    {
      id: 3,
      title: 'Shopping Boulevard',
      location: 'Itaboraí, RJ',
      year: '2025',
      type: 'Instalação & Manutenção',
      floors: '5 andares',
      elevators: '4 pessoas',
      image: elevadorcasa,
      description: 'Sistema integrado de elevadores para centro comercial com alta circulação.',
      technologies: ['Alta Capacidade', 'Sistema Integrado', 'Monitoramento 24/7']
    },
  ];

  const getTypeColor = (type) => {
    if (type.includes('Instalação')) return 'text-green-700 bg-green-100';
    if (type.includes('Modernização')) return 'text-purple-700 bg-purple-100';
    if (type.includes('Manutenção')) return 'text-blue-700 bg-blue-100';
    return 'text-gray-700 bg-gray-100';
  };

  const getTypeIcon = (type) => {
    if (type.includes('Instalação')) return <CheckCircle className="h-4 w-4" />;
    if (type.includes('Modernização')) return <Zap className="h-4 w-4" />;
    if (type.includes('Manutenção')) return <Wrench className="h-4 w-4" />;
    return <CheckCircle className="h-4 w-4" />;
  };

  return (
    <section id="resultados" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projetos Finalizados</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Confira alguns dos nossos projetos concluídos com sucesso em
            <strong> manutenção</strong>, <strong>instalação</strong> e <strong>modernização</strong> de elevadores.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {completedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${getTypeColor(project.type)}`}>
                    {getTypeIcon(project.type)}
                    <span className="ml-1">{project.type}</span>
                  </span>
                </div>
                <button
                  onClick={() => setImageModal(project.image)}
                  className="absolute bottom-4 right-4 bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100"
                >
                  <Eye className="h-5 w-5 text-gray-700" />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {project.year}
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                >
                  Ver Detalhes
                  <ExternalLink className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detalhes Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center" onClick={() => setSelectedProject(null)}>
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-6 relative" onClick={(e) => e.stopPropagation()}>
              <button className="absolute top-4 right-4 text-gray-600 hover:text-red-500" onClick={() => setSelectedProject(null)}>
                <X className="h-6 w-6" />
              </button>
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-lg mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedProject.title}</h3>
              <p className="text-gray-600 mb-4">{selectedProject.description}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                <li><strong>Local:</strong> {selectedProject.location}</li>
                <li><strong>Ano:</strong> {selectedProject.year}</li>
                <li><strong>Tipo:</strong> {selectedProject.type}</li>
                <li><strong>Andares:</strong> {selectedProject.floors}</li>
                <li><strong>Capacidade:</strong> {selectedProject.elevators}</li>
              </ul>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Tecnologias / Especificações:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {selectedProject.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
              <a
                href="https://wa.me/5521989191499"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        )}

        {/* Imagem Modal */}
        {imageModal && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center" onClick={() => setImageModal(null)}>
            <img src={imageModal} alt="Visualização completa" className="max-h-full max-w-full rounded-lg shadow-2xl" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Results;
