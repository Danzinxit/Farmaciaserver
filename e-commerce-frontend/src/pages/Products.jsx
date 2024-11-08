import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { useCart } from '../context/CartContext';  // Assumindo que você já tem o contexto de carrinho

const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();  // Hook de carrinho

  useEffect(() => {
    // Dados de exemplo para os produtos
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

  // Função para adicionar o produto ao carrinho
  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} foi adicionado ao carrinho!`);
  };

  return (
    <Container className="py-8 bg-white">
      <Typography variant="h4" component="h1" gutterBottom className="text-center text-3xl font-semibold text-black mb-12">
        Todos os Produtos
      </Typography>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card className="bg-black text-black shadow-lg rounded-lg hover:shadow-2xl transition transform hover:scale-105">
              <CardContent>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-lg mb-4 border-2 border-gray-600"
                />
                <Typography variant="h5" className="font-semibold text-black">{product.name}</Typography>
                <Typography variant="body2" className="text-black mt-2">{product.description}</Typography>
                <Typography variant="h6" className="text-black mt-2">R$ {product.price.toFixed(2)}</Typography>

             
                <Button
                  variant="contained"
                  color="error"
                  fullWidth
                  onClick={() => handleAddToCart(product)}
                  className="mt-4"
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
