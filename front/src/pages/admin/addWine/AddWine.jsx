import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { lazy, useState } from "react";
import { useAddQuery } from "../../../services/queriesHooks";
import imgFallback from "../../../assets/img-fallback.jpeg";
import styles from "./addWine.module.css";

import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";

const Loading = lazy(() => import("../../../components/loading/Loading"));
const NotFound = lazy(() => import("../../../components/notFound/NotFound"));

export default function Add({ pageTitle }) {
	const addQuery = useAddQuery();

	const [imageURL, setImageURL] = useState("");
	const handleImageChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			const imageURL = URL.createObjectURL(file);
			setImageURL(imageURL);
		}
		if (!file) {
			setImageURL("");
		}
	};

	const [selectedItem, setSelectedItem] = useState("");
	const handleChange = (event) => {
		setSelectedItem(event.target.value);
	};

	return (
		<>
			<Helmet>
				<title>{pageTitle.toUpperCase()}</title>
				<meta
					name="description"
					content="¡Bienvenido a nuestra página para agregar un nuevo vino!"
				/>
			</Helmet>
			{addQuery.isLoading && <Loading />}
			{addQuery.isError && (
				<NotFound apiErrorMsg={addQuery.error?.message} />
			)}
			{addQuery.isSuccess && (
				<div className={styles.form_wrapper}>
					<form className={styles.form}>
						<h1 className={styles.form_title}>AGREGAR VINO</h1>
						{/* Wine's Img Preview */}
						<img
							id="imgPreview"
							loading="lazy"
							src={imageURL || imgFallback}
							className={styles.upload_file_preview}
						/>
						{/* Wine's Picture */}
						<TextField
							type="file"
							name="imagen"
							id="imagen"
							label="Imagen del vino:"
							variant="standard"
							// error={}
							helperText={""}
							className={styles.text_field}
							onChange={handleImageChange}
						/>
						{/* Wine's Name */}
						<TextField
							name="nombre"
							id="nombre"
							label="Nombre:"
							placeholder="Ej: Toro Viejo"
							variant="standard"
							// error={}
							helperText={""}
							className={styles.text_field}
						/>
						{/* Wine's Price */}
						<TextField
							type="number"
							min="0"
							name="precio"
							id="precio"
							label="Precio:"
							placeholder="Introducir valor numérico (ej: 1245)"
							variant="standard"
							// error={}
							helperText={""}
							className={styles.text_field}
						/>
						{/* Wine's Year */}
						<TextField
							type="number"
							name="anio"
							id="anio"
							label="Fecha de elaboración:"
							placeholder="Introducir valor numérico (ej: 2018)"
							variant="standard"
							// error={}
							helperText={""}
							className={styles.text_field}
						/>
						{/* Wine's Stock */}
						<TextField
							type="number"
							name="stock"
							id="stock"
							label="Cantidades de stock:"
							placeholder="Introducir valor numérico (ej: 24)"
							variant="standard"
							// error={}
							helperText={""}
							className={styles.text_field}
						/>
						{/* {/* Wine's Description */}
						<TextField
							multiline
							name="descripcion"
							id="descripcion"
							label="Descripción del vino: "
							placeholder="Ej: Vino tinto corpulento con taninos suaves y aromas frutales..."
							variant="standard"
							// error={}
							helperText={""}
							className={styles.text_field}
						/>
						{/* Wine's Winery */}
						<FormControl
							variant="standard"
							className={styles.select_wrapper}>
							<InputLabel
								id="label_bodega_id"
								className={styles.label}>
								Bodega:
							</InputLabel>
							<Select
								labelId="label_bodega_id"
								name="bodega_id"
								id="bodega_id"
								label="bodega_id"
								className={styles.select}
								value={selectedItem}
								onChange={handleChange}>
								{addQuery.data.bodegas?.map((winery, index) => (
									<MenuItem
										className={styles.select_items}
										key={index}
										value={winery.id}>
										{winery.nombre}
									</MenuItem>
								))}
							</Select>
							<FormHelperText>{}</FormHelperText>
						</FormControl>
						{/* Wine's Varietal */}
						<FormControl
							variant="standard"
							className={styles.select_wrapper}>
							<InputLabel
								id="label_uva_id"
								className={styles.label}>
								Varietal:
							</InputLabel>
							<Select
								labelId="label_uva_id"
								name="uva_id"
								id="uva_id"
								label="uva_id"
								className={styles.select}
								value={selectedItem}
								onChange={handleChange}>
								{addQuery.data.varietales?.map(
									(varietal, index) => (
										<MenuItem
											className={styles.select_items}
											key={index}
											value={varietal.id}>
											{varietal.nombre}
										</MenuItem>
									)
								)}
							</Select>
							<FormHelperText>{}</FormHelperText>
						</FormControl>
						{/* Wine's Category */}
						<FormControl
							variant="standard"
							className={styles.select_wrapper}>
							<InputLabel
								id="label_categoria_id"
								className={styles.label}>
								Categoría:
							</InputLabel>
							<Select
								labelId="label_categoria_id"
								name="categoria_id"
								id="categoria_id"
								label="categoria_id"
								className={styles.select}
								value={selectedItem}
								onChange={handleChange}>
								{addQuery.data.categorias?.map(
									(category, index) => (
										<MenuItem
											className={styles.select_items}
											key={index}
											value={category.id}>
											{category.nombre}
										</MenuItem>
									)
								)}
							</Select>
							<FormHelperText>{}</FormHelperText>
						</FormControl>
						<Button
							variant="text"
							className={styles.button}>
							Agregar
						</Button>
					</form>
				</div>
			)}
		</>
	);
}

Add.propTypes = {
	pageTitle: PropTypes.string,
};
