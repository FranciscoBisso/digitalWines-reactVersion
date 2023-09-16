import PropTypes from "prop-types"
import styles from "./wineSlider.module.css"
import {useRef, useState} from "react"
import {Link} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
	faXmark,
	faWineGlass,
	faStar,
	faAngleDown,
} from "@fortawesome/free-solid-svg-icons"

export default function WinesSlider({wines, title}) {
	const modal = useRef()
	const [selectedWine, setSelectedWine] = useState(null)

	const open = (wine) => {
		setSelectedWine(wine)
		modal?.current.showModal()
	}
	const close = (e) => {
		e.stopPropagation()
		modal?.current.close()
		setSelectedWine(null)
	}

	return (
		<>
			<span className={styles.title}>{title}</span>
			<div className={styles.slider}>
				{wines.map((wine) => (
					<div
						key={wine.id}
						className={styles.slider_item}
						onClick={() => {
							open(wine)
						}}
					>
						<img
							className={styles.item_img}
							src={wine.imagen}
							loading="lazy"
						/>
					</div>
				))}
			</div>

			<dialog className={styles.modal} ref={modal}>
				{selectedWine && (
					<div className={styles.card}>
						<img
							className={styles.modal_img}
							src={selectedWine.imagen}
							loading="lazy"
						/>

						<div className={styles.description}>
							<h4 className={styles.name}>
								{selectedWine.nombre}
							</h4>
							<h5
								className={styles.price}
							>{`AR$ ${selectedWine.precio}`}</h5>
						</div>
						<div className={styles.buttons_wrapper}>
							<button className={styles.actions}>
								<FontAwesomeIcon icon={faWineGlass} />
							</button>
							<button className={styles.actions}>
								<FontAwesomeIcon icon={faStar} />
							</button>
						</div>
						<button className={styles.actions}>
							<Link
								className={`${styles.actions} ${styles.link_button}`}
								to={`detalle/${selectedWine.id}`}
							>
								<FontAwesomeIcon icon={faAngleDown} />
							</Link>
						</button>
						<button
							className={`${styles.actions} ${styles.exit_button}`}
							onClick={close}
						>
							<FontAwesomeIcon icon={faXmark} />
						</button>
					</div>
				)}
			</dialog>
		</>
	)
}

WinesSlider.propTypes = {
	title: PropTypes.string,
	wines: PropTypes.array,
}
