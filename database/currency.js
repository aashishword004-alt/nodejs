var http = require("http");

let curr = require("../lib/ruppesconvert");

let server = http.createServer( (req,res) =>{

    res.writeHead(200,{"Content-Type" :"text/plain"});
    let dol = curr.doll(8400);
    let pd = curr.pd(10200);
    let ero = curr.ero(9000);
    res.write("Dollar :" + dol + "\n");
    res.write("Pound :" + pd + "\n");
    res.write("Euro :" + ero + "\n");
    res.write("Welcome to Exchage Rate server ");
    res.end();

});

let port = 3000;
server.listen(port, () =>{
    console.log("Server is running on port" + port);
})