import { React, useState } from "react";
import "./Login.css";
import flecha from "../../Img/position=left-1.svg";
import open from "../../Img/state=open.svg";
import close from "../../Img/state=closed.svg";
import { NavLink } from "react-router-dom";

function Login() {
  const [showPass, setShowPass] = useState(false);
  const [img, setImg] = useState(close);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [active, setActive] = useState("form");

  const inputContainer = () => {
    setInput1(event.target.value);
    setInput2(document.getElementById("password").value);
    if (input1.length > 4 && input2.length > 4) {
      setActive("standard");
    } else {
      setActive("form");
    }
  };

  const toggleCloseOpen = () => {
    setShowPass(!showPass);
    setImg(showPass ? close : open);
    console.log(showPass);
    event.preventDefault();
  };

  return (
    <div className="login-container">
      <div className="top-gradient"></div>
      <div className="margin-container">
        <header className="header">
          <NavLink to="/">
            <button className="btn-borderless">
              <img src={flecha} alt="flecha atras" />
            </button>
          </NavLink>
          <h1 className="i-Sesion-text">Iniciar Sesión</h1>
        </header>
        <form action="submit" className="form">
          <label htmlFor="username" className="login-text">
            Nombre de Usuario o E-mail:
          </label>
          <input
            onChange={inputContainer}
            type="text"
            name="username"
            id="username"
            className="input"
          />

          <label htmlFor="password" className="login-text">
            Contraseña:
          </label>

          <div className="div-input">
            <input
              onChange={inputContainer}
              type={showPass ? "text" : "password"}
              name="password"
              id="password"
              className="no-input"
            />
            <button className="btn-borderless" onClick={toggleCloseOpen}>
              <img src={img} alt="" />
            </button>
          </div>

          <button type="submit" className={` btn-${active} white-text`}>
            Iniciar Sesión
          </button>
        </form>
        <button className="i-Sesion-text btn-borderless">
          ¿Olvidaste tu contraseña?
        </button>
      </div>
    </div>
  );
}

export default Login;
