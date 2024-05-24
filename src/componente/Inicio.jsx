import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../context/GlobalContextProvider';

const Inicio = () => {
  const { state } = useContext(GlobalContext);

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover" >
      <div className="text-center">
        <h1 className={`text-entry text-7xl font-extrabold mb-4 ${state.theme === 'light' ? 'text-black' : 'text-white'}`}>¡Bienvenido a mi portafolio!</h1>
        <p className={`text-entry text-3xl mb-2 ${state.theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>¡Hola! Soy David, un desarrollador de aplicaciones web apasionado por crear experiencias digitales asombrosas.</p>
        <p className={`text-entry text-3xl mb-5 ${state.theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>En este portafolio, puedes encontrar algunos de mis proyectos y conocer más sobre mí.</p>
        <Link to="/menu" className="mt-4 inline-block bg-blue-500 text-white px-10 py-5 text-2xl rounded-md hover:bg-blue-600 transition-all duration-300 button-entry">
          Abrir Portfolio
        </Link>
      </div>
    </div>
  );
}

export default Inicio;




