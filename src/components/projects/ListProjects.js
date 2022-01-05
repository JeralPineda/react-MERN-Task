import React from 'react';
import Project from './Project';

const ListProjects = () => {
   const proyectos = [
      {
         nombre: 'Tienda Virtual',
      },
      { nombre: 'Intranet' },
      { nombre: 'Diseño de sitio web' },
   ];

   return (
      <ul className="listado-proyectos">
         {proyectos.map((proyecto) => (
            <Project key={proyecto.nombre} proyecto={proyecto} />
         ))}
      </ul>
   );
};

export default ListProjects;
