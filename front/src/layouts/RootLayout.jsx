import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../css/layouts/rootLayout.module.css";

function RootLayout() {
	return (
		<>
			<header className={styles.header}>
				<Header />
			</header>

			<main className={styles.main}>
				<Outlet />
			</main>

			<footer className={styles.footer}>
				<Footer />
			</footer>
		</>
	);
}
export default RootLayout;
