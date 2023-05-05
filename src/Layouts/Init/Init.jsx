import React from "react";
import "./Init.css";
function Init() {
  return (
    <div className="init-container">
      <div>
        <p>Música a medida.</p>
      </div>
      <div>
        <button className="btn-standardd">Registrarse Gratis</button>
        <button>Continuar con Google</button>
        <button>Continuar con Apple</button>
        <button>Iniciar Sesión</button>
      </div>
    </div>
  );
}

export default Init;
