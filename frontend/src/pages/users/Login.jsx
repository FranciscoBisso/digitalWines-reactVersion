import { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../css/users/login.css";
import bg_img from "../../images/baco-ariadna.jpg";

export default function Login() {
	return (
		<Fragment>
			<header>
				<Header />
			</header>
			<main class="login-main-container">
				<img src={bg_img} class="login-desktop-bg-img" alt="bg-img" />
				<form
					action="/users/login"
					method="POST"
					class="login-form-container"
				>
					<h2>LOGIN</h2>
					<section>
						<div class="login-div-google">
							<Link
								type="submit"
								name="button-google"
								class="button-google box-shadow btn-secondary"
								to="#"
							>
								<i class="fab fa-google google-icon"></i>
								<span>Google</span>
							</Link>
						</div>
					</section>

					<div class="errores">
						<ul class="errores-front"></ul>
					</div>

					<section>
						<div class="login-div-email">
							<label for="email" class="form-label"></label>
							<input
								type="email"
								name="email"
								id="email"
								placeholder=" Correo electrónico"
								class="login-imput-email box-shadow form-control"
								value=""
							/>

							<p class="register-invalid-text-input">
								{/* msg errores */}
							</p>
						</div>
						<div class="login-div-password">
							<label for="password" class="form-label"></label>
							<input
								type="password"
								name="password"
								id="password"
								placeholder=" Contraseña"
								class="login-imput-password box-shadow form-control"
							/>

							<p class="register-invalid-text-input">
								{/* msg errores */}
							</p>
						</div>

						<div class="login-div-enter">
							<button
								type="submit"
								name="button-enter"
								class="login-button-enter box-shadow btn-secondary"
							>
								INGRESAR
							</button>
						</div>

						<div class="login-div-subscribe">
							<p>¿No eres socio?</p>
							<Link to="/registro">Suscríbete</Link>
						</div>
					</section>

					<section>
						<div class="login-div-legal-consequences">
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
