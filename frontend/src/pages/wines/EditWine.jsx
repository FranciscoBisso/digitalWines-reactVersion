import React from "react";
import { useEffect, useState, Fragment } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../css/wines/EditarVino.css";

export default function EditarVino() {
	const navigate = useNavigate();
	const params = useParams();
	const [wine, setWine] = useState([]);
	const [selectedCellar, setSelectedCellar] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("");
	const [selectedGrape, setSelectedGrape] = useState("");
	const [cellars, setCellars] = useState([]);
	const [grapes, setGrapes] = useState([]);
	const [category, setCategory] = useState([]);

	// const [image, setImage] = useState({});

	const [errors, setErrors] = useState([]);

	useEffect(() => {
		const fetchInfo = async () => {
			const infoRes = await fetch(
				`http://localhost:3001/api/wines/update/${params.id}`
			);
			const wineInfo = await infoRes.json();

			if (!infoRes.ok) {
				navigate("/vinoteca");
				console.log(wineInfo);
			} else {
				setWine(wineInfo.data.wine);
				setSelectedCellar(wineInfo.data.wine.vinoBodega);
				setSelectedCategory(wineInfo.data.wine.vinoCategoria);
				setSelectedGrape(wineInfo.data.wine.vinoUva);
				setCellars(wineInfo.data.bodegas);
				setGrapes(wineInfo.data.uvas);
				setCategory(wineInfo.data.categorias);
			}
		};

		fetchInfo();
	}, []);

	const submitHandler = async (e) => {
		e.preventDefault();

		const form = document.querySelector("#editForm");
		const formData = new FormData(form);
		console.log("wine.imagen:", wine.imagen);
		console.log("formData.imagen", formData.get("imagen"));

		const res = await fetch(
			`http://localhost:3001/api/wines/update/${params.id}`,
			{
				method: "PUT",
				body: formData,
			}
		);

		const json = await res.json();
		console.log("json:", json);

		if (!res.ok) {
			setErrors(json.formErrors);
			console.log("errors:", errors);
		} else {
			navigate("/vinoteca");
		}
	};

	return (
		<Fragment>
			<header>
				<Header />
			</header>
			<main className="editarProducto-main-container">
				<form
					className="editarProducto-form-container"
					id="editForm"
					onSubmit={submitHandler}
				>
					<h2>EDITAR PRODUCTO</h2>
					<div className="editarProducto-div-img-product">
						<label htmlFor="imagen" className="form-label">
							Imagen del producto:
						</label>
						<input
							className="editarProducto-input-img-product form-control box-shadow"
							type="file"
							accept="image/jpg"
							name="imagen"
							id="imagen"
						/>

						<div className="errores-front">
							{errors.map((err, i) =>
								err.param === "imagen" ? (
									<p key={i}>{err.msg}</p>
								) : null
							)}
						</div>
					</div>
					<div>
						<label htmlFor="nombre" className="form-label">
							Nombre
						</label>

						<input
							className="box-shadow form-control"
							type="text"
							name="nombre"
							id="nombre"
							defaultValue={wine.nombre}
							placeholder={wine.nombre}
						/>

						<div className="errores-front">
							{errors.map((err, i) =>
								err.param === "nombre" ? (
									<p key={i}>{err.msg}</p>
								) : null
							)}
						</div>
					</div>

					<div>
						<label htmlFor="precio" className="form-label">
							Precio:
						</label>

						<input
							className="box-shadow form-control"
							type="number"
							name="precio"
							id="precio"
							defaultValue={wine.precio}
							placeholder={wine.precio}
						/>

						<div className="errores-front">
							{errors.map((err, i) =>
								err.param === "precio" ? (
									<p key={i}>{err.msg}</p>
								) : null
							)}
						</div>
					</div>
					<div>
						<label htmlFor="anio" className="form-label">
							Anio:
						</label>

						<input
							className="box-shadow form-control"
							type="number"
							name="anio"
							id="anio"
							defaultValue={wine.anio}
							placeholder={wine.anio}
						/>

						<div className="errores-front">
							{errors.map((err, i) =>
								err.param === "anio" ? (
									<p key={i}>{err.msg}</p>
								) : null
							)}
						</div>
					</div>
					<div>
						<label htmlFor="stock" className="form-label">
							Stock:
						</label>

						<input
							className="box-shadow form-control"
							type="number"
							name="stock"
							id="stock"
							defaultValue={wine.stock}
							placeholder={wine.stock}
						/>

						<div className="errores-front">
							{errors.map((err, i) =>
								err.param === "stock" ? (
									<p key={i}>{err.msg}</p>
								) : null
							)}
						</div>
					</div>
					<div>
						<label htmlFor="bodega_id" className="form-label">
							Bodega:
						</label>
						<select
							name="bodega_id"
							id="bodega_id"
							className="form-select box-shadow"
						>
							<option value={selectedCellar.id}>
								{selectedCellar.nombre}
							</option>
							{cellars.map((cellar, i) =>
								cellar.nombre !== selectedCellar.nombre ? (
									<option key={i} value={cellar.id}>
										{cellar.nombre}
									</option>
								) : null
							)}
						</select>
					</div>
					<div>
						<label htmlFor="categoria_id" className="form-label">
							Categoría:
						</label>
						<select
							name="categoria_id"
							id="categoria_id"
							className="form-select box-shadow"
						>
							<option value={selectedCategory.id}>
								{selectedCategory.nombre}
							</option>
							{category.map((cat, i) =>
								cat.nombre !== selectedCategory.nombre ? (
									<option key={i} value={cat.id}>
										{cat.nombre}
									</option>
								) : null
							)}
						</select>
					</div>
					<div>
						<label htmlFor="uva_id" className="form-label">
							Uva:
						</label>

						<select
							name="uva_id"
							id="uva_id"
							className="form-select box-shadow"
						>
							<option value={selectedGrape.id}>
								{selectedGrape.nombre}
							</option>
							{grapes.map((grape, i) =>
								grape.nombre !== selectedGrape.nombre ? (
									<option key={i} value={grape.id}>
										{grape.nombre}
									</option>
								) : null
							)}
						</select>
					</div>
					<div>
						<label htmlFor="descripcion" className="form-label">
							Descripcion:
						</label>

						<textarea
							className="editarProducto-text-area box-shadow form-control"
							name="descripcion"
							id="descripcion"
							cols="30"
							rows="10"
							defaultValue={wine.descripcion}
							placeholder={wine.descripcion}
						></textarea>

						<div className="errores-front">
							{errors.map((err, i) =>
								err.param === "descripcion" ? (
									<p key={i}>{err.msg}</p>
								) : null
							)}
						</div>
					</div>

					<div className="editarProducto-div-button">
						<button
							className="editarProducto-button btn-secondary"
							type="submit"
						>
							EDITAR
						</button>
					</div>

					<div className="errores">
						<ul className="errores-front"></ul>
					</div>
				</form>
			</main>
			<footer>
				<Footer />
			</footer>
		</Fragment>
	);
}
