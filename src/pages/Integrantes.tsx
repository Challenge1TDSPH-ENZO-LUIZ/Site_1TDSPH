import React from 'react';
import { teamMembers } from '../data/mockData';

const Integrantes: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossa Equipe
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça os profissionais especializados que fazem do Hospital São Lucas uma referência em atendimento médico.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 h-48 flex items-center justify-center">
                <i className="fas fa-user-md text-6xl text-white opacity-80"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  {member.role}
                </p>
                {member.specialty && (
                  <p className="text-sm text-gray-500 mb-4">
                    Especialidade: {member.specialty}
                  </p>
                )}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Team */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Diretoria Executiva
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-user-tie text-4xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Dr. Roberto Silva
              </h3>
              <p className="text-blue-600 font-medium mb-2">Diretor Geral</p>
              <p className="text-gray-600 text-sm">
                Médico com mais de 25 anos de experiência em gestão hospitalar.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-600 to-blue-600 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-user-md text-4xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Dra. Ana Costa
              </h3>
              <p className="text-green-600 font-medium mb-2">Diretora Médica</p>
              <p className="text-gray-600 text-sm">
                Especialista em qualidade e segurança do paciente.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text-4xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Carlos Oliveira
              </h3>
              <p className="text-purple-600 font-medium mb-2">Diretor Administrativo</p>
              <p className="text-gray-600 text-sm">
                Administrador com expertise em gestão hospitalar.
              </p>
            </div>
          </div>
        </div>

        {/* Departments */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Departamentos Especializados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <i className="fas fa-heart text-4xl text-red-600 mb-4"></i>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cardiologia</h3>
              <p className="text-gray-600 text-sm">
                Especialistas em doenças do coração e sistema cardiovascular.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <i className="fas fa-baby text-4xl text-pink-600 mb-4"></i>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pediatria</h3>
              <p className="text-gray-600 text-sm">
                Cuidados especializados para crianças e adolescentes.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <i className="fas fa-bone text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ortopedia</h3>
              <p className="text-gray-600 text-sm">
                Tratamento de lesões e doenças do sistema musculoesquelético.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <i className="fas fa-brain text-4xl text-purple-600 mb-4"></i>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Neurologia</h3>
              <p className="text-gray-600 text-sm">
                Especialistas em doenças do sistema nervoso.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <i className="fas fa-eye text-4xl text-green-600 mb-4"></i>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Oftalmologia</h3>
              <p className="text-gray-600 text-sm">
                Cuidados especializados para a saúde dos olhos.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <i className="fas fa-lungs text-4xl text-orange-600 mb-4"></i>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pneumologia</h3>
              <p className="text-gray-600 text-sm">
                Tratamento de doenças respiratórias e pulmonares.
              </p>
            </div>
          </div>
        </div>

        {/* Join Our Team */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Faça Parte da Nossa Equipe
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            Estamos sempre em busca de profissionais qualificados para se juntar à nossa equipe.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            <i className="fas fa-briefcase mr-2"></i>
            Ver Vagas Disponíveis
          </button>
        </div>
      </div>
    </div>
  );
};

export default Integrantes;
