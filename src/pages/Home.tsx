import React from 'react';
import { useNavigate } from 'react-router-dom';
import { services } from '../data/mockData';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Cuidando da sua saúde com excelência
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                O Hospital São Lucas oferece atendimento médico de qualidade com tecnologia de ponta e profissionais especializados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/login')}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Acessar Sistema
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
                >
                  Nossos Serviços
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white bg-opacity-15 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20">
                <i className="fas fa-user-md text-4xl mb-4"></i>
                <h3 className="text-xl font-semibold mb-2">Médicos Especialistas</h3>
                <p className="text-blue-100">Profissionais altamente qualificados</p>
              </div>
              <div className="bg-white bg-opacity-15 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20">
                <i className="fas fa-heartbeat text-4xl mb-4"></i>
                <h3 className="text-xl font-semibold mb-2">Equipamentos Modernos</h3>
                <p className="text-blue-100">Tecnologia de última geração</p>
              </div>
              <div className="bg-white bg-opacity-15 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20">
                <i className="fas fa-clock text-4xl mb-4"></i>
                <h3 className="text-xl font-semibold mb-2">Atendimento 24h</h3>
                <p className="text-blue-100">Disponível quando você precisar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços médicos para atender todas as suas necessidades de saúde.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group hover:-translate-y-2"
              >
                <i className={`${service.icon} text-5xl text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300`}></i>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">Sobre o Hospital São Lucas</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Fundado em 1985, o Hospital São Lucas é referência em atendimento médico na região. 
                Com mais de 35 anos de experiência, oferecemos serviços de alta qualidade com foco no bem-estar dos nossos pacientes.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-3xl font-bold text-blue-600 mb-2">50+</h3>
                  <p className="text-gray-600">Especialidades</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-3xl font-bold text-blue-600 mb-2">200+</h3>
                  <p className="text-gray-600">Médicos</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-3xl font-bold text-blue-600 mb-2">500+</h3>
                  <p className="text-gray-600">Leitos</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-3xl font-bold text-blue-600 mb-2">24h</h3>
                  <p className="text-gray-600">Atendimento</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg h-96 flex items-center justify-center">
              <i className="fas fa-hospital text-8xl text-white opacity-80"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
            <p className="text-xl text-gray-600">
              Estamos aqui para ajudar. Entre em contato conosco para mais informações.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <i className="fas fa-map-marker-alt text-2xl text-blue-600 mt-1"></i>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Endereço</h4>
                  <p className="text-gray-600">
                    Rua das Flores, 123<br />
                    Centro - São Paulo/SP
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <i className="fas fa-phone text-2xl text-blue-600 mt-1"></i>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Telefone</h4>
                  <p className="text-gray-600">
                    (11) 3456-7890<br />
                    (11) 99999-9999
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <i className="fas fa-envelope text-2xl text-blue-600 mt-1"></i>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600">
                    contato@hospitalsaolucas.com.br<br />
                    emergencia@hospitalsaolucas.com.br
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Envie sua mensagem</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Seu email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Sua mensagem"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;