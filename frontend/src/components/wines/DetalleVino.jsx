import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import "../../public/css/wines/DetalleVino.css";

export default function DetalleVino() {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <div className="item-wrapper">
                    <section id="contenedor-detalle">
                        <div className="img-wrapper">
                            <img src="" alt="vino1" />
                        </div>
                        <div id="contenedor-detalle-vino">
                            <h2></h2>
                            <div className="contenedor-detalle-info">
                                <h3>Precio:</h3>
                                <p>$</p>
                            </div>
                            <div className="contenedor-detalle-info">
                                <h3>Bodega:</h3>
                                <p></p>
                            </div>
                            <div className="contenedor-detalle-info">
                                <h3>Variedad:</h3>
                                <p></p>
                            </div>
                            <div className="contenedor-detalle-info">
                                <h3>Descripción:</h3>
                                <p id="descripcion"></p>
                            </div>
                        </div>
                    </section>

                    <div id="contenedor-detalle-botones">
                        <form action="" method="POST">
                            <button type="submit" className="boton-detalle">
                                SACAR DE MI CAVA
                            </button>
                            <button type="submit" className="boton-detalle">
                                AGREGAR A MI CAVA
                            </button>
                        </form>
                        <form action="" method="POST">
                            <button type="submit" className="boton-detalle">
                                SACAR DE FAVORITOS
                            </button>
                            <button type="submit" className="boton-detalle">
                                AÑADIR A FAVORITOS
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
