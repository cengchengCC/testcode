const {Sequelize}=require('sequelize');

const sequelize=new Sequelize('BSData20190713','postgres','616616',{
    host:'219.216.80.18',
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