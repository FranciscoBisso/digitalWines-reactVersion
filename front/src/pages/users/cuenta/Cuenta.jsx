import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

export default function Cuenta({ pageTitle }) {
    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
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
