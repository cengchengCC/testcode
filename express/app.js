
'use strict'

const express = require('express')
const { Sequelize, DataTypes,Model  } = require('sequelize');

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

const app = express()
const port = 2000
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

const roll = require('./models/roll')
console.log(roll)
exports.sequelize = sequelize