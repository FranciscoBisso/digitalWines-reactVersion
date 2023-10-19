import PropTypes from "prop-types";
import { lazy } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../../services/fetchData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWineGlass, faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./details.module.css";
const Loading = lazy(() => import("../../../components/loading/Loading"));
const NotFound = lazy(() => import("../../notFound/NotFound"));
const WineSlider = lazy(() => import("../../../components/slider/WineSlider"));

export default function Details({ pageTitle }) {
	const { id } = useParams();
	const url = `http://localhost:3001/api/wines/details/${id}`;

	const { isLoading, isError, error, isSuccess, data } = useQuery({
		queryKey: ["details/", id],
		queryFn: () => fetchData(url),
		retry: 1,
	});

	return (
		<>
			<Helmet>
				<title>{pageTitle}</title>
				<link
					rel="icon"
					href="../../../assets/icons/logo.ico"
				/>

				<meta
					name="description"
					content="¡Bienvenido a nuestra página para ver los detalles del vino!"
				/>
			</Helmet>

			{isError && <NotFound apiErrorMsg={error?.message} />}
			{isLoading && <Loading />}
			{isSuccess && data && (
				<>
					<section className={styles.wine_card}>
						<div
							className={styles.wine_card_img_wrapper}
							autoFocus>
							<img
								className={styles.wine_card_img}
								src={data.wine.imagen}
								alt="wineImg"
								loading="lazy"
							/>
						</div>
						<div className={styles.wine_card_body}>
							<h1 className={styles}>{data.wine.nombre}</h1>
							<h2 className={styles}>
								{data.wine.vinoBodega.nombre}
							</h2>
							<h3 className={styles}>
								{data.wine.vinoUva.nombre}
							</h3>
							<p className={styles}>{data.wine.descripcion}</p>
							<h4 className={styles}>${data.wine.precio}</h4>
							<h5 className={styles}>{data.wine.stock}</h5>
						</div>
						<div className={styles.actions_wrapper}>
							<button className={styles.actions}>
								<FontAwesomeIcon icon={faWineGlass} />
								<span className={styles.actions_subtitle}>
									Cava
								</span>
							</button>
							<button className={styles.actions}>
								<FontAwesomeIcon icon={faStar} />
								<span className={styles.actions_subtitle}>
									Favoritos
								</span>
							</button>
						</div>
					</section>
					{data.similarWines.length != 0 && (
						<section className={styles.similar_wines}>
							<WineSlider
								wines={data.similarWines}
								title="Vinos Similares"
							/>
						</section>
					)}
					<section className={styles}></section>
				</>
			)}
		</>
	);
}

Details.propTypes = {
	pageTitle: PropTypes.string,
};
