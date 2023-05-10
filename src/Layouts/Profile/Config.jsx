import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import flecha from "../../Img/position=left-1.svg";
import "./Config.css";
function Config() {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear();
        navigate('/')
    }

    return (
        <div className="config-container">
            <div className="top-gradient" />
            <div className="margin-container">
                <div className="config-flex">
                    <header className="header">
                        <NavLink to="/profile">
                            <button className="btn-borderless">
                                <img src={flecha} alt="flecha atras" />
                            </button>
                        </NavLink>
                        <h1 className="i-Sesion-text">Configuración</h1>
                    </header>
                    <section className="config-section">
                        <div className="config-buttons">
                            <button className="btn-standard white-text">
                                Editar Apariencia
                            </button>
                            <button className="btn-black white-text">Editar Perfil</button>
                        </div>
                        <div className="config-Ver-CSesion">
                            <p className="config-text">Version: V1.25.03</p>
                            <button
                                type="button"
                                onClick={logout}
                                className="btn-borderless border-top">
                                Cerrar Sesión
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Config;
