import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

export default function Login({ pageTitle }) {
    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta
                    name="description"
                    content="¡Bienvenido a nuestra página de login de usuarios!"
                />
            </Helmet>
        </>
    );
}

Login.propTypes = {
    pageTitle: PropTypes.string,
};
