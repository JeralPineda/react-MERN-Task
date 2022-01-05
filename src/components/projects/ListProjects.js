import { useContext } from 'react';
import Project from './Project';

import proyectoContext from '../../context/projects/projectContext';

const ListProjects = () => {
   // obtener los proyectos desde el state inicial context
   const proyectosContext = useContext(proyectoContext);
   const { proyectos } = proyectosContext;

   if (proyectos.length === 0) return null;

   return (
      <ul className="listado-proyectos">
         {proyectos.map((proyecto) => (
            <Project
               //
               key={proyecto.nombre}
               proyecto={proyecto}
            />
         ))}
      </ul>
   );
};

export default ListProjects;
