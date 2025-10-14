
 // write file 
let http = require("http");

let server = http.createServer((req,res) =>{
    res.writeHead(200,{"Content-Type" :"text/plain"})
    res.write("Write file is running ");
    res.end();
})
let port = 5000;
server.listen (port, () =>{
 console.log("server is start");
})