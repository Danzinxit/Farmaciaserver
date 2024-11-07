

import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  // Carregar os pedidos do localStorage quando a página for montada
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <Container maxWidth="md" className="my-12">
      <Typography variant="h4" component="h1" gutterBottom className="text-center text-2xl mb-8">
        Histórico de Pedidos
      </Typography>

      {/* Se não houver pedidos */}
      {orders.length === 0 ? (
        <Typography variant="body1" className="text-center">
          Você ainda não fez nenhum pedido.
        </Typography>
      ) : (
        <List>
          {orders.map((order, index) => (
            <div key={index}>
              <ListItem>
                <ListItemText
                  primary={`Pedido em ${order.date}`}
                  secondary={`Status: ${order.status}`}
                />
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      )}

      <div className="text-center mt-8">
        <Link to="/" className="text-blue-500">Voltar para a Home</Link>
      </div>
    </Container>
  );
};

export default OrderHistory;
