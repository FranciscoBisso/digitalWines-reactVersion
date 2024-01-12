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
						Login
					</Button>
				</form>
			</div>
			{/* <div className={styles.form_wrapper}>
					<label htmlFor="password">
						<input
							type="password"
							name="password"
							id="password"
							className={styles.inputs}
							placeholder="Contraseña"
						/>
					</label>
					<button
						type="button"
						className={styles.enter_btn}>
						Enviar
					</button>
				</form>
			</div> */}
		</>
	);
}

Login.propTypes = {
	pageTitle: PropTypes.string,
};
