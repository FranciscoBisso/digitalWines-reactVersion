import React from "react";
import "../public/css/Header.css";
import logo from "../public/images/icono.ico";

export default function Header() {
    return (
        <div>
            <section className="barra-nav">
                <a href="/" className="contenedor_logo">
                    <img src={logo} alt="Logo" className="logo" width="100%" />
                    <div className="logo-texto-wrapper">
                        <p className="logo-texto-D">D</p>
                        <p className="logo-texto-W">W</p>
                    </div>
                </a>
                <nav className="contenedor-links_chica">
                    <a className="link_chica" href="/products/vinoteca">
                        <i className="fas fa-wine-bottle"></i>
                    </a>

                    <a className="link_chica" href="/products/plus">
                        <i className="fas fa-plus"></i>
                    </a>
                    <a className="link_chica" href="/users/cuenta">
                        <i className="fas fa-user"></i>
                    </a>

                    <a className="link_chica" href="/users/cava">
                        <i className="fas fa-wine-glass-alt"></i>
                    </a>
                    <a className="link_chica" href="/users/cuenta">
                        <i className="fas fa-user"></i>
                    </a>

                    <a className="link_chica" href="/users/login">
                        <i className="fas fa-user"></i>
                    </a>
                    <a className="link_chica" href="/users/registro">
                        <i className="far fa-id-card"></i>
                    </a>
                </nav>

                <nav className="contenedor-links_grande">
                    <a href="/products/vinoteca">Vinoteca</a>

                    <a href="/products/plus">Agregar BVC</a>
                    <a href="/users/cuenta">Mi Cuenta</a>

                    <a href="/users/cava">Mi Cava</a>
                    <a href="/users/cuenta">Mi Cuenta</a>

                    <a href="/users/login">Login</a>
                    <a href="/users/registro">Registro</a>
                </nav>
            </section>
        </div>
    );
}
