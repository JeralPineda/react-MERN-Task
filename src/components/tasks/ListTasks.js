import Task from './Task';

const ListTasks = () => {
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
         <h2>Proyecto: Tienda</h2>

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
      </>
   );
};

export default ListTasks;
