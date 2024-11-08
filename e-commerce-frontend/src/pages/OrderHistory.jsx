import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button, Divider, Chip, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  // Carregar os pedidos do localStorage quando a página for montada
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  // Função para estilizar o status
  const getStatusChip = (status) => {
    switch (status) {
      case 'Aguardando Pagamento':
        return <Chip label={status} color="warning" size="small" />;
      case 'Enviado':
        return <Chip label={status} color="primary" size="small" />;
      case 'Entregue':
        return <Chip label={status} color="success" size="small" />;
      default:
        return <Chip label={status} color="default" size="small" />;
    }
  };

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
        Histórico de Pedidos
      </Typography>

      {/* Se não houver pedidos */}
      {orders.length === 0 ? (
        <Typography variant="body1" align="center" sx={{ color: 'text.secondary' }}>
          Você ainda não fez nenhum pedido.
        </Typography>
      ) : (
        <List sx={{ bgcolor: 'background.paper', borderRadius: 1 }}>
          {orders.map((order, index) => (
            <Box key={index} sx={{ mb: 2, border: '1px solid #e0e0e0', borderRadius: 1, p: 2 }}>
              <ListItem>
                <ListItemText
                  primary={`Pedido em ${new Date(order.date).toLocaleDateString()}`}
                  secondary={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {getStatusChip(order.status)} {/* Exibindo o status com a estilização */}
                    </Box>
                  }
                />
              </ListItem>
              <Divider />
            </Box>
          ))}
        </List>
      )}

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button variant="outlined" color="primary" size="large">
            Voltar para a Home
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default OrderHistory;
