import { useReducer } from 'react';
import { fetchSinToken } from '../../helpers/fetch';
import { REGISTRO_ERROR, REGISTRO_EXITOSO } from '../../types';

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
   const registrarUsuario = async (datos) => {
      try {
         //    Petición login
         const resp = await fetchSinToken('usuarios', datos, 'POST');

         const body = await resp.json();

         console.log(body);

         dispatch({
            type: REGISTRO_EXITOSO,
         });
      } catch (error) {
         console.log(error);
         dispatch({
            type: REGISTRO_ERROR,
         });
      }
   };

   return (
      <authContext.Provider
         //
         value={{
            token: state.token,
            date: state.date,
            autenticado: state.autenticado,
            usuario: state.usuario,
            mensaje: state.mensaje,
            registrarUsuario,
         }}>
         {children}
      </authContext.Provider>
   );
};

export default AuthState;
