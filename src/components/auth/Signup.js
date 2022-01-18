import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import AlertaContext from '../../context/alerts/alertContext';

const Signup = () => {
   //Extraer los valores del context
   const alertaContext = useContext(AlertaContext);

   const { alerta, mostrarAlerta } = alertaContext;

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
      if (nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirmar.trim === '') {
         mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
      }

      // Password mínimo de 6 caracteres

      // Los 2 password son iguales

      //Pasar al action
   };

   return (
      <div className="form-usuario">
         {alerta ? (
            <div
               //
               className={`alerta ${alerta.categoria}`}>
               {alerta.msg}
            </div>
         ) : null}
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
            </form>

            <Link to="/" className="enlace-cuenta">
               Volver a Iniciar Sesión
            </Link>
         </div>
      </div>
   );
};

export default Signup;
