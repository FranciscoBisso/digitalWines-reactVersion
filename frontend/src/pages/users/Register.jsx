import { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../css/users/register.css";
import bg_img from "../../images/venus-birth.jpeg";
export default function Register() {
	const submitHandler = (e) => {
		e.preventDefault();
		const form = document.getElementById("register-form");
		const formData = new FormData(form);
		const name = formData.get("name");
		const email = formData.get("email");
		const password = formData.get("password");
		const confirmPassword = formData.get("confirm-password");
		const image = formData.get("image");
		console.log("name", name);
		console.log("email", email);
		console.log("password", password);
		console.log("confirmPassword", confirmPassword);
		console.log("image", image);
	};

	return (
		<Fragment>
			<header>
				<Header />
			</header>
			<main className="register-main-container">
				<img
					src={bg_img}
					className="register-desktop-bg-img"
					alt="bg-img"
				/>

				<form
					className="register-form-container box-shadow"
					id="register-form"
					onSubmit={submitHandler}
				>
					<section className="register-section">
						<h4 className="register-title">REGISTRO</h4>
						<div className="register-div-google">
							<button
								type="submit"
								name="button-google"
								className="register-button-google box-shadow btn-secondary"
							>
								<Link to="">
									<i className="fab fa-google register-google-icon"></i>
									<span>Google</span>
								</Link>
							</button>
						</div>
					</section>

					<section className="register-section">
						<h4 className="register-subtitle">
							Información Personal:
						</h4>
						<div className="register-div-name">
							<label
								htmlFor="name"
								className="form-label"
							></label>
							<input
								className="register-imput-name box-shadow form-control"
								name="name"
								id="name"
								type="text"
								placeholder=" Nombre y Apellido"
							/>

							<p className="register-invalid-text-input">
								{/* msg de error */}
							</p>
						</div>
						<div className="register-div-email">
							<label
								htmlFor="email"
								className="form-label"
							></label>
							<input
								type="email"
								name="email"
								id="email"
								placeholder=" Correo Electrónico"
								className="register-imput-email box-shadow form-control"
							/>

							<p className="register-invalid-text-input">
								{/* msg de error */}
							</p>
						</div>

						<div className="register-div-password">
							<label
								htmlFor="password"
								className="form-label"
							></label>
							<input
								type="password"
								name="password"
								id="password"
								placeholder=" Contraseña"
								className="register-imput-password box-shadow form-control"
							/>

							<p className="register-invalid-text-input">
								{/* msg de error */}
							</p>
						</div>
						<div className="register-div-confirmPassword">
							<label
								htmlFor="confirm-password"
								className="form-label"
							></label>
							<input
								type="password"
								name="confirm-password"
								id="confirm-password"
								placeholder=" Confirmar Contraseña"
								className="register-imput-password box-shadow form-control"
							/>

							<p className="register-invalid-text-input">
								{/* msg de error */}
							</p>
						</div>
						<div className="register-div-img">
							<label htmlFor="image" className="form-label">
								Foto de Perfil:
							</label>
							<input
								className="form-control box-shadow"
								width="100%"
								type="file"
								name="image"
								id="image"
								accept="image/jpg"
							/>

							<div className="text-danger">
								<p className="register-invalid-text-input">
									{/* msg de error */}
								</p>
							</div>
						</div>
					</section>

					<section className="register-section">
						<div className="register-div-enter">
							<button
								type="submit"
								name="button-enter"
								className="register-button-enter box-shadow btn-secondary"
							>
								<p>INGRESAR</p>
								<p></p>
							</button>
						</div>

						<div className="register-div-to-login">
							<p>
								¿Ya tienes una cuenta?
								<Link className="link" to="/login">
									Iniciar Sesion
								</Link>
							</p>
						</div>
					</section>
					<div className="errores">
						<ul className="errores-front"></ul>
					</div>
				</form>
			</main>
			<footer>
				<Footer />
			</footer>
		</Fragment>
	);
}
