const port = process.env.PORT || 3001;
const db = require("../database/models");

const varietalsApiController = {
	getVarietals: async (req, res) => {
		const varietals = await db.Varietals.findAll({
			order: [["nombre", "ASC"]],
		});

		if (!varietals) {
			res.status(400).json({
				errorMsg: "Ups! Algo salió mal...", // <-- Oops! Something went wrong...
			});
		}

		if (varietals) {
			res.status(200).json({ varietals });
		}
	},
};

module.exports = varietalsApiController;
