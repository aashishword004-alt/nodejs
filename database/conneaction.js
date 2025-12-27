const mysql = require ('mysql');
const com = require ('./3_mudule.js');
const express = require('express');
const app = express();
const con = mysql.createConnection({

    host:com.server,
    user:com.username,
    password:com.password,
    database:com.database,
    port:com.portno
});

const ROOT = '/api'

con.connect((error) =>{
    if(error)
        console.log(error);
    else
        console.log("Database connnected");

});

app.get(ROOT , (req, res) =>{
    res.send("API is working");
    console.log("API is working");
});

app.listen(3000, () =>{
    console.log("Server started at port 3000");
});

module.exports.con = con;
