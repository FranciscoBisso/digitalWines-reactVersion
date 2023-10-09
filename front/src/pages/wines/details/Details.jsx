import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../../services/fetchData";
import Loading from "../../../components/loading/Loading";
import NotFound from "../../notFound/NotFound";
import styles from "./details.module.css";

export default function Details({ pageTitle }) {
	const { id } = useParams();
	const url = `http://localhost:3001/api/wines/details/${id}`;

	const { isLoading, isError, status, data } = useQuery({
		queryKey: ["wineDetails/", id],
		queryFn: () => fetchData(url),
	});

	return (
		<>
			<Helmet>
				<title>{pageTitle}</title>
				<meta
					name="description"
					content="¡Bienvenido a nuestra página para ver los detalles del vino!"
				/>
			</Helmet>

			{isError && <NotFound />}
			{isLoading && <Loading />}
			{status === "success" && (
				<>
					<img
						src={data.data.imagen}
						alt="wineImg"
						loading="lazy"
					/>
					<h1 className={styles}>{data.data.nombre}</h1>
					<h2 className={styles}>{data.data.vinoBodega.nombre}</h2>
					<h3 className={styles}>{data.data.vinoUva.nombre}</h3>
					<p className={styles}>{data.data.descripcion}</p>
					<h4 className={styles}>${data.data.precio}</h4>
					<h5 className={styles}>{data.data.stock}</h5>
				</>
			)}
		</>
	);
}

Details.propTypes = {
	pageTitle: PropTypes.string,
};
