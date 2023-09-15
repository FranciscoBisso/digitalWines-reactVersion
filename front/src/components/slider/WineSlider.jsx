import PropTypes from "prop-types";
import styles from "./wineSlider.module.css";
import { useRef } from "react";

export default function WinesSlider({ wines, title }) {
    const modal = useRef();

    const open = () => {
        modal?.current.showModal();
    };
    const close = (e) => {
        e.stopPropagation();
        modal?.current.close();
    };

    return (
        <>
            <span className={styles.title}>{title}</span>
            <div className={styles.slider}>
                {wines.map((wine) => (
                    <div
                        key={wine.id}
                        className={styles.slider_item}
                        onClick={open}
                    >
                        <img src={wine.imagen} loading="lazy" />
                        <dialog className={styles.modal} ref={modal}>
                            <img src={wine.imagen} loading="lazy" />
                            <div className={styles.wine_description}>
                                <h4 className={styles.name}>{wine.nombre}</h4>
                                <h5 className={styles.vineyard}>
                                    {wine.vinoBodega.nombre}
                                </h5>
                                <h6
                                    className={styles.price}
                                >{`AR$ ${wine.precio}`}</h6>
                                <button onClick={close}>X</button>
                                {/* <button>X</button> OPTION 2*/}
                            </div>
                        </dialog>
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
