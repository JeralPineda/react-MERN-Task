const FormTask = () => {
   return (
      <div className="formulario">
         <form action="">
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
