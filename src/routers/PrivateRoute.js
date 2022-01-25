import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import AuthContext from '../context/auth/authContext';

export const PrivateRoute = ({ children }) => {
   const authContext = useContext(AuthContext);
   const { autenticado } = authContext;

   return autenticado ? children : <Navigate to="/" />;
};
