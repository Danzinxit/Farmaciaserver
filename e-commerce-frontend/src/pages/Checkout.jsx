import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    district: '',
    city: '',
    state: '',
    zip: '', // CEP
    paymentMethod: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Função para lidar com a mudança nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para buscar o endereço pelo CEP
  const handleZipChange = async (e) => {
    const { value } = e.target;

    // Formatação do CEP: Adiciona o hífen automaticamente no formato XXXXX-XXX
    const formattedZip = value
      .replace(/\D/g, '') // Remove caracteres não numéricos
      .replace(/^(\d{5})(\d{0,3})$/, '$1-$2'); // Adiciona o hífen no lugar correto

    setFormData({ ...formData, zip: formattedZip }); // Atualiza o CEP com a formatação

    // Verifica se o CEP tem exatamente 9 caracteres (com o hífen)
    if (formattedZip.replace('-', '').length === 8) {
      setIsLoading(true);
      try {
        // Fazendo a requisição à API ViaCEP
        const response = await axios.get(`https://viacep.com.br/ws/${formattedZip.replace('-', '')}/json/`);

        // Verifica se houve erro na resposta da API
        if (response.data.erro) {
          setErrors((prev) => ({ ...prev, zip: 'CEP não encontrado!' }));
          setFormData({ ...formData, address: '', district: '', city: '', state: '' }); // Limpa os campos de endereço
        } else {
          // Preenche os campos com os dados do endereço
          setFormData({
            ...formData,
            address: response.data.logradouro,
            district: response.data.bairro,
            city: response.data.localidade,
            state: response.data.uf,
          });
          setErrors((prev) => ({ ...prev, zip: '' })); // Limpa o erro de CEP
        }
      } catch (error) {
        setErrors((prev) => ({ ...prev, zip: 'Erro ao buscar o CEP' }));
        setFormData({ ...formData, address: '', district: '', city: '', state: '' }); // Limpa os campos de endereço
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Função para validar os campos
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Nome é obrigatório';
    if (!formData.address) newErrors.address = 'Endereço é obrigatório';
    if (!formData.district) newErrors.district = 'Bairro é obrigatório';
    if (!formData.city) newErrors.city = 'Cidade é obrigatória';
    if (!formData.state) newErrors.state = 'Estado é obrigatório';
    if (!formData.paymentMethod) newErrors.paymentMethod = 'Método de pagamento é obrigatório';
    return newErrors;
  };

  // Função para finalizar a compra
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    // Se não houver erros, prossegue com o envio
    if (Object.keys(validationErrors).length === 0) {
      // Cria um objeto de pedido
      const order = {
        ...formData,
        status: 'Aguardando Pagamento',
        date: new Date().toLocaleString(),
      };

      // Recupera os pedidos existentes do localStorage ou cria um novo array
      const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
      existingOrders.push(order);
      localStorage.setItem('orders', JSON.stringify(existingOrders));

      console.log('Compra finalizada', formData);
      navigate('/order-history'); // Redireciona para a página de histórico de pedidos
    }
  };

  return (
    <Container maxWidth="sm" className="my-12">
      <Typography variant="h4" component="h1" gutterBottom className="text-center text-2xl mb-8">
        Finalizar Compra
      </Typography>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nome completo */}
        <TextField
          label="Nome Completo"
          variant="outlined"
          fullWidth
          required
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={Boolean(errors.name)}
          helperText={errors.name}
        />

        {/* CEP */}
        <TextField
          label="CEP"
          variant="outlined"
          fullWidth
          name="zip"
          value={formData.zip}
          onChange={handleZipChange}
          error={Boolean(errors.zip)}
          helperText={errors.zip}
          inputProps={{ maxLength: 10 }} // Permite o máximo de 10 caracteres (incluindo o hífen)
        />

        {/* Endereço */}
        <TextField
          label="Endereço"
          variant="outlined"
          fullWidth
          required
          name="address"
          value={formData.address}
          onChange={handleChange}
          error={Boolean(errors.address)}
          helperText={errors.address}
        />

        {/* Bairro */}
        <TextField
          label="Bairro"
          variant="outlined"
          fullWidth
          required
          name="district"
          value={formData.district}
          onChange={handleChange}
          error={Boolean(errors.district)}
          helperText={errors.district}
        />

        {/* Cidade */}
        <TextField
          label="Cidade"
          variant="outlined"
          fullWidth
          required
          name="city"
          value={formData.city}
          onChange={handleChange}
          error={Boolean(errors.city)}
          helperText={errors.city}
        />

        {/* Estado */}
        <TextField
          label="Estado"
          variant="outlined"
          fullWidth
          required
          name="state"
          value={formData.state}
          onChange={handleChange}
          error={Boolean(errors.state)}
          helperText={errors.state}
        />

        {/* Método de pagamento */}
        <FormControl fullWidth required error={Boolean(errors.paymentMethod)} className="mb-4">
          <InputLabel id="payment-method-label">Método de Pagamento</InputLabel>
          <Select
            labelId="payment-method-label"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            label="Método de Pagamento"
          >
            <MenuItem value="credit-card">Cartão de Crédito</MenuItem>
            <MenuItem value="boleto">Boleto Bancário</MenuItem>
          </Select>
          {errors.paymentMethod && <FormHelperText>{errors.paymentMethod}</FormHelperText>}
        </FormControl>

        {/* Botão de Finalizar Compra */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          disabled={isLoading}
        >
          {isLoading ? 'Processando...' : 'Confirmar Compra'}
        </Button>
      </form>
    </Container>
  );
};

export default Checkout;
