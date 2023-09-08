import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

function Cuenta({ pageTitle }) {
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

export default Cuenta;
Cuenta.propTypes = {
  pageTitle: PropTypes.string,
};
