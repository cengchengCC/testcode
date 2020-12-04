'use strict'

const express = require('express')
const app = express()
const port = 4000





// app.use('/', function(req, res){
//     res.write('You maybe access /');
//     res.end();
// });
app.use('/api/v1/roll', require('./routes/roll'))

app.use('/api',require('./api/index.js'))
// app.get('/temp', (req, res) => res.send({roll:true}))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
