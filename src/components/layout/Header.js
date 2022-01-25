import React, { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';

const Header = () => {
   //Extraer el usuario del authContext
   const authContext = useContext(AuthContext);
   const { usuario, cerrarSesion } = authContext;

   //Cerrar la sesión
   const handleCerrarSesion = () => {
      cerrarSesion();
   };

   return (
      <header className="app-header">
         {usuario ? (
            <p className="nombre-usuario">
               Hola <span>{usuario.name}</span>
            </p>
         ) : null}

         <nav className="nav-principal">
            <button
               //
               className="btn btn-blank cerrar-sesion"
               onClick={handleCerrarSesion}>
               Cerrar Sesión
            </button>
         </nav>
      </header>
   );
};

export default Header;
