import { lazy } from "react";
import { Helmet } from "react-helmet";
import { useRef, useState } from "react";
import { useWinecellarQuery } from "../../../services/queriesHooks";
import PropTypes from "prop-types";
import styles from "./winecellar.module.css";

const Loading = lazy(() => import("../../../components/loading/Loading"));
const NotFound = lazy(() => import("../../../components/notFound/NotFound"));
const Modal = lazy(() => import("../../../components/modal/Modal"));

export default function Winecellar({ pageTitle }) {
	const winecellarQuery = useWinecellarQuery();

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
			{winecellarQuery.isLoading && <Loading pageTitle="Cargando..." />}
			{winecellarQuery.isError && (
				<NotFound
					pageTitle={"Ups! Algo salio mal..."}
					apiErrorMsg={winecellarQuery.error?.message}
				/>
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
