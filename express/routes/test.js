let express = require('express')
let router = express.Router()

let User= require('../models/test')
router.get('/', async (req, res, next) => {
	try {
		queryattributes=await User.findAll({
			where: {
				upid: '18901001000'
			},
			attributes:{exclude:['createdAt',"updatedAt"]}
			});
		// console.log('queryattributes',JSON.stringify(queryattributes,null,2))
		tese=JSON.stringify(queryattributes,null,2)
		res.json(tese.toJSON())
	} catch (e) { next(e) }
})

// router.get('/', async (req, res, next) => {
// 	try {
// 		let user=await roll.findAll({
// 			include:['age']
// 		})
// 		res.json(user.toJSON())
// 	} catch (e) { next(e) }
// })