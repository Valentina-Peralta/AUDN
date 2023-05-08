import React from "react";
import "./Init.css";
import Logo from "../../Img/logo-large.svg";
import LgoGoogle from "../../Img/google-logo.svg";
import LgoApple from "../../img/apple-logo.svg";
import { NavLink } from "react-router-dom";
function Init() {
  return (
    <div className="init-container">
      <section className="init-logo-texto">
        <img className="logo" src={Logo} alt="logo" />
        <p className="init-texto">Música a medida.</p>
      </section>
      <section className="btn-container">
        <NavLink to="/register">
          <button className="white-text btn-standard width ">
            Registrarse Gratis
          </button>
        </NavLink>
        <button className="btn-transparent width">
          <img src={LgoGoogle} alt="logo google" /> Continuar con Google
        </button>
        <button className="btn-transparent width">
          <img src={LgoApple} alt="logo apple" /> Continuar con Apple
        </button>
        <NavLink to="/login">
          <button className="btn-transparent width i-Sesion">
            Iniciar Sesión
          </button>
        </NavLink>
      </section>
    </div>
  );
}

export default Init;
