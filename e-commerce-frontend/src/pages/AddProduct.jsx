import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const AddProduct = ({ onAdd }) => {
  const { isAdmin } = useAuth(); // Verifique se o usuário é admin
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(), // ID gerado aleatoriamente
      name,
      description,
      price: parseFloat(price),
    };
    onAdd(newProduct); // Chame a função para adicionar o produto
    setName('');
    setDescription('');
    setPrice('');
  };

  if (!isAdmin()) {
    return <Typography variant="h6">Acesso Negado: Somente administradores podem adicionar produtos.</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Adicionar Produto
      </Typography>
      <form onSubmit={handleAddProduct}>
        <TextField
          label="Nome do Produto"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Descrição"
          variant="outlined"
          fullWidth
          margin="normal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <TextField
          label="Preço"
          type="number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Adicionar
        </Button>
      </form>
    </Container>
  );
};

export default AddProduct;
