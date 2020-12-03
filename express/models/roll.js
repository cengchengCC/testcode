module.exports= function (sequelize, DataTypes) {
    const Model = sequelize.define('roll', {
		upid:{
			type: DataTypes.TEXT('long'),
			primaryKey: true
		},
		platetype: {
			type: DataTypes.TEXT('long')
		},
		tgtwidth:{
			type: DataTypes.INTEGER
		},
		tgtlength:{
			type: DataTypes.INTEGER
		},
		tgtthickness:{
			type: DataTypes.INTEGER
		},
		toc:{
			type: DataTypes.DATE
		},
		all_processes_statistics:{
			type: DataTypes.JSON
		},
		all_processes_statistics_ismissing:{
			type: DataTypes.INTEGER
		},
		v1:{
			type: DataTypes.JSON
		},
		cool_ismissing:{
			type: DataTypes.INTEGER
		},
		v2:{
			type: DataTypes.JSON
		},
		fu_temperature_ismissing:{
			type: DataTypes.INTEGER
		},
		v3:{
			type: DataTypes.JSON
		},
		m_ismissing:{
			type: DataTypes.INTEGER
		},
		fqc_label:{
			type: DataTypes.JSON
		},
		fqc_ismissing:{
			type: DataTypes.INTEGER
		}
	}, {
		// 这是其他模型参数
			sequelize, // 我们需要传递连接实例
			freezeTableName: true,
			modelName: 'roll', // 我们需要选择模型名称
			tableName: 'dump_data',
			schema:'dcenter'
	});
    return Model
}

