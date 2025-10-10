// file methode use in node js


let http = require("http");

let server = http.createServer((req,res) =>{
    res.writeHead(200,{"Content-type":"text/plain"});
    res.write("Serever is lisning");
    res.end();
});

let port = 5000;

server.listen( port ,() =>
{
    console.log("Server is start");
})
