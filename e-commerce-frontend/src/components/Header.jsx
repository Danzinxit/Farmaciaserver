import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Logo ou nome do site */}
          <h1 className="text-2xl font-bold">Farmácia de Anabolizantes</h1>
        </div>
        <nav className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <Link to="/products" className="hover:text-blue-400 transition-colors">Produtos</Link>
          <Link to="/cart" className="hover:text-blue-400 transition-colors">Carrinho</Link>
          <Link to="/login" className="hover:text-blue-400 transition-colors">Login</Link>
          <Link to="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-all">
            Cadastrar
          </Link>
        </nav>
        {/* Ícones de menu para mobile */}
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
