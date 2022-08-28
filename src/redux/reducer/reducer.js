import {
  GET_PROYECTOS,
  GET_TAREAS,
  RELACION_PROYECTO_TAREA,
} from "../actions/actions";

const initialState = {
  proyectos: [],
  tareas: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROYECTOS:
      return {
        ...state,
        proyectos: action.payload,
      };
    case GET_TAREAS:
      return {
        ...state,
        tareas: action.payload,
      };
    case RELACION_PROYECTO_TAREA:
      //comparar el id del proyecto con el id de la tarea y asignarle el id del proyecto a la tarea
      return {
        ...state,
        tareas: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
