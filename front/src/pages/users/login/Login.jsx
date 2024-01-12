import PropTypes from "prop-types";
import styles from "./login.module.css";
import { Helmet } from "react-helmet";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Login({ pageTitle }) {
	return (
		<>
			<Helmet>
				<title>{pageTitle.toUpperCase()}</title>
				<meta
					name="description"
					content="¡Bienvenido a nuestra página de login de usuarios!"
				/>
			</Helmet>
			<div className={styles.form_wrapper}>
				<form className={styles.form}>
					<h1 className={styles.form_title}>LOGIN</h1>
					<TextField
						type="email"
						name="email"
						id="email"
						label="Correo electrónico:"
						placeholder="Ej: juanperez@mail.com"
						variant="standard"
						// error={}
						helperText={""}
						className={styles.text_field}
					/>
					<TextField
						type="password"
						name="password"
						id="password"
						label="Contraseña:"
						placeholder="Contraseña de Digital Wines"
						variant="standard"
						// error={}
						helperText={""}
						className={styles.text_field}
					/>
					<Button
						variant="text"
						className={styles.button}>
						Enviar
					</Button>
				</form>
			</div>
		</>
	);
}

Login.propTypes = {
	pageTitle: PropTypes.string,
};
