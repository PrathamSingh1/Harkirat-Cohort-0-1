Installing prisma in a fresh app
    Let’s create a simple TODO app
 
Initialize an empty Node.js project

npm init -y     (will create a package-lock.json)

Add dependencies

npm install prisma typescript ts-node @types/node --save-dev

Initialize typescript

npx tsc --init

Change `rootDit` to `src`
Change `outDir` to `dist`

Initialize a fresh prisma project

npx prisma init     (will create a schema.prisma)



Generate migrations

You have created a single schema file. You haven’t yet run the CREATE TABLE  commands. To run those and create migration files , run 


npx prisma migrate dev --name Initialize the schema


Your DB should now have the updated schema.



Exploring your database

If you have psql , try to explore the tables that prisma  created for you.


psql -h localhost -d postgres -U postgres



Generating the prisma client

Once you’ve created the prisma/schema.prisma , you can generate these clients  that you can use in your Node.js app

How to generate the client?

npx prisma generate             (This generates a new client  for you.)