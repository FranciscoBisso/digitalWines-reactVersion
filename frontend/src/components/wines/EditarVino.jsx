import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
//import "../../public/css/wines/EditarVino.css";

export default function EditarVino() {
    const params = useParams();
    const [wine, setWine] = useState([]);
    const [cellars, setCellars] = useState([]);
    const [grapes, setGrapes] = useState([]);

    useEffect(() => {
        fetchInfo();
    }, []);

    const fetchInfo = async () => {
        const infoRes = await fetch(
            `http://localhost:3001/api/wines/update/${params.id}`
        );
        const wineInfo = await infoRes.json();
        console.log("Soy wineInfo.data.wine", wineInfo.data.wine);
        console.log("Soy wineInfo.data.bodegas", wineInfo.data.bodegas);
        console.log("Soy wineInfo.data.uvas", wineInfo.data.uvas);

        setWine(wineInfo.data.wine);
        setCellars(wineInfo.data.bodegas);
        setGrapes(wineInfo.data.uvas);
    };

    return (
        <div>
            <h2>{wine.nombre}</h2>
            <h2>{wine.precio}</h2>
            <ul>
                {cellars.map((cellar, i) => (
                    <p key={i}>* {cellar.nombre}</p>
                ))}
            </ul>
            <ul>
                {grapes.map((grape, i) => (
                    <p key={i}>- {grape.nombre}</p>
                ))}
            </ul>
        </div>
        // <div>
        //     <header>
        //         <Header />
        //     </header>
        //     <main className="editarProducto-main-container">
        //         <form
        //             className="editarProducto-form-container"
        //             action=""
        //             method="post"
        //             enctype="multipart/form-data"
        //         >
        //             <h2>EDITAR PRODUCTO</h2>
        //             <div className="editarProducto-div-img-product">
        //                 <label for="imagen" className="form-label">
        //                     {" "}
        //                     Imagen del producto:{" "}
        //                 </label>
        //                 <input
        //                     className="editarProducto-input-img-product form-control box-shadow"
        //                     type="file"
        //                     accept="image/jpg"
        //                     name="imagen"
        //                     id="imagen"
        //                     value=""
        //                 />
        //             </div>
        //             <div>
        //                 <label for="nombre" className="form-label">
        //                     Nombre
        //                 </label>

        //                 <input
        //                     className="box-shadow form-control"
        //                     type="text"
        //                     name="nombre"
        //                     id="nombre"
        //                     value=""
        //                 />
        //             </div>
        //             <div>
        //                 <label for="precio" className="form-label">
        //                     Precio:
        //                 </label>

        //                 <input
        //                     className="box-shadow form-control"
        //                     type="number"
        //                     name="precio"
        //                     id="precio"
        //                     value=""
        //                 />
        //             </div>
        //             <div>
        //                 <label for="anio" className="form-label">
        //                     Anio:
        //                 </label>

        //                 <input
        //                     className="box-shadow form-control"
        //                     type="number"
        //                     name="anio"
        //                     id="anio"
        //                     placeholder=" Ej: 2017"
        //                     value=""
        //                 />
        //             </div>
        //             <div>
        //                 <label for="stock" className="form-label">
        //                     Stock:
        //                 </label>

        //                 <input
        //                     className="box-shadow form-control"
        //                     type="number"
        //                     name="stock"
        //                     id="stock"
        //                     placeholder=" Ej: 08"
        //                     value=""
        //                 />
        //             </div>
        //             <div>
        //                 <label for="bodega_id" className="form-label">
        //                     Bodega:
        //                 </label>
        //                 <select
        //                     name="bodega_id"
        //                     id="bodega_id"
        //                     className="form-select box-shadow"
        //                 >
        //                     <option value="">{/* meter las bodagas */}</option>
        //                 </select>
        //             </div>
        //             <div>
        //                 <label for="categoria_id" className="form-label">
        //                     Categoría:
        //                 </label>
        //                 <select
        //                     name="categoria_id"
        //                     id="categoria_id"
        //                     className="form-select box-shadow"
        //                 >
        //                     <option value="">
        //                         {/* meter las categorías */}
        //                     </option>
        //                 </select>
        //             </div>
        //             <div>
        //                 <label for="uva_id" className="form-label">
        //                     Uva:
        //                 </label>
        //                 <select
        //                     name="uva_id"
        //                     id="uva_id"
        //                     className="form-select box-shadow"
        //                 >
        //                     <option value="">
        //                         {/* meter el tipo de uva */}
        //                     </option>
        //                 </select>
        //             </div>
        //             <div>
        //                 <label for="descripcion" className="form-label">
        //                     Descripcion:
        //                 </label>

        //                 <textarea
        //                     className="editarProducto-text-area box-shadow form-control"
        //                     name="descripcion"
        //                     id="descripcion"
        //                     cols="30"
        //                     rows="10"
        //                 ></textarea>
        //             </div>

        //             <div className="editarProducto-div-button">
        //                 <button
        //                     className="editarProducto-button btn-secondary"
        //                     type="submit"
        //                     value="Editar producto"
        //                 >
        //                     EDITAR
        //                 </button>
        //             </div>

        //             <div>
        //                 <ul>
        //                     <li>{/* meter los errores */}</li>
        //                 </ul>
        //             </div>

        //             <div className="errores">
        //                 <ul className="errores-front"></ul>
        //             </div>
        //         </form>
        //     </main>
        //     <footer>
        //         <Footer />
        //     </footer>
        // </div>
    );
}
