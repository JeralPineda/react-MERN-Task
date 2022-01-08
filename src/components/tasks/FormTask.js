import { useContext, useState } from 'react';
import proyectoContext from '../../context/projects/projectContext';
import TareaContext from '../../context/tasks/tareaContext';

const FormTask = () => {
   // Obtener el state de proyectos
   const proyectosContext = useContext(proyectoContext);
   const { proyecto } = proyectosContext;

   // Obtener la función del context de tarea
   const tareasContext = useContext(TareaContext);
   const { agregarTarea } = tareasContext;

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

      // Pasar la validación

      // Agregar nueva tarea al state de tareas
      tarea.proyectoId = proyectoSelect.id;
      tarea.estado = false;
      agregarTarea(tarea);

      // Reiniciar el form
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
                  Agregar Tarea
               </button>
            </div>
         </form>
      </div>
   );
};

export default FormTask;
