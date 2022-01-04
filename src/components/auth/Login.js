import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
   // State para iniciar sesión
   const [usuario, setUsuario] = useState({
      email: '',
      password: '',
   });

   // Extraer usuario
   const { email, password } = usuario;

   const handleChange = (e) => {
      setUsuario({
         ...usuario,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      //Validar el formulario

      //Pasar al action
   };

   return (
      <div className="form-usuario">
         <div className="contenedor-form sombra-dark">
            <h1>Iniciar Sesión</h1>

            <form onSubmit={handleSubmit}>
               <div className="campo-form">
                  <label htmlFor="email">Email</label>
                  <input
                     //
                     type="email"
                     id="name"
                     name="email"
                     placeholder="Tu Email"
                     value={email}
                     onChange={handleChange}
                  />
               </div>

               <div className="campo-form">
                  <label htmlFor="email">Password</label>
                  <input
                     //
                     type="password"
                     id="password"
                     name="password"
                     placeholder="Tu Password"
                     value={password}
                     onChange={handleChange}
                  />
               </div>

               <div className="campo-form">
                  <button type="submit" className="btn btn-primario btn-block">
                     Iniciar Sesión
                  </button>
               </div>
            </form>

            <Link to="/nueva-cuenta" className="enlace-cuenta">
               Crear Cuenta
            </Link>
         </div>
      </div>
   );
};

export default Login;
