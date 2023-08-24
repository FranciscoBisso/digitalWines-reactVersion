import { NavLink } from "react-router-dom";
import styles from "../css/components/header.module.css";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faWineBottle,
	faUser,
	faUserPlus,
	faWineGlass,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
	return (
		<>
			<img src={logo} alt="Logo" className={styles.logo} width="100%" />
			<nav className={styles.nav_bar}>
				<NavLink className={styles.nav_link}>
					<FontAwesomeIcon
						icon={faWineBottle}
						className={styles.icons}
					/>{" "}
					<span>Vinoteca</span>
				</NavLink>
				<NavLink className={styles.nav_link}>
					<FontAwesomeIcon icon={faUser} className={styles.icons} />
					<span>Mi Cuenta</span>
				</NavLink>
				<NavLink className={styles.nav_link}>
					<FontAwesomeIcon
						icon={faWineGlass}
						className={styles.icons}
					/>
					<span>Mi Cava</span>
				</NavLink>
				<NavLink className={styles.nav_link}>
					<FontAwesomeIcon icon={faUser} className={styles.icons} />
					<span>Login</span>
				</NavLink>
				<NavLink className={styles.nav_link}>
					<FontAwesomeIcon
						icon={faUserPlus}
						className={styles.icons}
					/>
					<span>Registro</span>
				</NavLink>
			</nav>
		</>
	);
}
export default Header;
