import PropTypes from "prop-types";
import styles from "./wineSlider.module.css";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faXmark,
	faWineGlass,
	faStar,
	faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

export default function WinesSlider({ wines, title }) {
	const modal = useRef();
	const [selectedWine, setSelectedWine] = useState(null);

	const open = (wine) => {
		setSelectedWine(wine);
		modal?.current.showModal();
	};
	const close = (e) => {
		e.stopPropagation();
		modal?.current.close();
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
						</article>
					))}
				</div>
			</div>

			<dialog
				className={styles.modal}
				ref={modal}>
				{selectedWine && (
					<div className={styles.card}>
						<img
							className={styles.modal_img}
							src={selectedWine.imagen}
							loading="lazy"
						/>
						<div className={styles.card_body}>
							<h4
								className={
									styles.price
								}>{`$${selectedWine.precio}`}</h4>

							<div className={styles.actions_wrapper}>
								<button className={styles.actions}>
									<FontAwesomeIcon icon={faWineGlass} />
									<span className={styles.actions_subtitle}>
										Cava
									</span>
								</button>
								<button className={styles.actions}>
									<FontAwesomeIcon
										icon={faStar}
										bordered
									/>
									<span className={styles.actions_subtitle}>
										Favoritos
									</span>
								</button>

								<Link
									className={styles.actions}
									to={`detalle/${selectedWine.id}`}>
									<FontAwesomeIcon icon={faAngleRight} />
									<span className={styles.actions_subtitle}>
										Info
									</span>
								</Link>
							</div>
						</div>

						<FontAwesomeIcon
							className={styles.exit_button}
							icon={faXmark}
							onClick={close}
						/>
					</div>
				)}
			</dialog>
		</>
	);
}

WinesSlider.propTypes = {
	title: PropTypes.string,
	wines: PropTypes.array,
};
