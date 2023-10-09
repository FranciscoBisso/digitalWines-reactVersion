import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import styles from "./notFound.module.css";

export default function NotFound({ pageTitle, error }) {
	return (
		<>
			<Helmet>
				<title>{pageTitle}</title>
				<meta
					name="description"
					content="¡Ups! página no encontrada"
				/>
			</Helmet>
			<div className={styles.wrapper}>
				{error ? error : "¡Ups! página no encontrada"}
			</div>
		</>
	);
}

NotFound.propTypes = {
	pageTitle: PropTypes.string,
	error: PropTypes.string,
};
