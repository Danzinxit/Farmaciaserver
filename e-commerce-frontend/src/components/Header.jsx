import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-black via-red-600 to-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Logo ou nome do site */}
          <h1 className="text-2xl font-bold text-white hover:text-red-600 transition-colors duration-300">
            Farmácia de Anabolizantes
          </h1>
        </div>
        <nav className="space-x-6 hidden md:flex">
          <Link 
            to="/" 
            className="hover:text-red-600 transition-colors duration-300 ease-in-out transform hover:scale-105"
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className="hover:text-red-600 transition-colors duration-300 ease-in-out transform hover:scale-105"
          >
            Produtos
          </Link>
          <Link 
            to="/cart" 
            className="hover:text-red-600 transition-colors duration-300 ease-in-out transform hover:scale-105"
          >
            Carrinho
          </Link>
          <Link 
            to="/login" 
            className="hover:text-red-600 transition-colors duration-300 ease-in-out transform hover:scale-105"
          >
            Login
          </Link>
          <Link 
            to="/signup" 
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
          >
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
