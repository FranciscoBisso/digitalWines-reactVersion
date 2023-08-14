import styles from "../css/home.module.css";
import { Helmet } from "react-helmet";

function Home() {
	return (
		<>
			<Helmet>
				<title>HOME</title>
				<meta
					name="description"
					content="¡Bienvenido a nuestra página principal!"
				/>
			</Helmet>
			<div className={styles.robotoFont}>Hello there...!</div>
		</>
	);
}

export default Home;
