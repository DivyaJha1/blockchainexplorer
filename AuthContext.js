import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
    token: null
  });

  const login = async (username, password) => {
    try {
      const response = await axios.post('/api/login', { username, password });
      const { token, user } = response.data;
      setAuthState({ isAuthenticated: true, user, token });
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const register = async (userData) => {
    try {
      const response = await axios.post('/api/register', userData);
      const { token, user } = response.data;
      setAuthState({ isAuthenticated: true, user, token });
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const logout = () => {
    setAuthState({ isAuthenticated: false, user: null, token: null });
  };

  return (
    <AuthContext.Provider value={{ authState, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
