import React, { useState } from 'react';

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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4">
      <h1 className="text-6xl font-extrabold mb-4 text-blue-700">Sobre Mí</h1>
      <p className="  text-blue-500 text-2xl text-center">
        ¡Hola! Soy David, desarrollador de aplicaciones web.
      </p>
      <p className="  text-blue-500 text-2xl text-center">
      Me especializo en diseño y desarrollo web front-end y back-end. Apasionado por la tecnología, disfruto creando experiencias digitales impactantes y siempre busco aprender más sobre nuevas tecnologías.
      </p>
      <p className="mb-4 text-blue-500 text-2xl text-center">
        Si quieres conocer más sobre mi trabajo, puedes ver mi currículum.
      </p>
      <button
        onClick={handleAbrirPdf}
        className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-all duration-300"
      >
        Ver mi Currículum
      </button>
  </div>
  );
};

export default SobreMi;


