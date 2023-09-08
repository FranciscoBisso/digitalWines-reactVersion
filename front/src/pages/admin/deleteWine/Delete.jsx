import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

function Delete({ pageTitle }) {
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

export default Delete;

Delete.propTypes = {
  pageTitle: PropTypes.string,
};
