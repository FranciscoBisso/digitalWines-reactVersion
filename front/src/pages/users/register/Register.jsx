import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

export default function Register({ pageTitle }) {
    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta
                    name="description"
                    content="¡Bienvenido a nuestra página de registro de usuarios!"
                />
            </Helmet>
        </>
    );
}

Register.propTypes = {
    pageTitle: PropTypes.string,
};
