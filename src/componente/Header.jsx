import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../context/GlobalContextProvider';

const Header = () => {
  const { state, toggleTheme } = useContext(GlobalContext);

  const handleToggleTheme = () => {
    if (state.theme === 'light') {
      document.body.style.backgroundColor = '#000'; 
    } else {
      document.body.style.backgroundColor = '#fff';  
    }
    toggleTheme(); 
  };
  
  

  return (
    <div className="flex justify-between items-center py-4 px-8 bg-gray-800 text-white shadow-md">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-lg font-bold hover:text-blue-500 transition-all duration-300">
          Inicio
        </Link>
      </div>
      <button onClick={handleToggleTheme} className="text-gray-300 hover:text-gray-400 focus:outline-none text-5xl">
        {state.theme === 'light' ? '☀️' : '🌙'}
      </button>
    </div>
  );
}

export default Header;





