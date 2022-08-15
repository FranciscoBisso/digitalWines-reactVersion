import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
import logo from "../images/icono.ico";

export default function Header() {
    return (
        <div>
            <section className="barra-nav">
                <Link to="/" className="contenedor_logo">
                    <img src={logo} alt="Logo" className="logo" width="100%" />
                    <div className="logo-texto-wrapper">
                        <p className="logo-texto-D">D</p>
                        <p className="logo-texto-W">W</p>
                    </div>
                </Link>
                <nav className="contenedor-links_chica">
                    <Link className="link_chica" to="/vinoteca">
                        <i className="fas fa-wine-bottle"></i>
                    </Link>

                    <Link className="link_chica" to="/agregarbvc">
                        <i className="fas fa-plus"></i>
                    </Link>
                    <Link className="link_chica" to="/cuenta">
                        <i className="fas fa-user"></i>
                    </Link>

                    <Link className="link_chica" to="/cava">
                        <i className="fas fa-wine-glass-alt"></i>
                    </Link>
                    <Link className="link_chica" to="/cuenta">
                        <i className="fas fa-user"></i>
                    </Link>

                    <Link className="link_chica" to="/login">
                        <i className="fas fa-user"></i>
                    </Link>
                    <Link className="link_chica" to="/registro">
                        <i className="far fa-id-card"></i>
                    </Link>
                </nav>

                <nav className="contenedor-links_grande">
                    <Link to="/vinoteca">Vinoteca</Link>

                    <Link to="/agregarbvc">Agregar BVC</Link>
                    <Link to="/cuenta">Mi Cuenta</Link>

                    <Link to="/cava">Mi Cava</Link>
                    <Link to="/cuenta">Mi Cuenta</Link>

                    <Link to="/login">Login</Link>
                    <Link to="/registro">Registro</Link>
                </nav>
            </section>
        </div>
    );
}
