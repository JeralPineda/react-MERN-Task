import { useReducer } from 'react';
import { fetchSinToken } from '../../helpers/fetch';
import { REGISTRO_ERROR, REGISTRO_EXITOSO } from '../../types';

import authContext from './authContext';
import AuthReducer from './authReducer';

const AuthState = ({ children }) => {
   const initialState = {
      token: localStorage.getItem('token'),
      autenticado: null,
      usuario: null,
      mensaje: null,
   };

   const [state, dispatch] = useReducer(AuthReducer, initialState);

   //Las Funciones
   const registrarUsuario = async (datos) => {
      //    Petición login
      const resp = await fetchSinToken('usuarios', datos, 'POST');

      const body = await resp.json();

      if (body.ok) {
         localStorage.getItem('token');

         dispatch({
            type: REGISTRO_EXITOSO,
            payload: body,
         });
      } else {
         const alerta = {
            msg: body.msg,
            categoria: 'alerta-error',
         };

         dispatch({
            type: REGISTRO_ERROR,
            payload: alerta,
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
