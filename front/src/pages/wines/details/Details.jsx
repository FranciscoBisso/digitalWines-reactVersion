import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

function Details({ pageTitle }) {
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="¡Bienvenido a nuestra página para ver los detalles del vino!"
        />
      </Helmet>
    </>
  );
}

export default Details;

Details.propTypes = {
  pageTitle: PropTypes.string,
};
