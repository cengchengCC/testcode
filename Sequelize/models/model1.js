// const {sequelize}=require('../index')
const { Sequelize, DataTypes,Model  } = require('sequelize');

const sequelize=new Sequelize('BSdataTest','postgres','616616',{
	host:'219.216.80.18',
	// host:'219.216.81.96',
	port:5432,
	dialect:'postgres'
})

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// class User extends Model {}

// User.init({
//     // 在这里定义模型属性
//     firstName: {
//     type: DataTypes.STRING,
//     allowNull: false
//     },
//     lastName: {
//     type: DataTypes.STRING
//     // allowNull 默认为 true
//     }
// }, {
//     // 这是其他模型参数
//     sequelize, // 我们需要传递连接实例
//     freezeTableName: true,
//     // modelName: 'User', // 我们需要选择模型名称
//     tableName: 'Employees'
// });
const User = sequelize.define('User', {
    // 在这里定义模型属性
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
      // allowNull 默认为 true
    }
  }, {
    // 这是其他模型参数
        sequelize, // 我们需要传递连接实例
        freezeTableName: true,
        modelName: 'User', // 我们需要选择模型名称
        tableName: 'Employees',
        schema:'User'
  });


User.sync({ force: true })
    .then(() => {
        console.log("用户模型表刚刚(重新)创建！");
    })
    .catch(err => {
        console.log("用户模型表创建fault");
    });

sequelize.showAllSchemas().then((result)=>console.log(result))

User.drop().then(() => {
    console.log("用户表已删除!");
})