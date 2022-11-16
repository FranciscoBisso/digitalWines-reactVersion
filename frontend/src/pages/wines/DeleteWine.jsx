import React, { useState, useEffect, Fragment } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../css/wines/DeleteWine.css";

export default function DeleteWine() {
	const params = useParams();
	const navigate = useNavigate();
	const [wine, setWine] = useState([]);

	useEffect(() => {
		async function fetchInfo() {
			const infoRes = await fetch(
				`http://localhost:3001/api/wines/delete/${params.id}`
			);
			const wineInfo = await infoRes.json();
			if (infoRes.ok) {
				wineInfo.data.bodega = wineInfo.data.vinoBodega.nombre;
				wineInfo.data.uva = wineInfo.data.vinoUva.nombre;
				wineInfo.data.categoria = wineInfo.data.vinoCategoria.nombre;

				setWine(wineInfo.data);
			} else {
				console.log(wineInfo.error);
				navigate("/vinoteca");
			}
		}

		fetchInfo();
	}, []);

	const deleteHandler = async (e) => {
		e.preventDefault();
		const res = await fetch(
			`http://localhost:3001/api/wines/delete/${params.id}`,
			{
				method: "DELETE",
			}
		);
		console.log("res: ", res);

		const json = await res.json();
		console.log("json: ", json);

		if (res.ok) {
			navigate("/vinoteca");
			console.log(json);
		} else {
			console.log(json.error);
		}
	};

	return (
		<Fragment>
			<header>
				<Header />
			</header>
			<main className="eliminarProducto-main-container">
				<form
					className="eliminarProducto-form-container"
					onSubmit={deleteHandler}
				>
					<h2 className="eliminarProducto-title">
						ELIMINAR PRODUCTO
					</h2>
					<div className="eliminarProducto-form-div">
						<label htmlFor="nombre" className="form-label">
							Nombre:
						</label>

						<input
							className="box-shadow form-control"
							type="text"
							name="nombre"
							id="nombre"
							defaultValue={wine.nombre}
							disabled
						/>
					</div>
					<div className="eliminarProducto-form-div">
						<label
							htmlFor="descripcionProducto"
							className="form-label"
						>
							Bodega:
						</label>

						<input
							className="box-shadow form-control"
							type="text"
							name="bodega"
							id="bodega"
							defaultValue={wine.bodega}
							disabled
						/>
					</div>
					<div className="eliminarProducto-form-div">
						<label
							htmlFor="descripcionProducto"
							className="form-label"
						>
							Categoria:
						</label>

						<input
							className="box-shadow form-control"
							type="text"
							name="categoria"
							id="categoria"
							defaultValue={wine.categoria}
							disabled
						/>
					</div>
					<div className="eliminarProducto-form-div">
						<label
							htmlFor="descripcionProducto"
							className="form-label"
						>
							Uva:
						</label>

						<input
							className="box-shadow form-control"
							type="text"
							name="uva"
							id="uva"
							defaultValue={wine.uva}
							disabled
						/>
					</div>
					<div className="eliminarProducto-form-div">
						<label htmlFor="precioProducto" className="form-label">
							Precio:
						</label>

						<input
							className="box-shadow form-control"
							type="number"
							name="precio"
							id="precio"
							defaultValue={wine.precio}
							disabled
						/>
					</div>
					<div className="big-divs-wrapper">
						<div className="eliminarProducto-form-div">
							<label
								htmlFor="precioProducto"
								className="form-label"
							>
								Descripcion:
							</label>

							<textarea
								className="eliminarProducto-text-area box-shadow form-control"
								name="descripcion"
								id="descripcion"
								cols="30"
								rows="10"
								defaultValue={wine.descripcion}
								disabled
							></textarea>
						</div>
						<div className="eliminarProducto-form-div">
							<label className="form-label">Imagen:</label>
							<img
								src={wine.imagen}
								alt="vino1"
								className="eliminarProducto-img-product box-shadow"
							/>
						</div>
					</div>

					<div className="eliminarProducto-div-button">
						<button
							className="eliminarProducto-button btn-secondary"
							type="submit"
						>
							ELIMINAR
						</button>
					</div>
				</form>
			</main>
			<footer>
				<Footer />
			</footer>
		</Fragment>
	);
}
