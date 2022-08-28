import React from "react";
import { useNavigate } from "react-router-dom";
import "./Eliminado.css";

const Eliminado = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 1000);

  return (
    <div>
      <h1 className="h1">Proyecto Eliminado</h1>
      <div className="image">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F17%2F2e%2F48%2F172e4866194b906db05252de46e3ce22.jpg&f=1&nofb=1"
          alt="anime"
        />
      </div>
    </div>
  );
};

export default Eliminado;
