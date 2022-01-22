import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import Projects from '../components/projects/Projects';

const AppRouter = () => {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/nueva-cuenta" element={<Signup />} />
            <Route path="/proyectos" element={<Projects />} />
         </Routes>
      </Router>
   );
};

export default AppRouter;
