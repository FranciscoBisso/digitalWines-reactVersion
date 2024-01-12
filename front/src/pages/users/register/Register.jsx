import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import styles from "./register.module.css";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
export default function Register({ pageTitle }) {
	return (
		<>
			<Helmet>
				<title>{pageTitle.toUpperCase()}</title>
				<meta
					name="description"
					content="¡Bienvenido a nuestra página de registro de usuarios!"
				/>
			</Helmet>
			<div className={styles.form_wrapper}>
				<form className={styles.form}>
					<h1 className={styles.form_title}>REGISTRO</h1>
					<TextField
						name="nombre"
						id="nombre"
						label="Nombre de usuario:"
						placeholder="Ej: Juan Pérez"
						variant="standard"
						// error={}
						helperText={""}
						className={styles.text_field}
					/>
					<TextField
						name="email"
						id="email"
						type="email"
						label="Correo electrónico:"
						placeholder="Ej: juanperez@mail.com"
						variant="standard"
						// error={}
						helperText={""}
						className={styles.text_field}
					/>
					<TextField
						name="contrasenia"
						id="contrasenia"
						type="password"
						label="Contraseña:"
						placeholder="Contraseña para Digital Wines"
						variant="standard"
						// error={}
						helperText={""}
						className={styles.text_field}
					/>
					<TextField
						name="confirmPassword"
						id="confirmPassword"
						type="password"
						label="Confirmar contraseña:"
						placeholder="Introducí nuevamente tu contraseña"
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

Register.propTypes = {
	pageTitle: PropTypes.string,
};
