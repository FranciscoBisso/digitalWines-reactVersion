import React, { useState, useEffect, Fragment } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../css/wines/AddWine.css";

export default function AddWine() {
	const [cellars, setCellars] = useState([]);
	const [categories, setCategories] = useState([]);
	const [grapes, setGrapes] = useState([]);

	const [image, setImage] = useState(undefined);
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [year, setYear] = useState("");
	const [stock, setStock] = useState("");
	const [selectedCellar, setSelectedCellar] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("");
	const [selectedGrape, setSelectedGrape] = useState("");
	const [description, setDescription] = useState("");

	const [errors, setErrors] = useState([]);
	const [notNew, setNotNew] = useState({});
	const [successMsg, setSuccessMsg] = useState("");

	useEffect(() => {
		async function fetchInfo() {
			const infoRes = await fetch(
				"http://localhost:3001/api/wines/create"
			);
			const info = await infoRes.json();

			setCellars(info.data.bodegas);
			setGrapes(info.data.uvas);
			setCategories(info.data.categorias);
		}

		fetchInfo();
	}, []);

	const submitHandler = async (e) => {
		e.preventDefault();
		const form = document.querySelector("#createForm");
		const formData = new FormData(form);

		const response = await fetch("http://localhost:3001/api/wines/create", {
			method: "POST",
			body: formData,
		});

		const json = await response.json();

		if (!response.ok) {
			if (json.errorsData) {
				setErrors(json.errorsData);
			} else {
				setErrors([]);
				setNotNew(json);
			}
		} else {
			setErrors([]);
			setNotNew({});
			setSuccessMsg("Vino agregado exitosamente!!!");
			setName("");
			setPrice("");
			setYear("");
			setStock("");
			setSelectedCellar("");
			setSelectedCategory("");
			setSelectedGrape("");
			setDescription("");
		}
	};

	return (
		<Fragment>
			<header>
				<Header />
			</header>
			<main className="agregarProducto-main-container">
				<form
					className="agregarProducto-form-container"
					id="createForm"
					onSubmit={submitHandler}
				>
					<h2 className="agregar-title">AGREGAR PRODUCTO</h2>
					<div className="agregarProducto-div-img-product">
						<label htmlFor="imagen" className="form-label">
							Imagen del producto:
						</label>
						<input
							className="agregarProducto-input-img-product form-control box-shadow"
							type="file"
							name="imagen"
							id="imagen"
							onChange={(e) => setImage(e.target.files[0])}
						/>

						<div className="errores-front">
							{errors.map((err, i) =>
								err.param === "imagen" ? (
									<p key={i}>{err.msg}</p>
								) : null
							)}
						</div>
					</div>
					<div className="agregarProducto-form-div">
						<label htmlFor="nombre" className="form-label">
							Nombre:
						</label>
						<input
							className="box-shadow form-control"
							type="text"
							name="nombre"
							id="nombre"
							placeholder=" Ej: Toro"
							onChange={(e) => setName(e.target.value)}
							value={name}
						/>

						<div className="errores-front">
							{errors &&
								errors.map((err, i) =>
									err.param === "nombre" ? (
										<p key={i}>{err.msg}</p>
									) : null
								)}
						</div>
					</div>
					<div className="agregarProducto-form-div">
						<label htmlFor="precio" className="form-label">
							Precio:
						</label>
						<input
							className="box-shadow form-control"
							type="number"
							name="precio"
							id="precio"
							placeholder=" Ej: 1000"
							onChange={(e) => setPrice(e.target.value)}
							value={price}
						/>

						<div className="errores-front">
							{errors &&
								errors.map((err, i) =>
									err.param === "precio" ? (
										<p key={i}>{err.msg}</p>
									) : null
								)}
						</div>
					</div>
					<div className="agregarProducto-form-div">
						<label htmlFor="anio" className="form-label">
							Año:
						</label>
						<input
							className="box-shadow form-control"
							type="number"
							name="anio"
							id="anio"
							placeholder=" Ej: 2017"
							onChange={(e) => setYear(e.target.value)}
							value={year}
						/>

						<div className="errores-front">
							{errors &&
								errors.map((err, i) =>
									err.param === "anio" ? (
										<p key={i}>{err.msg}</p>
									) : null
								)}
						</div>
					</div>
					<div className="agregarProducto-form-div">
						<label htmlFor="stock" className="form-label">
							Stock:
						</label>
						<input
							className="box-shadow form-control"
							type="number"
							name="stock"
							id="stock"
							placeholder=" Ej: 32"
							onChange={(e) => setStock(e.target.value)}
							value={stock}
						/>

						<div className="errores-front">
							{errors &&
								errors.map((err, i) =>
									err.param === "stock" ? (
										<p key={i}>{err.msg}</p>
									) : null
								)}
						</div>
					</div>
					<div className="agregarProducto-form-div">
						<label htmlFor="bodega_id" className="form-label">
							Bodega:
						</label>
						<select
							name="bodega_id"
							id="bodega_id"
							className="form-select box-shadow"
							onChange={(e) => setSelectedCellar(e.target.value)}
							value={selectedCellar}
						>
							{cellars.map((cellar, i) => (
								<option key={i} value={cellar.id}>
									{cellar.nombre}
								</option>
							))}
						</select>
					</div>
					<div className="agregarProducto-form-div">
						<label htmlFor="categoria_id" className="form-label">
							Categoría:
						</label>
						<select
							name="categoria_id"
							id="categoria_id"
							className="form-select box-shadow"
							onChange={(e) =>
								setSelectedCategory(e.target.value)
							}
							value={selectedCategory}
						>
							{categories.map((category, i) => (
								<option key={i} value={category.id}>
									{category.nombre}
								</option>
							))}
						</select>
					</div>
					<div className="agregarProducto-form-div">
						<label htmlFor="uva_id" className="form-label">
							Uva:
						</label>
						<select
							name="uva_id"
							id="uva_id"
							className="form-select box-shadow"
							onChange={(e) => setSelectedGrape(e.target.value)}
							value={selectedGrape}
						>
							{grapes.map((grape, i) => (
								<option key={i} value={grape.id}>
									{grape.nombre}
								</option>
							))}
						</select>
					</div>
					<div className="agregarProducto-form-div">
						<label htmlFor="precioProducto" className="form-label">
							Descripcion:
						</label>
						<textarea
							className="agregarProducto-text-area box-shadow form-control"
							name="descripcion"
							id="descripcion"
							cols="30"
							rows="10"
							placeholder="Ej: De color rojo intenso con aroma frutal..."
							onChange={(e) => setDescription(e.target.value)}
							value={description}
						></textarea>

						<div className="errores-front">
							{errors &&
								errors.map((err, i) =>
									err.param === "descripcion" ? (
										<p key={i}>{err.msg}</p>
									) : null
								)}
						</div>
					</div>

					<div className="agregarProducto-div-button">
						<button
							className="agregarProducto-button btn-secondary"
							type="submit"
							value="Agregar producto"
						>
							AGREGAR
						</button>
					</div>
					<div className="errores-front">
						<p>{notNew ? notNew.error : null}</p>
					</div>
					{successMsg ? (
						<div className="success-msg">{successMsg}</div>
					) : null}
				</form>
			</main>
			<footer>
				<Footer />
			</footer>
		</Fragment>
	);
}
