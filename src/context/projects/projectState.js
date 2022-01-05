import { useReducer } from 'react';

import proyectoContext from './projectContext';
import proyectoReducer from './projectReducer';

const ProyectoState = ({ children }) => {
   const initialState = {
      formulario: false,
   };

   // Dispatch para ejecutar las acciones
   const [state, dispatch] = useReducer(proyectoReducer, initialState);

   // Serie de funciones para el CRUD

   return (
      <proyectoContext.Provider
         //
         value={{
            formulario: state.formulario,
         }}>
         {children}
      </proyectoContext.Provider>
   );
};

export default ProyectoState;
