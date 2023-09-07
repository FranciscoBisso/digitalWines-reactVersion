import styles from "./wineSlider.module.css";

export default function WinesSlider({ wines }) {
    return (
        <>
            <div className={styles.slider}>
                {wines.map((wine) => (
                    <div key={wine.id} className={styles.slider_item}>
                        <img src={wine.imagen} />
                    </div>
                ))}
            </div>
        </>
    );
}
