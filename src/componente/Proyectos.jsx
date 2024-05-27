import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import GlobalContext from '../context/GlobalContextProvider';

const Proyectos = () => {
  const { state } = useContext(GlobalContext);

  return (
    <>
      <Link to="/menu" className={`text-6xl hover:text-green-500 ${state.theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>
        ☰
      </Link>
      <div className="flex justify-center items-center min-h-screen flex-col">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-7xl font-extrabold mb-4 ${state.theme === 'light' ? 'text-black' : 'text-white'}`}
        >
          Mis Proyectos
        </motion.h1>
        <hr className="w-20 border-b-4 border-blue-500 mb-8" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className={`text-2xl mb-4 ${state.theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>
            Actualmente no tengo proyectos para mostrar, pero pronto añadiré algunos. ¡Mantente al tanto!
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center space-x-4 mt-8"
          >
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default Proyectos;

