import React, { useState, useEffect, Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/wines/AgregarVino.css";

export default function AgregarVino() {
	const [cellars, setCellars] = useState([]);
	const [categories, setCategories] = useState([]);
	const [grapes, setGrapes] = useState([]);

	const [image, setImage] = useState("");
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [year, setYear] = useState("");
	const [stock, setStock] = useState("");
	const [selectedCellar, setSelectedCellar] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("");
	const [selectedGrape, setSelectedGrape] = useState("");
	const [description, setDescription] = useState("");

	const [error, setError] = useState(null);

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

		const wine = {
			imagen: image, //problemas con la imagen
			nombre: name,
			precio: price,
			anio: year,
			stock: stock,
			bodega_id: selectedCellar,
			categoria_id: selectedCategory,
			uva_id: selectedGrape,
			descriopcion: description,
		};

		console.log(wine);

		const response = await fetch("http://localhost:3001/api/wines/create", {
			method: "POST",
			body: JSON.stringify(wine),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const json = await response.json();

		if (response.ok) {
			setError(null);
			setImage();
			setName("");
			setPrice("");
			setYear("");
			setStock("");
			setSelectedCellar("");
			setSelectedCategory("");
			setSelectedGrape("");
			console.log("new wine added:", json);
		} else {
			setError(json.error);
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
					method="POST"
					encType="multipart/form-data"
					onSubmit={submitHandler}
				>
					<h2>AGREGAR PRODUCTO</h2>

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

						<div className="text-danger">
							<p>{/* meter errores */}</p>
						</div>
					</div>
					<div>
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

						<div className="text-danger">
							<p>{/* meter errores */}</p>
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
							placeholder=" Ej: 1000"
							onChange={(e) => setPrice(e.target.value)}
							value={price}
						/>

						<div className="text-danger">
							<p>{/* meter errores */}</p>
						</div>
					</div>
					<div>
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

						<div className="text-danger">
							<p>{/* meter errores */}</p>
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
							placeholder=" Ej: 32"
							onChange={(e) => setStock(e.target.value)}
							value={stock}
						/>

						<div className="text-danger">
							<p>{/* meter errores */}</p>
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
							onChange={(e) => setSelectedCellar(e.target.value)}
							value={selectedCellar}
						>
							<option value={""}></option>
							{cellars.map((cellar, i) => (
								<option key={i} value={cellar.id}>
									{cellar.nombre}
								</option>
							))}
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
							onChange={(e) =>
								setSelectedCategory(e.target.value)
							}
							value={selectedCategory}
						>
							<option value={""}></option>
							{categories.map((category, i) => (
								<option key={i} value={category.id}>
									{category.nombre}
								</option>
							))}
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
							onChange={(e) => setSelectedGrape(e.target.value)}
							value={selectedGrape}
						>
							<option value={""}></option>
							{grapes.map((grape, i) => (
								<option key={i} value={grape.id}>
									{grape.nombre}
								</option>
							))}
						</select>
					</div>
					<div>
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

						<div className="text-danger">
							<p>{/* meter errores */}</p>
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
					<div className="errores">
						<ul className="errores-front"></ul>
						{error && <div className="errores-front">{error}</div>}
					</div>
				</form>
			</main>
			<footer>
				<Footer />
			</footer>
		</Fragment>
	);
}
