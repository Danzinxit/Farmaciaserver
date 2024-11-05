import React from 'react';
import { Container, Typography, Button, TextField } from '@mui/material';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { getCartItems, removeFromCart, updateQuantity, getTotal } = useCart();
  const cartItems = getCartItems();

  // Função para lidar com a remoção de um item
  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  // Função para lidar com a alteração da quantidade do item
  const handleUpdateQuantity = (itemId, quantity) => {
    updateQuantity(itemId, quantity);
  };

  return (
    <Container className="py-8">
      <Typography variant="h3" component="h1" gutterBottom className="text-center text-3xl font-semibold text-gray-800">
        Carrinho de Compras
      </Typography>
      {cartItems.length === 0 ? (
        <div className="flex justify-center items-center">
          <Typography variant="body1" className="text-lg text-gray-500">Seu carrinho está vazio.</Typography>
        </div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4">
              <div className="w-20 h-20 bg-gray-200 rounded-md">
                {/* Imagem do produto */}
                <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-md" />
              </div>
              <div className="flex-1">
                <Typography variant="h6" className="text-lg font-semibold text-gray-900">{item.name}</Typography>
                <Typography variant="body2" className="text-gray-500">R$ {item.price.toFixed(2)}</Typography>
                <div className="flex items-center space-x-4 mt-2">
                  <TextField
                    type="number"
                    label="Quantidade"
                    value={item.quantity}
                    onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
                    inputProps={{ min: 1 }}
                    size="small"
                    className="w-24"
                  />
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleRemoveItem(item.id)}
                    size="small"
                  >
                    Remover
                  </Button>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="contained" color="primary" className="text-sm">
                  Comprar
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
          <Typography variant="h6" className="text-xl font-semibold text-gray-800">Resumo do Carrinho</Typography>
          <div className="flex justify-between py-2">
            <Typography variant="body1" className="text-gray-700">Total</Typography>
            <Typography variant="body1" className="text-gray-900">R$ {getTotal().toFixed(2)}</Typography>
          </div>
          <div className="flex justify-center mt-4">
            {/* Botão para redirecionar para o Checkout */}
            <Link to="/checkout">
              <Button variant="contained" color="primary" size="large">
                Finalizar Compra
              </Button>
            </Link>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Cart;
