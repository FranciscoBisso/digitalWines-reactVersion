import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import logo from "../../assets/icons/logo.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LiquorOutlinedIcon from "@mui/icons-material/LiquorOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import WineBarOutlinedIcon from "@mui/icons-material/WineBarOutlined";
import RoomPreferencesOutlinedIcon from "@mui/icons-material/RoomPreferencesOutlined";

export default function Header() {
	// Should I manage isLogged & isAdmin in the RootLayout and pass them as props to the Header?
	const isLogged = false;
	const isAdmin = false;
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
					<HomeOutlinedIcon className={styles.icons} />
					<span>Home</span>
				</NavLink>
				<NavLink
					className={styles.nav_link}
					to="vinoteca">
					<LiquorOutlinedIcon className={styles.icons} />
					<span>Vinoteca</span>
				</NavLink>
				<LoggedUserNavigation isLogged={isLogged} />
				<AdminNavigation
					isLogged={isLogged}
					isAdmin={isAdmin}
				/>
			</nav>
		</>
	);
}

function LoggedUserNavigation({ isLogged }) {
	if (!isLogged) {
		return (
			<>
				<NavLink
					className={styles.nav_link}
					to="login">
					<PersonOutlineOutlinedIcon className={styles.icons} />
					<span>Login</span>
				</NavLink>
				<NavLink
					className={styles.nav_link}
					to="registro">
					<PersonAddAltOutlinedIcon className={styles.icons} />
					<span>Registro</span>
				</NavLink>
			</>
		);
	}

	if (isLogged) {
		return (
			<>
				<NavLink
					className={styles.nav_link}
					to="cuenta">
					<PersonOutlineOutlinedIcon className={styles.icons} />
					<span>Mi Cuenta</span>
				</NavLink>
				<NavLink
					className={styles.nav_link}
					to="cava">
					<WineBarOutlinedIcon className={styles.icons} />
					<span>Mi Cava</span>
				</NavLink>
			</>
		);
	}
}

function AdminNavigation({ isLogged, isAdmin }) {
	if (!isAdmin) {
		return null;
	}

	if (isLogged && isAdmin) {
		return (
			<>
				<NavLink
					className={styles.nav_link}
					to="admin">
					<RoomPreferencesOutlinedIcon className={styles.icons} />
					<span>Admin</span>
				</NavLink>
			</>
		);
	}
}
