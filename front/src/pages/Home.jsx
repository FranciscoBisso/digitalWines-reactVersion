import { Helmet } from "react-helmet";
import styles from "../css/home.module.css";

function Home() {
	return (
		<>
			<Helmet>
				<title>DW | Home</title>
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
