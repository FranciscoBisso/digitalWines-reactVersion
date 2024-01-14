const port = process.env.PORT || 3001;
const db = require("../database/models");

const categoriesApiController = {
	getCategories: async (req, res) => {
		const featured = await db.Vinos.findAll({
			include: [{ all: true }],
			order: [["nombre", "ASC"]],
			where: { categoria_id: 1 },
		});

		const bestSellers = await db.Vinos.findAll({
			include: [{ all: true }],
			order: [["nombre", "ASC"]],
			where: { categoria_id: 2 },
		});

		const bestDeals = await db.Vinos.findAll({
			include: [{ all: true }],
			order: [["nombre", "ASC"]],
			where: { categoria_id: 3 },
			//TODO: this ain't an smart way to get the cheapest wines.
			//TODO: This has to be dynamic, can't depend on a static row of the table;
			//TODO: this result must came from ordering the wines by price and getting the 10 ones with the lowest price.
		});

		if (!featured && !bestSellers && !bestDeals) {
			res.status(404).json({
				errorMsg: "Ups! Algo salió mal...", // <-- Oops! Something went wrong...
			});
		}

		if (featured && bestSellers && bestDeals) {
			for (let wine of featured) {
				wine.imagen = `http://localhost:${port}` + wine.imagen;
			}

			for (let wine of bestSellers) {
				wine.imagen = `http://localhost:${port}` + wine.imagen;
			}

			for (let wine of bestDeals) {
				wine.imagen = `http://localhost:${port}` + wine.imagen;
			}

			res.status(200).json({
				total: {
					all:
						featured.length + bestSellers.length + bestDeals.length,
					featured: featured.length,
					bestSellers: bestSellers.length,
					bestDeals: bestDeals.length,
				},
				categories: [
					{ name: "featured", content: featured },
					{ name: "bestSellers", content: bestSellers },
					{ name: "bestDeals", content: bestDeals },
				],
			});
		}
	},
};

module.exports = categoriesApiController;
