import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Cabeçalho */}
      <header className="flex items-center justify-between bg-gray-800 text-white p-6 rounded-lg mb-12">
        <img src="/img/images.jpg" alt="Imagem da farmácia" className="w-40 rounded-lg" />
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold">Bem-vindo à Farmácia de Anabolizantes Online!</h1>
          <p className="text-lg mt-2 max-w-xl mx-auto">Encontre os melhores produtos para sua saúde e bem-estar.</p>
        </div>
      </header>

      {/* Seção de Produtos em Destaque */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-8">Produtos em Destaque</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Produto 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
            <img src="/img/trembo.jpg" alt="Produto 1" className="w-full h-64 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Enantato de Testosterona 300mg 10ml – [ENANTESTO]</h3>
            <p className="text-gray-600 mt-2">Ganho de Força, Ganho de Massa Magra, Injetáveis, Perda de Gordura</p>
            <Link to="/products" className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              Ver Produtos
            </Link>
          </div>

          {/* Produto 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
            <img src="/img/dura.jpg" alt="Produto 2" className="w-full h-64 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Durateston (Sustanon) 250mg 10ml</h3>
            <p className="text-gray-600 mt-2">Ganho de Força, Injetáveis</p>
            <Link to="/products" className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              Ver Produtos
            </Link>
          </div>

          {/* Produto 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
            <img src="/img/tremoboo.jpg" alt="Produto 3" className="w-full h-64 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Trembolona Enantato 150mg 10ml – [TRENENAN]</h3>
            <p className="text-gray-600 mt-2">Ganho de Força, Ganho de Massa Magra, Injetáveis, Perda de Gordura</p>
            <Link to="/products" className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              Ver Produtos
            </Link>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="text-center bg-gray-800 text-white py-6 rounded-lg">
        <p>&copy; 2024 Farmácia de Anabolizantes Online. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
