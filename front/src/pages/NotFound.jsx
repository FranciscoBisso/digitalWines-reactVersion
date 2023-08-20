import { Helmet } from "react-helmet";
import styles from "../css/components/notFound.module.css";

function NotFound() {
	return (
		<>
			<Helmet>
				<title>DW | 404</title>
				<meta name="description" content="¡Ups! página no encontrada" />
			</Helmet>
			<div className={styles.wrapper}></div>
		</>
	);
}

export default NotFound;
