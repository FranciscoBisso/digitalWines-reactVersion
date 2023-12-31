import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import styles from "./register.module.css";

export default function Register({ pageTitle }) {
	return (
		<>
			<Helmet>
				<title>{pageTitle}</title>
				<meta
					name="description"
					content="¡Bienvenido a nuestra página de registro de usuarios!"
				/>
			</Helmet>
			<form className={styles.register_form}></form>
		</>
	);
}

Register.propTypes = {
	pageTitle: PropTypes.string,
};
