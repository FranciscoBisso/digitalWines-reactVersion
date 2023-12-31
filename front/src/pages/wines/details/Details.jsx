import { lazy } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { get } from "../../../api/fetchData";
import { detailsUrl } from "../../../api/urls";

import styles from "./details.module.css";
import WineBarOutlinedIcon from "@mui/icons-material/WineBarOutlined";
import StarTwoToneIcon from "@mui/icons-material/StarTwoTone";

const Loading = lazy(() => import("../../../components/loading/Loading"));
const NotFound = lazy(() => import("../../notFound/NotFound"));
const WineSlider = lazy(() => import("../../../components/slider/WineSlider"));

export default function Details() {
	const { id } = useParams();

	const detailsQuery = useQuery({
		queryKey: ["details/", id],
		queryFn: () => get(detailsUrl(id)),
		retry: 1,
	});

	return (
		<>
			{detailsQuery.isError && (
				<NotFound apiErrorMsg={detailsQuery.error?.message} />
			)}
			{detailsQuery.isLoading && <Loading />}
			{detailsQuery.isSuccess && detailsQuery.data && (
				<>
					<Helmet>
						<title>
							{detailsQuery.data.wine.nombre.toUpperCase()}
						</title>
						<link
							rel="icon"
							href="../../../assets/icons/logo.ico"
						/>

						<meta
							name="description"
							content="¡Bienvenido a nuestra página para ver los detalles del vino!"
						/>
					</Helmet>
					<article className={styles.wine_card}>
						<div className={styles.wine_card_img_wrapper}>
							<img
								className={styles.wine_card_img}
								src={detailsQuery.data.wine.imagen}
								alt="wineImg"
								loading="lazy"
							/>
							<div className={styles.numbers_wrapper}>
								<h4 className={styles.wine_price}>
									{/* <strong> */}$
									{detailsQuery.data.wine.precio}
									{/* </strong> */}
								</h4>
							</div>
							<div className={styles.actions_wrapper}>
								<button className={styles.actions}>
									<StarTwoToneIcon />
									<span className={styles.actions_subtitle}>
										Favoritos
									</span>
								</button>
								<button className={styles.actions}>
									<WineBarOutlinedIcon />
									<span className={styles.actions_subtitle}>
										Cava
									</span>
								</button>
							</div>
						</div>

						<div className={styles.wine_card_body}>
							<h1 className={styles.wine_name}>
								{detailsQuery.data.wine.nombre}
							</h1>
							<h2 className={styles.wine_vineyard}>
								{detailsQuery.data.wine.vinoBodega.nombre}
							</h2>
							<h3 className={styles.wine_grape}>
								{detailsQuery.data.wine.vinoUva.nombre}
							</h3>
							<p className={styles.wine_description}>
								{detailsQuery.data.wine.descripcion}
							</p>
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
