import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { relacionarProyecto } from "../../src/redux/actions/actions";

const Relaciont = () => {
  const dispatch = useDispatch();
  const allTareas = useSelector((state) => state.tareas);

  useEffect(() => {
    dispatch(relacionarProyecto());
  }, [dispatch]);
  console.log(allTareas);
  return (
    <div>
      <div>
        {allTareas ? (
          allTareas.map((e) => {
            return (
              <div>
                <div key={e.id}>name={e.name}</div>
              </div>
            );
          })
        ) : (
          <h2>loading...</h2>
        )}
      </div>
    </div>
  );
};

export default Relaciont;
