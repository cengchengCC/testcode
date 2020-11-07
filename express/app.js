
'use strict'

const express = require('express')
const { Sequelize, DataTypes,Model  } = require('sequelize');
const app = express()
const port = 2000

const sequelize=new Sequelize('BSdataTest','postgres','616616',{
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



app.use('/', function(req, res){
    res.write('You maybe access /v1/api');
    res.end();
});
app.use('/api/test',require('./routes/test'))
// const roll = require('./models/roll')
// const date={roll:true}
// app.get('/temp', (req, res) => res.send(date.roll))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))



exports.sequelize = sequelize