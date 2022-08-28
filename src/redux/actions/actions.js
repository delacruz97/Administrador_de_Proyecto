import axios from "axios";
import { useParams } from "react-router-dom";

export const GET_PROYECTOS = "GET_PROYECTOS";
export const POST_PROYECTOS = "POST_PROYECTOS";
export const GET_TAREAS = "GET_TAREAS";
export const RELACION_PROYECTO_TAREA = "RELACION_PROYECTO_TAREA";

//esta funcion es para obtener todos los proyectos

export const getProyectos = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:4000/proyects");

    return dispatch({
      type: GET_PROYECTOS,
      payload: res.data,
    });
  };
};

export const postProyecto = (character) => {
  return async (dispatch) => {
    /* const json =  */ await axios.post(
      "http://localhost:4000/proyects",
      character
    );
    /* return dispatch({
      type: POST_CHARACTER,
      payload: json.data,
    }); */
  };
};

//http://localhost:3000/tasks
export const getTareas = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:4000/tasks");
    return dispatch({
      type: GET_TAREAS,
      payload: res.data,
    });
  };
};

/* export default getProyectos;
 */
//http://localhost:4000/tasks
export const postTask = (task) => {
  return async (dispatch) => {
    await axios.post("http://localhost:4000/tasks", task);
  };
};

export const relacionarProyecto = () => {
  return async (dispatch) => {
    const { id } = useParams();
    const res = await axios.get(`http://localhost:4000/proyects/${id}/tasks`);
    return dispatch({
      type: RELACION_PROYECTO_TAREA,
      payload: res.data[0],
    });
  };
};
