import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import { Page404 } from '../components/pages/Page404';
import Projects from '../components/projects/Projects';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const AppRouter = () => {
   return (
      <Router>
         <Routes>
            <Route path="*" element={<Page404 />} />

            <Route
               path="/"
               element={
                  <PublicRoute>
                     <Login />
                  </PublicRoute>
               }
            />

            <Route
               path="/nueva-cuenta"
               element={
                  <PublicRoute>
                     <Signup />
                  </PublicRoute>
               }
            />

            <Route
               path="/proyectos"
               element={
                  <PrivateRoute>
                     <Projects />
                  </PrivateRoute>
               }
            />
         </Routes>
      </Router>
   );
};

export default AppRouter;
