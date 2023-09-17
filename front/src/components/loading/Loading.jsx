import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWineBottle } from "@fortawesome/free-solid-svg-icons";
import styles from "./loading.module.css";

export default function Loading() {
    return (
        <div className={styles.loading_wrapper}>
            <FontAwesomeIcon
                className={styles.loading_spinner}
                icon={faWineBottle}
                spin
            />
        </div>
    );
}
