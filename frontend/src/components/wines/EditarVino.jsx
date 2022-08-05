import React, { Component } from "react";
import "../../public/css/wines/EditarVino.css";

export default class EditarVino extends Component {
    render() {
        return (
            <div>
                <main className="editarProducto-main-container">
                    <form
                        className="editarProducto-form-container"
                        action=""
                        method="post"
                        enctype="multipart/form-data"
                    >
                        <h2>EDITAR PRODUCTO</h2>
                        <div className="editarProducto-div-img-product">
                            <label for="imagen" className="form-label">
                                {" "}
                                Imagen del producto:{" "}
                            </label>
                            <input
                                className="editarProducto-input-img-product form-control box-shadow"
                                type="file"
                                accept="image/jpg"
                                name="imagen"
                                id="imagen"
                                value=""
                            />
                        </div>
                        <div>
                            <label for="nombre" className="form-label">
                                Nombre
                            </label>

                            <input
                                className="box-shadow form-control"
                                type="text"
                                name="nombre"
                                id="nombre"
                                value=""
                            />
                        </div>
                        <div>
                            <label for="precio" className="form-label">
                                Precio:
                            </label>

                            <input
                                className="box-shadow form-control"
                                type="number"
                                name="precio"
                                id="precio"
                                value=""
                            />
                        </div>
                        <div>
                            <label for="anio" className="form-label">
                                Anio:
                            </label>

                            <input
                                className="box-shadow form-control"
                                type="number"
                                name="anio"
                                id="anio"
                                placeholder=" Ej: 2017"
                                value=""
                            />
                        </div>
                        <div>
                            <label for="stock" className="form-label">
                                Stock:
                            </label>

                            <input
                                className="box-shadow form-control"
                                type="number"
                                name="stock"
                                id="stock"
                                placeholder=" Ej: 08"
                                value=""
                            />
                        </div>
                        <div>
                            <label for="bodega_id" className="form-label">
                                Bodega:
                            </label>
                            <select
                                name="bodega_id"
                                id="bodega_id"
                                className="form-select box-shadow"
                            >
                                <option value="">
                                    {/* meter las bodagas */}
                                </option>
                            </select>
                        </div>
                        <div>
                            <label for="categoria_id" className="form-label">
                                Categoría:
                            </label>
                            <select
                                name="categoria_id"
                                id="categoria_id"
                                className="form-select box-shadow"
                            >
                                <option value="">
                                    {/* meter las categorías */}
                                </option>
                            </select>
                        </div>
                        <div>
                            <label for="uva_id" className="form-label">
                                Uva:
                            </label>
                            <select
                                name="uva_id"
                                id="uva_id"
                                className="form-select box-shadow"
                            >
                                <option value="">
                                    {/* meter el tipo de uva */}
                                </option>
                            </select>
                        </div>
                        <div>
                            <label for="descripcion" className="form-label">
                                Descripcion:
                            </label>

                            <textarea
                                className="editarProducto-text-area box-shadow form-control"
                                name="descripcion"
                                id="descripcion"
                                cols="30"
                                rows="10"
                            ></textarea>
                        </div>

                        <div className="editarProducto-div-button">
                            <button
                                className="editarProducto-button btn-secondary"
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

                        <div className="errores">
                            <ul className="errores-front"></ul>
                        </div>
                    </form>
                </main>
            </div>
        );
    }
}
