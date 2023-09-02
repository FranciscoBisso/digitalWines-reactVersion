import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../css/layouts/rootLayout.module.css";

function RootLayout() {
	return (
		<>
			<header className={`${styles.header} ${styles.cinzelFont}`}>
				<Header />
			</header>

			<main className={`${styles.main} ${styles.ebGaramondFont}`}>
				<Outlet />
			</main>

			<footer className={`${styles.footer} ${styles.ebGaramondFont}`}>
				<Footer />
			</footer>
		</>
	);
}
export default RootLayout;
