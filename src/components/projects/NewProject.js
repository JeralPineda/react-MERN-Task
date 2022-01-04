import React from 'react';

const NewProject = () => {
   return (
      <>
         <button type="button" className="btn btn-block btn-primario">
            Nuevo Proyecto
         </button>

         <form className="formulario-nuevo-proyecto">
            <input
               //
               type="text"
               className="input-text"
               placeholder="Nombre Proyecto"
               name="nombre"
            />

            <button type="submit" className="btn btn-block btn-primario">
               Agregar Proyecto
            </button>
         </form>
      </>
   );
};

export default NewProject;
