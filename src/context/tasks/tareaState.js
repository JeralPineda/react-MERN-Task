import { useReducer, useRef } from 'react';

import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import { TAREAS_PROYECTO, AGREGAR_TAREA, VALIDAR_TAREA, ELIMIANAR_TAREA, TAREA_ACTUAL, ACTUALIZAR_TAREA, LIMPIAR_TAREA } from '../../types';
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
   const obtenerTareas = async (proyecto) => {
      const resp = await fetchConToken(`tareas/${proyecto}`);

      const body = await resp.json();

      if (body.ok) {
         dispatch({
            type: TAREAS_PROYECTO,
            payload: body.tareas,
         });
      } else {
         //
      }
   };

   // Agregar una tarea al proyecto seleccionado
   const agregarTarea = async (tarea) => {
      // Peticion a api/tareas
      const resp = await fetchConToken('tareas', tarea, 'POST');

      const body = await resp.json();

      if (body.ok) {
         dispatch({
            type: AGREGAR_TAREA,
            payload: body.tarea,
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
   const eliminarTarea = async (id, proyecto) => {
      const resp = await fetchConToken(`tareas/${id}`, { proyecto }, 'DELETE');

      const body = await resp.json();

      if (body.ok) {
         dispatch({
            type: ELIMIANAR_TAREA,
            payload: id,
         });
      } else {
         //
      }
   };

   // Editar una tarea
   const actualizarTarea = async (tarea) => {
      const resp = await fetchConToken(`tareas/${tarea.id}`, tarea, 'PUT');

      const body = await resp.json();

      dispatch({
         type: ACTUALIZAR_TAREA,
         payload: body.tarea,
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
            guardarTareaActual,
            actualizarTarea,
            limpiarTarea,
         }}>
         {children}
      </TareaContext.Provider>
   );
};

export default TareaState;
