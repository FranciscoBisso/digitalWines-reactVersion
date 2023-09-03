import { Helmet } from "react-helmet";
import styles from "../css/components/notFound.module.css";

function NotFound({ pageTitle }) {
    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content="¡Ups! página no encontrada" />
            </Helmet>
            <div className={styles.wrapper}>¡Ups! página no encontrada</div>
        </>
    );
}

export default NotFound;
