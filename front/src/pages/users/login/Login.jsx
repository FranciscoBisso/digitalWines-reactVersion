import PropTypes from "prop-types";
import styles from "./login.module.css";
import { Helmet } from "react-helmet";

export default function Login({ pageTitle }) {
	return (
		<>
			<Helmet>
				<title>{pageTitle}</title>
				<meta
					name="description"
					content="¡Bienvenido a nuestra página de login de usuarios!"
				/>
			</Helmet>
			<div className={styles.form_wrapper}>
				<form className={styles.form}>
					<h1 className={styles.form_title}>LOGIN</h1>

					<button
						type="button"
						className={styles.google_btn}>
						google
					</button>

					<input
						type="email"
						className={styles.inputs}
						placeholder="Email"
					/>
					<input
						type="password"
						className={styles.inputs}
						placeholder="Password"
					/>

					<button
						type="button"
						className={styles.enter_btn}>
						Enviar
					</button>
				</form>
			</div>
		</>
	);
}

Login.propTypes = {
	pageTitle: PropTypes.string,
};
