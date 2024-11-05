import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica de autenticação
    console.log('Email:', email);
    console.log('Password:', password);
    // Redirecionar para a página principal após o login
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 to-indigo-800">
      <Container maxWidth="xs" className="bg-white p-8 rounded-lg shadow-lg">
        <Typography variant="h4" component="h1" className="text-center font-bold text-3xl text-gray-900 mb-6">
          Bem-vindo de volta!
        </Typography>

        <form onSubmit={handleLogin} className="space-y-4">
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

          {/* Botão de Login */}
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            fullWidth 
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md shadow-md transition duration-300 transform hover:scale-105"
          >
            Entrar
          </Button>

          {/* Link para cadastro */}
          <div className="text-center mt-4">
            <Typography variant="body2" className="text-gray-600">
              Não tem uma conta?{' '}
              <a href="/signup" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                Cadastre-se
              </a>
            </Typography>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Login;
