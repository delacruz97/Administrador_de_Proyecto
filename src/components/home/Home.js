import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProyectos } from "../../redux/actions/actions";
import { Link } from "react-router-dom";

import Card from "../Card";
import "./Home.css";
import Navbar from "../Navbar";

const Home = () => {
  const dispatch = useDispatch();
  const allProyectos = useSelector((state) => state.proyectos);

  useEffect(() => {
    dispatch(getProyectos());
  }, [dispatch]);
  console.log(allProyectos);
  return (
    <div>
      <div>
        <Navbar />
      </div>

      {/* <div>
        <Link to="/formulario">
          <button className="btn">Agregar personaje</button>
        </Link>
      </div> */}

      <div className="card">
        {allProyectos ? (
          allProyectos.map((e) => {
            return (
              <>
                <Card
                  id={e.id}
                  name={e.name}
                  imagenn={e.imagen}
                  description={e.description}
                  priority={e.priority}
                />
              </>
            );
          })
        ) : (
          <h2 className="center">loading...</h2>
        )}
      </div>
    </div>
  );
};

export default Home;
