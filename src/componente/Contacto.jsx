import React, { useContext } from 'react';
import GlobalProvider from '../context/GlobalContextProvider';

const Contacto = () => {
  const { state } = useContext(GlobalProvider); 

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Contacto</h1>
        <p className="mb-4">¡Estaré encantado de escucharte! Puedes contactarme a través de los siguientes medios:</p>
        <ul className="list-disc list-inside">
          <li>Correo electrónico: ejemplo@correo.com</li>
          <li>Teléfono: 123-456-7890</li>
        </ul>
        <p>Current theme: {state.theme}</p>
      </div>
    </div>
  );
}

export default Contacto;



