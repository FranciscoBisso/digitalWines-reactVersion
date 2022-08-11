import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import "../../public/css/wines/DetalleVino.css";

export default function DetalleVino() {
    let params = useParams();
    const [wine, setWine] = useState({});
    useEffect(() => {
        async function fetchInfo() {
            let infoRes = await fetch(
                `http://localhost:3001/api/wines/details/${params.id}`
            );
            let newInfo = await infoRes.json();

            setWine(newInfo.data);
        }

        fetchInfo();
    }, []);
    return (
        <div>
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
                            <h2></h2>
                            <div className="contenedor-detalle-info">
                                <h3>Precio:</h3>
                                <p>${wine.precio}</p>
                            </div>
                            <div className="contenedor-detalle-info">
                                <h3>Bodega:</h3>
                                {/* <p>{wine.vinoBodega.nombre}</p> */}
                            </div>
                            <div className="contenedor-detalle-info">
                                <h3>Variedad:</h3>
                                {/* <p>{wine.vinoUva.nombre}</p> */}
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
        </div>
    );
}
