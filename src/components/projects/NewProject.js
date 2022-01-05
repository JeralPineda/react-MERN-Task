import { useState } from 'react';

const NewProject = () => {
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

      // Agregar al state

      // Limpiar el formulario
   };

   return (
      <>
         <button type="button" className="btn btn-block btn-primario">
            Nuevo Proyecto
         </button>

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
      </>
   );
};

export default NewProject;
