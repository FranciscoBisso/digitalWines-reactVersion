import { lazy } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../services/fetchData";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import video from "../../assets/promo-video.mp4";
import styles from "./home.module.css";
const NotFound = lazy(() => import("../notFound/NotFound"));
const Loading = lazy(() => import("../../components/loading/Loading"));
const WineSlider = lazy(() => import("../../components/slider/WineSlider"));

const url = "http://localhost:3001/api/home";

export default function Home({ pageTitle }) {
	const { isLoading, isError, isSuccess, data } = useQuery({
		queryKey: ["home"],
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

			{isError && <NotFound />}
			{isLoading && <Loading />}
			{isSuccess && data && (
				<>
					<section className={styles.intro_section}>
						<div className={styles.video_wrapper}>
							<video
								className={styles.video}
								playsInline
								autoPlay
								loop
								muted>
								<source
									src={video}
									type="video/mp4"
								/>
							</video>
						</div>
					</section>

					<section className={styles.sliders_section}>
						<div className={styles.slider_wrapper}>
							<WineSlider
								title={"Destacados"}
								wines={data.featured}
							/>
						</div>
						<div className={styles.slider_wrapper}>
							<WineSlider
								title={"Más Económicos"}
								wines={data.bestSellers}
							/>
						</div>
						<div className={styles.slider_wrapper}>
							<WineSlider
								title={"Promociones"}
								wines={data.bestDeals}
							/>
						</div>
					</section>
					<section
						style={{
							color: "white",
							fontSize: "15px",
							border: "1px solid var(--lightGray)",
							padding: "2% 5%",
							textAlign: "justify",
							lineHeight: "1.5em",
						}}>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Illum fugit laudantium veniam debitis nisi
							quibusdam earum nihil nesciunt tempore et ipsum
							eveniet labore quaerat eos mollitia laboriosam
							quisquam obcaecati laborum quae, impedit temporibus
							itaque maxime voluptatibus! Alias veritatis,
							laboriosam similique inventore consequatur voluptate
							corporis amet, hic quis dolorem nisi id! Esse iste
							et dignissimos dolore laudantium. Amet maiores sed
							adipisci nam libero eligendi necessitatibus
							cupiditate sequi rerum quam, ut error numquam earum
							nulla at quidem voluptate voluptas culpa officia
							explicabo molestiae porro laudantium quisquam?
							Similique distinctio illum aliquam earum
							consequuntur possimus. Libero culpa blanditiis
							veritatis cum repellat, nulla ipsam magni quod, eos
							possimus aut quia dolores asperiores voluptatum! Qui
							sequi illo vel, ad inventore est nulla minima
							praesentium possimus ex quos explicabo impedit! Quas
							commodi a voluptas quisquam. Nisi laudantium sint
							sunt dolores vitae reiciendis incidunt eligendi
							asperiores dicta placeat magnam mollitia omnis error
							adipisci, eos esse excepturi tempora sequi hic
							quaerat itaque ipsa eius aliquid libero. Delectus,
							ad? Earum aliquam sit atque recusandae aspernatur ab
							possimus in quisquam odit accusamus officiis animi
							repudiandae praesentium harum quia fugit sequi ad,
							aut minima, reiciendis officia, est alias aperiam!
							Magnam exercitationem laudantium nam? Mollitia modi
							vitae ad sit sed corporis nostrum incidunt nemo
							natus in! Aspernatur dicta dolores commodi
							temporibus rem et illo molestias iure debitis
							necessitatibus, perferendis ducimus fugiat
							similique! Hic ipsa delectus consectetur eos nobis
							natus asperiores, tempora maxime porro quam id
							veritatis eius nisi eveniet, nemo ipsum libero
							voluptatibus. Rem, nihil. Sint velit eius
							repellendus libero eum molestias error!
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
