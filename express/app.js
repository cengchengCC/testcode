'use strict'

const express = require('express')
const app = express()
const port = 5000





// app.use('/', function(req, res){
//     res.write('You maybe access /');
//     res.end();
// });
app.use('/static',express.static('models'))
// http://localhost:5000/static/model1.js
// http://localhost:5000/static/test.html
app.use('/data/v1/roll', require('./routes/roll'))

app.use('/api',require('./api/index.js'))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
