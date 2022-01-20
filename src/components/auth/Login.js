import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGoogleLogin } from 'react-google-login';

import AlertaContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/auth/authContext';

const Login = () => {
   //Extraer los valores del context
   const alertaContext = useContext(AlertaContext);

   const { alerta, mostrarAlerta } = alertaContext;

   const authContext = useContext(AuthContext);
   const { mensaje, autenticado, iniciarSesion } = authContext;

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
      if (email.trim() === '' || password.trim() === '') {
         mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
         return;
      }

      //Pasar al action
      iniciarSesion({ email, password });

      // Limpiamos el formulario
      setUsuario({
         email: '',
         password: '',
      });
   };

   const onSuccess = (res) => {
      console.log(res.accessToken);
   };
   const onFailure = (res) => {
      console.log(res);
   };

   const { signIn } = useGoogleLogin({
      onSuccess,
      onFailure,
      clientId: process.env.REACT_APP_CLIENT_ID_GOOGLE,
      isSignedIn: true,
      accessType: 'offline',
   });

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

               {/* Boton de google */}
               <div className="google-btn" onClick={signIn}>
                  <div className="google-icon-wrapper">
                     <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                  </div>
                  <p className="btn-text">
                     <b>Acceder con GitHub</b>
                  </p>
               </div>

               {/* Boton de Github */}
               <div className="google-btn">
                  <div className="google-icon-wrapper">
                     <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/640px-Font_Awesome_5_brands_github.svg.png" alt="google button" />
                  </div>
                  <p className="btn-text">
                     <b>Acceder con GitHub</b>
                  </p>
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
