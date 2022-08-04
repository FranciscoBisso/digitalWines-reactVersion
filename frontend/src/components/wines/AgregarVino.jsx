import React, { Component } from "react";
import "../../public/css/wines/AgregarVino.css";
export default class AgregarVino extends Component {
    render() {
        return (
            <div>
                <main class="agregarProducto-main-container">
                    <form
                        class="agregarProducto-form-container"
                        method="POST"
                        enctype="multipart/form-data"
                    >
                        <h2>AGREGAR PRODUCTO</h2>

                        <div class="agregarProducto-div-img-product">
                            <label for="imagen" class="form-label">
                                Imagen del producto:
                            </label>
                            <input
                                class="agregarProducto-input-img-product form-control box-shadow"
                                type="file"
                                name="imagen"
                                id="imagen"
                                value=""
                            />

                            <div class="text-danger">
                                <p style="color: red">{/* meter errores */}</p>
                            </div>
                        </div>
                        <div>
                            <label for="nombre" class="form-label">
                                Nombre:
                            </label>
                            <input
                                class="box-shadow form-control"
                                type="text"
                                name="nombre"
                                id="nombre"
                                placeholder=" Ej: Toro"
                                value=""
                            />

                            <div class="text-danger">
                                <p style="color: red">{/* meter errores */}</p>
                            </div>
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
                                placeholder=" Ej: 1000"
                                value=""
                            />

                            <div class="text-danger">
                                <p style="color: red">{/* meter errores */}</p>
                            </div>
                        </div>
                        <div>
                            <label for="anio" class="form-label">
                                Año:
                            </label>
                            <input
                                class="box-shadow form-control"
                                type="number"
                                name="anio"
                                id="anio"
                                placeholder=" Ej: 2017"
                                value=""
                            />

                            <div class="text-danger">
                                <p style="color: red">{/* meter errores */}</p>
                            </div>
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
                                placeholder=" Ej: 32"
                                value=""
                            />

                            <div class="text-danger">
                                <p style="color: red">{/* meter errores */}</p>
                            </div>
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
                                    {/* meter bodegas */}
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
                                    {/* meter categorías */}
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
                                    {/* meter tipos de uvas */}
                                </option>
                            </select>
                        </div>
                        <div>
                            <label for="precioProducto" class="form-label">
                                Descripcion:
                            </label>
                            <textarea
                                class="agregarProducto-text-area box-shadow form-control"
                                name="descripcion"
                                id="descripcion"
                                cols="30"
                                rows="10"
                                value=""
                            ></textarea>

                            <div class="text-danger">
                                <p style="color: red">{/* meter errores */}</p>
                            </div>
                        </div>

                        <div class="agregarProducto-div-button">
                            <button
                                class="agregarProducto-button btn-secondary"
                                type="submit"
                                value="Agregar producto"
                            >
                                AGREGAR
                            </button>
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
