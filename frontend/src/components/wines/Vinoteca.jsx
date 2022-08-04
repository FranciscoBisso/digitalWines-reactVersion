import React, { Component } from "react";

export default class Vinoteca extends Component {
    render() {
        return (
            <div>
                <main>
                    <h2>CONOCE, DEGUSTA Y SIENTE NUESTROS VINOS </h2>
                    <form class="d-flex" method="get" action="/products/buscar">
                        <input
                            class="form-control me-2"
                            type="search"
                            placeholder="Encuentra tu vino"
                            aria-label="Search"
                            name="nombre"
                            id="nombre"
                        />
                        <button class="btn btn-outline-success" type="submit">
                            Buscar
                        </button>
                    </form>
                    <section class="wine-shelf">
                        <div class="flex-div">
                            <div class="articles-wrapper">
                                <article class="wine-card">
                                    <a href="/products/detalle/<%= vino.id %>">
                                        <img
                                            src="<%= vino.imagen %>"
                                            alt=""
                                            width="100%"
                                            class="wine-card-img"
                                        />
                                    </a>
                                    <div class="wine-card-body">
                                        <div class="wine-card-texts">
                                            <div class="wine-card-product-description">
                                                <h4 class="card-title"></h4>
                                                <h5 class="card-subtitle mb-2 text-muted"></h5>
                                            </div>
                                            <p class="card-text card-price">
                                                $
                                            </p>
                                        </div>

                                        <div class="wine-card-icons">
                                            <a href="/products/eliminar/<%= vino.id %>">
                                                <i class="fas fa-times"></i>
                                            </a>
                                            <a href="/products/editar/<%= vino.id %>">
                                                <i class="far fa-edit"></i>
                                            </a>

                                            <form
                                                action="/products/detalle/favorito/<%= vino.id %>"
                                                method="POST"
                                            >
                                                <button
                                                    type="submit"
                                                    class="button-estrella-carrito"
                                                >
                                                    <i class="fas fa-star"></i>
                                                    <i>"far fa-star"</i>
                                                </button>
                                            </form>
                                            <form
                                                action="/products/detalle/cava/<%= vino.id %>"
                                                method="POST"
                                            >
                                                <button
                                                    type="submit"
                                                    class="button-estrella-carrito"
                                                >
                                                    <i class="material-icons"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </section>

                    <section>
                        <a
                            class="button-add-product btn-secondary"
                            href="/products/agregar"
                        >
                            <i class="fas fa-plus"></i>
                        </a>
                    </section>
                </main>
            </div>
        );
    }
}
