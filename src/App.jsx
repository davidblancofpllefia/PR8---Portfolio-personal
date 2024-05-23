import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import { GlobalProvider } from './context/GlobalContextProvider'; // Importar GlobalProvider

import Header from './componente/Header';
import Inicio from './componente/Inicio';
import Proyectos from './componente/Proyectos';
import SobreMi from './componente/SobreMi';
import Contacto from './componente/Contacto';
import Menu from './componente/Menu';

const App = () => {
  return (
    <NextUIProvider>
      <GlobalProvider> 
        <Header />
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </GlobalProvider>
    </NextUIProvider>
  );
}

export default App;
