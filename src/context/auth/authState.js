import { useReducer } from 'react';
import { fetchConToken, fetchSinToken } from '../../helpers/fetch';
import { LOGIN_ERROR, LOGIN_EXITOSO, OBTENER_USUARIO, REGISTRO_ERROR, REGISTRO_EXITOSO } from '../../types';

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

   //Registrar un nuevo usuario
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

         // obtener el usuario
         usuarioAutenticado();
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

   // Retorna el usuario autenticado
   const usuarioAutenticado = async () => {
      const resp = await fetchConToken('auth');

      const body = await resp.json();

      if (body.ok) {
         localStorage.getItem('token');
         dispatch({
            type: OBTENER_USUARIO,
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

   //Iniciar sesión con email y password
   const iniciarSesion = async (datos) => {
      const resp = await fetchSinToken('auth', datos, 'POST');

      const body = await resp.json();
      console.log(body);

      if (body.ok) {
         //  dispatch({
         //     type: LOGIN_EXITOSO,
         //  });
      } else {
         const alerta = {
            msg: body.msg,
            categoria: 'alerta-error',
         };

         dispatch({
            type: LOGIN_ERROR,
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
            iniciarSesion,
         }}>
         {children}
      </authContext.Provider>
   );
};

export default AuthState;
