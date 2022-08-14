import React from "react";
import { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/wines/DetalleVino.css";

export default function DetalleVino() {
    const params = useParams();
    const [wine, setWine] = useState([]);
    useEffect(() => {
        async function fetchInfo() {
            const infoRes = await fetch(
                `http://localhost:3001/api/wines/details/${params.id}`
            );
            const wineInfo = await infoRes.json();
            wineInfo.data.bodega = wineInfo.data.vinoBodega.nombre;
            wineInfo.data.uva = wineInfo.data.vinoUva.nombre;
            // no tengo ni idea porque las líneas 18 y 19
            // hacen funcionar el código. Momento de pura intuición

            setWine(wineInfo.data);
        }

        fetchInfo();
    }, []);
    return (
        <Fragment>
            <header>
                <Header />
            </header>
            <main>
                <div className="item-wrapper">
                    <section id="contenedor-detalle">
                        <div className="img-wrapper">
                            <img src={`${wine.imagen}`} alt="vino1" />
                        </div>
                        <div id="contenedor-detalle-vino">
                            <h2>{wine.nombre}</h2>
                            <div className="contenedor-detalle-info">
                                <h3>Precio:</h3>
                                <p>${wine.precio}</p>
                            </div>
                            <div className="contenedor-detalle-info">
                                <h3>Bodega:</h3>
                                <p>{wine.bodega}</p>
                            </div>
                            <div className="contenedor-detalle-info">
                                <h3>Variedad:</h3>
                                <p>{wine.uva}</p>
                            </div>
                            <div className="contenedor-detalle-info">
                                <h3>Descripción:</h3>
                                <p id="descripcion">{wine.descripcion}</p>
                            </div>
                        </div>
                    </section>

                    <div id="contenedor-detalle-botones">
                        <form action="" method="POST">
                            <button type="submit" className="boton-detalle">
                                SACAR DE MI CAVA
                            </button>
                            <button type="submit" className="boton-detalle">
                                AGREGAR A MI CAVA
                            </button>
                        </form>
                        <form action="" method="POST">
                            <button type="submit" className="boton-detalle">
                                SACAR DE FAVORITOS
                            </button>
                            <button type="submit" className="boton-detalle">
                                AÑADIR A FAVORITOS
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </Fragment>
    );
}
