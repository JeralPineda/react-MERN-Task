import { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

const TareaState = ({ children }) => {
   const initialState = {
      tareas: [],
   };

   // Crear dispatch y state
   const [state, dispatch] = useReducer(TareaReducer, initialState);

   return (
      <TareaContext.Provider
         //
         value={
            {
               //
            }
         }>
         {children}
      </TareaContext.Provider>
   );
};

export default TareaState;
