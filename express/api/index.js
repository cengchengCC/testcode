let express = require('express')
let router = express.Router()


router.use('/request',require('./request.js'))
router.use('./response',require('./response.js'))

module.exports = router