import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { lazy, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { addWineUrl } from "../../../services/urls";
import { get } from "../../../services/fetchData";
// import styles from "./add.module.css";
import styles from "./newWine.module.css";

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
	const addQuery = useQuery({
		queryKey: ["addQuery"],
		queryFn: () => get(addWineUrl),
	});

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
						<TextField
							type="file"
							name="imagen"
							id="imagen"
							label="Imagen del vino:"
							variant="standard"
							// error={}
							helperText={""}
							className={styles.text_field}
						/>
						<TextField
							id="nombre"
							label="Nombre:"
							placeholder="Ej: Toro Viejo"
							variant="standard"
							className={styles.text_field}
						/>
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
					{/* <form className={styles.form}>
						<label
							htmlFor="nombre"
							className={styles.label}>
							Nombre del vino:
							<input
								type="nombre"
								name="nombre"
								id="nombre"
								className={styles.inputs}
								placeholder="Ej: Toro Viejo"
							/>
						</label>
						<label
							htmlFor="precio"
							className={styles.label}>
							Precio:
							<input
								type="number"
								name="precio"
								id="precio"
								className={styles.inputs}
								placeholder="Ej: 12500 (solo números)"
							/>
						</label>
						<label
							htmlFor="anio"
							className={styles.label}>
							Año:
							<input
								type="number"
								name="anio"
								id="anio"
								className={styles.inputs}
								placeholder="Ej: 2018 (solo números)"
							/>
						</label>
						<label
							htmlFor="stock"
							className={styles.label}>
							Stock:
							<input
								type="number"
								name="stock"
								id="stock"
								className={styles.inputs}
								placeholder="Ej: 45 (solo números)"
							/>
						</label>
						<label
							htmlFor="categoria_id"
							className={styles.label}>
							Categoría:
							<select
								name="categoria_id"
								id="categoria_id"
								className={styles.select}
								placeholder="Categoría">
								<option
									value=""
									disabled
									selected
									hidden
									className={styles.default_option}>
									Selecciona una opción
								</option>
								{addQuery.data.categorias?.map(
									(category, index) => (
										<option
											key={index}
											value={category.id}>
											{category.nombre}
										</option>
									)
								)}
							</select>
						</label>
						<label
							htmlFor="bodega_id"
							className={styles.label}>
							Bodega:
							<select
								name="bodega_id"
								id="bodega_id"
								className={styles.select}
								placeholder="Bodega">
								<option
									value=""
									disabled
									selected
									hidden
									className={styles.default_option}>
									Selecciona una opción
								</option>
								{addQuery.data.bodegas?.map((winery, index) => (
									<option
										key={index}
										value={winery.id}>
										{winery.nombre}
									</option>
								))}
							</select>
						</label>
						
						<label
							htmlFor="descripcion"
							className={styles.label}>
							Descripción del vino:
							<textarea
								name="descripcion"
								id="v"
								className={styles.description}
								placeholder="Vino tinto corpulento con taninos suaves y aromas frutales..."></textarea>
						</label>

						<button
							type="button"
							className={styles.enter_btn}>
							Agregar
						</button>
					</form> */}
				</div>
			)}
		</>
	);
}

Add.propTypes = {
	pageTitle: PropTypes.string,
};
