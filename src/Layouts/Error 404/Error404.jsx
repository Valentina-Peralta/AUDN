import React from "react";
import "./Error404.css";
import gif404 from "../../Img/404-404error.gif";
import { NavLink } from "react-router-dom";

function Error404() {
  return (
    <div className="error-container ">
      <div className="top-gradient"></div>
      <div className="margin">
        <div className="oops">Oops!</div>
        <h1 className="error-texth1">Error 404!</h1>
        <p className="error-text">Parece que esa página ha perdido el ritmo</p>
        <NavLink to="/home">
          <div className="btn-standard white-text btn-margin">
            Volver a la aplicación
          </div>
        </NavLink>
      </div>
      <img src={gif404} alt="gif" />
    </div>
  );
}

export default Error404;
