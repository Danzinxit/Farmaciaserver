import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { useCart } from '../context/CartContext';

const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    // Produtos com os mesmos nomes e descrições da Home
    const fetchProducts = async () => {
      const data = [
        {
          id: 1,
          name: 'Enantato de Testosterona 300mg 10ml – [ENANTESTO]',
          description: 'Ganho de Força, Ganho de Massa Magra, Injetáveis, Perda de Gordura',
          price: 250.00,
          image: '/img/trembo.jpg',
        },
        {
          id: 2,
          name: 'Durateston (Sustanon) 250mg 10ml',
          description: 'Ganho de Força, Injetáveis',
          price: 270.00,
          image: '/img/dura.jpg',
        },
        {
          id: 3,
          name: 'Trembolona Enantato 150mg 10ml – [TRENENAN]',
          description: 'Ganho de Força, Ganho de Massa Magra, Injetáveis, Perda de Gordura',
          price: 320.00,
          image: '/img/tremoboo.jpg',
        },
      ];
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} foi adicionado ao carrinho!`);
  };

  return (
    <Container className="py-8">
      <Typography variant="h4" component="h1" gutterBottom className="text-center text-3xl font-semibold text-gray-800">
        Todos os Produtos
      </Typography>

      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card className="shadow-lg rounded-lg">
              <CardContent>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <Typography variant="h5" className="font-semibold text-gray-900">{product.name}</Typography>
                <Typography variant="body2" className="text-gray-600">{product.description}</Typography>
                <Typography variant="h6" className="text-gray-900 mt-2">R$ {product.price.toFixed(2)}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: '20px' }}
                  onClick={() => handleAddToCart(product)}
                >
                  Adicionar ao Carrinho
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
