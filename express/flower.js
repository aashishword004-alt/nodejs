let express = require("express");
let fs = require('fs');


let app = express();

app.get("/", (req, res) => {
    let err = "Something wrong check the code";
    fs.readFile("../site/home.html", (error, filecontent) => {

        if (error)
            req.send(err)
        else
            res.send(filecontent.toString())
    })

});

app.get("/about", (req, res) => {
    let err = "Something wrong check the code";
    fs.readFile("../site/about.html", (error, filecontent) => {

        if (error)
            req.send(err)
        else
            res.send(filecontent.toString())
    })

});
app.get("/flower", (req, res) => {
    let err = "Something wrong check the code";
    fs.readFile("../site/galleryy.html", (error, filecontent) => {

        if (error)
            req.send(err)
        else
            res.send(filecontent.toString())
    })

});

app.get("/collation", (req, res) => {
    let err = "Something wrong check the code";
    fs.readFile("../site/colletion.html", (error, filecontent) => {

        if (error)
            req.send(err)
        else
            res.send(filecontent.toString())
    })

});

app.get("/service", (req, res) => {
    let err = "Something wrong check the code";
    fs.readFile("../site/service.html", (error, filecontent) => {

        if (error)
            req.send(err)
        else
            res.send(filecontent.toString())
    })

});

app.get("/contect", (req, res) => {
    let err = "Something wrong check the code";
    fs.readFile("../site/contect.html", (error, filecontent) => {

        if (error)
            req.send(err)
        else
            res.send(filecontent.toString())
    })

});


app.use((req,res) =>{
    res.send("page not found");
    
})

let port = 3000;
app.listen(port, () => {
    console.log("Server has been started");

})