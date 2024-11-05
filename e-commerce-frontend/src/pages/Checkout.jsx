// pages/Checkout.js

import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
    paymentMethod: '',
  });
  const navigate = useNavigate();

  // Função para lidar com a mudança nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para finalizar a compra
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para o pagamento ou processar o pedido
    console.log('Compra finalizada', formData);
    navigate('/');  // Redireciona para a página inicial após a compra
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom className="text-center">
        Finalizar Compra
      </Typography>

      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField
          label="Nome Completo"
          variant="outlined"
          fullWidth
          required
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          label="Endereço"
          variant="outlined"
          fullWidth
          required
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <TextField
          label="Cidade"
          variant="outlined"
          fullWidth
          required
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
        <TextField
          label="CEP"
          variant="outlined"
          fullWidth
          required
          name="zip"
          value={formData.zip}
          onChange={handleChange}
        />
        <TextField
          label="Método de Pagamento"
          variant="outlined"
          fullWidth
          required
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
        />
        
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
        >
          Confirmar Compra
        </Button>
      </form>
    </Container>
  );
};

export default Checkout;
