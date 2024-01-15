"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.renameColumn("Varietals", "nombre", "name");
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.renameColumn("Varietals", "name", "nombre");
	},
};
