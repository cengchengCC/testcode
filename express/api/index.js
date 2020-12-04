let express = require('express')
let router = express.Router()

//req.app
router.get('/viewdirectory',(req,res)=>{
    res.send('This views directory '+req.app.get('views'))
})
//req.app access the Express instance via req.appp
//This views directory D:\Desktop\testcode\express\views

//req.ip
router.get('/ip',(req,res)=>{
    console.dir(req.ip)//'::ffff:219.216.81.96'
    console.dir(req.method)//get
})
// Contains the remote IP address of the request.
//req.method
//Contains a string corresponding to the HTTP method of the request: GET, POST, PUT, and so on.

//req.name
router.get('/name/:name',(req,res)=>{
    console.dir(req.params.name)
    // GET /name/item  =>item
    
})
//Contains the path part of the request URL.

//req.path
router.get('/path',(req,res)=>{
    console.dir(req.path)
    // => '/path'
})
//Contains the path part of the request URL.


module.exports = router