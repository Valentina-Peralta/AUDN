import React from 'react'
import "./Register.css";
import {useState} from 'react'

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
      <button className='btn-standard disabled continuar-button' type="submit" style={{backgroundColor: emailValido ? '#FF8E0A' : ''}} disabled={!emailValido}><a className='continuar-text'>Continuar</a></button>
    </div>
  );
}

export default Register;
