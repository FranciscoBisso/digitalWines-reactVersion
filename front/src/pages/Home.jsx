import { Helmet } from "react-helmet";
import styles from "../css/home.module.css";
import video from "../assets/promo-video.mp4";

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
			<section className={styles.intro_section}>
				<div className={styles.video_wrapper}>
					<video
						className={styles.video}
						playsInline
						autoPlay
						loop
						muted
					>
						<source src={video} type="video/mp4" />
					</video>
				</div>
				<div className={styles.wine_card_wrapper}></div>
			</section>
			<section className={styles.wine_card_wrapper}></section>
			<section className={styles.wine_card_wrapper}></section>
		</>
	);
}

export default Home;
