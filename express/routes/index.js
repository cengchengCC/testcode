let express = require('express')
let router = express.Router()


router.use('/roll',require('./roll'))

module.exports = router