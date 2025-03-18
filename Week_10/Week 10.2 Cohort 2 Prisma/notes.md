What are ORMs

1. Boring official defination:

ORM stands for Object-Relational Mapping, a programming technique used in software development to convert data between incompatible type systems in object-oriented programming languages. This technique creates a "virtual object database" that can be used from within the programming language.

ORMs are used to abstract the complexities of the underlying database into simpler, more easily managed objects within the code.


2. Easier to digest defination:

ORMs let you easily interact with your database without worrying too much about the underlying syntax (SQL language for eg)


Installing prisma in a fresh app:

1. Initialize an empty Node.js project

npm init -y

1. Add dependencies

npm install prisma typescript ts-node @types/node --save-dev

1. Initialize typescript

npx tsc --init
Change `rootDir` to `src`
Change `outDir` to `dist`

1. Initialize a fresh prisma project 

npx prisma init



After creating the schema how to migrate :

npx prisma migrate dev --name Initialize the schema

Example-

npx prisma migrate dev --name UserAndTodoAdded


if does not work then try to format the window , your window have some issue.

Install the Wsl in your window to get more command like mac and give you more hands on practice.

Pratham Singhh