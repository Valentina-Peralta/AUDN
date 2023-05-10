import React from 'react'
import "./Register.css";
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [emailValido, setEmailValido] = useState(false);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    // Validar si el email ingresado es válido
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValido(regex.test(event.target.value));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  //check email

  let navigate = useNavigate();

  const checkEmail = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "email": email
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    await fetch("http://localhost:3001/api/users/checkEmail", requestOptions)
      .then(response => response.json())
      .then(result => {
        //si el result={"message":...}--->continuar a register2
        //si el result={"error":...}---->dar un mensaje avisando al usuario
        if (result.error === "El usuario ya se encuentra registrado") {
          alert("error")
        } else {
          localStorage.setItem('email', email)
          navigate('/register2')
        }
      })
      .catch(error => console.log('error', error));



  }



  return (
    <div>
      <div className='top-gradient'></div>
      <div className='top-nav-bar'>
        <button className="left-icon-placeholder" onClick={() => window.history.back()}><img src="src\Img\position=left-1.svg" alt="backArrow" /></button>
        <h1 className='title-placeholder'>Crear Cuenta</h1>
      </div>
      <h2 className='cuál-es-tu-correo-electrónico'>¿Cuál es tu correo electrónico?</h2>
      <form className='form-mail' onSubmit={handleSubmit}>
        <p className='label-placeholder'>Correo electrónico:</p>
        <label>
          <input className='input-mail' type="email" value={email} onChange={handleChangeEmail} />
        </label>
        <p className='hint-placeholder'>Deberás poder confirmalo luego.</p>
      </form>
      <button
        onClick={checkEmail}
        className='continuar-button btn-standard disabled1' type="submit" style={{ backgroundColor: emailValido ? '#FF8E0A' : '' }}>Continuar</button>
    </div>
  );
}

export default Register;
