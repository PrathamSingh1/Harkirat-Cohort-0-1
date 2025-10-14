What is backend Communication -> When a backend talk to another backend for the sub work done which is not important at the instant moment but at the later so that the main backend will be not worried about the other processes and things.



Types of Communication ->

Synchronous (Strong coupling)
1. HTTP (REST/GraphQL)
2. Websocket (debatable if sync or async)

Asynchronous (Weak coupling)
1. Messaging queues
2. Pub subs
3. Server-Sent Events
4. Websocket (debatable if sync or async)


Websockets - WebSockets provide a way to establish a persistent, full-duplex communication channel over a single TCP connection between the client(typically a web browser) and the server.


Use Cases for WebSockets:

Real-Time Applications: Chat applications, live sports updates, real-time gaming, and any application requiring instant updates can benefit from WebSockets.

Live Feeds: Financial tickers, news feeds, and social media updates are examples where WebSockets can be used to push live data to users.

Interactive Service: Collaborative editing tools, live customer support chat, and interactive webinars can use WebSockets to enhance user interaction.




Why not use HTTP/REST? Why do you need ws?

Some company like leetcode use polling for this but it is not good if a high and low latency matter in the binancy type application so there we use WebSockets.



WebSockets in Node.js -

There are various libraries that let you create a ws server(similar to how express lets you create an HTTP server)

1. https://www.npmjs.com/package/websocket

2. https://github.com/websockets/ws

3. https://socket.io/


We'll be using the ws library today.



Problem with socket.io-

Even though socket.io is great (it gives you constructs like rooms to make the API much cleaner), it's harder to support multiple platforms in it (Android, IOS, Rust)
There are implementations in most platforms but not very up to date 

https://socket.io/blog/native-socket-io-and-android/

https://github.com/1c3t3a/rust-socket.io





    Ws in Node.js (Code)


Initialize an empty Node.js project-

npm init -y

Add tsconfig to it-

npx tsc --init

Update tsconfig-

"rootDir": "./src",
"outDir": "./dist",

Install ws-

npm i ws @types/ws



        Code using http library



import WebSocket, { WebSocketServer } from 'ws';
import http from 'http';

const server = http.createServer(function(request: any, response: any) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.end("hi there");
});

const wss = new WebSocketServer({ server });

wss.on('connection', function connection(ws) {
    ws.on('error', console.error);

    ws.on('message', function message(data, isBinary) {
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data, { binary: isBinary });
            }
        });
    });

    ws.send('Hello! Message From Server!!');
});

server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080 ');
});




        Code using express library


npm install express @types/express


import express from 'express';
import { WebSocketServer } from 'ws';

const app = express();
const httpServer = app.listen(8080);

const wss = new WebSocketServer({ server: httpServer });

wss.on('connection', function connection(ws) {
    ws.on('error', console.error);

    ws.on('message', function message(data, isBinary) {
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data, { binary: isBinary });
            }
        });
    });

    ws.send('Hello! Message From Server!!');
});
