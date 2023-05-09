import React from 'react'
import "./Register2.css";
import {useState} from 'react'
import open from "../../Img/state=open.svg";
import close from "../../Img/state=closed.svg";

function Register2() {
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
    <div className="register2-container">
      <div className="top-gradient"></div>

      <div className="margin-container">

      <div className='top-nav-bar'>  
      <button className="left-icon-placeholder" onClick={() => window.history.back()}><img src="src\Img\position=left-1.svg" alt="backArrow" /></button>
      <h1 className='title-placeholder'>Crear Cuenta</h1>
      </div>

        <form action="submit" className="form">

          <h1 className='ingresa-un-nombre'>Ingresa un nombre de usuario y contraseña.</h1>

          <div className='input-2'>
          <label htmlFor="username" className="login-text">
            Nombre de Usuario:
          </label>
          <input
            onChange={inputContainer}
            type="text"
            name="username"
            id="username"
            className="input"
          />
          </div>

          <div className='input-3'>
          <label htmlFor="password" className="login-text">
            Contraseña:
          </label>
          <p className='hint-placeholder'>Deberás poder confirmalo luego.</p>

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

          </div>

          <div className="checkbox">
            estoy haciendo el checkbox
          </div>

          <button type="submit" className={` btn-${active} white-text`}>
            Continuar
          </button>

        </form>
      </div>
    </div>
  );
}

export default Register2