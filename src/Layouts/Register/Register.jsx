import React from 'react'
import {useState} from 'react'

function Register() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div>
      <img src="" alt="" />
      <h5>Crear cuenta</h5>
      <h2>¿Cuál es tu correo electrónico?</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Correo electrónico:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <p>Deberás poder confirmalo luego.</p>
        <button className='btn-standard disabled' type="submit">Continuar</button>
      </form>
    </div>
  );
}

export default Register;
