'use strict'

const express = require('express')
const app = express()
const port = 2000





// app.use('/', function(req, res){
//     res.write('You maybe access /');
//     res.end();
// });
app.use('/api/v1/roll', require('./routes/roll'))

// const date={roll:true}
// app.get('/temp', (req, res) => res.send(date.roll))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
