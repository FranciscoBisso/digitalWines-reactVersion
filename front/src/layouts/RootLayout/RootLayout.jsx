import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import styles from "./rootLayout.module.css";
import Loading from "../../components/loading/Loading";

export default function RootLayout() {
    return (
        <>
            <header className={styles.header}>
                <Header />
            </header>

            <main className={styles.main}>
                <Suspense fallback={<Loading />}>
                    <Outlet />
                </Suspense>
            </main>

            <footer className={styles.footer}>
                <Footer />
            </footer>
        </>
    );
}
