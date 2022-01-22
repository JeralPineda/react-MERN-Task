import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Projects from './components/projects/Projects';

import ProyectoState from './context/projects/projectState';
import TareaState from './context/tasks/tareaState';
import AlertaState from './context/alerts/alertState';
import AuthState from './context/auth/authState';
import AppRouter from './routers/AppRouter';

function TaskApp() {
   return (
      <ProyectoState>
         <TareaState>
            <AlertaState>
               <AuthState>
                  <AppRouter />
               </AuthState>
            </AlertaState>
         </TareaState>
      </ProyectoState>
   );
}

export default TaskApp;
