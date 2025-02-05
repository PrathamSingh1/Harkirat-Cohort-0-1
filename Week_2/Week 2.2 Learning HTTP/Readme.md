What is ECMAScript?
->  ECMAScript is a scripting language specification on which JavaScript is based. Ecma International is in charge of standardizing ECMAScript.


What is Javascript?
->  JavaScript is a scripting language that conforms to the ECMAScript specification. 
->  It's the most widely known and used implementation of ECMAScript.
->  JavaScript includes additional features that are not part of the ECMAScript specification, like the Document Object Model(DOM) manipulation, which is crucial for web development but is not defined by ECMAScript. 


V8 Engine?
->  V8 is an open-source JavaScript engine developed by the Chromium project for Google Chrome and Chromium web browsers. It's written in C++ and is responsible for compiling JavaScript code into native machine code before executing it, which greatly improves performance.


What is Node.js?
->  Some smart people took out the V8 engine added some Backend things (filesystem reads) on top to create a new runtime to compete with BE languages like Java.
->  JS was never meant to be run in the backend Eventually become very popular and is a popular choice of runtime on the backend.


What is Bun?
->  Other than the fact that JS is single threaded, Node.js is slow (multiple reasons for it) Some smart people said they wanted to re-write the JS runtime for the backend and introduced Bun.
->  It is a significantly faster runtime.
->  It is wirtten in Zig.






            What can you do with Node.js?
            
            1. Create clis (command line interface)
            2. Create a video player
            3. Create a game
            4. Create an HTTP Server(95% of the time you have to work with this)


What is an HTTP Server?
->  Some code that follows the HTTP Protocol and is able to communicate with clients (browsers/mobile apps...)
-> Think of it to be similar to the call app in your phone Which lets you communicate with your friends.

HTTP -> Hyper text transfer Protocol

1. A protocol that is defined for machines to communitcate.
2. Specifically for websites, it is the most common way for your website's frontend to talk to its backend.


        HTTP Protocol

-> In the end, the client throwing some information at a server.
-> Server doing something with that information.
-> Server responding back with the final result.
        Think of them as functions, where

1. Arguments are something the client sends.
2. Rather than calling a function using its name, the client uses a URL.
3. Rather than the function body, the server does something with the request.
4. Rather than the function returning a value, the server responds with some data.


Usually send communication would happen like this
-> Protocol
-> URL
-> Route
-> Header (Cookie)
-> Body (Usually in JSON)
-> Method (POST)

Usually response communication would happen like this
-> Response Header
-> Response Body
-> Status code -200



        HTTP Protocol
Things that happen in your browser after you fire this request.(we will get to how to fire request to a backend server later)

1. Browser parses the URL.
2. Does a DNS Lookup (converts google.com to an IP)
3. Establishes a connection to the IP (does handshake...)



What is DNS resolution?
->  URLs are just like contacts in your phone.
->  In the end, they map to an IP.
->  If you ever buy a URL of your own, you will need to point it to the IP of your server.


What are the common methods you can send to your BE server?
1. GET
2. POST
3. PUT
4. DELETE


What are the common status codes the backend responds with?
1. 200 - Everything is ok
2. 404 - Page/route not found
3. 403 - Authentication issues
4. 500 - Internal server error



Library that we are using - Express

Lets create a simple HTTP Server

const express = require('express')
const app = express()
const port = 3000

app.get('/',(req, res) => {
        res.send('Hello World')
}) 

app.listen(port, () => {
        console.log('Example app listening on port ${port}')
})