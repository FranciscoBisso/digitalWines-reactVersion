import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../services/fetchData";
import { Helmet } from "react-helmet";
import NotFound from './NotFound'
import styles from "../css/home.module.css";
import video from "../assets/promo-video.mp4";
import WinesGrid from '../components/WinesGrid'


const url = "http://localhost:3001/api/home";

function Home({ pageTitle }) {
    const { data, status } = useQuery({
        queryKey: ["homeInfo"],
        queryFn: () => fetchData(url),
    });

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
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
                            {/* <WinesGrid wines={data.data.destacados} /> */}
                        </div>
                    </section>
                    <section className={styles.wine_card_wrapper}>
                        <WinesGrid wines={data.data.masEconomicos} />
                    </section>
                    <section className={styles.wine_card_wrapper}>
                        <WinesGrid wines={data.data.masVendidos} />
                    </section>
                </>
            )}
        </>
    );
}

export default Home;
