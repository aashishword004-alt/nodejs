var http = require("http");
let sequrity = require("./lib/securityy");

function hadlePassdword (req,res){
    res.writeHead(200,{"Content_Type": "text/plain"});
   sequrity. getpassword("xyx").then() {
    res.write("hash password is : "  + hash);   
   } 
    res.end();


} 


let server = http.createServer((req,res) => hadlePassdword(req,res){
});

let port = 3000;
server.listen(port , () =>{
    console.log("Server is runnig on port " + port) 
})