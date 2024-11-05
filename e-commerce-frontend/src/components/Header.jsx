import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Produtos</Link>
      <Link to="/cart">Carrinho</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Cadastrar</Link>
    </nav>
  );
};

export default Header;
