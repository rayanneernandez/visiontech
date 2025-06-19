import React from 'react';
import { Users, Wrench, MapPin, Phone, Target, Eye, Heart, CheckCircle, Settings, Zap } from 'lucide-react';
import elevadorfora from './img/elevadorfora.png';
import elevadoor from './img/elevadoor.png';


const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Heart className="h-4 w-4 mr-2" />
            Conheça Nossa História
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre a Visiontech
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Com 10 anos de experiência, somos especialistas em <strong>manutenção</strong>, 
            <strong> instalação</strong> e <strong>modernização</strong> de elevadores, sempre priorizando qualidade, segurança e inovação.
          </p>
        </div>

        {/* Services Focus */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
            <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Settings className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Manutenção</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Oferecemos serviços completos de manutenção preventiva e corretiva, 
              garantindo o funcionamento seguro e eficiente dos seus elevadores.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Manutenção preventiva</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Manutenção corretiva</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Suporte 24/7</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
            <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Wrench className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Instalação</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Instalação completa de elevadores novos com as mais modernas 
              tecnologias e seguindo todas as normas de segurança vigentes.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Elevadores residenciais</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Elevadores comerciais</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Projetos personalizados</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
            <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Zap className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Modernização</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Modernização completa de elevadores antigos, incluindo sistemas 
              de controle, cabines, portas e tecnologias de segurança.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Upgrade de sistemas</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Renovação de cabines</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Eficiência energética</li>
            </ul>
          </div>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Quem Somos
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Com 10 anos de experiência no mercado, a Visiontech é referência em soluções completas para transporte vertical. Nossa missão é elevar a experiência de nossos clientes através da tecnologia, segurança e excelência no atendimento.

              Combinamos expertise técnica com inovação constante, oferecendo desde instalações complexas até manutenção preventiva, sempre com foco na satisfação total do cliente e na superação de expectativas.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">
                  <strong>Equipe Certificada:</strong> Técnicos especializados e 
                  certificados pelas principais marcas de elevadores do mercado.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">
                  <strong>Atendimento 24h:</strong> Suporte técnico disponível 
                  24 horas por dia para emergências e manutenções urgentes.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">
                  <strong>Garantia Total:</strong> Todos os nossos serviços 
                  possuem garantia e acompanhamento pós-instalação.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={elevadorfora}
                alt="Técnico trabalhando"
                className="w-full h-48 object-cover rounded-2xl shadow-lg"
              />
              <img
                src={elevadoor}
                alt="Elevador moderno"
                className="w-full h-48 object-cover rounded-2xl shadow-lg mt-8"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm">Anos de Experiência</div>
              </div>
            </div>
          </div>
        </div>

        

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-8 rounded-3xl shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Precisa de Manutenção ou Instalação?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar com 
              soluções completas para seus elevadores.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contato');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;