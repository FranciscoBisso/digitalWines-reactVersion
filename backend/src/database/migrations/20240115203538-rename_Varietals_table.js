"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.renameTable("Varietals", "varietals");
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.renameTable("varietals", "Varietals");
	},
};
