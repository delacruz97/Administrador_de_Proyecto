import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <h1 className="titulo7">Administrador de Proyectos ⛏</h1>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/formulario">
            <button type="button" class="btn btn-success">
              new project
            </button>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/formularioTasks">
            <button type="button" class="btn btn-success">
              add new task
            </button>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <button type="button" class="nav-link disabled">
              Perfil
            </button>
          </a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled">Reloj</a>
        </li> */}
      </ul>
    </div>
  );
};

export default Navbar;
