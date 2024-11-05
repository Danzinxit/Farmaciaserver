import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { useCart } from '../context/CartContext';
import AddProduct from './AddProduct'; // Importa o componente de adicionar produto

const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = [
        { id: 1, name: 'Trembolona', description: 'Descrição do Produto A', price: 200.00 },
        { id: 2, name: 'Emogenim', description: 'Descrição do Produto B', price: 200.00 },
        { id: 3, name: 'GH', description: 'Descrição do Produto C', price: 300.00 },
      ];
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} foi adicionado ao carrinho!`);
  };

  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]); // Adiciona novo produto
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Produtos
      </Typography>
      <AddProduct onAdd={handleAddProduct} /> {/* Componente para adicionar produtos */}
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{product.name}</Typography>
                <Typography variant="body2">{product.description}</Typography>
                <Typography variant="h6">R$ {product.price.toFixed(2)}</Typography>
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
