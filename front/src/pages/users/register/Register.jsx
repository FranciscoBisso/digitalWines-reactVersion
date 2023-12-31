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
			<div className={styles.form_wrapper}>
				<form className={styles.form}>
					<h1 className={styles.form_title}>REGISTRO</h1>
					<label htmlFor="username">
						<input
							type="text"
							name="username"
							id="username"
							className={styles.inputs}
							placeholder="Nombre de usuario"
						/>
					</label>
					<label htmlFor="email">
						<input
							type="email"
							name="email"
							id="email"
							className={styles.inputs}
							placeholder="Correo electrónico"
						/>
					</label>
					<label htmlFor="password">
						<input
							type="password"
							name="password"
							id="password"
							className={styles.inputs}
							placeholder="Contraseña"
						/>
					</label>
					<label htmlFor="confirm_password">
						<input
							type="password"
							name="confirm_password"
							id="confirm_password"
							className={styles.inputs}
							placeholder="Confirmar contraseña"
						/>
					</label>
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

Register.propTypes = {
	pageTitle: PropTypes.string,
};
