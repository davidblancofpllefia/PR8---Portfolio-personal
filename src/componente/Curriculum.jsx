import React from 'react';

const CurriculumCard = ({ title, children }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {children}
    </div>
  );
}

const Curriculum = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <CurriculumCard title="Información de Contacto">
        {/* Aquí iría la información de contacto */}
      </CurriculumCard>
      <CurriculumCard title="Perfil Profesional">
        {/* Aquí iría el perfil profesional */}
      </CurriculumCard>
      <CurriculumCard title="Educación">
        {/* Aquí iría la información sobre tu educación */}
      </CurriculumCard>
      <CurriculumCard title="Experiencia Laboral">
        {/* Aquí iría la información sobre tu experiencia laboral */}
      </CurriculumCard>
      <CurriculumCard title="Habilidades">
        {/* Aquí irían tus habilidades */}
      </CurriculumCard>
      <CurriculumCard title="Proyectos Destacados">
        {/* Aquí irían tus proyectos destacados */}
      </CurriculumCard>
      <CurriculumCard title="Idiomas">
        {/* Aquí irían tus idiomas */}
      </CurriculumCard>
      <CurriculumCard title="Intereses y Pasatiempos">
        {/* Aquí irían tus intereses y pasatiempos */}
      </CurriculumCard>
    </div>
  );
}

export default Curriculum;
