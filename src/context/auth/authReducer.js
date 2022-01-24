import { REGISTRO_EXITOSO, REGISTRO_ERROR, OBTENER_USUARIO, LOGIN_EXITOSO, LOGIN_ERROR, CERRAR_SESION, LOGIN_GITHUB, LOGIN_GITHUB_ERROR, LOGIN_GOOGLE, LOGIN_GOOGLE_ERROR } from '../../types';

const authReducer = (state, action) => {
   switch (action.type) {
      case REGISTRO_EXITOSO:
      case LOGIN_EXITOSO:
      case LOGIN_GOOGLE:
      case LOGIN_GITHUB:
         localStorage.setItem('token', action.payload.token);

         return {
            ...state,
            autenticado: true,
            mensaje: null,
         };
      case LOGIN_ERROR:
      case REGISTRO_ERROR:
      case LOGIN_GOOGLE_ERROR:
      case LOGIN_GITHUB_ERROR:
         return {
            ...state,
            token: null,
            mensaje: action.payload,
         };
      case OBTENER_USUARIO:
         localStorage.setItem('token', action.payload.token);

         return {
            ...state,
            autenticado: true,
            usuario: {
               name: action.payload.name,
               id: action.payload.id,
            },
         };

      default:
         return state;
   }
};

export default authReducer;
