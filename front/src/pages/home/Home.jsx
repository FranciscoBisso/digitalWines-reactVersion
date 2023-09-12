import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../services/fetchData";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import NotFound from "../notFound/NotFound";
import WineSlider from "../../components/slider/WineSlider";
import video from "../../assets/promo-video.mp4";
import styles from "./home.module.css";

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
                    </section>

                    <section className={styles.sliders_section}>
                        <div className={styles.slider_wrapper}>
                            <WineSlider
                                title={"Destacados"}
                                wines={data.data.destacados}
                            />
                        </div>
                        <div className={styles.slider_wrapper}>
                            <WineSlider
                                title={"Más Económicos"}
                                wines={data.data.masEconomicos}
                            />
                        </div>
                        <div className={styles.slider_wrapper}>
                            <WineSlider
                                title={"Promociones"}
                                wines={data.data.masVendidos}
                            />
                        </div>
                    </section>
                    <section
                        style={{
                            color: "white",
                            fontSize: "15px",
                            border: "1px solid aqua",
                        }}
                    >
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Id maxime, hic vitae reiciendis soluta
                            veritatis perferendis commodi quos eveniet voluptas
                            aliquam quod error, nostrum beatae, labore enim
                            dolores odio consectetur!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Id maxime, hic vitae reiciendis soluta
                            veritatis perferendis commodi quos eveniet voluptas
                            aliquam quod error, nostrum beatae, labore enim
                            dolores odio consectetur!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Id maxime, hic vitae reiciendis soluta
                            veritatis perferendis commodi quos eveniet voluptas
                            aliquam quod error, nostrum beatae, labore enim
                            dolores odio consectetur!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Id maxime, hic vitae reiciendis soluta
                            veritatis perferendis commodi quos eveniet voluptas
                            aliquam quod error, nostrum beatae, labore enim
                            dolores odio consectetur!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Id maxime, hic vitae reiciendis soluta
                            veritatis perferendis commodi quos eveniet voluptas
                            aliquam quod error, nostrum beatae, labore enim
                            dolores odio consectetur!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Id maxime, hic vitae reiciendis soluta
                            veritatis perferendis commodi quos eveniet voluptas
                            aliquam quod error, nostrum beatae, labore enim
                            dolores odio consectetur!
                        </p>
                    </section>
                </>
            )}
        </>
    );
}

Home.propTypes = {
    pageTitle: PropTypes.string,
};

export default Home;
