let express = require('express');
let app = express();
let fs = require('fs');
let port = 3000;

let date = new Date();

// Route
let Route = "/";

// first middelware 
app.use((req, res, next) => {
    console.log("first middleware");
    next();
});

// secound middelware 
app.use((req, res, next) => {
    console.log("Secound miidleware");
    next();
});

// if else  middelware 
app.use((req, res, next) => {
    date.getHours()
    if (date.getHours() > 10 && date.getHours() < 18) console.log("request are acepted");
    else res.send("time out");
    next();
});

// file middelware 
app.use((req, res, next) => {
    let output = date.getHours() + ":" + date.getMinutes() + "  " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + "   Port nomber" + port + "\n";

    fs.appendFile("filename.txt", output, (error) => {
        if (error) {
            console.log("something wrong");
        }
        else {
            console.log("file date are saved");

        }
    });

    next();
})



app.get(Route, (req, res) => {
    res.send("Server are redy to acept the request");
    console.log("Redy to acept");
});

app.listen(port, () => {
    console.log("Serever are stated");
})