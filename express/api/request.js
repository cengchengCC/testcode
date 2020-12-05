let express = require('express')
let router = express.Router()

//req.app
router.get('/viewdirectory',(req,res)=>{
    res.send('This views directory '+req.app.get('views'))
})
//req.app access the Express instance via req.appp
//This views directory D:\Desktop\testcode\express\views

//req.hostname
router.get('/hostname',(req,res)=>{
    console.dir(req.hostname)
    res.send(req.hostname)
})
// Host: "example.com:3000" =>'example.conm'
//localhost
// Contains the hostname derived from the Host HTTP header.

//req.ip|req.method
router.get('/ip',(req,res)=>{
    console.dir(req.ip)//'::ffff:219.216.81.96'
    console.dir(req.method)//get
})
// Contains the remote IP address of the request.
//req.method
//Contains a string corresponding to the HTTP method of the request: GET, POST, PUT, and so on.



//req.params
router.get('/params/:name',(req,res)=>{
    console.dir(req.params.name)
    // GET /params/item  =>item
    
})
//Contains the path part of the request URL.

//req.path
router.get('/path',(req,res)=>{
    console.dir(req.path)
    // => '/path'
})
//Contains the path part of the request URL.

//req.protocol
router.get('/protocol',(req,res)=>{
    console.dir(req.protocol)
    // => 'http'
})
//Contains the request protocol string: either http or (for TLS requests) https.

//req.query
router.get('/query',(req,res)=>{
    console.dir(req.query)
    res.send(req.query)
})
// GET  /query?q=tobi+ferret =>{ q: 'tobi ferret' }
// GET /query?order=desc&shoe[color]=blue&shoe[type]=converse =>{ order: 'desc', shoe: { color: 'blue', type: 'converse' } }
// GET /query?color[]=blue&color[]=black&color[]=red =>{ color: [ 'blue', 'black', 'red' ] }
//Contains the request protocol string: either http or (for TLS requests) https.

//req.route
router.get('/route/:id?',(req,res)=>{
    console.log(req.route)
    res.send(req.method)
})
// Contains the currently-matched route, a string.
//Route=>{
//     path: '/route/:id?',
//     stack: [
//       Layer {
//         handle: [Function],
//         name: '<anonymous>',
//         params: undefined,
//         path: undefined,
//         keys: [],
//         regexp: /^\/?$/i,
//         method: 'get'
//       }
//     ],
//     methods: { get: true }
//   }

//req.secure
router.get('/secure',(req,res)=>{
    console.dir(req.secure)
    console.dir(req.protocol === 'https')
    // => false
    res.send(res.secure)
})
// A Boolean property that is true if a TLS connection is established

//req.xhr
router.get('/xhr',(req,res)=>{
    console.dir(req.xhr)
    //// => true
    res.send(req.xhr)
})
//A Boolean property that is true if the request’s X-Requested-With header field is “XMLHttpRequest”, 
//indicating that the request was issued by a client library such as jQuery.

module.exports = router