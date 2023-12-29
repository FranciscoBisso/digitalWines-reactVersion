import PropTypes from "prop-types";
import styles from "../slider/wineSlider.module.css";
import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faXmark,
	faWineGlass,
	faStar,
	faPlus,
} from "@fortawesome/free-solid-svg-icons";

// OLD VERSION
// export default function Modal({ selectedWine, close, modal }) {
// 	return (
// 		<dialog
// 			className={styles.modal}
// 			ref={modal}>
// 			{selectedWine && (
// 				<div className={styles.card}>
// 					<img
// 						className={styles.modal_img}
// 						src={selectedWine.imagen}
// 						loading="lazy"
// 					/>
// 					<div className={styles.card_body}>
// 						<h4
// 							className={
// 								styles.price
// 							}>{`$${selectedWine.precio}`}</h4>

// 						<div className={styles.actions_wrapper}>
// 							<button className={styles.actions}>
// 								<FontAwesomeIcon icon={faWineGlass} />
// 								<span className={styles.actions_subtitle}>
// 									Cava
// 								</span>
// 							</button>
// 							<button className={styles.actions}>
// 								<FontAwesomeIcon icon={faStar} />
// 								<span className={styles.actions_subtitle}>
// 									Favoritos
// 								</span>
// 							</button>

// 							<Link
// 								className={styles.actions}
// 								to={`/detalle/${selectedWine.id}`}
// 								onClick={close}>
// 								<FontAwesomeIcon icon={faPlus} />
// 								<span className={styles.actions_subtitle}>
// 									Info
// 								</span>
// 							</Link>
// 						</div>
// 					</div>

// 					<FontAwesomeIcon
// 						className={styles.exit_button}
// 						icon={faXmark}
// 						onClick={close}
// 					/>
// 				</div>
// 			)}
// 		</dialog>
// 	);
// }

const Modal = forwardRef(function Modal({ selectedWine, close }, modal) {
	return (
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
								<FontAwesomeIcon icon={faStar} />
								<span className={styles.actions_subtitle}>
									Favoritos
								</span>
							</button>

							<Link
								className={styles.actions}
								to={`/detalle/${selectedWine.id}`}
								onClick={close}>
								<FontAwesomeIcon icon={faPlus} />
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
	);
});

Modal.propTypes = {
	selectedWine: PropTypes.object,
	close: PropTypes.func,
	modal: PropTypes.object,
};

export default Modal;
