import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GlobalProvider from '../context/GlobalContextProvider';

const Header = () => {
  const { state, toggleTheme } = useContext(GlobalProvider);

  return (
    <nav className="flex items-center justify-between py-4 px-8 bg-gray-800 text-white shadow-md">
      <div className="flex items-center space-x-4">
        <Link to="/" className="hover:text-blue-500 transition-all duration-300">Inicio</Link>
        <Link to="/proyectos" className="hover:text-blue-500 transition-all duration-300">Proyectos</Link>
        <Link to="/sobre-mi" className="hover:text-blue-500 transition-all duration-300">Sobre Mí</Link>
        <Link to="/contacto" className="hover:text-blue-500 transition-all duration-300">Contacto</Link>
      </div>
      <button onClick={toggleTheme} className="text-gray-300 hover:text-gray-400 focus:outline-none">
        {state.theme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  );
}

export default Header;


