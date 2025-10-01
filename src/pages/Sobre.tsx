import React from 'react';

const Sobre: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre o Hospital São Lucas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça nossa história, missão e valores que nos tornam referência em atendimento médico.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa História</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Fundado em 1985, o Hospital São Lucas nasceu da visão de um grupo de médicos apaixonados 
                pela medicina e comprometidos com o bem-estar da comunidade. O que começou como uma pequena 
                clínica especializada, hoje é um dos maiores e mais respeitados hospitais da região.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ao longo de mais de 35 anos, crescemos constantemente, sempre investindo em tecnologia de 
                ponta, capacitação de profissionais e melhoria contínua dos nossos serviços.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa Missão</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Proporcionar atendimento médico de excelência, com foco na humanização do cuidado, 
                utilizando tecnologia avançada e uma equipe altamente qualificada, sempre priorizando 
                a saúde e o bem-estar dos nossos pacientes.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossos Valores</h2>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <i className="fas fa-heart text-blue-600 mt-1"></i>
                  <span className="text-lg text-gray-600">
                    <strong className="text-gray-900">Humanização:</strong> Tratamos cada paciente com respeito, dignidade e compaixão.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="fas fa-star text-blue-600 mt-1"></i>
                  <span className="text-lg text-gray-600">
                    <strong className="text-gray-900">Excelência:</strong> Buscamos sempre a melhor qualidade em todos os nossos serviços.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="fas fa-users text-blue-600 mt-1"></i>
                  <span className="text-lg text-gray-600">
                    <strong className="text-gray-900">Ética:</strong> Agimos com integridade e transparência em todas as nossas ações.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="fas fa-lightbulb text-blue-600 mt-1"></i>
                  <span className="text-lg text-gray-600">
                    <strong className="text-gray-900">Inovação:</strong> Investimos em tecnologia e conhecimento para melhorar continuamente.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg h-96 flex items-center justify-center">
              <i className="fas fa-hospital text-8xl text-white opacity-80"></i>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Números que nos Orgulham
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-3xl font-bold text-blue-600 mb-2">50+</h4>
                  <p className="text-gray-600">Especialidades</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-3xl font-bold text-blue-600 mb-2">200+</h4>
                  <p className="text-gray-600">Médicos</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-3xl font-bold text-blue-600 mb-2">500+</h4>
                  <p className="text-gray-600">Leitos</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-3xl font-bold text-blue-600 mb-2">35+</h4>
                  <p className="text-gray-600">Anos de História</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Certificações e Acreditações
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-certificate text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ISO 9001</h3>
              <p className="text-gray-600 text-sm">
                Certificação de qualidade internacional
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-3xl text-green-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Acreditação</h3>
              <p className="text-gray-600 text-sm">
                Acreditado pela ONA - Organização Nacional de Acreditação
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-award text-3xl text-purple-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Prêmio Qualidade</h3>
              <p className="text-gray-600 text-sm">
                Reconhecido pela excelência em atendimento
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-heart text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Humanização</h3>
              <p className="text-gray-600 text-sm">
                Certificado em humanização hospitalar
              </p>
            </div>
          </div>
        </div>

        {/* Technology */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Tecnologia de Ponta
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <i className="fas fa-robot text-4xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Cirurgia Robótica</h3>
              <p className="text-blue-100">
                Equipamentos de última geração para cirurgias menos invasivas e mais precisas.
              </p>
            </div>
            <div className="text-center">
              <i className="fas fa-microscope text-4xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Laboratório Avançado</h3>
              <p className="text-blue-100">
                Tecnologia molecular e diagnósticos de alta precisão.
              </p>
            </div>
            <div className="text-center">
              <i className="fas fa-mobile-alt text-4xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Telemedicina</h3>
              <p className="text-blue-100">
                Consultas online e monitoramento remoto de pacientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
