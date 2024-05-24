import React, { useState, useContext } from 'react';
import GlobalContext from '../context/GlobalContextProvider';

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover p-4">
      <h1 className={`text-entry text-7xl font-extrabold mb-4 ${state.theme === 'light' ? 'text-black' : 'text-white'}`}>Sobre Mí</h1>
      <div className="w-20 h-1 bg-blue-500 mb-4 text-entry"></div>
      <p className={`text-entry text-2xl mb-2 ${state.theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>
        ¡Hola! Soy David, desarrollador de aplicaciones web.
      </p>
      <p className={`text-entry text-2xl mb-2 ${state.theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>
        Me especializo en diseño y desarrollo web front-end y back-end. Apasionado por la tecnología, disfruto creando experiencias digitales impactantes y siempre busco aprender más sobre nuevas tecnologías.
      </p>
      <p className={`text-entry text-2xl mb-2 ${state.theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>
        Si quieres conocer más sobre mi trabajo, puedes ver mi currículum.
      </p>
      <button
        onClick={handleAbrirPdf}
        className="mt-4 inline-block bg-blue-500 text-white px-10 py-5 text-2xl rounded-md hover:bg-blue-600 transition-all duration-300 text-entry"
      >
        Ver mi Currículum
      </button>
    </div>
  );
};

export default SobreMi;


