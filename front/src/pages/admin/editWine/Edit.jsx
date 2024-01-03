import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

export default function Edit({ pageTitle }) {
	return (
		<>
			<Helmet>
				<title>{pageTitle.toUpperCase()}</title>
				<meta
					name="description"
					content="¡Bienvenido a nuestra página para editar un vino!"
				/>
			</Helmet>
		</>
	);
}

Edit.propTypes = {
	pageTitle: PropTypes.string,
};
