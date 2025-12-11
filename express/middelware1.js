let express = require('express');
let app = express();


app.use((req, res, next) => {
    console.log("first middleware");
    next();
});

app.use((req, res, next) => {
    console.log("Secound miidleware");
    next();
});

app.use((req, res, next) => {
    let date = new Date();
    date.getHours() 
    if(date.getHours() > 10 && date.getHours() < 18) res.send("request are acepted");
    else res.send("time out");
    next();
});


let Route = "/";

app.get(Route, (req, res) => {
});

let port = 3000;
app.listen(port, () => {
    console.log("Serever are stated");
})