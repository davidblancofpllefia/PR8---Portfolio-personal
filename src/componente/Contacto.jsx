import React from 'react';

const Contacto = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Contacto</h1>
        <p className="mb-4">¡Estaré encantado de escucharte! Puedes contactarme a través de los siguientes medios:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Correo electrónico: ejemplo@correo.com</li>
          <li>Teléfono: 123-456-7890</li>
        </ul>
        <div className="flex justify-center space-x-4">
          <a href="link_del_primero" target="_blank" rel="noopener noreferrer">
            <img src="icono_1.png" alt="Icono 1" className="w-8 h-8" />
          </a>
          <a href="link_del_segundo" target="_blank" rel="noopener noreferrer">
            <img src="icono_2.png" alt="Icono 2" className="w-8 h-8" />
          </a>
          {/* Añade más elementos <a> con diferentes iconos y enlaces */}
        </div>
      </div>
    </div>
  );
}

export default Contacto;



