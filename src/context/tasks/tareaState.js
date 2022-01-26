import { useReducer, useRef } from 'react';

import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import { TAREAS_PROYECTO, AGREGAR_TAREA, VALIDAR_TAREA, ELIMIANAR_TAREA, ESTADO_TAREA, TAREA_ACTUAL, ACTUALIZAR_TAREA, LIMPIAR_TAREA } from '../../types';
import { fetchConToken } from '../../helpers/fetch';

const TareaState = ({ children }) => {
   const initialState = {
      tareasproyecto: [],
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
   const agregarTarea = async (tarea) => {
      console.log(tarea);
      // Peticion a api/tareas
      const resp = await fetchConToken('tareas', tarea, 'POST');

      const body = await resp.json();
      console.log(body);

      if (body.ok) {
         dispatch({
            type: AGREGAR_TAREA,
            payload: tarea,
         });
      } else {
         console.log(body);
      }
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

   // Editar una tarea
   const actualizarTarea = (tarea) => {
      dispatch({
         type: ACTUALIZAR_TAREA,
         payload: tarea,
      });
   };

   // Eliminar la tarea seleccionada
   const limpiarTarea = () => {
      dispatch({
         type: LIMPIAR_TAREA,
      });
   };

   return (
      <TareaContext.Provider
         //
         value={{
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
            actualizarTarea,
            limpiarTarea,
         }}>
         {children}
      </TareaContext.Provider>
   );
};

export default TareaState;
