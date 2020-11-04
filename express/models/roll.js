const Roll = function (sequelize, DataTypes) {
    const Model = sequelize.define('User', {
    // 在这里定义模型属性
    name: DataTypes.TEXT,
    favoriteColor: {
      type: DataTypes.TEXT,
      defaultValue: 'green'
    },
    age: DataTypes.INTEGER,
    cash: DataTypes.INTEGER
  }, {
    // 这是其他模型参数
        sequelize, // 我们需要传递连接实例
        freezeTableName: true,
        modelName: 'User', // 我们需要选择模型名称
        tableName: 'test2',
        schema:'User'
  });

  (async () => {
    await sequelize.sync({ force: true })
    .then(() => {
                console.log("用户模型表刚刚(重新)创建！");
            })
            .catch(err => {
                console.log("用户模型表创建fault");
            });
    // const jane = User.build({ name: "Jane" });
    // console.log(jane instanceof User); // true
    // console.log(jane.name); // "Jane"
    // await jane.save()

    // const jane = await User.create({ name: "Jane" });
    // // Jane 现在存在于数据库中！
    // console.log(jane instanceof User); // true
    // console.log(jane.name); // "Jane"

    // // const jane = await User.create({ name: "Jane" });
    // // console.log(jane); // 不要这样!
    // console.log(jane.toJSON()); // 这样最好!
    // console.log(JSON.stringify(jane, null, 4)); // 这样也不错!


    // jane.name = "Ada";      //更新实例
    // // 数据库中的名称仍然是 "Jane"
    // await jane.save();
    // // 现在该名称已在数据库中更新为 "Ada"！

    // // await jane.destroy() //删除该实例

    // jane.name = "Jane";   //重载实例
    // // 数据库中的名称依然是 "Ada"
    // await jane.reload();
    // console.log(jane.name); // "Ada"



    // const jane = await User.create({ name: "Jane" });
    // console.log(jane.name); // "Jane"
    // console.log(jane.favoriteColor); // "green"
    // jane.name = "Jane II";
    // jane.favoriteColor = "blue";
    // await jane.save({ fields: ['name'] });
    // console.log(jane.name); // "Jane II"
    // console.log(jane.favoriteColor); // "blue"
    // // 上面显示为 "blue",因为本地对象将其设置为 "blue",
    // // 但是在数据库中它仍然是 "green"：
    // await jane.reload();
    // console.log(jane.name); // "Jane II"
    // console.log(jane.favoriteColor); // "green"


    const jane = await User.create({ name: "Jane", age: 100 });
    const incrementResult = await jane.increment('age', { by: 2 });
    // 注意: 如只增加 1, 你可以省略 'by' 参数, 只需执行 `user.increment('age')`

    // 在 PostgreSQL 中, 除非设置了 `{returning：false}` 参数(不然它将是 undefined),
    // 否则 `incrementResult` 将是更新后的 user.

    // 在其它数据库方言中, `incrementResult` 将会是 undefined. 如果你需要更新的实例, 你需要调用 `user.reload()`.

    const temp = await User.create({ name: "Jane", age: 100, cash: 5000 });
    await temp.increment({
    'age': 2,
    'cash': 100
    });

    // 如果值增加相同的数量,则也可以使用以下其他语法：
    await temp.increment(['age', 'cash'], { by: 2 });
})();

    return Model
}


module.exports = Roll