import React, { createContext, useState } from 'react';

const GlobalContext = createContext(); // Crear el contexto

export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    theme: 'light',
  });

  const updateUser = (user) => {
    setState((prevState) => ({
      ...prevState,
      user: user,
    }));
  };

  const toggleTheme = () => {
    setState((prevState) => ({
      ...prevState,
      theme: prevState.theme === 'light' ? 'dark' : 'light',
    }));
  };

  return (
    <GlobalContext.Provider value={{ state, updateUser, toggleTheme }}> {/* Usar el contexto aquí */}
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext; 


