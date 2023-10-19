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
					<article className={styles.wine_card}>
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
							<h1 className={styles.wine_name}>
								{data.wine.nombre}
							</h1>
							<h2 className={styles.wine_vineyard}>
								{data.wine.vinoBodega.nombre}
							</h2>
							<p className={styles.wine_description}>
								{data.wine.descripcion}
							</p>
							<h3 className={styles.wine_grape}>
								{data.wine.vinoUva.nombre}
							</h3>
							<h4 className={styles.wine_price}>
								${data.wine.precio}
							</h4>
							<h5 className={styles.wine_stock}>
								{data.wine.stock}
							</h5>
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
