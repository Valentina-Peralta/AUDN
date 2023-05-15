import { React, useState, useEffect } from "react";
import "./Register2.css";
import flecha from "../../Img/position=left-1.svg";
import open from "../../Img/state=open.svg";
import close from "../../Img/state=closed.svg";
import { NavLink, useNavigate } from "react-router-dom";

function Register2() {
  const [showPass, setShowPass] = useState(false);
  const [img, setImg] = useState(close);
  const [active, setActive] = useState("form");
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [ischeck, setIscheck] = useState(false);

  function check() {
    setIscheck(!ischeck);
  }
  console.log(ischeck);
  useEffect(() => {
    if (email.length > 5 && password.length > 5 && ischeck === true) {
      setActive("standard");
    } else {
      setActive("form");
    }
  }, [email, password, check]);

  console.log(email, password);
  const toggleCloseOpen = (event) => {
    setShowPass(!showPass);
    setImg(showPass ? close : open);
    console.log(showPass);
    event.preventDefault();
  };
  const navigate = useNavigate();

  const login = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: email,
      password: password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3001/api/users/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem("token", result.token);
        localStorage.setItem("user_id", result.user.id);
        localStorage.setItem("user_name", result.user.name);
        localStorage.setItem("user_email", result.user.email);
        localStorage.setItem("user_user_name", result.user.user_name);
        localStorage.setItem("user_image", result.user.image);

        console.log(result);
        navigate("/home");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="rContainer">
      <div className="top-gradient"></div>
      <div className="margin-container">
        <header className="header">
          <NavLink to="/">
            <button className="btn-borderless">
              <img src={flecha} alt="flecha atras" />
            </button>
          </NavLink>
          <h1 className="create">Crear Cuenta</h1>
        </header>
        <form action="submit" className="form">
          <label htmlFor="username" className="login-text">
            Nombre de Usuario:
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

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPass ? "text" : "password"}
            name="password"
            id="password"
            className="input"
          />

          <button
            className="btn-borderless btn-absolute"
            onClick={toggleCloseOpen}
          >
            <img src={img} alt="" />
          </button>

          <div className="contract">
            <input className="checkbox" type="checkbox" onClick={check} />
            <NavLink to={"/contract"}>
              <p className="terms">
                He leído y acepto los{" "}
                <span className="termsspan">términos</span> y{" "}
                <span className="termsspan">condiciones.</span>
              </p>
            </NavLink>
          </div>
          <button
            type="button"
            onClick={login}
            className={` btn-${active} white-text`}
          >
            Continuar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register2;
