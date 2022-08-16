import React, { useState, useEffect, Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/wines/AgregarVino.css";
export default function AgregarVino() {
    const [cellars, setCellars] = useState([]);
    const [grapes, setGrapes] = useState([]);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        async function fetchInfo() {
            const infoRes = await fetch(
                "http://localhost:3001/api/wines/create"
            );
            const info = await infoRes.json();

            setCellars(info.data.bodegas);
            setGrapes(info.data.uvas);
            setCategories(info.data.categorias);
        }

        fetchInfo();
    }, []);
    console.log("Bodegas:", cellars);
    console.log("Uvas:", grapes);
    console.log("Categorias:", categories);
    return (
        <Fragment>
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
                        <label htmlFor="imagen" className="form-label">
                            Imagen del producto:
                        </label>
                        <input
                            className="agregarProducto-input-img-product form-control box-shadow"
                            type="file"
                            name="imagen"
                            id="imagen"
                            defaultValue=""
                        />

                        <div className="text-danger">
                            <p>{/* meter errores */}</p>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="nombre" className="form-label">
                            Nombre:
                        </label>
                        <input
                            className="box-shadow form-control"
                            type="text"
                            name="nombre"
                            id="nombre"
                            placeholder=" Ej: Toro"
                            defaultValue=""
                        />

                        <div className="text-danger">
                            <p>{/* meter errores */}</p>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="precio" className="form-label">
                            Precio:
                        </label>
                        <input
                            className="box-shadow form-control"
                            type="number"
                            name="precio"
                            id="precio"
                            placeholder=" Ej: 1000"
                            defaultValue=""
                        />

                        <div className="text-danger">
                            <p>{/* meter errores */}</p>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="anio" className="form-label">
                            Año:
                        </label>
                        <input
                            className="box-shadow form-control"
                            type="number"
                            name="anio"
                            id="anio"
                            placeholder=" Ej: 2017"
                            defaultValue=""
                        />

                        <div className="text-danger">
                            <p>{/* meter errores */}</p>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="stock" className="form-label">
                            Stock:
                        </label>
                        <input
                            className="box-shadow form-control"
                            type="number"
                            name="stock"
                            id="stock"
                            placeholder=" Ej: 32"
                            defaultValue=""
                        />

                        <div className="text-danger">
                            <p>{/* meter errores */}</p>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="bodega_id" className="form-label">
                            Bodega:
                        </label>
                        <select
                            name="bodega_id"
                            id="bodega_id"
                            className="form-select box-shadow"
                        >
                            {cellars.map((cellar, i) => (
                                <option key={i}>{cellar.nombre}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="categoria_id" className="form-label">
                            Categoría:
                        </label>
                        <select
                            name="categoria_id"
                            id="categoria_id"
                            className="form-select box-shadow"
                        >
                            <option value="">Sin Categoria</option>
                            {categories.map((category, i) => (
                                <option key={i}>{category.nombre}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="uva_id" className="form-label">
                            Uva:
                        </label>
                        <select
                            name="uva_id"
                            id="uva_id"
                            className="form-select box-shadow"
                        >
                            {grapes.map((grape, i) => (
                                <option key={i}>{grape.nombre}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="precioProducto" className="form-label">
                            Descripcion:
                        </label>
                        <textarea
                            className="agregarProducto-text-area box-shadow form-control"
                            name="descripcion"
                            id="descripcion"
                            cols="30"
                            rows="10"
                            defaultValue=""
                            placeholder="Una breve descripción del vino que deseas agregar..."
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
        </Fragment>
    );
}
