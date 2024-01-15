"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.renameTable("Uvas", "Varietals");
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.renameTable("Varietals", "Uvas");
	},
};
