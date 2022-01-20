import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AlertaContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/auth/authContext';

const Signup = () => {
   //Extraer los valores del context
   const alertaContext = useContext(AlertaContext);

   const { alerta, mostrarAlerta } = alertaContext;

   const authContext = useContext(AuthContext);
   const { mensaje, autenticado, registrarUsuario } = authContext;

   let history = useNavigate();

   // En caso de que el usuario se halla autenticado, registrado o duplicado
   useEffect(() => {
      if (autenticado) {
         history('/proyectos');
      }

      if (mensaje) {
         mostrarAlerta(mensaje.msg, mensaje.categoria);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [mensaje, autenticado, history]);

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
      if (nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirmar.trim() === '') {
         mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
         return;
      }

      // Password mínimo de 6 caracteres
      if (password.length < 6) {
         mostrarAlerta('El password debe contener al menos 6 caracteres', 'alerta-error');
         return;
      }

      // Los 2 password son iguales
      if (password !== confirmar) {
         mostrarAlerta('Los password no son iguales', 'alerta-error');
         return;
      }

      //Pasar al action
      registrarUsuario({ nombre, email, password });

      // Limpiamos el formulario
      setUsuario({
         nombre: '',
         email: '',
         password: '',
         confirmar: '',
      });
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
