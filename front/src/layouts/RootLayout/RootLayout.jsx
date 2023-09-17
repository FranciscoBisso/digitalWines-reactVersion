import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import styles from "./rootLayout.module.css";

export default function RootLayout() {
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
