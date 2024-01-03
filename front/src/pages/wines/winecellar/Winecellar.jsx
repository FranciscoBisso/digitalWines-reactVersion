import { lazy } from "react";
import { useQuery } from "@tanstack/react-query";
import { get } from "../../../api/fetchData";
import { winecellarUrl } from "../../../api/urls";
import { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import styles from "./winecellar.module.css";
import PropTypes from "prop-types";

const Loading = lazy(() => import("../../../components/loading/Loading"));
const NotFound = lazy(() => import("../../notFound/NotFound"));
const Modal = lazy(() => import("../../../components/modal/Modal"));

export default function Winecellar({ pageTitle }) {
	const winecellarQuery = useQuery({
		queryKey: ["winecellarQuery"],
		queryFn: () => get(winecellarUrl),
	});

	const refModal = useRef();
	const [selectedWine, setSelectedWine] = useState(null);

	const open = (wine) => {
		setSelectedWine(wine);
		refModal?.current.showModal();
	};
	const close = (e) => {
		e.stopPropagation();
		refModal?.current.close();
		setSelectedWine(null);
	};

	return (
		<>
			{winecellarQuery.isLoading && <Loading />}
			{winecellarQuery.isError && (
				<NotFound apiErrorMsg={winecellarQuery.error?.message} />
			)}
			{winecellarQuery.isSuccess && winecellarQuery.data && (
				<>
					<Helmet>
						<title>{pageTitle.toUpperCase()}</title>
						<meta
							name="description"
							content="¡Bienvenido a la página de nuestra vinoteca!"
						/>
					</Helmet>
					<h2 className={styles.title}>Nuestros Vinos</h2>
					<div className={styles.wine_cards_wrapper}>
						{winecellarQuery.data.wines.map((wine) => (
							<article
								key={wine.id}
								className={styles.wine_card}
								onClick={() => {
									open(wine);
								}}>
								<img
									src={wine.imagen}
									className={styles.wine_card_img}
								/>
								<div className={styles.img_shadow}></div>
							</article>
						))}
					</div>

					<Modal
						ref={refModal}
						modal={refModal}
						selectedWine={selectedWine}
						close={close}
					/>
				</>
			)}
		</>
	);
}

Winecellar.propTypes = {
	pageTitle: PropTypes.string,
};
