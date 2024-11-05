import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container } from '@mui/material';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica de registro
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    // Redirecionar para a página de login após o registro
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 to-indigo-800">
      <Container maxWidth="xs" className="bg-white p-8 rounded-lg shadow-lg">
        <Typography variant="h4" component="h1" className="text-center font-bold text-3xl text-gray-900 mb-6">
          Crie sua Conta
        </Typography>

        <form onSubmit={handleSignup} className="space-y-4">
          {/* Campo de nome */}
          <TextField
            label="Nome"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-md"
          />

          {/* Campo de email */}
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-md"
          />

          {/* Campo de senha */}
          <TextField
            label="Senha"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-md"
          />

          {/* Botão de Registrar */}
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            fullWidth 
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md shadow-md transition duration-300 transform hover:scale-105"
          >
            Registrar
          </Button>

          {/* Link para a página de Login */}
          <div className="text-center mt-4">
            <Typography variant="body2" className="text-gray-600">
              Já tem uma conta?{' '}
              <a href="/login" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                Faça login
              </a>
            </Typography>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Signup;
