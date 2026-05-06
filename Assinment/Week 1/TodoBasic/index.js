const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// path to the JSON file where we'll store todos
const FILE = path.join(__dirname, "todos.json");

// middleware to parse JSON body
app.use(express.json());

// ensure file exists
if (!fs.existsSync(FILE)) {
    fs.writeFileSync(FILE, JSON.stringify([]));
}



app.get("/todos", (req, res) => {
    const data = fs.readFileSync(FILE, "utf-8");
    const todos = JSON.parse(data || "[]");
    res.json(todos);
});


app.get("/todos/:id", (req, res) => {
    const data = fs.readFileSync(FILE, "utf-8");
    const todos = JSON.parse(data || "[]");

    const id = req.params.id;
    const todo = todos.find(t => t.id === id);

    if (!todo) {
        return res.status(404).json({
            error: "Todo not found"
        });
    }

    return res.json(todo);
});


app.post("/todos", (req, res) => {
    const data = fs.readFileSync(FILE, "utf-8");
    const todos = JSON.parse(data || "[]");

    const title = req.body.title;
    const description = req.body.description;

    if (!title || !description) {
        return res.status(400).json({
            error: "Title and Description both are required"
        });
    }

    const newTodo = {
        id: Date.now().toString(),
        title: title,
        description: description,
        completed: false
    }

    todos.push(newTodo);

    fs.writeFileSync(FILE, JSON.stringify(todos, null, 2));
    return res.status(201).json(newTodo);
});


app.put("/todos/:id", (req, res) => {
    const data = fs.readFileSync(FILE, "utf-8");
    const todos = JSON.parse(data || "[]");

    const title = req.body.title;
    const description = req.body.description;
    const completed = req.body.completed;
    const id = req.params.id;
    const index = todos.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({
            error: "Todo not found"
        });
    }

    if (title !== undefined) {
        todos[index].title = title;
    }

    if (description !== undefined) {
        todos[index].description = description;
    }

    if (completed !== undefined) {
        todos[index].completed = completed;
    }

    fs.writeFileSync(FILE, JSON.stringify(todos, null, 2));
    return res.json(todos[index]);
})


app.delete("/todos/:id", (req, res) => {
    const data = fs.readFileSync(FILE, "utf-8");
    const todos = JSON.parse(data || "[]");

    const id = req.params.id;
    const index = todos.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({
            error: "Todo not found"
        });
    }

    const removed = todos.splice(index, 1)[0];

    fs.writeFileSync(FILE, JSON.stringify(todos, null , 2));
    return res.json({
        message: "Deleted",
        todo: removed
    });
});


app.listen(PORT, () => console.log("Server running on http://localhost:3000"));