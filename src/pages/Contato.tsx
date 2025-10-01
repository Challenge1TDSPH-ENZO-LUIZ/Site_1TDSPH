import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ContactForm } from '../types';

const Contato: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aqui para ajudar. Entre em contato conosco para mais informações sobre nossos serviços.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Informações de Contato
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <i className="fas fa-map-marker-alt text-2xl text-blue-600"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Endereço</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Rua das Flores, 123<br />
                    Centro - São Paulo/SP<br />
                    CEP: 01234-567
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <i className="fas fa-phone text-2xl text-green-600"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Telefones</h3>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>Central:</strong> (11) 3456-7890<br />
                    <strong>Emergência:</strong> (11) 99999-9999<br />
                    <strong>WhatsApp:</strong> (11) 99999-9999
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <i className="fas fa-envelope text-2xl text-purple-600"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>Geral:</strong> contato@hospitalsaolucas.com.br<br />
                    <strong>Emergência:</strong> emergencia@hospitalsaolucas.com.br<br />
                    <strong>Agendamentos:</strong> agendamento@hospitalsaolucas.com.br
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <i className="fas fa-clock text-2xl text-orange-600"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Horários</h3>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>Hospital:</strong> 24 horas<br />
                    <strong>Recepção:</strong> 7h às 19h<br />
                    <strong>Consultas:</strong> 8h às 18h<br />
                    <strong>Emergência:</strong> 24 horas
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                <i className="fas fa-exclamation-triangle mr-2"></i>
                Emergência 24h
              </h3>
              <p className="mb-4">
                Em caso de emergência médica, ligue imediatamente para nosso número de emergência.
              </p>
              <a
                href="tel:11999999999"
                className="bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
              >
                <i className="fas fa-phone mr-2"></i>
                Ligar Agora
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Envie sua Mensagem
            </h2>
            
            {isSubmitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                <i className="fas fa-check-circle mr-2"></i>
                Mensagem enviada com sucesso! Entraremos em contato em breve.
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Nome é obrigatório' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Seu nome completo"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { 
                    required: 'Email é obrigatório',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email inválido'
                    }
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', { required: 'Mensagem é obrigatória' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Descreva sua dúvida ou solicitação..."
                />
                {errors.message && (
                  <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Enviando...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane mr-2"></i>
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Nossa Localização
          </h2>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <i className="fas fa-map-marked-alt text-6xl text-gray-400 mb-4"></i>
              <p className="text-gray-600 text-lg">
                Mapa interativo será implementado aqui
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Rua das Flores, 123 - Centro - São Paulo/SP
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
