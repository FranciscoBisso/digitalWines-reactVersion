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

	const detailsQuery = useQuery({
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

			{detailsQuery.isError && (
				<NotFound apiErrorMsg={detailsQuery.error?.message} />
			)}
			{detailsQuery.isLoading && <Loading />}
			{detailsQuery.isSuccess && detailsQuery.data && (
				<>
					<article className={styles.wine_card}>
						<img
							className={styles.wine_card_img}
							src={detailsQuery.data.wine.imagen}
							alt="wineImg"
							loading="lazy"
						/>

						<div className={styles.wine_card_body}>
							<h1 className={styles.wine_name}>
								{detailsQuery.data.wine.nombre}
							</h1>
							<h2 className={styles.wine_vineyard}>
								{detailsQuery.data.wine.vinoBodega.nombre}
							</h2>
							<h3 className={styles.wine_price}>
								${detailsQuery.data.wine.precio}
							</h3>
							<span className={styles.wine_grape}>
								{detailsQuery.data.wine.vinoUva.nombre}
							</span>
							<span className={styles.wine_stock}>
								Stock: {detailsQuery.data.wine.stock}
							</span>
							<p className={styles.wine_description}>
								{detailsQuery.data.wine.descripcion}
							</p>
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
					</article>
					{detailsQuery.data.similarWines.length != 0 && (
						<section className={styles.similar_wines}>
							<WineSlider
								wines={detailsQuery.data.similarWines}
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
