import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Relacionarpro.css";

function Relacionarproyecto() {
  //console.log(useParams());
  const { id } = useParams();

  const [Personaje, setPersonaje] = useState([], false);
  const [loader, setLoader] = useState(false);
  console.log(Personaje);

  useEffect(() => {
    const obtenerPersonaje = async () => {
      try {
        const resultado = await axios.get(
          `http://localhost:4000/proyects/${id}/tasks`
        );

        setPersonaje(resultado.data);
        setLoader(true);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerPersonaje();
  }, [id, Personaje]);
  /* <div className="relacion">{Personaje.join("          ")}</div> */

  return (
    <div>
      <Link to="/">
        <button className="btnVolver">Volver</button>
      </Link>
      <h1 className="titulo"> Tareas Asociadas</h1>

      {loader ? (
        Personaje.map((e) => {
          return (
            <div className="relacion">
              <table className="relacion_t">
                <h2>⛏⛏ Tarea: {e.id}</h2>
              </table>
              <p className="texto">{e.name}</p>
              <div className="describe">
                <p className="h3">{e.description}</p>
              </div>
            </div>
          );
        })
      ) : (
        <h1 className="centrarh1">En Este Momento No hay Tareas Asociadas </h1>
      )}
    </div>
  );
}

export default Relacionarproyecto;
