                    Databases

Until now, we've been storing data in memory 
    This is bad for a few reasons-

1. Data can't be dynamic, if you update in memory objects, the updates are lost if the process restarts
2. There are multiple servers in the real world

        In the real  world, a basic architecture looks like this 

User hits the backend 
Backend hits the Databases
User doesn't have access to the database/ can't talk to the DB

There are various types of Databases
1. Graph DBs
2. Vector DBs
3. SQL DBs
4. NoSql DBs

For todays class, we'll look at a famous NoSQL database - MongoDb




MongoDB lets you crate Databases
In each DB, it lets you create tables(collections)
In each table, it lets you dump JSON data
It is schemaless
It scales well and is a decent choice for most use cases



How to start?

1. Create a MongoDB free instance by going to https://mongodb.com/
2. Get your mongodb connection URL
3. Download MongoDB Compass and try to explore the DB 


How does the backend connect to the database?
Using libraries!

1. Express lets u create an HTTP server
2. Jsonwebtokens library lets you create jwts
3. Mongoose lets you connect to your database