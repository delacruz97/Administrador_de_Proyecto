import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { postProyecto, getProyectos } from "../redux/actions/actions";
import { Link } from "react-router-dom";
import "./Formulario.css";
import swal from "sweetalert";
/* import "./Formulario.css"; */
/* 
import React, { useState, useEffect } from "react";
import { postCharacter, getEpisodes } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import {useHistory} from 'react-router-dom' */

export default function Formulario() {
  const dispatch = useDispatch();
  // const history = useHistory()
  const [input, setInput] = useState({
    name: "",
    description: "",
    priority: "",
    imagen: "",
  });

  useEffect(() => {
    dispatch(getProyectos());
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
    dispatch(postProyecto(input));
    swal("Exelente", "Proyecto Creado Exitosamente!", "success");
    setInput({
      name: "",
      description: "",
      priority: "",
      imagen: "",
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
        <h1 className="h1">Crea tu Proyecto</h1>
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
          <div>
            {/* <label>Description</label> */}
            <br />
            <input
              className="input"
              type="text"
              value={input.description}
              name="description"
              onChange={(e) => handleChange(e)}
              placeholder="description"
            />
          </div>
          <div>
            {/* <label>Priority</label> */}
            <br />
            <input
              className="input"
              type="text"
              value={input.priority}
              name="priority"
              onChange={(e) => handleChange(e)}
              placeholder="priority"
            />
          </div>
          <div>
            {/* <label>Imagen</label> */}
            <br />
            <input
              className="input"
              type="text"
              value={input.imagen}
              name="imagen"
              onChange={(e) => handleChange(e)}
              placeholder="Imagen/url"
            />
          </div>
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
