import React, { useState, useEffect, Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "../../public/css/wines/Vinoteca.css";

export default function Vinoteca() {
    const [wines, setWines] = useState([]);

    useEffect(() => {
        async function fetchInfo() {
            const infoRes = await fetch(
                "http://localhost:3001/api/wines/winecellar"
            );
            const wineInfo = await infoRes.json();

            setWines(wineInfo.data);
        }

        fetchInfo();
    }, []);

    return (
        <Fragment>
            <header>
                <Header />
            </header>
            <main>
                <h2>CONOCE, DEGUSTA Y SIENTE NUESTROS VINOS </h2>
                <form className="d-flex" method="get" action="/products/buscar">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Encuentra tu vino"
                        aria-label="Search"
                        name="nombre"
                        id="nombre"
                    />
                    <button className="btn btn-outline-success" type="submit">
                        Buscar
                    </button>
                </form>
                {wines.length === 0 && <p>Cargando</p>}
                <section className="wine-shelf">
                    <div className="flex-div">
                        {wines.map((wine, i) => {
                            return (
                                <div className="articles-wrapper" key={i}>
                                    <article className="wine-card">
                                        <a>
                                            <img
                                                src=""
                                                alt=""
                                                width="100%"
                                                className="wine-card-img"
                                            />
                                        </a>
                                        <div className="wine-card-body">
                                            <div className="wine-card-texts">
                                                <div className="wine-card-product-description">
                                                    <h4 className="card-title">
                                                        {wine.nombre}
                                                    </h4>
                                                    <h5 className="card-subtitle mb-2 text-muted">
                                                        {wine.vinoBodega.nombre}
                                                    </h5>
                                                </div>
                                                <p className="card-text card-price">
                                                    ${wine.precio}
                                                </p>
                                            </div>

                                            <div className="wine-card-icons">
                                                <a>
                                                    <i className="fas fa-times"></i>
                                                </a>
                                                <a>
                                                    <i className="far fa-edit"></i>
                                                </a>

                                                <form action="" method="POST">
                                                    <button
                                                        type="submit"
                                                        className="button-estrella-carrito"
                                                    >
                                                        <i
                                                            className="far
                                                            fa-star"
                                                        ></i>
                                                    </button>
                                                </form>
                                                <form action="" method="POST">
                                                    <button
                                                        type="submit"
                                                        className="button-estrella-carrito"
                                                    >
                                                        <i className="material-icons"></i>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            );
                        })}
                    </div>
                </section>

                <section>
                    <a className="button-add-product btn-secondary">
                        <i className="fas fa-plus"></i>
                    </a>
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </Fragment>
    );
}
