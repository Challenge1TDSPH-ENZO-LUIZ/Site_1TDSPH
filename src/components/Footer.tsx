import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <i className="fas fa-hospital text-2xl text-blue-400"></i>
              <span className="text-xl font-bold">Hospital São Lucas</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Cuidando da sua saúde com excelência desde 1985.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/servicos"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Consultas
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Exames
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Emergência
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Internação
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <i className="fas fa-phone text-blue-400"></i>
                <span className="text-gray-300">(11) 3456-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-envelope text-blue-400"></i>
                <span className="text-gray-300">contato@hospitalsaolucas.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt text-blue-400"></i>
                <span className="text-gray-300">Rua das Flores, 123</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Hospital São Lucas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
