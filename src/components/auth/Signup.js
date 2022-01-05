import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
   // State para iniciar sesión
   const [usuario, setUsuario] = useState({
      nombre: '',
      email: '',
      password: '',
      confirmar: '',
   });

   // Extraer usuario
   const { nombre, email, password, confirmar } = usuario;

   const handleChange = (e) => {
      setUsuario({
         ...usuario,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      //Validar el formulario

      // Password mínimo de 6 caracteres

      // Los 2 password son iguales

      //Pasar al action
   };

   return (
      <div className="form-usuario">
         <div className="contenedor-form sombra-dark">
            <h1>Obtener una Cuenta</h1>

            <form onSubmit={handleSubmit}>
               <div className="campo-form">
                  <input
                     //
                     type="text"
                     id="nombre"
                     name="nombre"
                     placeholder="Tu Nombre"
                     value={nombre}
                     onChange={handleChange}
                  />
               </div>

               <div className="campo-form">
                  <input
                     //
                     type="email"
                     id="email"
                     name="email"
                     placeholder="Tu Email"
                     value={email}
                     onChange={handleChange}
                  />
               </div>

               <div className="campo-form">
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
                  <input
                     //
                     type="password"
                     id="confirmar"
                     name="confirmar"
                     placeholder="Confirmar Password"
                     value={confirmar}
                     onChange={handleChange}
                  />
               </div>

               <div className="campo-form">
                  <button type="submit" className="btn btn-primario btn-block">
                     Crear Cuenta
                  </button>
               </div>

               <div className="row-btn">
                  <div className="google-btn">
                     <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                     </div>
                     <p className="btn-text">
                        <b>Crear con Google</b>
                     </p>
                  </div>

                  <div className="google-btn">
                     <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/640px-Font_Awesome_5_brands_github.svg.png" alt="google button" />
                     </div>
                     <p className="btn-text">
                        <b>Crear con GitHub</b>
                     </p>
                  </div>
               </div>
            </form>

            <Link to="/" className="enlace-cuenta">
               Volver a Iniciar Sesión
            </Link>
         </div>
      </div>
   );
};

export default Signup;
