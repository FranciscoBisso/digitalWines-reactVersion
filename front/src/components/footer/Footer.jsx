import styles from "./footer.module.css";

function Footer() {
    return (
        <>
            <div className={styles.footer_wrapper}>
                <p className={styles.copyright}>
                    &copy; 2023 Digital Wine. Todos los derechos reservados.
                </p>
            </div>
        </>
    );
}
export default Footer;