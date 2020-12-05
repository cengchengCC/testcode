'use strict'

const express = require('express')
const app = express()
const port = 5000





// app.use('/', function(req, res){
//     res.write('You maybe access /');
//     res.end();
// });
app.use('/api/v1/roll', require('./routes/roll'))

app.use('/api',require('./api/index.js'))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
