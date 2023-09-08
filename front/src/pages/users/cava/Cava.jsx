import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

function Cava({ pageTitle }) {
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content="¡Bienvenido la página de tu cava!" />
      </Helmet>
    </>
  );
}

export default Cava;

Cava.propTypes = {
  pageTitle: PropTypes.string,
};
