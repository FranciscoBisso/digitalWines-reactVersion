import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../css/rootLayout.module.css";

function RootLayout() {
	return (
		<>
			<header
				className={`${styles.secondary_bg_color} ${styles.header} ${styles.cinzelFont}`}
			>
				<Header />
			</header>

			<main className={`${styles.primary_bg_color} ${styles.main}`}>
				<Outlet />
			</main>

			<footer className={`${styles.primary_bg_color} ${styles.footer}`}>
				<Footer />
			</footer>
		</>
	);
}
export default RootLayout;
