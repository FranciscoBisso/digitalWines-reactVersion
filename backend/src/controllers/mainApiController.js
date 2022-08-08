const db = require("../database/models");
const mainApiController = {
    home: async (req, res) => {
        const vinos = await db.Vinos.findAll({
            include: [{ all: true }],
            order: [["nombre", "ASC"]],
        });
        res.status(200).json({
            total: vinos.length,
            data: vinos,
        });
    },
};

module.exports = mainApiController;
