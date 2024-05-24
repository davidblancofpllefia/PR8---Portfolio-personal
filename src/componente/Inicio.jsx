import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../context/GlobalContextProvider';

const Inicio = () => {
  const { state } = useContext(GlobalContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover px-4">
      <div className="text-center">
        <h1 className={`text-5xl md:text-7xl font-extrabold mb-4 text-inicio ${state.theme === 'light' ? 'text-black' : 'text-white'}`}>¡Bienvenido a mi portafolio!</h1>
        <p className={`text-xl md:text-3xl mb-2 text-inicio ${state.theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>¡Hola! Soy David, un desarrollador de aplicaciones web apasionado por crear experiencias digitales asombrosas.</p>
        <p className={`text-xl md:text-3xl mb-3 text-inicio  ${state.theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>En este portafolio, puedes encontrar algunos de mis proyectos y conocer más sobre mí.</p>
        <Link to="/menu" className="mt-2 inline-block bg-blue-500 text-white px-6 py-3 md:px-10 md:py-5 text-lg md:text-2xl rounded-md hover:bg-blue-600 transition-all duration-300 text-inicio">
          Abrir Portfolio
        </Link>
      </div>
    </div>
  );
}

export default Inicio;




