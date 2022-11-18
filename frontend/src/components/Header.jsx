import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import "../css/Header.css";
import logo from "../images/icono.ico";

export default function Header() {
	const logout = useLogout();

	const clickHandler = () => {
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
					<Link className="link_chica" to="/login">
						<i className="far fa-user"></i>
					</Link>
					<Link className="link_chica" to="/registro">
						<i className="far fa-address-card"></i>
					</Link>
					<Link className="link_chica" onClick={clickHandler} to="#">
						<i className="fas fa-user-times"></i>
					</Link>
				</nav>

				<nav className="contenedor-links_grande">
					<Link to="/vinoteca">Vinoteca</Link>
					<Link onClick={clickHandler} to="#">
						Logout
					</Link>
					<Link to="/login">Login</Link>
					<Link to="/registro">Registro</Link>
				</nav>
			</section>
		</div>
	);
}
