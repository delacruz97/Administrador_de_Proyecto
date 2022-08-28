import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postTask, getTareas, getProyectos } from "../redux/actions/actions";
import { Link } from "react-router-dom";
import "./Formulario.css";
import swal from "sweetalert";
/* 
import React, { useState, useEffect } from "react";
import { postCharacter, getEpisodes } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import {useHistory} from 'react-router-dom' */

export default function Formulario() {
  const dispatch = useDispatch();
  // const history = useHistory()
  const proyectos = useSelector((state) => state.proyectos);
  const [input, setInput] = useState({
    name: "",
    description: "",
    proyectId: "",
    proyectos: [],
  });

  useEffect(() => {
    dispatch(getProyectos());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTareas());
  }, [dispatch]);

  const handleChange = (e) => {
    // const {name, value} = e.target
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postTask(input));
    swal("Exelente", "Tarea Creada Exitosamente!", "success");
    setInput({
      name: "",
      description: "",
      proyectId: "",
      proyectos: [],
    });
    // history.push('/characters')
  };
  // console.log(input)
  return (
    <>
      <Link to="/">
        <button className="btnVolver">Volver</button>
      </Link>
      <div className="container">
        <h1 className="h1">Crea tu Tarea</h1>
        {/* <br></br> */}

        <form className="formulario" onSubmit={(e) => handleSubmit(e)}>
          <div>
            {/* <label>Nombre</label> */}
            <br />
            <input
              className="input"
              type="text"
              value={input.name}
              name="name"
              onChange={(e) => handleChange(e)}
              placeholder="Nombre"
            />
          </div>
          <br />
          <div>
            {/* <label>Descripcion</label> */}
            <input
              className="input"
              type="text"
              value={input.description}
              name="description"
              onChange={(e) => handleChange(e)}
              placeholder="Description"
            />
          </div>
          <br />

          <div>
            {/* <label>proyectId</label> */}
            <input
              className="input"
              type="number"
              value={input.proyectId}
              name="proyectId"
              onChange={(e) => handleChange(e)}
              placeholder="Asociado a Proyecto Nº"
            />
          </div>
          <h3>Proyectos disponibles</h3>
          <select>
            {proyectos.map((e) => (
              <option value={e.id}>
                {e.name} - Nº {e.id}
              </option>
            ))}
          </select>

          <br />

          <button className="btne" type="submit">
            Agregar
          </button>
        </form>
      </div>
    </>
  );

  //e tiene una propiedad que es target,  e.target tiene propiedades
  //onchange = es el que va a estar pendiente de lo que pase detro del input
}
