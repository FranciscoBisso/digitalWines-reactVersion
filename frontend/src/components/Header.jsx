import React, { Component } from "react";
import "../public/css/Header.css";

export default class Header extends Component {
    render() {
        return (
            <div>
                <section class="barra-nav">
                    <a href="/" class="contenedor_logo">
                        <img
                            src="/images/logo.png"
                            alt="Logo"
                            class="logo"
                            width="100%"
                        />
                        <div class="logo-texto-wrapper">
                            <p class="logo-texto-D">D</p>
                            <p class="logo-texto-W">W</p>
                        </div>
                    </a>
                    <nav class="contenedor-links_chica">
                        <a class="link_chica" href="/products/vinoteca">
                            <i class="fas fa-wine-bottle"></i>
                        </a>

                        <a class="link_chica" href="/products/plus">
                            <i class="fas fa-plus"></i>
                        </a>
                        <a class="link_chica" href="/users/cuenta">
                            <i class="fas fa-user"></i>
                        </a>

                        <a class="link_chica" href="/users/cava">
                            <i class="fas fa-wine-glass-alt"></i>
                        </a>
                        <a class="link_chica" href="/users/cuenta">
                            <i class="fas fa-user"></i>
                        </a>

                        <a class="link_chica" href="/users/login">
                            <i class="fas fa-user"></i>
                        </a>
                        <a class="link_chica" href="/users/registro">
                            <i class="far fa-id-card"></i>
                        </a>
                    </nav>

                    <nav class="contenedor-links_grande">
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
}
