import { useReducer } from 'react';

import alertaReducer from './alertReducer';
import alertaContext from './alertContext';

import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../../types';

const AlertaState = ({ children }) => {
   const initialState = {
      alerta: null,
   };

   // Crear dispatch y state
   const [state, dispatch] = useReducer(alertaReducer, initialState);

   // Funciones
   const mostrarAlerta = (msg, categoria) => {
      dispatch({
         type: MOSTRAR_ALERTA,
         payload: {
            msg,
            categoria,
         },
      });

      setTimeout(() => {
         dispatch({
            type: OCULTAR_ALERTA,
         });
      }, 5000);
   };

   return (
      <alertaContext.Provider
         value={{
            alerta: state.alerta,
            mostrarAlerta,
         }}>
         {children}
      </alertaContext.Provider>
   );
};

export default AlertaState;
