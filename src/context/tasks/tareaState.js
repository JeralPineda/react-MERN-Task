import { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

const TareaState = ({ children }) => {
   const initialState = {
      tareas: [
         {
            nombre: 'Elegir Plataforma',
            estado: true,
            proyectoId: 1,
         },
         {
            nombre: 'Elegir Colores',
            estado: false,
            proyectoId: 2,
         },
         {
            nombre: 'Elegir Hosting',
            estado: false,
            proyectoId: 3,
         },
         {
            nombre: 'Elegir Plataforma',
            estado: true,
            proyectoId: 1,
         },
         {
            nombre: 'Elegir Colores',
            estado: false,
            proyectoId: 2,
         },
         {
            nombre: 'Elegir Hosting',
            estado: false,
            proyectoId: 3,
         },
      ],
   };

   // Crear dispatch y state
   const [state, dispatch] = useReducer(TareaReducer, initialState);

   return (
      <TareaContext.Provider
         //
         value={{
            tareas: state.tareas,
         }}>
         {children}
      </TareaContext.Provider>
   );
};

export default TareaState;
