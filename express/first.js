let express = require('express');

let app = express();

app.get("/", (req,res) =>{
    res.send("<html><head></head> <body> <h1> helloo</h1></body></html>")
})

let port = 5000;

app.listen(port , () =>{
    console.log("server is start ");
})