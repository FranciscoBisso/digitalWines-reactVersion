import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import "../../public/css/wines/AgregarVino.css";
export default function AgregarVino() {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main className="agregarProducto-main-container">
                <form
                    className="agregarProducto-form-container"
                    method="POST"
                    enctype="multipart/form-data"
                >
                    <h2>AGREGAR PRODUCTO</h2>

                    <div className="agregarProducto-div-img-product">
                        <label for="imagen" className="form-label">
                            Imagen del producto:
                        </label>
                        <input
                            className="agregarProducto-input-img-product form-control box-shadow"
                            type="file"
                            name="imagen"
                            id="imagen"
                            value=""
                        />

                        <div className="text-danger">
                            <p>{/* meter errores */}</p>
                        </div>
                    </div>
                    <div>
                        <label for="nombre" className="form-label">
                            Nombre:
                        </label>
                        <input
                            className="box-shadow form-control"
                            type="text"
                            name="nombre"
                            id="nombre"
                            placeholder=" Ej: Toro"
                            value=""
                        />

                        <div className="text-danger">
                            <p>{/* meter errores */}</p>
                        </div>
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
                            placeholder=" Ej: 1000"
                            value=""
                        />

                        <div className="text-danger">
                            <p>{/* meter errores */}</p>
                        </div>
                    </div>
                    <div>
                        <label for="anio" className="form-label">
                            Año:
                        </label>
                        <input
                            className="box-shadow form-control"
                            type="number"
                            name="anio"
                            id="anio"
                            placeholder=" Ej: 2017"
                            value=""
                        />

                        <div className="text-danger">
                            <p>{/* meter errores */}</p>
                        </div>
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
                            placeholder=" Ej: 32"
                            value=""
                        />

                        <div className="text-danger">
                            <p>{/* meter errores */}</p>
                        </div>
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
                            <option value="">{/* meter bodegas */}</option>
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
                            <option value="">{/* meter categorías */}</option>
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
                                {/* meter tipos de uvas */}
                            </option>
                        </select>
                    </div>
                    <div>
                        <label for="precioProducto" className="form-label">
                            Descripcion:
                        </label>
                        <textarea
                            className="agregarProducto-text-area box-shadow form-control"
                            name="descripcion"
                            id="descripcion"
                            cols="30"
                            rows="10"
                            value=""
                        ></textarea>

                        <div className="text-danger">
                            <p>{/* meter errores */}</p>
                        </div>
                    </div>

                    <div className="agregarProducto-div-button">
                        <button
                            className="agregarProducto-button btn-secondary"
                            type="submit"
                            value="Agregar producto"
                        >
                            AGREGAR
                        </button>
                    </div>
                    <div className="errores">
                        <ul className="errores-front"></ul>
                    </div>
                </form>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
