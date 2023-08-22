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

			<main className={`${styles.main} ${styles.marcelusFont}`}>
				<Outlet />
				Vamos a ver la fuente
			</main>

			<footer className={`${styles.footer} ${styles.marcelusFont}`}>
				<Footer />
			</footer>
		</>
	);
}
export default RootLayout;
