import React from 'react';
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-cover" >
      <div className="text-center">
        <h1 className="text-6xl font-extrabold mb-4 text-entry text-blue-700">Bienvenido a mi portafolio de desarrollo</h1>
        <p className="text-lg text-entry  text-blue-400">¡Hola! Soy David, un desarrollador de aplicaciones web apasionado por crear experiencias digitales asombrosas.</p>
        <p className="text-lg text-entry  text-blue-400">En este portafolio, puedes encontrar algunos de mis proyectos y conocer más sobre mí.</p>
        <Link to="/menu" className="mt-4 inline-block bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-all duration-300 button-entry">Abrir Portfolio</Link>
      </div>
    </div>


  );
}

export default Inicio;




