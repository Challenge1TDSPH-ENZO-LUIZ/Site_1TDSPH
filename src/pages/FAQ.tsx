import React, { useState } from 'react';
import { faqs } from '../data/mockData';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Perguntas Frequentes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços e procedimentos.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <i
                  className={`fas fa-chevron-down text-blue-600 transition-transform duration-200 ${
                    openItems.includes(faq.id) ? 'rotate-180' : ''
                  }`}
                ></i>
              </button>
              {openItems.includes(faq.id) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Não encontrou sua resposta?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Nossa equipe está pronta para ajudar com qualquer dúvida que você possa ter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:1134567890"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              <i className="fas fa-phone mr-2"></i>
              Ligar para Nós
            </a>
            <a
              href="mailto:contato@hospitalsaolucas.com.br"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              <i className="fas fa-envelope mr-2"></i>
              Enviar Email
            </a>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <i className="fas fa-clock text-4xl text-blue-600 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Horários de Funcionamento
            </h3>
            <p className="text-gray-600">
              Hospital: 24 horas<br />
              Recepção: 7h às 19h<br />
              Consultas: 8h às 18h
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <i className="fas fa-map-marker-alt text-4xl text-green-600 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Localização
            </h3>
            <p className="text-gray-600">
              Rua das Flores, 123<br />
              Centro - São Paulo/SP<br />
              CEP: 01234-567
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <i className="fas fa-credit-card text-4xl text-purple-600 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Formas de Pagamento
            </h3>
            <p className="text-gray-600">
              Convênios médicos<br />
              Cartões de crédito<br />
              PIX e transferência
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
