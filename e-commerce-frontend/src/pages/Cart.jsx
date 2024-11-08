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
      <Typography variant="h3" component="h1" gutterBottom className="text-center text-3xl font-semibold text-white">
        Carrinho de Compras
      </Typography>
      {cartItems.length === 0 ? (
        <div className="flex justify-center items-center">
          <Typography variant="body1" className="text-lg text-gray-400">Seu carrinho está vazio.</Typography>
        </div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item, index) => (
            <div key={index} className="bg-black text-white shadow-lg rounded-lg p-4 flex items-center space-x-4 hover:shadow-2xl transition">
              <div className="w-20 h-20 bg-gray-200 rounded-md">
                {/* Imagem do produto */}
                <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-md" />
              </div>
              <div className="flex-1">
                <Typography variant="h6" className="text-lg font-semibold text-white">{item.name}</Typography>
                <Typography variant="body2" className="text-gray-400">R$ {item.price.toFixed(2)}</Typography>
                <div className="flex items-center space-x-4 mt-2">
                  <TextField
                    type="number"
                    label="Quantidade"
                    value={item.quantity}
                    onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
                    inputProps={{ min: 1 }}
                    size="small"
                    className="w-24"
                    sx={{
                      '& .MuiInputBase-root': {
                        backgroundColor: '#FFFFFF', // fundo preto do input
                        borderRadius: '4px',
                      },
                      '& .MuiInputLabel-root': {
                        color: '#FF0000', // label vermelho
                      },
                    }}
                  />
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleRemoveItem(item.id)}
                    size="small"
                    className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition"
                  >
                    Remover
                  </Button>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="contained"
                  color="error"
                  className="text-sm"
                >
                  Comprar
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="mt-6 bg-gray-900 p-4 rounded-lg shadow-md">
          <Typography variant="h6" className="text-xl font-semibold text-white">Resumo do Carrinho</Typography>
          <div className="flex justify-between py-2">
            <Typography variant="body1" className="text-gray-400">Total</Typography>
            <Typography variant="body1" className="text-white">R$ {getTotal().toFixed(2)}</Typography>
          </div>
          <div className="flex justify-center mt-4">
            {/* Botão para redirecionar para o Checkout */}
            <Link to="/checkout">
              <Button variant="contained" color="error" size="large" className="w-full">
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
