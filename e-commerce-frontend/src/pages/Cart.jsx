import React from 'react';
import { Container, Typography } from '@mui/material';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { getCartItems } = useCart();
  const cartItems = getCartItems();

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Carrinho
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1">Seu carrinho está vazio.</Typography>
      ) : (
        cartItems.map((item, index) => (
          <div key={index}>
            <Typography variant="h6">{item.name}</Typography>
            <Typography variant="body2">R$ {item.price.toFixed(2)}</Typography>
          </div>
        ))
      )}
    </Container>
  );
};

export default Cart;
