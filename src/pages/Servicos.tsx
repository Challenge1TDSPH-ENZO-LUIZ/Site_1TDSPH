import React from 'react';
import { services } from '../data/mockData';

const Servicos: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos Serviços
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços médicos para atender todas as suas necessidades de saúde com excelência e tecnologia de ponta.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2"
            >
              <div className="mb-6">
                <i className={`${service.icon} text-6xl text-blue-600 group-hover:scale-110 transition-transform duration-300`}></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                Saiba Mais
              </button>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Por que escolher o Hospital São Lucas?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-award text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Qualidade</h3>
              <p className="text-gray-600 text-sm">
                Certificações e acreditações que garantem a excelência no atendimento.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-clock text-2xl text-green-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Disponibilidade</h3>
              <p className="text-gray-600 text-sm">
                Atendimento 24 horas por dia, 7 dias por semana.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-user-md text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Especialistas</h3>
              <p className="text-gray-600 text-sm">
                Equipe médica altamente qualificada e especializada.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-heart text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Humanização</h3>
              <p className="text-gray-600 text-sm">
                Atendimento humanizado com foco no bem-estar do paciente.
              </p>
            </div>
          </div>
        </div>

        {/* Emergency Section */}
        <div className="mt-16 bg-red-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Emergência 24h</h2>
          <p className="text-xl mb-6">
            Em caso de emergência, estamos sempre disponíveis para atendê-lo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:11999999999"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              <i className="fas fa-phone mr-2"></i>
              Ligar Agora
            </a>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200">
              <i className="fas fa-map-marker-alt mr-2"></i>
              Localizar Hospital
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicos;
