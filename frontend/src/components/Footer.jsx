import React from "react";
import "../css/Footer.css";
export default function Footer() {
    return (
        <div className="contenedor">
            <div className="foot">
                <div className="presentacion">
                    <p>
                        Hecho con{" "}
                        <a className="corazon" href="#">
                            <i className="fas fa-heart"></i>
                        </a>{" "}
                        y
                        <a className="cafe" href="">
                            <i className="fas fa-coffee"></i>
                        </a>{" "}
                        en Mendoza y Buenos Aires, Argentina.
                    </p>
                </div>
                <div className="copy">
                    <p>
                        &copy; 2021 Digital Wine. Todos los derechos reservados.
                    </p>
                </div>
                <div className="redes">
                    <ul className="lista">
                        <a href="#">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
}
