import React, { Component } from "react";

export default class EliminarVino extends Component {
    render() {
        return (
            <div>
                <main class="eliminarProducto-main-container">
                    <form
                        class="eliminarProducto-form-container"
                        action="/products/eliminar/<%= vino.id %>?_method=DELETE"
                        method="post"
                        enctype="multipart/form-data"
                    >
                        <h2>ELIMINAR PRODUCTO</h2>
                        <div>
                            <label for="nombre" class="form-label">
                                Nombre:
                            </label>

                            <input
                                class="box-shadow form-control"
                                type="text"
                                name="nombre"
                                id="nombre"
                                value="<%= vino.nombre %>"
                                disabled
                            />
                        </div>
                        <div>
                            <label for="descripcionProducto" class="form-label">
                                Bodega:
                            </label>

                            <input
                                class="box-shadow form-control"
                                type="text"
                                name="bodega"
                                id="bodega"
                                value="<%= vino.vinoBodega.nombre %>"
                                disabled
                            />
                        </div>
                        <div>
                            <label for="descripcionProducto" class="form-label">
                                Categoria:
                            </label>

                            <input
                                class="box-shadow form-control"
                                type="text"
                                name="categoria"
                                id="categoria"
                                value="<%= vino.vinoCategoria.nombre %>"
                                disabled
                            />
                        </div>
                        <div>
                            <label for="descripcionProducto" class="form-label">
                                Uva:
                            </label>

                            <input
                                class="box-shadow form-control"
                                type="text"
                                name="uva"
                                id="uva"
                                value="<%= vino.vinoUva.nombre %>"
                                disabled
                            />
                        </div>
                        <div>
                            <label for="precioProducto" class="form-label">
                                Precio:
                            </label>

                            <input
                                class="box-shadow form-control"
                                type="number"
                                name="precio"
                                id="precio"
                                value="<%= vino.precio %>"
                                disabled
                            />
                        </div>
                        <div class="big-divs-wrapper">
                            <div>
                                <label for="precioProducto" class="form-label">
                                    Descripcion:
                                </label>

                                <textarea
                                    class="eliminarProducto-text-area box-shadow form-control"
                                    name="descripcion"
                                    id="descripcion"
                                    cols="30"
                                    rows="10"
                                    disabled
                                ></textarea>
                            </div>
                            <div>
                                <label class="form-label">Imagen:</label>
                                <img
                                    src="<%= vino.imagen %>"
                                    alt="vino1"
                                    class="eliminarProducto-img-product box-shadow"
                                />
                            </div>
                        </div>

                        <div class="eliminarProducto-div-button">
                            <button
                                class="eliminarProducto-button btn-secondary"
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
