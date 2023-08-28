import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import NotFound from './NotFound'
import styles from "../css/home.module.css";
import video from "../assets/promo-video.mp4";

const url = "http://localhost:3001/api/home";
const fetchData = async () => {
	const res = await fetch(url);
	return res.json();
  };

function Home() {
	const {data, status} = useQuery(['data'], fetchData);
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
      {status === "loading" && <div className={styles.loading}>Loading...</div>} {/* LATER, CHANGE THIS TO A COMPONENT */}
      {status === "success" && (
        <>
          <section className={styles.intro_section}>
            <div className={styles.video_wrapper}>
              <video className={styles.video} playsInline autoPlay loop muted>
                <source src={video} type="video/mp4" />
              </video>
            </div>
            <div className={styles.wine_card_wrapper}></div>
          </section>
          <section className={styles.wine_card_wrapper}></section>
          <section className={styles.wine_card_wrapper}></section>
        </>
      )}
    </>
  );
}

export default Home;
