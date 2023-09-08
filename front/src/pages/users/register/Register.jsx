import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

function Register({ pageTitle }) {
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

export default Register;

Register.propTypes = {
  pageTitle: PropTypes.string,
};
