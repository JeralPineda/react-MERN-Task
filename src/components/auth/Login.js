import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGoogleLogin } from 'react-google-login';

import AlertaContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/auth/authContext';
import { authorizeUri, clientId, clientIdGitHub, redirectUri, cookie } from '../../helpers/config';

const Login = () => {
   //Extraer los valores del context
   const alertaContext = useContext(AlertaContext);

   const { alerta, mostrarAlerta } = alertaContext;

   const authContext = useContext(AuthContext);
   const { mensaje, autenticado, iniciarSesion, iniciarSesionGoogle, iniciarSesionGitHub } = authContext;

   let navigate = useNavigate();

   // Inicio de sesión con GitHub
   let url = window.location.href;
   let hasCode = url.includes('?token=');

   // En caso de que el usuario se halla autenticado, registrado o duplicado
   useEffect(() => {
      if (autenticado) {
         navigate('/proyectos');
      }

      if (mensaje) {
         mostrarAlerta(mensaje.msg, mensaje.categoria);
      }

      // Inicio de sesión con GitHub
      if (hasCode) {
         const tokenUrl = url.split('?token=');
         const token = tokenUrl[1];

         iniciarSesionGitHub(token);
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [mensaje, autenticado, hasCode, url, navigate]);

   // State para iniciar sesión con email y password
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

   // Funciones inicio sesión con google
   const onSuccess = (res) => {
      //construimos la data para el body
      const datos = {
         id_token: res.tokenId,
      };

      iniciarSesionGoogle(datos);
   };

   const onFailure = (res) => {
      //   res.details ? mostrarAlerta(res.details, 'alerta-error') : mostrarAlerta('Error al iniciar sesión con Google', 'alerta-error');

      if (!res.details) return mostrarAlerta('Error al iniciar sesión con Google', 'alerta-error');
   };

   console.log(cookie);

   const { signIn } = useGoogleLogin({
      onSuccess,
      onFailure,
      clientId,
      isSignedIn: false, //mantiene la sesión iniciada
      accessType: 'offline',
      cookiePolicy: cookie,
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

               {/* Botón de google */}
               <div className="google-btn" onClick={signIn}>
                  <div className="google-icon-wrapper">
                     <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                  </div>
                  <p className="btn-text">
                     <b>Acceder con GitHub</b>
                  </p>
               </div>

               {/* Botón de Github */}
               <a href={`${authorizeUri}?client_id=${clientIdGitHub}&redirect_uri=${redirectUri}`} className="google-btn">
                  <div className="google-icon-wrapper">
                     <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/640px-Font_Awesome_5_brands_github.svg.png" alt="google button" />
                  </div>
                  <p className="btn-text">
                     <b>Acceder con GitHub</b>
                  </p>
               </a>
            </form>

            <Link to="/nueva-cuenta" className="enlace-cuenta">
               Crear Cuenta
            </Link>
         </div>
      </div>
   );
};

export default Login;
