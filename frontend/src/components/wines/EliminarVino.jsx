import React, { Component } from "react";
import "../../public/css/wines/EliminarVino.css";

export default class EliminarVino extends Component {
    render() {
        return (
            <div>
                <main className="eliminarProducto-main-container">
                    <form
                        className="eliminarProducto-form-container"
                        action="/products/eliminar/<%= vino.id %>?_method=DELETE"
                        method="post"
                        enctype="multipart/form-data"
                    >
                        <h2>ELIMINAR PRODUCTO</h2>
                        <div>
                            <label for="nombre" className="form-label">
                                Nombre:
                            </label>

                            <input
                                className="box-shadow form-control"
                                type="text"
                                name="nombre"
                                id="nombre"
                                value="<%= vino.nombre %>"
                                disabled
                            />
                        </div>
                        <div>
                            <label
                                for="descripcionProducto"
                                className="form-label"
                            >
                                Bodega:
                            </label>

                            <input
                                className="box-shadow form-control"
                                type="text"
                                name="bodega"
                                id="bodega"
                                value="<%= vino.vinoBodega.nombre %>"
                                disabled
                            />
                        </div>
                        <div>
                            <label
                                for="descripcionProducto"
                                className="form-label"
                            >
                                Categoria:
                            </label>

                            <input
                                className="box-shadow form-control"
                                type="text"
                                name="categoria"
                                id="categoria"
                                value="<%= vino.vinoCategoria.nombre %>"
                                disabled
                            />
                        </div>
                        <div>
                            <label
                                for="descripcionProducto"
                                className="form-label"
                            >
                                Uva:
                            </label>

                            <input
                                className="box-shadow form-control"
                                type="text"
                                name="uva"
                                id="uva"
                                value="<%= vino.vinoUva.nombre %>"
                                disabled
                            />
                        </div>
                        <div>
                            <label for="precioProducto" className="form-label">
                                Precio:
                            </label>

                            <input
                                className="box-shadow form-control"
                                type="number"
                                name="precio"
                                id="precio"
                                value="<%= vino.precio %>"
                                disabled
                            />
                        </div>
                        <div className="big-divs-wrapper">
                            <div>
                                <label
                                    for="precioProducto"
                                    className="form-label"
                                >
                                    Descripcion:
                                </label>

                                <textarea
                                    className="eliminarProducto-text-area box-shadow form-control"
                                    name="descripcion"
                                    id="descripcion"
                                    cols="30"
                                    rows="10"
                                    disabled
                                ></textarea>
                            </div>
                            <div>
                                <label className="form-label">Imagen:</label>
                                <img
                                    src="<%= vino.imagen %>"
                                    alt="vino1"
                                    className="eliminarProducto-img-product box-shadow"
                                />
                            </div>
                        </div>

                        <div className="eliminarProducto-div-button">
                            <button
                                className="eliminarProducto-button btn-secondary"
                                type="submit"
                                value="Eliminar producto"
                            >
                                ELIMINAR
                            </button>
                        </div>
                    </form>
                </main>
            </div>
        );
    }
}
