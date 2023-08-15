import { Helmet } from "react-helmet";

function NotFound() {
	return (
		<>
			<Helmet>
				<title>DW | 404</title>
				<meta name="description" content="¡Ups! página no encontrada" />
			</Helmet>
		</>
	);
}

export default NotFound;
