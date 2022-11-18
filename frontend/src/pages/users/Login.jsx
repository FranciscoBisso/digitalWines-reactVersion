import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../css/users/login.css";
import bg_img from "../../images/baco-ariadna.jpg";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { login, isLoading, errors, badCredentials } = useLogin();

	const submitHandler = async (e) => {
		e.preventDefault();
		await login(email, password);
	};

	return (
		<Fragment>
			<header>
				<Header />
			</header>
			<main className="login-main-container">
				<img
					src={bg_img}
					className="login-desktop-bg-img"
					alt="bg-img"
				/>
				<form
					onSubmit={submitHandler}
					className="login-form-container"
					id="login-form"
				>
					<h2 className="login-title">LOGIN</h2>
					<section className="login-sections">
						<div className="login-div-google">
							<Link
								type="submit"
								name="button-google"
								className="login-button-google login-box-shadow btn-secondary"
								to="#"
							>
								<i className="fab fa-google login-google-icon"></i>
								<span>Google</span>
							</Link>
						</div>
					</section>

					<div className="errores">
						<ul className="login-errores-front"></ul>
					</div>

					<section className="login-sections">
						<div className="login-div-email">
							<label
								className="login-label form-label"
								htmlFor="email"
							></label>
							<input
								type="email"
								name="email"
								id="email"
								placeholder=" Correo electrónico"
								className="login-imput-email login-box-shadow form-control"
								onChange={(e) => setEmail(e.target.value)}
								value={email}
							/>

							{errors
								? errors.map((err, i) =>
										err.param === "email" ? (
											<p
												className="login-invalid-text-input"
												key={i}
											>
												{err.msg}
											</p>
										) : null
								  )
								: null}
						</div>
						<div className="login-div-password">
							<label
								className="login-label form-label"
								htmlFor="password"
							></label>
							<input
								type="password"
								name="password"
								id="password"
								placeholder=" Contraseña"
								className="login-imput-password login-box-shadow form-control"
								onChange={(e) => setPassword(e.target.value)}
								value={password}
							/>

							{errors
								? errors.map((err, i) =>
										err.param === "password" ? (
											<p
												className="login-invalid-text-input"
												key={i}
											>
												{err.msg}
											</p>
										) : null
								  )
								: null}
						</div>

						<div className="login-div-enter">
							<button
								type="submit"
								name="button-enter"
								className="login-button-enter login-box-shadow btn-secondary"
								disabled={isLoading}
							>
								INGRESAR
							</button>
							{badCredentials ? (
								<p className="login-invalid-text-input">
									{badCredentials}
								</p>
							) : null}
						</div>

						<div className="login-div-subscribe">
							<p>¿No eres socio?</p>
							<Link to="/registro">Suscríbete</Link>
						</div>
					</section>

					<section>
						<div className="login-div-legal-consequences">
							<p>
								Al ingresar, aceptas los términos y condiciones
								y la política de privacidad.
							</p>
						</div>
					</section>
				</form>
			</main>
			<footer>
				<Footer />
			</footer>
		</Fragment>
	);
}
