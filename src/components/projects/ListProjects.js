import { useContext, useEffect } from 'react';
import Project from './Project';

import proyectoContext from '../../context/projects/projectContext';

const ListProjects = () => {
   // obtener los proyectos desde el state inicial context
   const proyectosContext = useContext(proyectoContext);
   const { proyectos, obtenerProyectos } = proyectosContext;

   // Obtener proyectos cuando carga el componente
   useEffect(() => {
      obtenerProyectos();
   }, []);

   if (proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;

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
