module.exports = (sequelize, dataTypes) => {
	const alias = "Varietals";

	const cols = {
		id: {
			type: dataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
		},
		nombre: {
			type: dataTypes.STRING(200),
			allowNull: false,
		},
		description: {
			type: dataTypes.STRING(200),
			allowNull: false,
		},
	};

	const config = {
		tableName: "varietals",
		timestamps: false,
	};

	const Varietal = sequelize.define(alias, cols, config);

	//Relación de uva y vinos. Una uva -varietal- tiene muchos vinos.
	Varietal.associate = function (models) {
		Varietal.hasMany(models.Vinos, {
			as: "uvaVino",
			foreignKey: "uva_id",
		});
	};

	return Varietal;
};
