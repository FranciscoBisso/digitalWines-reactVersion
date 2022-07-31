const db = require("../database/models");
const winesApiController = {
    wineCellar: async (req, res) => {
        const vinos = await db.Vinos.findAll({
            include: [
                { association: "vinoBodega" },
                { association: "vinoCategoria" },
            ],
            order: [["nombre", "ASC"]],
        });
        return res.json({
            status: 200,
            total: vinos.length,
            data: vinos,
        });
    },

    create: async (req, res) => {
        //return res.json(req.body);

        await db.Vinos.create({
            nombre: req.body.nombre,
            //imagen: req.file.path.split("public").pop(),
            imagen: req.body.imagen,
            bodega_id: req.body.bodega_id,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            anio: req.body.anio,
            uva_id: req.body.uva_id,
            categoria_id: req.body.categoria_id,
            stock: req.body.stock,
        }).then((vino) => {
            res.status(200).json({
                status: 200,
                created: "OK",
                data: vino,
            });
        });
    },

    update: async (req, res) => {
        await db.Vinos.update(
            {
                nombre: req.body.nombre,
                //imagen: req.file.path.split("public").pop(),
                imagen: req.body.imagen,
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
        ).then((vino) => {
            res.status(200).json({
                status: 200,
                updated: "OK",
                data: vino,
            });
        });
    },
};

module.exports = winesApiController;
