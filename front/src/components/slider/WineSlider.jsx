import { lazy } from "react";
import PropTypes from "prop-types";
import styles from "./wineSlider.module.css";
import { useRef, useState } from "react";

const Modal = lazy(() => import("../modal/Modal"));

export default function WinesSlider({ wines, title }) {
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
			<div>
				<span className={styles.title}>{title}</span>
				<div className={styles.slider}>
					{wines.map((wine) => (
						<article
							key={wine.id}
							className={styles.slider_item}
							onClick={() => {
								open(wine);
							}}>
							<img
								className={styles.item_img}
								src={wine.imagen}
								loading="lazy"
							/>
							<div className={styles.img_shadow}></div>
						</article>
					))}
				</div>
			</div>

			<Modal
				ref={refModal}
				modal={refModal}
				selectedWine={selectedWine}
				close={close}
			/>
		</>
	);
}

WinesSlider.propTypes = {
	title: PropTypes.string,
	wines: PropTypes.array,
};
