const db = require("../../database/models");
const mainApiController = {
    home: (req, res) => {
        db.Vinos.findAll({
            include: [
                { association: "vinoBodega" },
                { association: "vinoCategoria" },
            ],
            order: [["nombre", "ASC"]],
        }).then((vinos) => {
            return res.json({
                total: vinos.length,
                data: vinos,
                status: 200,
            });
        });
    },
};

module.exports = mainApiController;
