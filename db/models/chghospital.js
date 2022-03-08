'use strict';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default (sequelize, DataTypes) => {
	const ChgHospital = sequelize.define('ChgHospital', {
		hospitalId: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        hName: {
            type: DataTypes.STRING(191),
            allowNull: false,
        },
        hDesc: {
            type: DataTypes.STRING(666),
            allowNull: true,
        },
        hCountry: {
            type: DataTypes.STRING(191),
            allowNull: false
        },
        hRegion: {
            type: DataTypes.STRING(191),
            allowNull: true
        },
        hPic: {
            type: DataTypes.STRING(666),
            allowNull: true
        },
        hStatus: {
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
		tableName: 'chg_hospitals'
	});

	// ChgHospital.associate = function(models) {
	// 	// associations can be defined here
	// };

	// // queries and other function starts

	// ChgHospital.getList = async () => {
	// 	try {
	// 		return await ChgHospital.findAll({
	// 			where:{
	// 				status: true
	// 			},
	// 			attributes: [
	// 				'doctorId','dFullName','dEmail','dMobile','dAltPhone','dPassword','dProfilePic',
	// 				'dStatus','dIDproof'
	// 			]
	// 		});
	// 	} catch (e) {
	// 		return [];
	// 	}
	// };

	// ChgHospital.saveRecord = async (reqData) => {
	// 	try {
	// 		const result = await sequelize.transaction(async (t) => {
	// 			const hashPassword = bcrypt.hashSync(reqData.password, bcrypt.genSaltSync(10), null);
	// 			const saveObj = {
	// 				...reqData,
	// 				password: hashPassword,
	// 				createdAt: new Date(),
	// 				updatedAt: new Date()
	// 			};
	// 			return await ChgHospital.create(saveObj, { transaction: t });
	// 		});
	// 		// return result from saved record
	// 		return result;
	// 	} catch (e) {
	// 		return false;
	// 	}
	// };

	// ChgHospital.getRecordById = async (id) => {
	// 	try {
	// 		const searchRecord = await ChgHospital.findByPk(id, {
	// 			attributes: ['doctorId','dFullName','dEmail','dMobile','dAltPhone','dPassword','dProfilePic',
	// 			'dStatus','dIDproof','status']
	// 		});
	// 		if(!searchRecord || !searchRecord.status) return false;
	// 		return searchRecord;
	// 	} catch (e) {
	// 		return false;
	// 	}
	// };

	// ChgHospital.updateRecord = async (record, reqData) => {
	// 	try {
	// 		const result = await sequelize.transaction(async (t) => {
	// 			let hashPassword = record.password;
	// 			if( reqData.password != '' ){
	// 				hashPassword = bcrypt.hashSync(reqData.password, bcrypt.genSaltSync(10), null)
	// 			}
	// 			const updateObj = {
	// 				...reqData,
	// 				password: hashPassword,
	// 				updatedAt: new Date()
	// 			};
	// 			return await record.update(updateObj, { transaction: t });
	// 		});
	// 		// return result from updated record
	// 		return result;
	// 	} catch (e) {
	// 		return false;
	// 	}
	// };

	// ChgHospital.deleteRecord = async (record) => {
	// 	try {
	// 		const result = await sequelize.transaction(async (t) => {
	// 			return await record.update({
	// 				status: false,
	// 				updatedAt: new Date()
	// 			}, { transaction: t });
	// 		});
	// 		// return result from updated record
	// 		return result;
	// 	} catch (e) {
	// 		return false;
	// 	}
	// };

    // ChgHospital.validatePassword = (pass, hashPass) => {
    //     return bcrypt.compareSync(pass, hashPass);
	// }
	return ChgHospital;
};