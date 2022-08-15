import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFound() {
    return (
        <Fragment>
            <header>
                <Header />
            </header>
            <main>
                <div>
                    <h2>ERROR 404 - PÁGINA INEXISTENTE</h2>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </Fragment>
    );
}
