import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { lazy } from "react";
import { useQuery } from "@tanstack/react-query";
import { addWineUrl } from "../../../services/urls";
import { get } from "../../../services/fetchData";
import styles from "./add.module.css";

const Loading = lazy(() => import("../../../components/loading/Loading"));
const NotFound = lazy(() => import("../../../components/notFound/NotFound"));

export default function Add({ pageTitle }) {
	const addQuery = useQuery({
		queryKey: ["addQuery"],
		queryFn: () => get(addWineUrl),
	});

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
						<h1 className={styles.form_title}>AGREGAR</h1>
						<label
							htmlFor="imagen"
							className={styles.label}>
							Imagen del vino:
							<input
								type="file"
								name="imagen"
								id="imagen"
								className={styles.upload_img_input}
							/>
						</label>
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
							htmlFor="uva_id"
							className={styles.label}>
							Varietal:
							<select
								name="uva_id"
								id="uva_id"
								className={styles.select}
								placeholder="Varietal">
								<option
									value=""
									disabled
									selected
									hidden
									className={styles.default_option}>
									Selecciona una opción
								</option>
								{addQuery.data.varietales?.map(
									(varietal, index) => (
										<option
											key={index}
											value={varietal.id}>
											{varietal.nombre}
										</option>
									)
								)}
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
					</form>
				</div>
			)}
		</>
	);
}

Add.propTypes = {
	pageTitle: PropTypes.string,
};
