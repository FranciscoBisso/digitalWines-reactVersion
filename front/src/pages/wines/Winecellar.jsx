import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../services/fetchData";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import WinesGrid from "../../components/WinesGrid";
import NotFound from "../NotFound";
import styles from "../../css/wines/winecellar.module.css";

function Winecellar({ pageTitle }) {
    const url = "http://localhost:3001/api/wines/winecellar";

    const { data, status } = useQuery({
        queryKey: ["homeInfo"],
        queryFn: () => fetchData(url),
    });
    console.log("data ->", data);
    console.log("status ->", status);

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta
                    name="description"
                    content="¡Bienvenido a la página de nuestra vinoteca!"
                />
            </Helmet>
            {status === "error" && <NotFound />}
            {status === "loading" && (
                <div className={styles.loading}>Loading...</div>
            )}
            {status === "success" && (
                <>
                    <h2>Nuestros Vinos</h2>
                    <nav className={styles.nav}>
                        <NavLink className={styles.navLinks}>Tintos</NavLink>
                        <NavLink className={styles.navLinks}>Blancos</NavLink>
                    </nav>
                    <WinesGrid wines={data.data} />
                </>
            )}
        </>
    );
}

export default Winecellar;
