import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

export default function Delete({ pageTitle }) {
    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta
                    name="description"
                    content="¡Bienvenido a nuestra página para eliminar un vino!"
                />
            </Helmet>
        </>
    );
}

Delete.propTypes = {
    pageTitle: PropTypes.string,
};
