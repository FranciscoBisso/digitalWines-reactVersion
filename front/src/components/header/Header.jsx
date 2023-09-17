import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import logo from "../../assets/icons/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faWineBottle,
    faUser,
    faUserPlus,
    faWineGlass,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
        <>
            <NavLink>
                <img
                    src={logo}
                    alt="Logo"
                    className={styles.logo}
                    width="100%"
                />
            </NavLink>
            <nav className={styles.nav_bar}>
                <NavLink className={`${styles.nav_link} ${styles.home_icon}`}>
                    <FontAwesomeIcon icon={faHome} className={styles.icons} />{" "}
                    <span>Home</span>
                </NavLink>
                <NavLink className={styles.nav_link} to="vinoteca">
                    <FontAwesomeIcon
                        icon={faWineBottle}
                        className={styles.icons}
                    />{" "}
                    <span>Vinoteca</span>
                </NavLink>
                <NavLink className={styles.nav_link} to="cuenta">
                    <FontAwesomeIcon icon={faUser} className={styles.icons} />
                    <span>Mi Cuenta</span>
                </NavLink>
                <NavLink className={styles.nav_link} to="cava">
                    <FontAwesomeIcon
                        icon={faWineGlass}
                        className={styles.icons}
                    />
                    <span>Mi Cava</span>
                </NavLink>
                <NavLink className={styles.nav_link} to="login">
                    <FontAwesomeIcon icon={faUser} className={styles.icons} />
                    <span>Login</span>
                </NavLink>
                <NavLink className={styles.nav_link} to="registro">
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
