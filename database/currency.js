var http = require("http");

let curr = require("../lib/ruppesconvert");

let server = http.createServer( (req,res) =>{

    res.writeHead(200,{"Content-Type" :"text/plain"});
    res.write("Welcome to Exchage Rate server ");
    res.end();

});

let port = 3000;
server.listen(port, () =>{
    console.log("Server is running on port" + port);
})