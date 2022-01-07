import { useContext } from 'react';

import Task from './Task';
import proyectoContext from '../../context/projects/projectContext';
import TareaContext from '../../context/tasks/tareaContext';

const ListTasks = () => {
   // Obtener el state de proyectos
   const proyectosContext = useContext(proyectoContext);
   const { proyecto, eliminarProyecto } = proyectosContext;

   // Obtener las tareas del proyecto
   const tareasContext = useContext(TareaContext);
   const { tareasproyecto } = tareasContext;

   // Si no hay proyecto seleccionado
   if (!proyecto) return <h2>Selecciona un Proyecto</h2>;

   // Extrayendo el proyecto seleccionado
   const [proyectoSelect] = proyecto;

   const handleClickEliminar = () => {
      eliminarProyecto(proyectoSelect.id);
   };

   return (
      <>
         <h2>Proyecto: {proyectoSelect.nombre}</h2>

         <ul className="listado-tareas">
            {tareasproyecto.length === 0 ? (
               <li className="tarea">
                  <p>No hay tareas</p>
               </li>
            ) : (
               tareasproyecto.map((tarea) => (
                  <Task
                     //
                     key={tarea.id}
                     tarea={tarea}
                  />
               ))
            )}
         </ul>

         <button
            //
            type="button"
            className="btn btn-eliminar"
            onClick={handleClickEliminar}>
            Eliminar Proyecto &times;
         </button>
      </>
   );
};

export default ListTasks;
