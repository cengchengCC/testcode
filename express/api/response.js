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

//res.links(links)
router.get('/links',(req,res)=>{
    res.links({
        next: 'http://api.example.com/users?page=2',
        last: 'http://api.example.com/users?page=5'
    })
    res.send({'res.links':{
        next: 'http://api.example.com/users?page=2',
        last: 'http://api.example.com/users?page=5'
    }})
    //=>Link: <http://api.example.com/users?page=2>; rel="next",
    //=>      <http://api.example.com/users?page=5>; rel="last"
})
//Joins the links provided as properties of the parameter to populate the response’s Link HTTP header field.


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

//res.send([body])
router.get('/send',(req,res)=>{
    // res.send(Buffer.from('whoop'))
    // res.send({ some: 'json' })
    // res.send('<p>some html</p>')
    // res.status(404).send('Sorry, we cannot find that!')
    // res.status(500).send({ error: 'something blew up' })
    
    // //When the parameter is a Buffer object, the method sets the Content-Type response header field to “application/octet-stream”,
    // // unless previously defined as shown above:
    // res.set('Content-Type', 'text/html')
    // res.send(Buffer.from('<p>some html</p>'))

    // //When the parameter is a String, the method sets the Content-Type to “text/html”:
    // res.send('<p>some html</p>')

    // //When the parameter is an Array or Object, Express responds with the JSON representation:
    // res.send({ user: 'tobi' })
    res.send([1, 2, 3])
})
//Sends the HTTP response.The body parameter can be a Buffer object, a String, an object, or an Array. 


//res.sendStatus(statusCode)
router.get('/sendStatus',(req,res)=>{
    res.sendStatus(200) // equivalent to res.status(200).send('OK')
    res.sendStatus(403) // equivalent to res.status(403).send('Forbidden')
    res.sendStatus(404) // equivalent to res.status(404).send('Not Found')
    res.sendStatus(500) // equivalent to res.status(500).send('Internal Server Error')

    res.sendStatus(9999) // equivalent to res.status(9999).send('9999')
})
//Sets the response HTTP status code to statusCode and send its string representation as the response body.
//If an unsupported status code is specified, the HTTP status is still set to statusCode and the string version of the code is sent as the response body.


//res.set(field [, value])
router.get('/set',(req,res)=>{
    res.set('Content-Type', 'text/plain')

    res.set({
        'Content-Type': 'text/plain',
        'Content-Length': '123',
        'ETag': '12345'
    })
    res.send('Ok')
})
//Sets the response’s HTTP header field to value. To set multiple fields at once, pass an object as the parameter.
//Aliased as res.header(field [, value]).

//res.status(code)
router.get('/status',(req,res)=>{
    res.status(403).end()
    res.status(400).send('Bad Request')
    res.status(404).sendFile('/absolute/path/to/404.png')
})
//Sets the HTTP status for the response. It is a chainable alias of Node’s response.statusCode.


//res.type(type)
router.get('/type',(req,res)=>{
    // res.type('.html')
    // // => 'text/html'
    // res.type('html')
    // // => 'text/html'
    res.type('json')
    // => 'application/json'
    // res.type('application/json')
    // // => 'application/json'
    // res.type('png')
    // // => 'image/png'
    res.send({alldate:'efuh'})
})
//Sets the Content-Type HTTP header to the MIME type as determined by mime.lookup() for the specified type. 
//If type contains the “/” character, then it sets the Content-Type to type.

module.exports = router