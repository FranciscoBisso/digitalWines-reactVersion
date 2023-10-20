import { lazy } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../../services/fetchData";
import { Helmet } from "react-helmet";
import styles from "./winecellar.module.css";
import PropTypes from "prop-types";

const Loading = lazy(() => import("../../../components/loading/Loading"));
const NotFound = lazy(() => import("../../notFound/NotFound"));
const WinesGrid = lazy(() => import("../../../components/winesGrid/WinesGrid"));

export default function Winecellar({ pageTitle }) {
	const url = "http://localhost:3001/api/wines/winecellar";

	const winecellarQuery = useQuery({
		queryKey: ["winecellar"],
		queryFn: () => fetchData(url),
	});

	return (
		<>
			<Helmet>
				<title>{pageTitle}</title>
				<meta
					name="description"
					content="¡Bienvenido a la página de nuestra vinoteca!"
				/>
			</Helmet>

			{winecellarQuery.isLoading && <Loading />}
			{winecellarQuery.isError && (
				<NotFound apiErrorMsg={winecellarQuery.error?.message} />
			)}
			{winecellarQuery.isSuccess && winecellarQuery.data && (
				<div className={styles.wrapper}>
					<h2>Nuestros Vinos</h2>
					<WinesGrid wines={winecellarQuery.data.wines} />
				</div>
			)}
		</>
	);
}

Winecellar.propTypes = {
	pageTitle: PropTypes.string,
};
