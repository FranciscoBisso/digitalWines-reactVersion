import { NavLink } from "react-router-dom";
import styles from "../css/components/header.module.css";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faWineBottle,
	faUser,
	faUserPlus,
	faWineGlassAlt,
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
					/>
					Vinoteca
				</NavLink>
				<NavLink className={styles.nav_link}>
					<FontAwesomeIcon icon={faUser} className={styles.icons} />
					Mi Cuenta
				</NavLink>
				<NavLink className={styles.nav_link}>
					<FontAwesomeIcon
						icon={faWineGlassAlt}
						className={styles.icons}
					/>
					Mi Cava
				</NavLink>
				<NavLink className={styles.nav_link}>
					<FontAwesomeIcon icon={faUser} className={styles.icons} />
					Login
				</NavLink>
				<NavLink className={styles.nav_link}>
					<FontAwesomeIcon
						icon={faUserPlus}
						className={styles.icons}
					/>
					Registro
				</NavLink>
			</nav>
		</>
	);
}
export default Header;
