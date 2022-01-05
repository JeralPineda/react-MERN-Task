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
                  {/* <label htmlFor="email">Email</label> */}
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
                  {/* <label htmlFor="email">Password</label> */}
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

               <div className="row-btn">
                  <div className="google-btn">
                     <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                     </div>
                     <p className="btn-text">
                        <b>Ingresar con Google</b>
                     </p>
                  </div>

                  <div className="google-btn">
                     <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/640px-Font_Awesome_5_brands_github.svg.png" alt="google button" />
                     </div>
                     <p className="btn-text">
                        <b>Ingresar con GitHub</b>
                     </p>
                  </div>
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
