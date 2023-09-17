import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

export default function Cava({ pageTitle }) {
    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta
                    name="description"
                    content="¡Bienvenido la página de tu cava!"
                />
            </Helmet>
        </>
    );
}

Cava.propTypes = {
    pageTitle: PropTypes.string,
};
