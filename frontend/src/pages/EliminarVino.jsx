import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/wines/EliminarVino.css";

export default function EliminarVino() {
    const params = useParams();
    const [wine, setWine] = useState([]);
    useEffect(() => {
        async function fetchInfo() {
            const infoRes = await fetch(
                `http://localhost:3001/api/wines/delete/${params.id}`
            );
            const wineInfo = await infoRes.json();
            wineInfo.data.bodega = wineInfo.data.vinoBodega.nombre;
            wineInfo.data.uva = wineInfo.data.vinoUva.nombre;
            wineInfo.data.categoria = wineInfo.data.vinoCategoria.nombre;

            setWine(wineInfo.data);
        }

        fetchInfo();
    }, []);
    return (
        <Fragment>
            <header>
                <Header />
            </header>
            <main className="eliminarProducto-main-container">
                <form
                    className="eliminarProducto-form-container"
                    action=""
                    method="post"
                    enctype="multipart/form-data"
                >
                    <h2>ELIMINAR PRODUCTO</h2>
                    <div>
                        <label htmlFor="nombre" className="form-label">
                            Nombre:
                        </label>

                        <input
                            className="box-shadow form-control"
                            type="text"
                            name="nombre"
                            id="nombre"
                            defaultValue={wine.nombre}
                            disabled
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="descripcionProducto"
                            className="form-label"
                        >
                            Bodega:
                        </label>

                        <input
                            className="box-shadow form-control"
                            type="text"
                            name="bodega"
                            id="bodega"
                            defaultValue={wine.bodega}
                            disabled
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="descripcionProducto"
                            className="form-label"
                        >
                            Categoria:
                        </label>

                        <input
                            className="box-shadow form-control"
                            type="text"
                            name="categoria"
                            id="categoria"
                            defaultValue={wine.categoria}
                            disabled
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="descripcionProducto"
                            className="form-label"
                        >
                            Uva:
                        </label>

                        <input
                            className="box-shadow form-control"
                            type="text"
                            name="uva"
                            id="uva"
                            defaultValue={wine.uva}
                            disabled
                        />
                    </div>
                    <div>
                        <label htmlFor="precioProducto" className="form-label">
                            Precio:
                        </label>

                        <input
                            className="box-shadow form-control"
                            type="number"
                            name="precio"
                            id="precio"
                            defaultValue={wine.precio}
                            disabled
                        />
                    </div>
                    <div className="big-divs-wrapper">
                        <div>
                            <label
                                htmlFor="precioProducto"
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
                                defaultValue={wine.descripcion}
                                disabled
                            ></textarea>
                        </div>
                        <div>
                            <label className="form-label">Imagen:</label>
                            <img
                                src={`${wine.imagen}`}
                                alt="vino1"
                                className="eliminarProducto-img-product box-shadow"
                            />
                        </div>
                    </div>

                    <div className="eliminarProducto-div-button">
                        <button
                            className="eliminarProducto-button btn-secondary"
                            type="submit"
                            defaultValue="Eliminar producto"
                        >
                            ELIMINAR
                        </button>
                    </div>
                </form>
            </main>
            <footer>
                <Footer />
            </footer>
        </Fragment>
    );
}
