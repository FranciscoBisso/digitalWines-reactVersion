import PropTypes from "prop-types";
import styles from "./wineSlider.module.css";
import { useRef, useState } from "react";

export default function WinesSlider({ wines, title }) {
  const modal = useRef();
  const [selectedWine, setSelectedWine] = useState(null);

  const open = (wine) => {
    setSelectedWine(wine);
    modal?.current.showModal();
  };
  const close = (e) => {
    e.stopPropagation();
    modal?.current.close();
    setSelectedWine(null);
  };

  return (
    <>
      <span className={styles.title}>{title}</span>
      <div className={styles.slider}>
        {wines.map((wine) => (
          <div
            key={wine.id}
            className={styles.slider_item}
            onClick={() => {
              open(wine);
            }}
          >
            <img src={wine.imagen} loading="lazy" />
          </div>
        ))}
      </div>

      <dialog className={styles.modal} ref={modal}>
        {selectedWine && (
          <>
            <img src={selectedWine.imagen} loading="lazy" />
            <div className={styles.wine_description}>
              <h4 className={styles.name}>{selectedWine.nombre}</h4>
              <h5 className={styles.vineyard}>
                {selectedWine.vinoBodega.nombre}
              </h5>
              <h6 className={styles.price}>{`AR$ ${selectedWine.precio}`}</h6>
              <button onClick={close}>X</button>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}

WinesSlider.propTypes = {
  title: PropTypes.string,
  wines: PropTypes.array,
};
