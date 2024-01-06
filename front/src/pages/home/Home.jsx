import { lazy } from "react";
import { useQuery } from "@tanstack/react-query";
import { get } from "../../services/fetchData";
import { homeUrl } from "../../services/urls";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import video from "../../assets/promo-video.mp4";
import styles from "./home.module.css";
import Accordion from "../../components/accordion/Accordion";
const NotFound = lazy(() => import("../notFound/NotFound"));
const Loading = lazy(() => import("../../components/loading/Loading"));
const WineSlider = lazy(() => import("../../components/slider/WineSlider"));

export default function Home({ pageTitle }) {
	const homeQuery = useQuery({
		queryKey: ["homeQuery"],
		queryFn: () => get(homeUrl),
	});

	const varietals = [
		{
			name: "Malbec",
			description:
				"Vino tinto corpulento con taninos suaves y aromas frutales. Por más que sea de origen francés, la uva Malbec se adaptó muy bien al suelo argentino. Tanto será así que se convirtió en un referente de la enología argentina e incluso muchos lo catalogan como el vino nacional. Con niveles de producción únicos en el mundo, las vitivinícolas se expanden a lo largo de todo el país pero el 86% se concentra en Mendoza. Va muy bien acompañarlo con asado o una picadita con queso roquefort.",
		},
		{
			name: "Bonarda",
			description:
				"Vino tinto con bajo contenido de taninos. La Bonarda es la segunda cepa más plantada en el país y algunos incluso la consideran el nuevo Malbec, debido a su enorme potencial. La diferencia entre la que se encuentra en Italia con la versión argentina es que tiene características similares a la rarísima uva Douce Noir, de la región de Savoie, Francia. Su producción también se concentra en la provincia de Mendoza (además de San Juan). Con un color intenso y oscuro, recomendamos combinarlas con unas ricas empanadas de carne.",
		},
		{
			name: "Cabernet Sauvignon",
			description:
				"Vino tinto elegante y sutil, con taninos robustos y aromáticos. Considerada la reina de las cepas (buena parte de los grandes vinos argentinos se elaboran con ella), el Cabernet Sauvignon cobró relevancia internacional por su fácil adaptabilidad. En Argentina se produce en las provincias del oeste y, dependendiendo de su región, los aromas difieren. Más que nunca aplica la frase cuanto más viejo, mejor.",
		},
		{
			name: "Merlot",
			description:
				"Vino tinto suave y con complejidad aromática. Su producción continúa siendo baja pero su calidad es muy alta. En la Argentina los mejores vinos provienen del Valle de Uco, en Mendoza, y de la Patagonia, debido a sus ubicaciones elevadas y de clima fresco. El maridaje ideal es con una carne asada con chimichurri.",
		},
		{
			name: "Pinot Noir",
			description:
				"Vino tinto fresco, ácido, de aroma terroso. El Pinot Noir es una cepa que requiere especial cuidado y un clima particularmente frío para alcanzar todo su potencial. Como el Merlot, también se produce en el Valle de Uco, en Mendoza, y en la Patagonia. De color rojizo apagado, recomendamos acompañar con un sabroso plato de pollo.",
		},
		{
			name: "Syrah",
			description:
				"Vino tinto ligero, fresco y aroma muy fuerte. Nació en Europa y terminó en América del Sur. Más precisamente en el Valle de Tulum, en San Juan, y en el este de la provincia de Mendoza. También es una buena idea combinarla con carnes asadas.",
		},
		{
			name: "Tannat",
			description:
				"Vino tinto con taninos fuertes, frutal y mucho cuerpo. Considerado el vino nacional uruguayo, la cepa de Tannat, oriunda de Francia, hace poco tiempo ganó terreno en Argentina (aunque todavía tiene una producción baja en relación a los demás vinos). Pegó muy bien en la provincia de Salta, debido a las temperaturas medias y secas propicias para el largo período de maduración de las uvas. Recomendamos disfrutarlo con vegetales marinados.",
		},
	];

	return (
		<>
			{homeQuery.isLoading && <Loading />}
			{homeQuery.isError && (
				<NotFound apiErrorMsg={homeQuery.error?.message} />
			)}
			{homeQuery.isSuccess && homeQuery.data && (
				<>
					<Helmet>
						<title>{pageTitle.toUpperCase()}</title>
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
								wines={homeQuery.data.featured}
							/>
						</div>
						<div className={styles.slider_wrapper}>
							<WineSlider
								title={"Más Vendidos"}
								wines={homeQuery.data.bestSellers}
							/>
						</div>
						<div className={styles.slider_wrapper}>
							<WineSlider
								title={"Más Económicos"}
								wines={homeQuery.data.bestDeals}
							/>
						</div>
					</section>
					<section className={styles.varietals_section}>
						<Accordion
							title={"Nuestros Varietales"}
							varietals={varietals}
						/>
					</section>
				</>
			)}
		</>
	);
}

Home.propTypes = {
	pageTitle: PropTypes.string,
};
