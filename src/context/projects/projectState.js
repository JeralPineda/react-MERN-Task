import { useReducer, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import proyectoContext from './projectContext';
import proyectoReducer from './projectReducer';
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS, VALIDAR_FORMULARIO, PROYECTO_ACTUAL, ELIMINAR_PROYECTO, AGREGAR_PROYECTO } from '../../types';
import { fetchConToken } from '../../helpers/fetch';

const ProyectoState = ({ children }) => {
   const proyectos = [
      {
         id: 1,
         nombre: 'Tienda Virtual',
      },
      {
         id: 2,
         nombre: 'Intranet',
      },
      {
         id: 3,
         nombre: 'Diseño de sitio web',
      },
   ];

   const initialState = {
      proyectos: [],
      formulario: false,
      errorformulario: false,
      proyecto: null,
   };

   // Dispatch para ejecutar las acciones
   const [state, dispatch] = useReducer(proyectoReducer, initialState);

   // Serie de funciones para el CRUD
   const mostrarFormulario = () => {
      dispatch({
         type: FORMULARIO_PROYECTO,
      });
   };

   // Obtener los proyectos
   const obtenerProyectos = () => {
      dispatch({
         type: OBTENER_PROYECTOS,
         payload: proyectos,
      });
   };

   // Agregar nuevo proyecto
   const agregarProyecto = async (proyecto) => {
      //    Petición login
      const resp = await fetchConToken('proyectos', proyecto, 'POST');

      const body = await resp.json();

      dispatch({
         type: AGREGAR_PROYECTO,
         payload: body,
      });
   };

   // Validar el formulario por errores
   const mostrarErrorProyecto = () => {
      dispatch({
         type: VALIDAR_FORMULARIO,
      });
   };

   // Selecciona el proyecto que el usuario dio click
   const proyectoActual = (proyectoId) => {
      dispatch({
         type: PROYECTO_ACTUAL,
         payload: proyectoId,
      });
   };

   // Eliminar un proyecto
   const eliminarProyecto = (proyectoId) => {
      dispatch({
         type: ELIMINAR_PROYECTO,
         payload: proyectoId,
      });
   };

   // Referencia al dom, para el error de strict mode react dom
   const nodeRef = useRef(null);

   return (
      <proyectoContext.Provider
         //
         value={{
            proyectos: state.proyectos,
            formulario: state.formulario,
            errorformulario: state.errorformulario,
            proyecto: state.proyecto,
            mostrarFormulario,
            obtenerProyectos,
            agregarProyecto,
            mostrarErrorProyecto,
            proyectoActual,
            eliminarProyecto,
            nodeRef,
         }}>
         {children}
      </proyectoContext.Provider>
   );
};

export default ProyectoState;
