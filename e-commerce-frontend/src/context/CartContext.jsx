import React, { createContext, useContext, useState } from 'react';

// Criando o contexto do carrinho
const CartContext = createContext();

// Provedor do contexto de Carrinho
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Adicionar produto ao carrinho
  const addToCart = (product) => {
    // Verifica se o produto já está no carrinho
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    if (existingProductIndex >= 0) {
      // Se o produto já estiver no carrinho, aumente a quantidade
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // Caso contrário, adiciona o produto ao carrinho com quantidade 1
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  // Remover produto do carrinho
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  // Atualizar a quantidade do produto no carrinho
  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) => prevCart.map(item => 
      item.id === productId ? { ...item, quantity } : item
    ));
  };

  // Obter os itens do carrinho
  const getCartItems = () => {
    return cart;
  };

  // Calcular o total do carrinho
  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ addToCart, removeFromCart, updateQuantity, getCartItems, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar o contexto do carrinho
export const useCart = () => useContext(CartContext);
