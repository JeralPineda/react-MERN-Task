import React, { useContext } from 'react';
import proyectoContext from '../../context/projects/projectContext';
import TareaContext from '../../context/tasks/tareaContext';

const Project = ({ proyecto }) => {
   // Obtener el state de proyectos
   const proyectosContext = useContext(proyectoContext);
   const { proyectoActual } = proyectosContext;

   // Obtener la función del context de tarea
   const tareasContext = useContext(TareaContext);
   const { obtenerTareas } = tareasContext;

   // Función para agregar el proyecto actual
   const seleccionarProyecto = (id) => {
      proyectoActual(id); //fijar un proyecto actual
      obtenerTareas(id); //fijar las tareas cuando se seleccione un proyecto
   };

   return (
      <li>
         <button
            //
            type="button"
            className="btn btn-blank"
            onClick={() => seleccionarProyecto(proyecto.id)}>
            {proyecto.nombre}
         </button>
      </li>
   );
};

export default Project;
