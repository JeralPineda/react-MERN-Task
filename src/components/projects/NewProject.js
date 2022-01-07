import { useContext, useState } from 'react';

import proyectoContext from '../../context/projects/projectContext';

const NewProject = () => {
   // Obtener el state del formulario
   const proyectosContext = useContext(proyectoContext);
   const { formulario, mostrarFormulario, agregarProyecto } = proyectosContext;

   // State del proyecto
   const [proyecto, setProyecto] = useState({
      nombre: '',
   });

   const handleChange = (e) => {
      setProyecto({
         ...proyecto,
         [e.target.name]: e.target.value,
      });
   };

   // Extraer el nombre del state
   const { nombre } = proyecto;

   const handleSubmit = (e) => {
      e.preventDefault();

      // Validar el proyecto
      if (nombre === '') return;

      // Agregar al state
      agregarProyecto(proyecto);

      // Limpiar el formulario
      setProyecto({
         nombre: '',
      });
   };

   // Mostrar el formulario
   const handleClickForm = () => {
      mostrarFormulario();
   };

   return (
      <>
         <button
            //
            type="button"
            className="btn btn-block btn-primario"
            onClick={handleClickForm}>
            Nuevo Proyecto
         </button>

         {formulario ? (
            <form
               //
               className="formulario-nuevo-proyecto"
               onSubmit={handleSubmit}>
               <input
                  //
                  type="text"
                  className="input-text"
                  placeholder="Nombre Proyecto"
                  name="nombre"
                  value={nombre}
                  onChange={handleChange}
               />

               <button type="submit" className="btn btn-block btn-primario">
                  Agregar Proyecto
               </button>
            </form>
         ) : null}
      </>
   );
};

export default NewProject;
