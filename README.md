# MERN TASK APP

Aplicación para crear tareas y proyectos

-  Inicio de sesión con email y password
-  GitHub Oauth
-  Google Oauth
-  Context API
-  JsonWebToken

## Instalación

Clonar repositorio

```
git clone git@github.com:JeralPineda/react-MERN-Task-client.git

```

Navegar al directorio de la app clonada y ejecutar

```
npm install
```

Crear un archivo **.env** para las variables de entorno

Variables de entorno necesarias para la app:

```

REACT_APP_API_URL=

REACT_APP_CLIENT_ID_GOOGLE=

REACT_APP_GITHUB_CLIENT_ID=
REACT_APP_GITHUB_CLIENT_SECRET=
REACT_APP_GITHUB_AUTORIZE_URI=
REACT_APP_GITHUB_REDIRECT_URI=

```

-  **REACT_APP_API_URL=http://localhost:4000/api** URL de la API creada en el BackEnd

-  **REACT_APP_CLIENT_ID_GOOGLE** Client ID de Google para el login

-  **REACT_APP_GITHUB_CLIENT_ID** Client ID de GitHub para el login

-  **REACT_APP_GITHUB_CLIENT_SECRET** Client Secret de GitHub para el login

-  **REACT_APP_GITHUB_AUTORIZE_URI** URL para autorizar login con GitHub, parte del BackEnd

-  **REACT_APP_GITHUB_REDIRECT_URI** URL para redireccionar login con GitHub, parte del FrontEnd

## BackEnd

[Link BackEnd](https://github.com/JeralPineda/react-MERN-Task-server)
