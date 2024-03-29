import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import styles from "./loading.module.css";
import logo from "../../assets/icons/logo.png";
export default function Loading({ pageTitle }) {
	return (
		<>
			<Helmet>
				<title>{pageTitle?.toUpperCase()}</title>
			</Helmet>
			<div className={styles.loading_wrapper}>
				<img
					src={logo}
					className={styles.loading_spinner}
				/>
			</div>
		</>
	);
}

Loading.propTypes = {
	pageTitle: PropTypes.string,
};
