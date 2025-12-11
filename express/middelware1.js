const { error } = require('console');
let express = require('express');
let app = express();
let fs = require('fs');
let port = 3000;

let date = new Date();
let output = date.getHours()  + ":" + date.getMinutes() + "  " +  date.getDate()  + "/" +( date.getMonth() + 1 )+ "/" + date.getFullYear() + "   Port nomber" + port +  "\n";
let filecontet =  output;

app.use((req, res, next) => {
    console.log("first middleware");
    next();
});

app.use((req, res, next) => {
    console.log("Secound miidleware");
    next();
});

app.use((req, res, next) => {
    date.getHours() 
    if(date.getHours() > 10 && date.getHours() < 18) console.log("request are acepted");
    else res.send("time out");
    next();
});

app.use((req,res,next) =>{
    fs.appendFile("filename.txt", filecontet,(error) =>{
        if(error)
        {
            console.log("something wrong");
        }
        else{
            console.log("file date are saved");

        }
    });
    
    next();
})


let Route = "/";

app.get(Route, (req, res) => {
    res.send("Server are redy to acept the request");
    console.log("Redy to acept");
});

app.listen(port, () => {
    console.log("Serever are stated");
})