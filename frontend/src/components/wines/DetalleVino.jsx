import React, { Component } from "react";

export default class DetalleVino extends Component {
    render() {
        return (
            <div>
                <main>
                    <div class="item-wrapper">
                        <section id="contenedor-detalle">
                            <div class="img-wrapper">
                                <img src="<%= vino.imagen %>" alt="vino1" />
                            </div>
                            <div id="contenedor-detalle-vino">
                                <h2></h2>
                                <div class="contenedor-detalle-info">
                                    <h3>Precio:</h3>
                                    <p>$</p>
                                </div>
                                <div class="contenedor-detalle-info">
                                    <h3>Bodega:</h3>
                                    <p></p>
                                </div>
                                <div class="contenedor-detalle-info">
                                    <h3>Variedad:</h3>
                                    <p></p>
                                </div>
                                <div class="contenedor-detalle-info">
                                    <h3>Descripción:</h3>
                                    <p id="descripcion"></p>
                                </div>
                            </div>
                        </section>

                        <div id="contenedor-detalle-botones">
                            <form
                                action="/products/detalle/cava/<%= vino.id %>"
                                method="POST"
                            >
                                <button type="submit" class="boton-detalle">
                                    SACAR DE MI CAVA
                                </button>
                                <button type="submit" class="boton-detalle">
                                    AGREGAR A MI CAVA
                                </button>
                            </form>
                            <form
                                action="/products/detalle/favorito/<%= vino.id %>"
                                method="POST"
                            >
                                <button type="submit" class="boton-detalle">
                                    SACAR DE FAVORITOS
                                </button>
                                <button type="submit" class="boton-detalle">
                                    AÑADIR A FAVORITOS
                                </button>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
