import { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Project from './Project';

import proyectoContext from '../../context/projects/projectContext';
import AlertaContext from '../../context/alerts/alertContext';

const ListProjects = () => {
   // obtener los proyectos desde el state inicial context
   const proyectosContext = useContext(proyectoContext);
   const { proyectos, mensaje, obtenerProyectos, nodeRef } = proyectosContext;

   const alertaContext = useContext(AlertaContext);
   const { alerta, mostrarAlerta } = alertaContext;

   // Obtener proyectos cuando carga el componente
   useEffect(() => {
      if (mensaje) {
         mostrarAlerta(mensaje.msg, mensaje.categoria);
      }

      obtenerProyectos();
      // eslint-disable-next-line
   }, [mensaje]);

   if (proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;

   return (
      <ul className="listado-proyectos">
         {alerta ? (
            <div
               //
               className={`alerta ${alerta.categoria}`}>
               {alerta.msg}
            </div>
         ) : null}
         <TransitionGroup>
            {proyectos.map((proyecto) => (
               <CSSTransition
                  //
                  key={proyecto.id}
                  timeout={200}
                  nodeRef={nodeRef}
                  classNames="proyecto">
                  <Project proyecto={proyecto} />
               </CSSTransition>
            ))}
         </TransitionGroup>
      </ul>
   );
};

export default ListProjects;
