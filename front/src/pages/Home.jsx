import styles from "../css/home.module.css";
import { Helmet } from "react-helmet";

function Home() {
	return (
		<>
			<Helmet>
				<title>HOME</title>
			</Helmet>
			<div className={styles.testing}>Hello there...!</div>
		</>
	);
}

export default Home;
