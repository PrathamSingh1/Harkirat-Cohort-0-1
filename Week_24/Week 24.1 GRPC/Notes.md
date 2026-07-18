What is RPC -

RPC stands for remote procedure call. As the name suggests, it lets you call a function in on a different process/server/backend and get back a response from it.

Why remote procedure call?

This is how we've made our backends talk to each other until now.

We send out an http request, get back a response.

There are a few flaws in this approach

1. No types. You don't know what is the shape of the data you will get back. You might be able to share types between 2 Node.js backends somehow, but if the other backend is in Rust then you can't get back the types from it.

2. We use JSON to serialize and deserialize data

3. We have to know what axios is, or what fetch is. We need to understand HTTP and how to call it

4. Not language agnostic at all. We have to use a different library in Java, go, rust to send and http request to the server.
