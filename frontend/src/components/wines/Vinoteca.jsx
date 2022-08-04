import React, { Component } from "react";
import "../../public/css/wines/Vinoteca.css";
export default class Vinoteca extends Component {
    render() {
        return (
            <div>
                <main>
                    <h2>CONOCE, DEGUSTA Y SIENTE NUESTROS VINOS </h2>
                    <form
                        className="d-flex"
                        method="get"
                        action="/products/buscar"
                    >
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Encuentra tu vino"
                            aria-label="Search"
                            name="nombre"
                            id="nombre"
                        />
                        <button
                            className="btn btn-outline-success"
                            type="submit"
                        >
                            Buscar
                        </button>
                    </form>
                    <section className="wine-shelf">
                        <div className="flex-div">
                            <div className="articles-wrapper">
                                <article className="wine-card">
                                    <a href="/products/detalle/<%= vino.id %>">
                                        <img
                                            src="<%= vino.imagen %>"
                                            alt=""
                                            width="100%"
                                            className="wine-card-img"
                                        />
                                    </a>
                                    <div className="wine-card-body">
                                        <div className="wine-card-texts">
                                            <div className="wine-card-product-description">
                                                <h4 className="card-title"></h4>
                                                <h5 className="card-subtitle mb-2 text-muted"></h5>
                                            </div>
                                            <p className="card-text card-price">
                                                $
                                            </p>
                                        </div>

                                        <div className="wine-card-icons">
                                            <a href="/products/eliminar/<%= vino.id %>">
                                                <i className="fas fa-times"></i>
                                            </a>
                                            <a href="/products/editar/<%= vino.id %>">
                                                <i className="far fa-edit"></i>
                                            </a>

                                            <form
                                                action="/products/detalle/favorito/<%= vino.id %>"
                                                method="POST"
                                            >
                                                <button
                                                    type="submit"
                                                    className="button-estrella-carrito"
                                                >
                                                    <i className="fas fa-star"></i>
                                                    <i>"far fa-star"</i>
                                                </button>
                                            </form>
                                            <form
                                                action="/products/detalle/cava/<%= vino.id %>"
                                                method="POST"
                                            >
                                                <button
                                                    type="submit"
                                                    className="button-estrella-carrito"
                                                >
                                                    <i className="material-icons"></i>
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
                            className="button-add-product btn-secondary"
                            href="/products/agregar"
                        >
                            <i className="fas fa-plus"></i>
                        </a>
                    </section>
                </main>
            </div>
        );
    }
}
