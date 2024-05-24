// TextoAdaptable.jsx

import React, { useContext } from 'react';
import { ThemeContext } from 'next-themes';

const TextoAdaptable = ({ texto }) => {
  const { resolvedTheme } = useContext(ThemeContext);

  // Establece el color del texto según el tema seleccionado
  const textColor = resolvedTheme === 'dark' ? 'text-white' : 'text-black';

  return (
    <p className={`text-lg ${textColor}`}>
      {texto}
    </p>
  );
};

export default TextoAdaptable;
