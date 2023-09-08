import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../../services/fetchData";
import { Helmet } from "react-helmet";
import WinesGrid from "../../../components/winesGrid/WinesGrid";
import NotFound from "../../notFound/NotFound";
import styles from "./winecellar.module.css";
import PropTypes from "prop-types";

function Winecellar({ pageTitle }) {
  const url = "http://localhost:3001/api/wines/winecellar";

  const { data, status } = useQuery({
    queryKey: ["wcWines"],
    queryFn: () => fetchData(url),
  });

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="¡Bienvenido a la página de nuestra vinoteca!"
        />
      </Helmet>

      {status === "loading" && <div className={styles.loading}>Loading...</div>}
      {status === "error" && <NotFound />}
      {status === "success" && (
        <div className={styles.wrapper}>
          <h2>Nuestros Vinos</h2>
          <WinesGrid wines={data.data} />
        </div>
      )}
    </>
  );
}

export default Winecellar;

Winecellar.propTypes = {
  pageTitle: PropTypes.string,
};
