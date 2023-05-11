import { React, useState } from "react";
import "./Login.css";
import flecha from "../../Img/position=left-1.svg";
import open from "../../Img/state=open.svg";
import close from "../../Img/state=closed.svg";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
  const [showPass, setShowPass] = useState(false);
  const [img, setImg] = useState(close);
  const [active, setActive] = useState("form");
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');

  /*   const inputContainer = (event) => {
      setInput1(event.target.value);
      setInput2(document.getElementById("password").value);
      if (input1.length > 4 && input2.length > 4) {
        setActive("standard");
      } else {
        setActive("form");
      }
    }; */

  /*   if (email.length > 4 && password.length > 4) {
      setActive("standard");
    } else {
      setActive("form");
    } */

  console.log(email, password)
  const toggleCloseOpen = (event) => {
    setShowPass(!showPass);
    setImg(showPass ? close : open);
    console.log(showPass);
    event.preventDefault();
  };
  const navigate = useNavigate()

  const login = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "email": email,
      "password": password
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3001/api/users/login", requestOptions)
      .then(response => response.json())
      .then(result => {
        localStorage.setItem('token', result.token)
        localStorage.setItem('user_id', result.user.id)
        localStorage.setItem('user_name', result.user.name)
        localStorage.setItem('user_email', result.user.email)
        localStorage.setItem('user_user_name', result.user.user_name)
        localStorage.setItem('user_image', result.user.image)

        console.log(result)
        navigate('/home')
      })
      .catch(error => console.log(error));
  }


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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            id="username"
            className="input"
          />

          <label htmlFor="password" className="login-text">
            Contraseña:
          </label>

          <div className="div-input">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)} type={showPass ? "text" : "password"}
              name="password"
              id="password"
              className="no-input"
            />
            <button className="btn-borderless" onClick={toggleCloseOpen}>
              <img src={img} alt="" />
            </button>
          </div>

          <button
            type="button"
            onClick={login}
            className={` btn-${active} white-text`}>
            Iniciar Sesión
          </button>
        </form>
        <button

          className="i-Sesion-text btn-borderless">
          ¿Olvidaste tu contraseña?
        </button>
      </div>
    </div>
  );
}

export default Login;
