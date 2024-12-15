        Middleware

Last thing in middleware - app.use

const app = express();
app.use(express.json());

        Other use cases of middleware (assignment)=

1. Count the number of requests
2. Find the average time your server is taking to handle requests




Global catches help you give the user a Better error message

Error-Handling Middleware: This is a special type of middleware function in Express that has four arguments instead of three (`(err, req, res, next)`). Express recognizes it as an error-handling middleware because of these four arguments.




How can you do better input validation?

Ans - Zod
