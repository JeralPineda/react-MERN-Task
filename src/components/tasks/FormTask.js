import { useContext } from 'react';
import proyectoContext from '../../context/projects/projectContext';

const FormTask = () => {
   // Obtener el state de proyectos
   const proyectosContext = useContext(proyectoContext);
   const { proyecto } = proyectosContext;

   // Si no hay proyecto seleccionado
   if (!proyecto) return null;

   // Extrayendo el proyecto seleccionado
   const [proyectoSelect] = proyecto;

   const handleSubmit = (e) => {
      e.preventDefault();

      // Validar

      // Pasar la validación

      // Agregar nueva tarea al state de tareas

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
