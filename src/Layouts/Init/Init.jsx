import React from "react";
import "./Init.css";
import Logo from "../../Img/logo-large.svg";
function Init() {
  return (
    <div className="init-container">
      <div className="init-logo-texto">
        <img className="logo" src={Logo} alt="logo" />
        <p className="init-texto">Música a medida.</p>
      </div>
      <div className="btn-container">
        <button className="btn-standard width">Registrarse Gratis</button>
        <button className="btn-transparent width">Continuar con Google</button>
        <button className="btn-transparent width">Continuar con Apple</button>
        <button className="btn-transparent width">Iniciar Sesión</button>
      </div>
    </div>
  );
}

export default Init;
