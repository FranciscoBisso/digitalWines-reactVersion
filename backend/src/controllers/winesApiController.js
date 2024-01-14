const port = process.env.PORT || 3001;
const db = require("../database/models");
const { Op } = require("sequelize");
const { validationResult } = require("express-validator");

const winesApiController = {
	getWines: async (req, res) => {
		const wines = await db.Vinos.findAll({
			include: [{ all: true }],
			order: [["nombre", "ASC"]],
		});

		if (!wines) {
			res.status(404).json({
				errorMsg: "Ups! Algo salió mal...", // <-- Oops! Something went wrong...
			});
		}

		if (wines) {
			for (let wine of wines) {
				wine.imagen = `http://localhost:${port}` + wine.imagen;
			}
			res.status(200).json({
				total: wines.length,
				wines,
			});
		}
	},

	getWine: async (req, res) => {
		const wine = await db.Vinos.findOne({
			include: [{ all: true }],
			where: { id: req.params.id },
		});

		if (!wine) {
			res.status(404).json({
				errorMsg: "Ups! No contamos con el vino que estás buscando", // <-- Oops! We don't have the wine you are looking for
			});
		}

		if (wine) {
			wine.imagen = `http://localhost:${port}` + wine.imagen;

			const similarWines = await db.Vinos.findAll({
				include: [{ all: true }],
				where: {
					bodega_id: wine.bodega_id,
					id: {
						[Op.not]: req.params.id,
					},
				},
			});

			similarWines.map(
				(wine) =>
					(wine.imagen = `http://localhost:${port}` + wine.imagen)
			);

			res.status(200).json({
				wine,
				similarWines,
			});
		}
	},

	addWine: async (req, res) => {
		let errors = validationResult(req);

		if (!errors.isEmpty()) {
			res.status(400).json({ errors: errors.errors });
		}

		if (errors.isEmpty()) {
			const wine = await db.Vinos.findOne({
				include: [{ all: true }],
				where: { nombre: req.body.nombre },
			});

			if (wine) {
				res.status(400).json({
					errorMsg:
						"Ups! Ya contamos con ese vino en nuestra base de datos", // <-- Oops! We already have that wine in our db
					wine,
				});
			}

			if (!wine) {
				const newWine = await db.Vinos.create({
					nombre: req.body.nombre,
					imagen: req.file.path.split("public").pop(),
					bodega_id: req.body.bodega_id,
					descripcion: req.body.descripcion,
					precio: req.body.precio,
					anio: req.body.anio,
					uva_id: req.body.uva_id,
					categoria_id: req.body.categoria_id,
					stock: req.body.stock,
				});
				res.status(200).json({
					msg: "Vino agregado exitosamente", // <-- Wine added successfully
					newWine,
				});
			}
		}
	},

	updateWine: async (req, res) => {
		let errors = validationResult(req);

		const editableWine = await db.Vinos.findOne({
			include: [{ all: true }],
			where: { id: req.params.id },
		});

		if (!errors.isEmpty()) {
			res.status(400).json({ errors: errors.errors });
		}

		if (errors.isEmpty()) {
			await db.Vinos.update(
				{
					nombre: req.body.nombre,
					imagen: req.file.path.split("public").pop(),
					bodega_id: req.body.bodega_id,
					descripcion: req.body.descripcion,
					precio: req.body.precio,
					anio: req.body.anio,
					uva_id: req.body.uva_id,
					categoria_id: req.body.categoria_id,
					stock: req.body.stock,
				},
				{
					where: {
						id: req.params.id,
					},
				}
			);
			res.status(200).json({
				updated: req.body,
				old: editableWine,
			});
		}
	},

	deleteWine: async (req, res) => {
		const deletableWine = await db.Vinos.findOne({
			include: [{ all: true }],
			where: { id: req.params.id },
		});

		if (!deletableWine) {
			res.status(400).json({
				errorMsg:
					"No contamos con el vino que estás queriendo eliminar", // <-- We don't have the wine you want to delete
			});
		}

		if (deletableWine) {
			await db.Vinos.destroy({
				where: {
					id: req.params.id,
				},
			});
			res.status(200).json({
				msg: "OK",
				deletedWine: deletableWine,
			});
		}
	},
};

module.exports = winesApiController;
