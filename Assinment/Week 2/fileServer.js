const express = require("express");
const fs = require('fs');


const app = express();


app.get("/files", function(req, res) {
    fs.readdir("../Week 2", (err, data) =>{
        const result = data;
        console.log(result);
    })
    res.status(200).json({
        msg: "done"
    })    
})

app.get("/files/:filename", function(req, res) {
    const filename = req.params.filename;
    
    fs.readFile(`../Week 2/folder1/${filename}`, "utf-8", (err, data) =>{
        const result = data;
        console.log(result);
    })
    res.status(200).json({
        msg: "done"
    })    
})

app.listen(3001);















// const express = require("express");
// const fs = require('fs');
// const path = require("path");



// const app = express();


// app.get("/files", function(req, res) {
//     fs.readdir("../Week 2", (err, data) =>{
//         const result = data;
//         console.log(result);
//     })
//     res.status(200).json({
//         msg: "done"
//     })    
// })

// app.get("/files/:filename", function(req, res) {

//     const filename = req.params.filename;
//     const filePath = path.join(__dirname, "../Week 2/folder1", filename);

//     fs.readFile(filePath, "utf-8", (err, data) =>{
//         const result = data;
//         console.log(result);
//     })
//     res.status(200).json({
//         msg: "done"
//     })    
// })

// app.listen(3001);