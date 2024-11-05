import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card style={{ margin: '1rem', width: '200px' }}>
      <CardContent>
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="body2">{product.description}</Typography>
        <Typography variant="h6">R$ {product.price}</Typography>
        <Button variant="contained" color="primary">Adicionar ao Carrinho</Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
