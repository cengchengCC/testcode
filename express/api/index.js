let express = require('express')
let router = express.Router()


router.use('/application',require('./application.js'))
router.use('/request',require('./request.js'))
router.use('/response',require('./response.js'))
router.use('/router',require('./router.js'))

module.exports = router