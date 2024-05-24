import React, { useState, useContext } from 'react';
import GlobalContext from '../context/GlobalContextProvider';
import { Link } from 'react-router-dom';

const SobreMi = () => {
  const [fichaTecnicaVentana, setFichaTecnicaVentana] = useState(null);

  const handleAbrirPdf = () => {
    if (!fichaTecnicaVentana || fichaTecnicaVentana.closed) {
      const nuevaVentana = window.open('public/pdf/David Blanco Fernández.pdf', '_blank');
      setFichaTecnicaVentana(nuevaVentana);
    } else {
      fichaTecnicaVentana.focus();
    }
  };

  const { state } = useContext(GlobalContext);

  return (
    <>
    <Link to="/menu" className={`text-6xl hover:text-green-500 ${state.theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>
      ☰
    </Link>
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover p-4">
  
      <h1 className={`text-sobremi text-7xl font-extrabold mb-4 ${state.theme === 'light' ? 'text-black' : 'text-white'}`}>Sobre Mí</h1>
      <hr className="text-sobremi w-20 border-b-4 border-blue-500 mb-8" />
      <p className={`text-sobremi text-2xl mb-2 ${state.theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>
        ¡Hola! Soy David, desarrollador de aplicaciones web.
      </p>
      <p className={`text-sobremi text-2xl mb-2 ${state.theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>
        Me especializo en diseño y desarrollo web front-end y back-end. Apasionado por la tecnología, disfruto creando experiencias digitales impactantes y siempre busco aprender más sobre nuevas tecnologías.
      </p>
      <p className={`text-sobremi text-2xl mb-2 ${state.theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>
        Si quieres conocer más sobre mi, puedes ver mi currículum.
      </p>
      <button
        onClick={handleAbrirPdf}
        className="mt-4 inline-block bg-blue-500 text-white px-10 py-5 text-2xl rounded-md hover:bg-blue-600 transition-all duration-300 text-sobremi"
      >
        Ver mi Currículum
      </button>
    </div>
    </>
  );
};

export default SobreMi;


