let http = require('http');

let  server = http.createServer( function (req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write("Serever is lising");
    res.end();
})

server.listen(5000);
console.log("Serever is start");