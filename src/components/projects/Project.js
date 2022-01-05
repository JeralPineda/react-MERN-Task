import React from 'react';

const Project = ({ proyecto }) => {
   return (
      <li>
         <button
            //
            type="button"
            className="btn btn-blank">
            {proyecto.nombre}
         </button>
      </li>
   );
};

export default Project;
