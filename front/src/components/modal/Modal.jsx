import PropTypes from "prop-types";
import styles from "./modal.module.css";
import { forwardRef } from "react";
import { Link } from "react-router-dom";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import WineBarOutlinedIcon from "@mui/icons-material/WineBarOutlined";
import StarTwoToneIcon from "@mui/icons-material/StarTwoTone";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

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
								<WineBarOutlinedIcon />
								<span className={styles.actions_subtitle}>
									Cava
								</span>
							</button>
							<button className={styles.actions}>
								<StarTwoToneIcon />
								<span className={styles.actions_subtitle}>
									Favoritos
								</span>
							</button>

							<Link
								className={styles.actions}
								to={`/detalle/${selectedWine.id}`}
								onClick={close}>
								<AddCircleOutlineOutlinedIcon />
								<span className={styles.actions_subtitle}>
									Info
								</span>
							</Link>
						</div>
					</div>
					<button
						className={`${styles.actions} ${styles.exit_button}`}>
						<ClearOutlinedIcon onClick={close} />
					</button>
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
