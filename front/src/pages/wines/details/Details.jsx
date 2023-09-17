import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

export default function Details({ pageTitle }) {
    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta
                    name="description"
                    content="¡Bienvenido a nuestra página para ver los detalles del vino!"
                />
            </Helmet>
        </>
    );
}

Details.propTypes = {
    pageTitle: PropTypes.string,
};
