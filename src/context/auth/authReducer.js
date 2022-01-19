import { REGISTRO_EXITOSO, REGISTRO_ERROR, OBTENER_USUARIO, LOGIN_EXITOSO, LOGIN_ERROR, CERRAR_SESION, LOGIN_GITHUB, LOGIN_GITHUB_ERROR, LOGIN_GOOGLE, LOGIN_GOOGLE_ERROR } from '../../types';

const authReducer = (state, action) => {
   switch (action.type) {
      case REGISTRO_EXITOSO:
         localStorage.setItem('token', action.payload.token);

         return {
            ...state,
            autenticado: true,
            mensaje: null,
         };
      case REGISTRO_ERROR:
         return {
            ...state,
            token: null,
            mensaje: action.payload,
         };
      case OBTENER_USUARIO:
         localStorage.setItem('token', action.payload.token);

         return {
            ...state,
            usuario: {
               name: action.payload.name,
               id: action.payload.id,
            },
         };
      case LOGIN_ERROR:
         localStorage.removeItem('token');
         return {
            ...state,
            token: null,
         };

      default:
         return state;
   }
};

export default authReducer;
