import PropTypes from "prop-types";
import styles from "./wineSlider.module.css";

export default function WinesSlider({ wines, title }) {
  return (
    <>
      <span className={styles.title}>{title}</span>
      <div className={styles.slider}>
        {wines.map((wine) => (
          <div key={wine.id} className={styles.slider_item}>
            <img src={wine.imagen} loading="lazy" />
            <div className={styles.wine_description}>
              <h4 className={styles.name}>{wine.nombre}</h4>
              <h5 className={styles.vineyard}>{wine.vinoBodega.nombre}</h5>
              <h6 className={styles.price}>{`AR$ ${wine.precio}`}</h6>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

WinesSlider.propTypes = {
  title: PropTypes.string,
  wines: PropTypes.array,
};
