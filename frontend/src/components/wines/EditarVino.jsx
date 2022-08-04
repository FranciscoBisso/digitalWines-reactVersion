import React, { Component } from "react";
import "../../public/css/wines/EditarVino.css";

export default class EditarVino extends Component {
    render() {
        return (
            <div>
                <main class="editarProducto-main-container">
                    <form
                        class="editarProducto-form-container"
                        action="/products/editar/<%= vino.id %>?_method=PUT"
                        method="post"
                        enctype="multipart/form-data"
                    >
                        <h2>EDITAR PRODUCTO</h2>
                        <div class="editarProducto-div-img-product">
                            <label for="imagen" class="form-label">
                                {" "}
                                Imagen del producto:{" "}
                            </label>
                            <input
                                class="editarProducto-input-img-product form-control box-shadow"
                                type="file"
                                accept="image/jpg"
                                name="imagen"
                                id="imagen"
                                value="<%= vino.imagen %>"
                            />
                        </div>
                        <div>
                            <label for="nombre" class="form-label">
                                Nombre
                            </label>

                            <input
                                class="box-shadow form-control"
                                type="text"
                                name="nombre"
                                id="nombre"
                                value="<%= vino.nombre %>"
                            />
                        </div>
                        <div>
                            <label for="precio" class="form-label">
                                Precio:
                            </label>

                            <input
                                class="box-shadow form-control"
                                type="number"
                                name="precio"
                                id="precio"
                                value="<%= vino.precio %>"
                            />
                        </div>
                        <div>
                            <label for="anio" class="form-label">
                                Anio:
                            </label>

                            <input
                                class="box-shadow form-control"
                                type="number"
                                name="anio"
                                id="anio"
                                placeholder=" Ej: 2017"
                                value="<%= vino.anio %>"
                            />
                        </div>
                        <div>
                            <label for="stock" class="form-label">
                                Stock:
                            </label>

                            <input
                                class="box-shadow form-control"
                                type="number"
                                name="stock"
                                id="stock"
                                placeholder=" Ej: 08"
                                value="<%= vino.stock %>"
                            />
                        </div>
                        <div>
                            <label for="bodega_id" class="form-label">
                                Bodega:
                            </label>
                            <select
                                name="bodega_id"
                                id="bodega_id"
                                class="form-select box-shadow"
                            >
                                <option value="<%= bodega.id %>">
                                    {/* meter las bodagas */}
                                </option>
                            </select>
                        </div>
                        <div>
                            <label for="categoria_id" class="form-label">
                                Categoría:
                            </label>
                            <select
                                name="categoria_id"
                                id="categoria_id"
                                class="form-select box-shadow"
                            >
                                <option value="<%= categoria.id %>">
                                    {/* meter las categorías */}
                                </option>
                            </select>
                        </div>
                        <div>
                            <label for="uva_id" class="form-label">
                                Uva:
                            </label>
                            <select
                                name="uva_id"
                                id="uva_id"
                                class="form-select box-shadow"
                            >
                                <option value="<%= uva.id %>">
                                    {/* meter el tipo de uva */}
                                </option>
                            </select>
                        </div>
                        <div>
                            <label for="descripcion" class="form-label">
                                Descripcion:
                            </label>

                            <textarea
                                class="editarProducto-text-area box-shadow form-control"
                                name="descripcion"
                                id="descripcion"
                                cols="30"
                                rows="10"
                            ></textarea>
                        </div>

                        <div class="editarProducto-div-button">
                            <button
                                class="editarProducto-button btn-secondary"
                                type="submit"
                                value="Editar producto"
                            >
                                EDITAR
                            </button>
                        </div>

                        <div>
                            <ul>
                                <li>{/* meter los errores */}</li>
                            </ul>
                        </div>

                        <div class="errores">
                            <ul class="errores-front"></ul>
                        </div>
                    </form>
                </main>
            </div>
        );
    }
}
