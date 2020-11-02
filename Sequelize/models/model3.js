// const {sequelize}=require('../index')
const { Sequelize, DataTypes,Model  } = require('sequelize');

// const sequelize=new Sequelize('BSdataTest','postgres','616616',{
// 	host:'219.216.80.18',
// 	// host:'219.216.81.96',
// 	port:5432,
// 	dialect:'postgres'
// })
const sequelize=new Sequelize('bg','postgres','woshimima',{
	host:'202.118.21.236',
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

// const User = sequelize.define('User', {
//     // 在这里定义模型属性
//     name: DataTypes.TEXT,
//     favoriteColor: {
//       type: DataTypes.TEXT,
//       defaultValue: 'green'
//     },
//     age: DataTypes.INTEGER,
//     // cash: DataTypes.INTEGER,
//     // temp: DataTypes.INTEGER
//   }, {
//     // 这是其他模型参数
//         sequelize, // 我们需要传递连接实例
//         freezeTableName: true,
//         modelName: 'User', // 我们需要选择模型名称
//         tableName: 'test3',
//         schema:'User'
//   });

// (async () => {
//     await sequelize.sync({ force: true })
//     .then(() => {
//                 console.log("用户模型表刚刚(重新)创建！");
//             })
//             .catch(err => {
//                 console.log("用户模型表创建fault");
//             });
//     // 创建一个新用户
//     const jane = await User.create({ firstName: "Jane", lastName: "Doe" ,age:18});
//     console.log("Jane's auto-generated ID:", jane.id);
//     console.log(jane.toJSON());
//     // 查询所有用户
//     const users = await User.findAll();
//     console.log(users.every(user => user instanceof User)); // true
//     console.log("All users:", JSON.stringify(users, null, 2));

//     var queryattributes=await User.findAll({
//         attributes: ['createdAt', 'updatedAt',['age','date']]
//         });
//     console.log('queryattributes',JSON.stringify(queryattributes,null,2))
    
//     // 无法一起使用fn聚合和其他属性
//     // const queryfn=await User.findAll({
//     //     attributes:{
//     //         include: [
//     //             sequelize.fn('COUNT', sequelize.col('id'))
//     //           ]
//     //     }
//     //     });
//     // console.log('queryfn',JSON.stringify(queryfn,null,2))

//     queryattributes=await User.findAll({
//         attributes: {
//             exclude: ['name']
//         }
//         });
//     console.log('queryattributes',JSON.stringify(queryattributes,null,2))


//     //where
//     User.findAll({
//         where: {
//           authorId: 2
//         }
//       });
//       // SELECT * FROM post WHERE authorId = 2
// })();

