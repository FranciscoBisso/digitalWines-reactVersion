const port = process.env.PORT || 3001;
const db = require("../database/models");

const wineriesApiController = {
	getWineries: async (req, res) => {
		const wineries = await db.Bodegas.findAll({
			order: [["nombre", "ASC"]],
		});

		if (!wineries) {
			res.status(400).json({
				errorMsg: "Ups! Algo salió mal...", // <-- Oops! Something went wrong...
			});
		}

		if (wineries) {
			res.status(200).json({ wineries });
		}
	},
};

module.exports = wineriesApiController;
