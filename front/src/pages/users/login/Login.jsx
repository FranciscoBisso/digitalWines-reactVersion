import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

function Login({ pageTitle }) {
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

export default Login;

Login.propTypes = {
  pageTitle: PropTypes.string,
};
