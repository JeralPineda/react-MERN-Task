import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';

const Header = () => {
   //Extraer el usuario del authContext
   const authContext = useContext(AuthContext);
   const { usuario, usuarioAutenticado } = authContext;

   useEffect(() => {
      usuarioAutenticado();
   });

   return (
      <header className="app-header">
         {usuario ? (
            <p className="nombre-usuario">
               Hola <span>{usuario.name}</span>
            </p>
         ) : null}

         <nav className="nav-principal">
            <a href="#!">Cerrar Sesión</a>
         </nav>
      </header>
   );
};

export default Header;
