import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import NotFound from './NotFound'
import styles from "../css/home.module.css";
import video from "../assets/promo-video.mp4";
import { fetchData } from "../services/fetchData";


const url = "http://localhost:3001/api/home";

function Home() {
	const { data, status } = useQuery({
        queryKey: ["winesInfo"],
        queryFn: () => fetchData(url),
    });
	
	console.log('DATA ->', data);
	console.log("STATUS ->", status);

	return (
        <>
            <Helmet>
                <title>DW | Home</title>
                <meta
                    name="description"
                    content="¡Bienvenido a nuestra página principal!"
                />
            </Helmet>
            {status === "error" && <NotFound />}
            {status === "loading" && (
                <div className={styles.loading}>Loading...</div>
            )}
            {status === "success" && (
                <>
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
                        <div className={styles.wine_card_wrapper}>
                            {data && data.data.destacados.map(destacado => (<div key={destacado.id}><p>{destacado.nombre}</p></div>))}
                        </div>
                    </section>
                    <section className={styles.wine_card_wrapper}></section>
                    <section className={styles.wine_card_wrapper}></section>
                </>
            )}
        </>
    );
}

export default Home;
