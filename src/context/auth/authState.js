import { useReducer } from 'react';

import authContext from './authContext';
import AuthReducer from './authReducer';

const AuthState = ({ children }) => {
   const initialState = {
      token: localStorage.getItem('token'),
      date: localStorage.getItem('token-init-date'), //fecha en que se creo el token
      autenticado: null,
      usuario: null,
      mensaje: null,
   };

   const [state, dispatch] = useReducer(AuthReducer, initialState);

   //Las Funciones

   return (
      <authContext.Provider
         //
         value={{
            token: state.token,
            date: state.date,
            autenticado: state.autenticado,
            usuario: state.usuario,
            mensaje: state.mensaje,
         }}>
         {children}
      </authContext.Provider>
   );
};

export default AuthState;
