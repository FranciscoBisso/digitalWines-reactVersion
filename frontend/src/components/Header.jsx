import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import "../css/Header.css";
import logo from "../images/icono.ico";

export default function Header() {
	const { logout } = useLogout();
	const { user } = useAuthContext();

	const logoutHandler = () => {
		logout();
	};

	return (
		<div>
			<section className="barra-nav">
				<Link to="/" className="contenedor_logo">
					<img src={logo} alt="Logo" className="logo" width="100%" />
					<div className="logo-texto-wrapper">
						<p className="logo-texto-D">D</p>
						<p className="logo-texto-W">W</p>
					</div>
				</Link>

				<nav className="contenedor-links_chica">
					<Link className="link_chica" to="/vinoteca">
						<i className="fas fa-wine-bottle"></i>
					</Link>
					{!user ? (
						<>
							<Link className="link_chica" to="/login">
								<i className="far fa-user"></i>
							</Link>
							<Link className="link_chica" to="/registro">
								<i className="far fa-address-card"></i>
							</Link>
						</>
					) : (
						<>
							<Link
								className="link_chica"
								onClick={logoutHandler}
								to="#"
							>
								<i className="fas fa-user-times"></i>
							</Link>

							<Link className="link_chica" to="#">
								<img
									className="avatar"
									src={user.imagen}
									alt="avatar"
								></img>
							</Link>
						</>
					)}
				</nav>

				<nav className="contenedor-links_grande">
					<Link to="/vinoteca">Vinoteca</Link>
					{user ? (
						<>
							<Link onClick={logoutHandler} to="#">
								Logout
							</Link>
							<Link to="#">
								<img
									className="avatar"
									src={user.imagen}
									alt="avatar"
								></img>
							</Link>
						</>
					) : (
						<>
							<Link to="/login">Login</Link>
							<Link to="/registro">Registro</Link>
						</>
					)}
				</nav>
			</section>
		</div>
	);
}
