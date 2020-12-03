let express = require('express')
let router = express.Router()

let roll= require('../models/roll')
let {sequelize,DataTypes}= require('../models/sequelize')
roll=roll(sequelize,DataTypes)


router.get('/api', async (req, res) => {
	// try {
		queryattributes=await roll.findAll({
            where: {
              upid: '18901001000',
              all_processes_statistics_ismissing:0,
            },
            attributes:{exclude:['createdAt',"updatedAt"]}
          });
        // console.log('queryattributes',JSON.stringify(queryattributes,null,2))
        //   console.log(queryattributes[0]['_previousDataValues'])
    //   console.log(typeof queryattributes[0]['_previousDataValues'])
    
        // res.json(queryattributes)
        res.json(queryattributes)
	
})


module.exports = router