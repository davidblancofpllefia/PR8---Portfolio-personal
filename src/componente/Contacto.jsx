import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../context/GlobalContextProvider';
import github from '/imagenes/github.png';
import linkedin from '/imagenes/linkedin.png';

const Contacto = () => {
  const { state } = useContext(GlobalContext);

  return (
    <>
      <Link to="/menu" className={`text-6xl hover:text-green-500 ${state.theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>
        ☰
      </Link>
      <div className="flex justify-center items-center min-h-screen flex-col">
        <h1 className={`text-sobremi text-7xl font-extrabold mb-4 ${state.theme === 'light' ? 'text-black' : 'text-white'}`}>Contacto</h1>
        <hr className="w-20 border-b-4 border-blue-500 mb-8" />
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/davidblancofpllefia" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className="w-20 h-20 text-sobremi" />
          </a>
          <a href="https://www.linkedin.com/in/david-blanco-fpllefia/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="w-20 h-20 text-sobremi" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Contacto;






