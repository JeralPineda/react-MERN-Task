import { useContext } from 'react';

import Task from './Task';
import proyectoContext from '../../context/projects/projectContext';

const ListTasks = () => {
   // Obtener el state de proyectos
   const proyectosContext = useContext(proyectoContext);
   const { proyecto } = proyectosContext;

   // Si no hay proyecto seleccionado
   if (!proyecto) return <h2>Selecciona un Proyecto</h2>;

   // Extrayendo el proyecto seleccionado
   const [proyectoSelect] = proyecto;

   const tareas = [
      {
         nombre: 'Elegir Plataforma',
         estado: true,
      },
      {
         nombre: 'Elegir Colores',
         estado: false,
      },
      {
         nombre: 'Elegir Hosting',
         estado: false,
      },
      {
         nombre: 'Elegir Plataformas de pago',
         estado: true,
      },
   ];

   return (
      <>
         <h2>Proyecto: {proyectoSelect.nombre}</h2>

         <ul className="listado-tareas">
            {tareas.length === 0 ? (
               <p className="tarea">No hay tareas</p>
            ) : (
               tareas.map((tarea) => (
                  <Task
                     //
                     key={tarea.nombre}
                     tarea={tarea}
                  />
               ))
            )}
         </ul>

         <button
            //
            type="button"
            className="btn btn-eliminar">
            Eliminar Proyecto &times;
         </button>
      </>
   );
};

export default ListTasks;
