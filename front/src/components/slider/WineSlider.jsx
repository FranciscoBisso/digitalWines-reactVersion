import styles from "./wineSlider.module.css";

export default function WinesSlider({ wines, title }) {
    return (
        <>
            <span className={styles.title}>{title}</span>
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
