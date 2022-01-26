import { useContext } from 'react';

import proyectoContext from '../../context/projects/projectContext';
import TareaContext from '../../context/tasks/tareaContext';

const Task = ({ tarea }) => {
   // Obtener el state de proyectos
   const proyectosContext = useContext(proyectoContext);
   const { proyecto } = proyectosContext;
   const [proyectoActual] = proyecto;

   // Obtener la función del context de tarea
   const tareasContext = useContext(TareaContext);
   const { eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActual } = tareasContext;

   const handleEliminarTarea = (id) => {
      eliminarTarea(id, proyectoActual.id);
      obtenerTareas(proyectoActual.id);
   };

   // funcion para modificar el estado de las tareas
   const cambiarEstado = (tarea) => {
      if (tarea.estado) {
         tarea.estado = false;
      } else {
         tarea.estado = true;
      }
      cambiarEstadoTarea(tarea);
   };

   // Agregar tarea actual al dar click en editar
   const seleccionarTarea = (tarea) => {
      guardarTareaActual(tarea);
   };

   return (
      <li className="tarea">
         <p>{tarea.nombre}</p>

         <div className="estado">
            {tarea.estado ? (
               <button
                  //
                  type="button"
                  onClick={() => cambiarEstado(tarea)}
                  className="completo">
                  Completo
               </button>
            ) : (
               <button
                  //
                  type="button"
                  onClick={() => cambiarEstado(tarea)}
                  className="incompleto">
                  Incompleto
               </button>
            )}
         </div>

         <div className="acciones">
            <button
               //
               type="button"
               className="btn btn-primario"
               onClick={() => seleccionarTarea(tarea)}>
               Editar
            </button>

            <button
               //
               type="button"
               className="btn btn-eliminar"
               onClick={() => handleEliminarTarea(tarea.id)}>
               Eliminar
            </button>
         </div>
      </li>
   );
};

export default Task;
