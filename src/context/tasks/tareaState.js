import { useReducer, useRef } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import { TAREAS_PROYECTO, AGREGAR_TAREA, VALIDAR_TAREA, ELIMIANAR_TAREA, ESTADO_TAREA, TAREA_ACTUAL } from '../../types';

const TareaState = ({ children }) => {
   const initialState = {
      tareas: [
         {
            id: 1,
            nombre: 'Elegir Plataforma',
            estado: true,
            proyectoId: 1,
         },
         {
            id: 2,
            nombre: 'Elegir Colores',
            estado: false,
            proyectoId: 2,
         },
         {
            id: 3,
            nombre: 'Elegir Hosting',
            estado: false,
            proyectoId: 3,
         },
         {
            id: 4,
            nombre: 'Elegir Plataforma',
            estado: true,
            proyectoId: 1,
         },
         {
            id: 5,
            nombre: 'Elegir Colores',
            estado: false,
            proyectoId: 2,
         },
         {
            id: 6,
            nombre: 'Elegir Hosting',
            estado: false,
            proyectoId: 3,
         },
      ],
      tareasproyecto: null,
      errortarea: false,
      tareaseleccionada: null,
   };

   // Crear dispatch y state
   const [state, dispatch] = useReducer(TareaReducer, initialState);

   // Crear las funciones

   // Obtener las tareas de un proyecto
   const obtenerTareas = (proyectoId) => {
      dispatch({
         type: TAREAS_PROYECTO,
         payload: proyectoId,
      });
   };

   // Agregar una tarea al proyecto seleccionado
   const agregarTarea = (tarea) => {
      dispatch({
         type: AGREGAR_TAREA,
         payload: tarea,
      });
   };

   // Valida y muestra un error en caso de que sea necesario
   const validarTarea = () => {
      dispatch({
         type: VALIDAR_TAREA,
      });
   };

   // Eliminar una tarea por id
   const eliminarTarea = (id) => {
      dispatch({
         type: ELIMIANAR_TAREA,
         payload: id,
      });
   };

   // Cambia el estado de cada tarea
   const cambiarEstadoTarea = (tarea) => {
      dispatch({
         type: ESTADO_TAREA,
         payload: tarea,
      });
   };

   // Extraer una tarea para edición
   const guardarTareaActual = (tarea) => {
      dispatch({
         type: TAREA_ACTUAL,
         payload: tarea,
      });
   };

   // Referencia al dom, para el error de strict mode react dom
   const nodeRef = useRef(null);

   return (
      <TareaContext.Provider
         //
         value={{
            tareas: state.tareas,
            tareasproyecto: state.tareasproyecto,
            errortarea: state.errortarea,
            tareaseleccionada: state.tareaseleccionada,
            nodeRef,
            obtenerTareas,
            agregarTarea,
            validarTarea,
            eliminarTarea,
            cambiarEstadoTarea,
            guardarTareaActual,
         }}>
         {children}
      </TareaContext.Provider>
   );
};

export default TareaState;
