const db = require("../database/models");
const winesApiController = {
    findAll: async (req, res) => {
        const vinos = await db.Vinos.findAll({
            include: [{ all: true }],
            order: [["nombre", "ASC"]],
        });
        return res.json({
            status: 200,
            total: vinos.length,
            data: vinos,
        });
    },

    findOne: async (req, res) => {
        const vino = await db.Vinos.findOne({
            include: [{ all: true }],
            where: { id: req.params.id },
        });

        if (!vino) {
            return res.status(400).json({
                status: 400,
                error: "No contamos con ese vino",
            });
        }

        return res.json({
            status: 200,
            data: vino,
        });
    },

    create: async (req, res) => {
        const vino = await db.Vinos.create({
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
        });
        return res.status(200).json({
            status: 200,
            created: "OK",
            data: vino,
        });
    },

    modify: async (req, res) => {
        const vino = await db.Vinos.findOne({
            include: [{ all: true }],
            where: { id: req.params.id },
        });

        if (!vino) {
            return res.status(400).json({
                status: 400,
                error: "No contamos con ese vino",
            });
        }

        return res.json({
            status: 200,
            data: vino,
        });
    },

    update: async (req, res) => {
        const vino = await db.Vinos.update(
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
        );
        return res.status(200).json({
            status: 200,
            updated: "OK",
            data: vino,
        });
    },

    delete: async (req, res) => {
        const vino = await db.Vinos.findOne({
            include: [{ all: true }],
            where: { id: req.params.id },
        });

        if (!vino) {
            return res.status(400).json({
                status: 400,
                error: "No contamos con ese vino",
            });
        }

        return res.json({
            status: 200,
            data: vino,
        });
    },

    destroy: async (req, res) => {
        const vino = await db.Vinos.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).json({
            status: 200,
            deleted: "OK",
            data: vino,
        });
    },
};

module.exports = winesApiController;
