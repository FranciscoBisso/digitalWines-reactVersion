import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

export default function Cuenta({ pageTitle }) {
	return (
		<>
			<Helmet>
				<title>{pageTitle.toUpperCase()}</title>
				<meta
					name="description"
					content="¡Bienvenido la página de tu cuenta!"
				/>
			</Helmet>
		</>
	);
}

Cuenta.propTypes = {
	pageTitle: PropTypes.string,
};
