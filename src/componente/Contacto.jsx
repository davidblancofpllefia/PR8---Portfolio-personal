import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center space-x-4 mb-16"
        >
          <a href="https://github.com/davidblancofpllefia" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className="w-20 h-20 text-sobremi" />
          </a>
          <a href="https://www.linkedin.com/in/david-blanco-fpllefia/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="w-20 h-20 text-sobremi" />
          </a>
        </motion.div>
        <hr className="w-full border-t-2 border-gray-300 mb-8" />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-7xl font-extrabold mb-4 ${state.theme === 'light' ? 'text-black' : 'text-white'}`}
        >
          ¡Contacta conmigo!
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-lg"
        >
          <div className="mb-4">
            <label className={`block text-sm font-bold mb-2 ${state.theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`} htmlFor="name">
              Nombre
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${state.theme === 'light' ? 'text-gray-700 bg-white border-gray-300' : 'text-gray-300 bg-gray-800 border-gray-600'}`}
              id="name"
              type="text"
              placeholder="Tu nombre"
            />
          </div>
          <div className="mb-4">
            <label className={`block text-sm font-bold mb-2 ${state.theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`} htmlFor="email">
              Correo Electrónico
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${state.theme === 'light' ? 'text-gray-700 bg-white border-gray-300' : 'text-gray-300 bg-gray-800 border-gray-600'}`}
              id="email"
              type="email"
              placeholder="Tu correo electrónico"
            />
          </div>
          <div className="mb-4">
            <label className={`block text-sm font-bold mb-2 ${state.theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`} htmlFor="message">
              Mensaje
            </label>
            <textarea
              className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${state.theme === 'light' ? 'text-gray-700 bg-white border-gray-300' : 'text-gray-300 bg-gray-800 border-gray-600'}`}
              id="message"
              rows="4"
              placeholder="Tu mensaje"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Enviar
            </button>
          </div>
        </motion.form>
      </div>
    </>
  );
}

export default Contacto;







