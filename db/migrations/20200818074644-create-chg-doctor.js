'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('chg_doctors', {
			doctorId: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			dFullName: {
				type: Sequelize.STRING(191),
				allowNull: false,
			},
			dEmail: {
				type: Sequelize.STRING(191),
				allowNull: false,
			},
			dMobile: {
				type: Sequelize.STRING(30),
				allowNull: false
			},
			dAltPhone: {
				type: Sequelize.STRING(30),
				allowNull: true
			},
			dPassword: {
				type: Sequelize.STRING(191),
				allowNull: true
			},
			dProfilePic: {
				type: Sequelize.STRING(666),
				allowNull: true
			},
			dStatus: {
				type: Sequelize.STRING(191),
				allowNull: true
			},
			dIDproof: {
				type: Sequelize.STRING(191),
				allowNull: true
			},
			status: {
				type: Sequelize.BOOLEAN(true),
				allowNull: true,
				defaultValue: '1'
			},
			created_by: {
				type: Sequelize.INTEGER(11),
				allowNull: true,
			},
			updated_by: {
				type: Sequelize.INTEGER(11),
				allowNull: true,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},

	down: queryInterface /* , Sequelize */ => queryInterface.dropTable('chg_doctors')
};