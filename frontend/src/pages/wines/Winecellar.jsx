import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../css/wines/Winecellar.css";

export default function Winecellar() {
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
						className="form-control me-2 search-bar"
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
										<Link to={`/detalle/${wine.id}`}>
											<img
												src={wine.imagen}
												alt=""
												width="100%"
												className="wine-card-img"
											/>
										</Link>
										<div className="wine-card-body">
											<div className="wine-card-texts">
												<div className="wine-card-product-description">
													<h4 className="card-title">
														{wine.nombre}
													</h4>
													<h5 className="card-subtitle text-muted">
														{wine.vinoBodega.nombre}
													</h5>
												</div>
												<p className="card-text card-price">
													${wine.precio}
												</p>
											</div>
										</div>
									</article>
								</div>
							);
						})}
					</div>
				</section>

				<section>
					<Link
						to="/agregar"
						className="button-add-product btn-secondary"
					>
						<i className="fas fa-plus"></i>
					</Link>
				</section>
			</main>
			<footer>
				<Footer />
			</footer>
		</Fragment>
	);
}
