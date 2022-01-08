import { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Project from './Project';

import proyectoContext from '../../context/projects/projectContext';

const ListProjects = () => {
   // obtener los proyectos desde el state inicial context
   const proyectosContext = useContext(proyectoContext);
   const { proyectos, obtenerProyectos, nodeRef } = proyectosContext;

   // Obtener proyectos cuando carga el componente
   useEffect(() => {
      obtenerProyectos();
      // eslint-disable-next-line
   }, []);

   if (proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;

   return (
      <ul className="listado-proyectos">
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
