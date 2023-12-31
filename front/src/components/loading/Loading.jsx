import styles from "./loading.module.css";
import logo from "../../assets/icons/logo.png";
export default function Loading() {
	return (
		<div className={styles.loading_wrapper}>
			<img
				src={logo}
				className={styles.loading_spinner}
			/>
		</div>
	);
}
