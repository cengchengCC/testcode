let express = require('express')
let router = express.Router()

//res.headersSent
router.get('/headersSent',(req,res)=>{
    // console.dir(res.headersSent) // false
    res.send('OK')
    console.dir(res.headersSent) // true
})
//Boolean property that indicates if the app sent HTTP headers for the response.

//res.append(field [, value])
router.get('/append',(req,res)=>{
    res.append('Link', ['<http://localhost/>', '<http://localhost:3000/>'])
    res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly')
    res.append('Warning', '199 Miscellaneous warning')
    res.send('OK')
})
//Appends the specified value to the HTTP response header field. 
//If the header is not already set, it creates the header with the specified value.
//The value parameter can be a string or an array.


//res.end([data] [, encoding])
router.get('/end',(req,res)=>{
    console.dir(res.headersSent)
    // res.end()
    res.status(404).end()
})
//Ends the response process. This method actually comes from Node core, specifically the response.end() method of http.ServerResponse.
//Use to quickly end the response without any data. 
//If you need to respond with data, instead use methods such as res.send() and res.json().


//res.get(field)
router.get('/get',(req,res)=>{
    res.set({'Content-Type':'text/plain'})
    var Content=res.get('Content-Type')
    res.send(Content)
})
//text/plain; charset=utf-8
//Returns the HTTP response header specified by field. The match is case-insensitive.

//res.json([body])
router.get('/json',(req,res)=>{
    // res.json(null)
    // res.json({ user: 'tobi' })
    // res.status(500).json({ error: 'message' })
    res.status(500).json('500 Internal Server Error')
})
//Sends a JSON response. 
//This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using JSON.stringify().
//The parameter can be any JSON type, including object, array, string, Boolean, number, or null, and you can also use it to convert other values to JSON.


//res.redirect([status,] path)
router.get('/redirect',(req,res)=>{
    res.redirect('/foo/bar')
    // res.redirect('http://example.com')
    // res.redirect(301, 'http://example.com')
    // res.redirect('post/new')
    // // redirect->poat/new
    //res.redirect('../login')
    // // http://localhost:4000/login
    // res.redirect('back')
    // //A back redirection redirects the request back to the referer, defaulting to / when the referer is missing.
})
//Redirects to the URL derived from the specified path, with specified status, a positive integer that corresponds to an HTTP status code . 
//If not specified, status defaults to “302 “Found”.

//res.status(code)
router.get('/status',(req,res)=>{
    res.status(403).end()
    res.status(400).send('Bad Request')
    res.status(404).sendFile('/absolute/path/to/404.png')
})
//Sets the HTTP status for the response. It is a chainable alias of Node’s response.statusCode.

module.exports = router