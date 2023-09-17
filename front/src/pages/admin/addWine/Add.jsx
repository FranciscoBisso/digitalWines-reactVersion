import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

export default function Add({ pageTitle }) {
    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta
                    name="description"
                    content="¡Bienvenido a nuestra página para agregar un nuevo vino!"
                />
            </Helmet>
        </>
    );
}

Add.propTypes = {
    pageTitle: PropTypes.string,
};
