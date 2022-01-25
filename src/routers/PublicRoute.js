import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import AuthContext from '../context/auth/authContext';

export const PublicRoute = ({ children }) => {
   const authContext = useContext(AuthContext);
   const { autenticado, usuarioAutenticado } = authContext;

   const token = localStorage.getItem('token');

   useEffect(() => {
      if (token) {
         usuarioAutenticado();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return autenticado ? <Navigate to="/proyectos" /> : children;
};
