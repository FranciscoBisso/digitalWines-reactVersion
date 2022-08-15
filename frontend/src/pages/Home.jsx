import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/HomeTheme.css";
import "../css/HomeStyles.css";
import video from "../videos/spot-vino.mp4";

export default function Home() {
    const [bestSellers, setBestSellers] = useState([]);
    const [remarcables, setRemarcables] = useState([]);
    const [promoted, setPromoted] = useState([]);
    useEffect(() => {
        async function fetchInfo() {
            const infoRes = await fetch("http://localhost:3001/api/home");
            const categoriesInfo = await infoRes.json();

            setBestSellers(categoriesInfo.data.masVendidos);
            setRemarcables(categoriesInfo.data.masEconomicos);
            setPromoted(categoriesInfo.data.destacados);
        }

        fetchInfo();
    }, []);

    return (
        <Fragment>
            <header>
                <Header />
            </header>
            <main className="main">
                {/* <!--Carousel--> */}
                <div
                    id="carouselDelHome"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselDelHome"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselDelHome"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselDelHome"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselDelHome"
                            data-bs-slide-to="3"
                            aria-label="Slide 4"
                        ></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src=""
                                className="d-block w-100 max-height-img-carousel imag"
                                alt=""
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>
                                    ¿Te gustaría formar parte de la experiencia
                                    Digital wines?
                                </h5>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                src=""
                                className="d-block w-100 max-height-img-carousel imag"
                                alt=""
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src=""
                                className="d-block w-100 max-height-img-carousel imag"
                                alt=""
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src=""
                                className="d-block w-100 max-height-img-carousel imag"
                                alt=""
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselDelHome"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselDelHome"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                {/* <!--termina el carousel --> */}

                {/* <!-- Video Tablet --> */}
                <div className="videoWrapper">
                    <video className="videoHome" autoPlay loop muted>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
                {/* <!-- Fin Video Tablet --> */}

                <h2 className="titulo-home-vinos">DESTACADOS</h2>
                <section className="contenedor1">
                    <div className="linea"></div>
                    <div className="contenedor2">
                        {remarcables.map((wine, i) => (
                            <article className="wrapper" key={i}>
                                <div className="card-wine">
                                    <Link to={`/detalle/${wine.id}`}>
                                        <img
                                            className="card-wine-img"
                                            src=""
                                            alt=""
                                        />
                                    </Link>
                                    <div className="card-body">
                                        <h4 className="card-tittle">
                                            {wine.nombre}
                                        </h4>
                                        <h5 className="card-subtitle mb-2 text-muted">
                                            {wine.vinoBodega.nombre}
                                        </h5>
                                        <p className="card-text">
                                            ${wine.precio}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <h2 className="titulo-home-vinos">MAS VENDIDOS</h2>
                <section className="contenedor1">
                    <div className="linea"></div>
                    <div className="contenedor2">
                        {bestSellers.map((wine, i) => (
                            <article className="wrapper" key={i}>
                                <div className="card-wine">
                                    <Link to={`/detalle/${wine.id}`}>
                                        <img
                                            className="card-wine-img"
                                            src=""
                                            alt=""
                                        />
                                    </Link>
                                    <div className="card-body">
                                        <h4 className="card-tittle">
                                            {wine.nombre}
                                        </h4>
                                        <h5 className="card-subtitle mb-2 text-muted">
                                            {wine.vinoBodega.nombre}
                                        </h5>
                                        <p className="card-text">
                                            ${wine.precio}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <h2 className="titulo-home-vinos">PROMOCIONES</h2>
                <section className="contenedor1">
                    <div className="linea"></div>
                    <div className="contenedor2">
                        {promoted.map((wine, i) => (
                            <article className="wrapper" key={i}>
                                <div className="card-wine">
                                    <Link to={`/detalle/${wine.id}`}>
                                        <img
                                            className="card-wine-img"
                                            src=""
                                            alt=""
                                        />
                                    </Link>
                                    <div className="card-body">
                                        <h4 className="card-tittle">
                                            {wine.nombre}
                                        </h4>
                                        <h5 className="card-subtitle mb-2 text-muted">
                                            {wine.vinoBodega.nombre}
                                        </h5>
                                        <p className="card-text">
                                            ${wine.precio}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="nuestrosVarietales" id="accordion-section">
                    {/* <!-- acordeon --> */}
                    <div
                        className="accordion"
                        id="accordionPanelsStayOpenExample"
                    >
                        <div className="accordion-item">
                            <h2
                                className="accordion-header"
                                id="panelsStayOpen-headingOne"
                            >
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseOne"
                                    aria-expanded="true"
                                    aria-controls="panelsStayOpen-collapseOne"
                                >
                                    Malbec
                                </button>
                            </h2>
                            <div
                                id="panelsStayOpen-collapseOne"
                                className="accordion-collapse collapse show"
                                aria-labelledby="panelsStayOpen-headingOne"
                            >
                                <div className="accordion-body">
                                    <strong>
                                        Vino tinto corpulento con taninos suaves
                                        y aromas frutales.
                                    </strong>
                                    Por más que sea de origen francés, la uva
                                    Malbec se adaptó muy bien al suelo
                                    argentino. Tanto será así que se convirtió
                                    en un referente de la enología argentina e
                                    incluso muchos lo catalogan como el vino
                                    nacional. Con niveles de producción únicos
                                    en el mundo, las vitivinícolas se expanden a
                                    lo largo de todo el país pero el 86% se
                                    concentra en Mendoza. Va muy bien
                                    acompañarlo con asado o una picadita con
                                    queso roquefort.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2
                                className="accordion-header"
                                id="panelsStayOpen-headingTwo"
                            >
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseTwo"
                                >
                                    Bonarda
                                </button>
                            </h2>
                            <div
                                id="panelsStayOpen-collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingTwo"
                            >
                                <div className="conteiner-vinos">
                                    <div className="accordion-body">
                                        <img src="" alt="" />
                                        <strong>
                                            Vino tinto con bajo contenido de
                                            taninos.
                                        </strong>
                                        La Bonarda es la segunda cepa más
                                        plantada en el país y algunos incluso la
                                        consideran el "nuevo" Malbec, debido a
                                        su enorme potencial. La diferencia entre
                                        la que se encuentra en Italia con la
                                        versión argentina es que tiene
                                        características similares a la rarísima
                                        uva Douce Noir, de la región de Savoie,
                                        Francia. Su producción también se
                                        concentra en la provincia de Mendoza
                                        (además de San Juan). Con un color
                                        intenso y oscuro, recomendamos
                                        combinarlas con unas ricas empanadas de
                                        carne.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2
                                className="accordion-header"
                                id="panelsStayOpen-headingThree"
                            >
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseThree"
                                    aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseThree"
                                >
                                    Cabernet Sauvignon
                                </button>
                            </h2>
                            <div
                                id="panelsStayOpen-collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingThree"
                            >
                                <div className="accordion-body">
                                    <strong>
                                        Vino tinto elegante y sutil, con taninos
                                        robustos y aromáticos.
                                    </strong>
                                    Considerada la reina de las cepas (buena
                                    parte de los grandes vinos argentinos se
                                    elaboran con ella), el Cabernet Sauvignon
                                    cobró relevancia internacional por su fácil
                                    adaptabilidad. En Argentina se produce en
                                    las provincias del oeste y, dependendiendo
                                    de su región, los aromas difieren. Más que
                                    nunca aplica la frase cuanto más viejo,
                                    mejor.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2
                                className="accordion-header"
                                id="panelsStayOpen-headingFour"
                            >
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseFour"
                                    aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseFour"
                                >
                                    Merlot
                                </button>
                            </h2>
                            <div
                                id="panelsStayOpen-collapseFour"
                                className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingFour"
                            >
                                <div className="accordion-body">
                                    <strong>
                                        Vino tinto suave y con complejidad
                                        aromática.
                                    </strong>
                                    Su producción continúa siendo baja pero su
                                    calidad es muy alta. En la Argentina los
                                    mejores vinos provienen del Valle de Uco, en
                                    Mendoza, y de la Patagonia, debido a sus
                                    ubicaciones elevadas y de clima fresco. El
                                    maridaje ideal es con una carne asada con
                                    chimichurri.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2
                                className="accordion-header"
                                id="panelsStayOpen-headingFive"
                            >
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseFive"
                                    aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseFive"
                                >
                                    Pinot Noir
                                </button>
                            </h2>
                            <div
                                id="panelsStayOpen-collapseFive"
                                className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingFive"
                            >
                                <div className="accordion-body">
                                    <strong>
                                        Vino tinto fresco, ácido, de aroma
                                        terroso.
                                    </strong>
                                    El Pinot Noir es una cepa que requiere
                                    especial cuidado y un clima particularmente
                                    frío para alcanzar todo su potencial. Como
                                    el Merlot, también se produce en el Valle de
                                    Uco, en Mendoza, y en la Patagonia. De color
                                    rojizo apagado, recomendamos acompañar con
                                    un sabroso plato de pollo.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2
                                className="accordion-header"
                                id="panelsStayOpen-headingSix"
                            >
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseSix"
                                    aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseSix"
                                >
                                    Syrah
                                </button>
                            </h2>
                            <div
                                id="panelsStayOpen-collapseSix"
                                className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingSix"
                            >
                                <div className="accordion-body">
                                    <strong>
                                        Vino tinto ligero, fresco y aroma muy
                                        fuerte. Nació en Europa y terminó en
                                        América del Sur.
                                    </strong>
                                    Más precisamente en el Valle de Tulum, en
                                    San Juan, y en el este de la provincia de
                                    Mendoza. También es una buena idea
                                    combinarla con carnes asadas.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2
                                className="accordion-header"
                                id="panelsStayOpen-headingSeven"
                            >
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseSeven"
                                    aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseSeven"
                                >
                                    Tannat
                                </button>
                            </h2>
                            <div
                                id="panelsStayOpen-collapseSeven"
                                className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingSeven"
                            >
                                <div className="accordion-body">
                                    <strong>
                                        Vino tinto con taninos fuertes, frutal y
                                        mucho cuerpo.
                                    </strong>
                                    Considerado el vino nacional uruguayo, la
                                    cepa de Tannat, oriunda de Francia, hace
                                    poco tiempo ganó terreno en Argentina
                                    (aunque todavía tiene una producción baja en
                                    relación a los demás vinos). Pegó muy bien
                                    en la provincia de Salta, debido a las
                                    temperaturas medias y secas propicias para
                                    el largo período de maduración de las uvas.
                                    Recomendamos disfrutarlo con vegetales
                                    marinados.
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- acordeon --> */}
                </section>
                <h2 className="titulo-home-vinos" id="titulo-varietales">
                    NUESTROS VARIETALES
                </h2>
                <section className="nuestrosVarietales" id="nuestrosTintillos">
                    <div className="columns-wrapper">
                        <div className="columns">
                            <h3>Malbec</h3>
                            <p>
                                Vino tinto corpulento con taninos suaves y
                                aromas frutales. Por más que sea de origen
                                francés, la uva Malbec se adaptó muy bien al
                                suelo argentino. Tanto será así que se convirtió
                                en un referente de la enología argentina e
                                incluso muchos lo catalogan como el vino
                                nacional. Con niveles de producción únicos en el
                                mundo, las vitivinícolas se expanden a lo largo
                                de todo el país pero el 86% se concentra en
                                Mendoza. Va muy bien acompañarlo con asado o una
                                picadita con queso roquefort.
                            </p>
                        </div>

                        <div className="columns">
                            <h3>Bonarda</h3>
                            <p>
                                Vino tinto con bajo contenido de taninos. La
                                Bonarda es la segunda cepa más plantada en el
                                país y algunos incluso la consideran el "nuevo"
                                Malbec, debido a su enorme potencial. La
                                diferencia entre la que se encuentra en Italia
                                con la versión argentina es que tiene
                                características similares a la rarísima uva
                                Douce Noir, de la región de Savoie, Francia. Su
                                producción también se concentra en la provincia
                                de Mendoza (además de San Juan). Con un color
                                intenso y oscuro, recomendamos combinarlas con
                                unas ricas empanadas de carne.
                            </p>
                        </div>

                        <div className="columns">
                            <h3>Cabernet Sauvignon</h3>
                            <p>
                                Vino tinto elegante y sutil, con taninos
                                robustos y aromáticos. Considerada la reina de
                                las cepas (buena parte de los grandes vinos
                                argentinos se elaboran con ella), el Cabernet
                                Sauvignon cobró relevancia internacional por su
                                fácil adaptabilidad. En Argentina se produce en
                                las provincias del oeste y, dependendiendo de su
                                región, los aromas difieren. Más que nunca
                                aplica la frase cuanto más viejo, mejor.
                            </p>
                        </div>

                        <div className="columns">
                            <h3>Merlot</h3>
                            <p>
                                Vino tinto suave y con complejidad aromática. Su
                                producción continúa siendo baja pero su calidad
                                es muy alta. En la Argentina los mejores vinos
                                provienen del Valle de Uco, en Mendoza, y de la
                                Patagonia, debido a sus ubicaciones elevadas y
                                de clima fresco. El maridaje ideal es con una
                                carne asada con chimichurri.
                            </p>
                        </div>

                        <div className="columns">
                            <h3>Pinot Noir</h3>
                            <p>
                                Vino tinto fresco, ácido, de aroma terroso. El
                                Pinot Noir es una cepa que requiere especial
                                cuidado y un clima particularmente frío para
                                alcanzar todo su potencial. Como el Merlot,
                                también se produce en el Valle de Uco, en
                                Mendoza, y en la Patagonia. De color rojizo
                                apagado, recomendamos acompañar con un sabroso
                                plato de pollo.
                            </p>
                        </div>

                        <div className="columns">
                            <h3>Syrah</h3>
                            <p>
                                Vino tinto ligero, fresco y aroma muy fuerte.
                                Nació en Europa y terminó en América del Sur.
                                Más precisamente en el Valle de Tulum, en San
                                Juan, y en el este de la provincia de Mendoza.
                                También es una buena idea combinarla con carnes
                                asadas.
                            </p>
                        </div>

                        <div className="columns">
                            <h3>Tannat</h3>
                            <p>
                                Vino tinto con taninos fuertes, frutal y mucho
                                cuerpo. Considerado el vino nacional uruguayo,
                                la cepa de Tannat, oriunda de Francia, hace poco
                                tiempo ganó terreno en Argentina (aunque todavía
                                tiene una producción baja en relación a los
                                demás vinos). Pegó muy bien en la provincia de
                                Salta, debido a las temperaturas medias y secas
                                propicias para el largo período de maduración de
                                las uvas. Recomendamos disfrutarlo con vegetales
                                marinados.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </Fragment>
    );
}
