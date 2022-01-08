import { useContext, useEffect, useState } from 'react';
import proyectoContext from '../../context/projects/projectContext';
import TareaContext from '../../context/tasks/tareaContext';

const FormTask = () => {
   // Obtener el state de proyectos
   const proyectosContext = useContext(proyectoContext);
   const { proyecto } = proyectosContext;

   // Obtener la función del context de tarea
   const tareasContext = useContext(TareaContext);
   const { tareaseleccionada, errortarea, agregarTarea, validarTarea, obtenerTareas, actualizarTarea } = tareasContext;

   // Effect que detecta si hay una tarea seleccionada para editar
   useEffect(() => {
      if (tareaseleccionada !== null) {
         setTarea(tareaseleccionada);
      } else {
         setTarea({
            nombre: '',
         });
      }
   }, [tareaseleccionada]);

   // State del formulario
   const [tarea, setTarea] = useState({
      nombre: '',
   });

   const { nombre } = tarea;

   // Si no hay proyecto seleccionado
   if (!proyecto) return null;

   // Extrayendo el proyecto seleccionado
   const [proyectoSelect] = proyecto;

   // Leer los valores del formulario
   const handleChange = (e) => {
      setTarea({
         ...tarea,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      // Validar
      if (nombre.trim() === '') {
         validarTarea();
         return;
      }

      // Revisar si es edición o nueva tarea
      if (tareaseleccionada === null) {
         // Agregar nueva tarea al state de tareas
         tarea.proyectoId = proyectoSelect.id;
         tarea.estado = false;
         agregarTarea(tarea);
      } else {
         // Actualizar tarea existente
         actualizarTarea(tarea);
      }

      // Obtener y filtrar las tareas del proyecto actual
      obtenerTareas(proyectoSelect.id);

      // Reiniciar el form
      setTarea({
         nombre: '',
      });
   };
   return (
      <div className="formulario">
         <form onSubmit={handleSubmit}>
            <div className="contenedor-input">
               <input
                  //
                  type="text"
                  className="input-text"
                  placeholder="Nombre Tarea"
                  name="nombre"
                  value={nombre}
                  onChange={handleChange}
               />
            </div>
            <div className="contenedor-input">
               <button
                  //
                  type="submit"
                  className="btn btn-primario btn-submit btn-block">
                  {tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
               </button>
            </div>
         </form>

         {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null}
      </div>
   );
};

export default FormTask;
