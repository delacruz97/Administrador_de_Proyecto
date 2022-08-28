import React, { useState } from "react";
import "./Card.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

function Card({ id, name, imagenn, description, priority }) {
  const [activo, setActivo] = useState(false);
  /*  const [actualizado, setActualizado] = useState(false); */
  const navigate = useNavigate();
  const eliminar = async () => {
    if (id) {
      await axios.delete(`http://localhost:4000/proyects/${id}`);
      setActivo(true);
    }
  };

  if (activo === true) {
    navigate("/eliminado");
  }

  const actualizar = async () => {
    swal("Oops", "No disponible momentaneamente!", "warning");
  };

  /* if (actualizado === true) {
    navigate("/actualizando");
    
  } */

  return (
    <div className="contenedor">
      <div className="botonConten">
        <button onClick={eliminar} className="boton">
          X
        </button>
      </div>
      <h1 className="nombre">{name} </h1>
      {/* ruta por id */}
      <Link to={`/proyects/${id}/tasks`}>
        <img
          src={imagenn}
          alt="algo"
          className="imagen"
          placeholder="Ver Tareas Asociadas"
        />
      </Link>

      <p className="descripcion">{description}</p>
      <p className="priority">{priority}</p>
      <div className="botonConten">
        <button onClick={actualizar} className="botonActualizar">
          Actualizar
        </button>
      </div>
    </div>
  );
}

export default Card;
