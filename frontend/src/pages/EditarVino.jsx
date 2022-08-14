import React from "react";
import { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../public/css/wines/EditarVino.css";

export default function EditarVino() {
    const params = useParams();
    const [wine, setWine] = useState([]);
    const [cellars, setCellars] = useState([]);
    const [grapes, setGrapes] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetchInfo();
    }, []);

    const fetchInfo = async () => {
        const infoRes = await fetch(
            `http://localhost:3001/api/wines/update/${params.id}`
        );
        const wineInfo = await infoRes.json();

        wineInfo.data.wine.bodega = wineInfo.data.wine.vinoBodega.nombre;
        wineInfo.data.wine.uva = wineInfo.data.wine.vinoUva.nombre;
        wineInfo.data.wine.categoria = wineInfo.data.wine.vinoCategoria.nombre;

        setWine(wineInfo.data.wine);
        setCellars(wineInfo.data.bodegas);
        setGrapes(wineInfo.data.uvas);
        setGrapes(wineInfo.data.uvas);
        setCategory(wineInfo.data.categorias);
    };

    return (
        <Fragment>
            <header>
                <Header />
            </header>
            <main className="editarProducto-main-container">
                <form
                    className="editarProducto-form-container"
                    action=""
                    method="post"
                    enctype="multipart/form-data"
                >
                    <h2>EDITAR PRODUCTO</h2>
                    <div className="editarProducto-div-img-product">
                        <label htmlFor="imagen" className="form-label">
                            {" "}
                            Imagen del producto:
                        </label>
                        <input
                            className="editarProducto-input-img-product form-control box-shadow"
                            type="file"
                            accept="image/jpg"
                            name="imagen"
                            id="imagen"
                        />
                    </div>
                    <div>
                        <label htmlFor="nombre" className="form-label">
                            Nombre
                        </label>

                        <input
                            className="box-shadow form-control"
                            type="text"
                            name="nombre"
                            id="nombre"
                            defaultValue={wine.nombre}
                        />
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
                            defaultValue={wine.precio}
                        />
                    </div>
                    <div>
                        <label htmlFor="anio" className="form-label">
                            Anio:
                        </label>

                        <input
                            className="box-shadow form-control"
                            type="number"
                            name="anio"
                            id="anio"
                            defaultValue={wine.anio}
                        />
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
                            defaultValue={wine.stock}
                        />
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
                            <option selected>{wine.bodega}</option>
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
                            <option selected>{wine.categoria}</option>
                            {category.map((cat, i) => (
                                <option key={i}>{cat.nombre}</option>
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
                            <option selected>{wine.uva}</option>
                            {grapes.map((grape, i) => (
                                <option key={i}>{grape.nombre}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="descripcion" className="form-label">
                            Descripcion:
                        </label>

                        <textarea
                            className="editarProducto-text-area box-shadow form-control"
                            name="descripcion"
                            id="descripcion"
                            cols="30"
                            rows="10"
                            defaultValue={wine.descripcion}
                        ></textarea>
                    </div>

                    <div className="editarProducto-div-button">
                        <button
                            className="editarProducto-button btn-secondary"
                            type="submit"
                            defaultValue="Editar producto"
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
            <footer>
                <Footer />
            </footer>
        </Fragment>
    );
}
