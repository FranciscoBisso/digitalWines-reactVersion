import React, { Component } from "react";
import "../public/css/Footer.css";
export default class Footer extends Component {
    render() {
        return (
            <div class="contenedor">
                <div class="foot">
                    <div class="presentacion">
                        <p>
                            Hecho con{" "}
                            <a class="corazon" href="#">
                                <i class="fas fa-heart"></i>
                            </a>{" "}
                            y
                            <a class="cafe" href="">
                                <i class="fas fa-coffee"></i>
                            </a>{" "}
                            en Mendoza y Buenos Aires, Argentina.
                        </p>
                    </div>
                    <div class="copy">
                        <p>
                            &copy; 2021 Digital Wine. Todos los derechos
                            reservados.
                        </p>
                    </div>
                    <div class="redes">
                        <ul class="lista">
                            <a href="#">
                                <i class="fab fa-facebook"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
