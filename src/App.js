/* import React from "react";
import Home from "./components/home/Home";

const App = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
 */

import React from "react";
import Home from "./components/home/Home";
import Formulario from "./components/Formulario";
import FormularioTasks from "./components/FormularioTasks";
import RelacionarProyecto from "./components/Relacionarproyecto";
import Eliminado from "./components/Eliminado";
import Actualizado from "./components/Actualizado";
// import Relaciont from "./components/Relaciont";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/formularioTasks" element={<FormularioTasks />} />
          <Route
            path="proyects/:id/tasks"
            element={<RelacionarProyecto />}
            exact
          />
          <Route path="/eliminado" element={<Eliminado />} />
          <Route path="/actualizando" element={<Actualizado />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
