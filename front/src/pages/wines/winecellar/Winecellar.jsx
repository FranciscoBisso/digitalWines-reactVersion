import { lazy } from "react";
import { useQuery } from "@tanstack/react-query";
import { get } from "../../../api/fetchData";
import { winecellarUrl } from "../../../api/urls";
import { Helmet } from "react-helmet";
import styles from "./winecellar.module.css";
import PropTypes from "prop-types";

const Loading = lazy(() => import("../../../components/loading/Loading"));
const NotFound = lazy(() => import("../../notFound/NotFound"));
// const WinesGrid = lazy(() => import("../../../components/winesGrid/WinesGrid"));

export default function Winecellar({ pageTitle }) {
	const winecellarQuery = useQuery({
		queryKey: ["winecellarQuery"],
		queryFn: () => get(winecellarUrl),
	});

	console.log(winecellarQuery?.data);

	return (
		<>
			<Helmet>
				<title>{pageTitle.toUpperCase()}</title>
				<meta
					name="description"
					content="¡Bienvenido a la página de nuestra vinoteca!"
				/>
			</Helmet>
			{winecellarQuery.isLoading && <Loading />}
			{winecellarQuery.isError && (
				<NotFound apiErrorMsg={winecellarQuery.error?.message} />
			)}
			{winecellarQuery.isSuccess && winecellarQuery.data && (
				<>
					<h2 className={styles.title}>Nuestros Vinos</h2>
					{/* <WinesGrid wines={winecellarQuery.data.wines} /> */}
					<div className={styles.wine_cards_wrapper}>
						{winecellarQuery.data.wines.map((wine) => (
							<article
								key={wine.id}
								className={styles.wine_card}>
								<img
									src={wine.imagen}
									className={styles.wine_card_img}
								/>
								<div className={styles.img_shadow}></div>
							</article>
						))}
					</div>
				</>
			)}
		</>
	);
}

Winecellar.propTypes = {
	pageTitle: PropTypes.string,
};
