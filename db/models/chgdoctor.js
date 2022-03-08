'use strict';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default (sequelize, DataTypes) => {
	const ChgDoctor = sequelize.define('ChgDoctor', {
		doctorId: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		dFullName: {
			type: DataTypes.STRING(191),
			allowNull: false,
		},
		dEmail: {
			type: DataTypes.STRING(191),
			allowNull: false,
		},
		dMobile: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		dAltPhone: {
			type: DataTypes.STRING(30),
			allowNull: true
		},
		dPassword: {
			type: DataTypes.STRING(191),
			allowNull: true
		},
		dProfilePic: {
			type: DataTypes.STRING(666),
			allowNull: true
		},
		dStatus: {
			type: DataTypes.STRING(191),
			allowNull: true
		},
		dIDproof: {
			type: DataTypes.STRING(191),
			allowNull: true
		},
		status: {
			type: DataTypes.BOOLEAN(true),
			allowNull: true,
			defaultValue: '1'
		},
		created_by: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
		},
		updated_by: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
		},
		createdAt: {
			allowNull: false,
			type: DataTypes.DATE
		},
		updatedAt: {
			allowNull: false,
			type: DataTypes.DATE
		}
	}, {
		tableName: 'chg_doctors'
	});

	ChgDoctor.associate = function(models) {
		// associations can be defined here
	};

	// queries and other function starts

	ChgDoctor.getList = async () => {
		try {
			return await ChgDoctor.findAll({
				where:{
					status: true
				},
				attributes: [
					'doctorId','dFullName','dEmail','dMobile','dAltPhone','dPassword','dProfilePic',
					'dStatus','dIDproof'
				]
			});
		} catch (e) {
			return [];
		}
	};

	ChgDoctor.saveRecord = async (reqData) => {
		try {
			const result = await sequelize.transaction(async (t) => {
				const hashPassword = bcrypt.hashSync(reqData.dPassword, bcrypt.genSaltSync(10), null);
				const saveObj = {
					...reqData,
					dPassword: hashPassword,
					createdAt: new Date(),
					updatedAt: new Date()
				};
				return await ChgDoctor.create(saveObj, { transaction: t });
			});
			// return result from saved record
			return result;
		} catch (e) {
			return false;
		}
	};

	ChgDoctor.getRecordById = async (id) => {
		try {
			const searchRecord = await ChgDoctor.findByPk(id, {
				attributes: ['doctorId','dFullName','dEmail','dMobile','dAltPhone','dPassword','dProfilePic',
				'dStatus','dIDproof','status']
			});
			if(!searchRecord || !searchRecord.status) return false;
			return searchRecord;
		} catch (e) {
			return false;
		}
	};

	ChgDoctor.updateRecord = async (record, reqData) => {
		try {
			const result = await sequelize.transaction(async (t) => {
				let hashPassword = record.dPassword;
				if( reqData.dPassword != '' ){
					hashPassword = bcrypt.hashSync(reqData.dPassword, bcrypt.genSaltSync(10), null)
				}
				const updateObj = {
					...reqData,
					dPassword: hashPassword,
					updatedAt: new Date()
				};
				return await record.update(updateObj, { transaction: t });
			});
			// return result from updated record
			return result;
		} catch (e) {
			return false;
		}
	};

	ChgDoctor.deleteRecord = async (record) => {
		try {
			const result = await sequelize.transaction(async (t) => {
				return await record.update({
					status: false,
					updatedAt: new Date()
				}, { transaction: t });
			});
			// return result from updated record
			return result;
		} catch (e) {
			return false;
		}
	};

    ChgDoctor.validatePassword = (pass, hashPass) => {
        return bcrypt.compareSync(pass, hashPass);
	}
	return ChgDoctor;
};