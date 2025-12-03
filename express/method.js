let express = require('express');

let app = express();

app.get ( "/", (req,res) => {

    res.send("this is a get method");


});

app.post ("/", (req,res) => {

    res.send("this is a post  method");


});

app.put ("/", (req,res) => {

    res.send("this is a put method");


});

app.delete ("/", (req,res) => {

    res.send("this is a delete  method");


});

let port = 3000;

app.listen( port , () =>{
    console.log("serever has been started");
})



