import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Mantenha o usuário autenticado aqui

  const login = (userData) => {
    setUser(userData); // Simule um login
  };

  const logout = () => {
    setUser(null); // Logout
  };

  const isAdmin = () => {
    return user && user.role === 'admin'; // Verifica se o usuário é admin
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
